
import R        from 'ramda'
import $        from 'jquery'
import keytime  from 'keytime'

let createKeytime = R.evolve({ data: keytime })
let getEvents = R.pipe(R.prop('data'), R.map(R.prop('name')))

export class Animation {
  constructor(animations) {
    this._properties  = new Set(R.chain(getEvents, animations))
    this._animations  = R.map(createKeytime, animations)
    this._events      = R.uniq(R.map(R.prop('on'), animations))
  }
  prop(name, fallback) {
    if (!this._properties.has(name)) {
      return fallback
    }
    return data => {
      let values = this._getAnimation(data)
      if (values.hasOwnProperty(name)) {
        return values[name]
      } else {
        return fallback(data)
      }
    }
  }
  _getAnimation(data) {
    let event       = R.maxBy(e => data[e] || 0,
                        this._events.filter(e => e === '' || e in data))
    let t           = data.t - (data[event] || 0)
    let animations  = this._animations.filter(a => a.on === event)
    let values      = animations.map(a => a.data.values(t))
    return Object.assign({}, ...values)
  }
  static compile(compiler, $el) {
    let animationElements = Array.from($el.children('animation'))
    let animations = R.map(el => _compile($(el)), animationElements)
    return new Animation(animations)
  }
}

export function _compile($el) {
  let keyframes = R.map(_attrs, Array.from($el.children('keyframe')))
  let attrs = { }
  for (let keyframe of keyframes) {
    let time = +keyframe.t
    let ease = keyframe.ease || 'linear'
    if (isNaN(time)) throw new Error('Expected keyframe to have "t" attribute')
    for (let key in keyframe) {
      if (key === 't' || key === 'ease') continue
      let value = +keyframe[key]
      let attr = attrs[key] || (attrs[key] = _createKeyframes(key))
      attr.keyframes.push({ time, value, ease })
    }
  }
  return {
    on:   $el.attr('on') || '',
    data: R.values(attrs),
  }
}

function _createKeyframes(name) {
  return { name, keyframes: [] }
}

export function _attrs(el) {
  return R.fromPairs(R.map(n => [n.name.toLowerCase(), n.value], el.attributes))
}

export default Animation
