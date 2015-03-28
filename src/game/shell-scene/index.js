
import View from 'bemuse/view!./view.jade'
import './style.scss'

import DndResources from 'bemuse/resources/dnd-resources'

export default function GameShellScene({ options, play }) {

  return function enter(container) {

    let view = new View({
      el: container,
      data: {
        options: options,
      },
    })

    let handlePlayFile = () => {}

    view.on({
      submit: function(e) {
        play(view.get('options'))
        e.original.preventDefault()
      },
      dragover: function(e) {
        e.original.preventDefault()
      },
      drop: function(e) {
        dropFiles(e.original)
        e.original.preventDefault()
      },
      playFile: function(e) {
        handlePlayFile(e.context)
      },
    })

    function dropFiles(event) {
      let resources = new DndResources(event)
      resources.fileList.then(list => {
        return list.filter(filename => /\.(bms|bme|bml)$/i.test(filename))
      })
      .map(name => resources.file(name).then(resource => ({ name, resource })))
      .then(bms => {
        view.set('files', bms)
        handlePlayFile = context => {
          let options = view.get('options')
          options.resources = resources
          options.resource = context.resource
          play(options)
        }
      })
    }

    return function exit() {
    }

  }

}

