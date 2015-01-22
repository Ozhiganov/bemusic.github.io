webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var _interopRequire = function (obj) {
	  return obj && (obj["default"] || obj);
	};
	
	exports.main = main;
	// This file boots up Jasmine
	//
	__webpack_require__(21);
	
	__webpack_require__(28);
	
	__webpack_require__(29);
	
	__webpack_require__(22);
	
	var chai = _interopRequire(__webpack_require__(27));
	
	var chaiAsPromised = _interopRequire(__webpack_require__(37));
	
	function main() {
	  setupMocha();
	  loadSpecs();
	  runMocha();
	}
	
	function setupMocha() {
	  var mochaElement = document.createElement("div");
	  mochaElement.id = "mocha";
	  document.body.appendChild(mochaElement);
	  mocha.setup("bdd");
	  chai.use(chaiAsPromised);
	  global.expect = chai.expect;
	}
	
	function loadSpecs() {
	  __webpack_require__(15);
	}
	
	function runMocha() {
	  var specs = [];
	  mocha.run().on("test end", function reportFailedSpec(test) {
	    if (test.err) {
	      console.log("%cFailed Spec: %c%s\n %c%s", "color: black; font: 16px sans-serif", "color: black; font: bold 16px sans-serif", test.title, "color: red; font: bold 1em sans-serif", test.err.message);
	      console.error(test.err.stack);
	    }
	  }).on("test end", function (test) {
	    if ("passed" === test.state) {
	      specs.push({
	        fullName: test.title,
	        status: "passed" });
	    } else if (test.pending) {
	      specs.push({
	        fullName: test.title,
	        status: "pending" });
	    } else {
	      specs.push({
	        fullName: test.title,
	        status: "failed",
	        failedExpectations: [{ message: test.err.message, stack: test.err.stack }] });
	    }
	  }).on("suite end", function (suite) {
	    if (suite.root) {
	      var coverage = window.__coverage__ || null;
	      var json = JSON.stringify({ specs: specs, coverage: coverage });
	      var xh = new XMLHttpRequest();
	      xh.open("POST", "/api/test", true);
	      xh.setRequestHeader("Content-Type", "application/json");
	      xh.send(json);
	    }
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	__webpack_require__(42);


/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_YWmhe23KK20IAVbQiZzBhQ = (Function('return this'))();
	if (!__cov_YWmhe23KK20IAVbQiZzBhQ.__coverage__) { __cov_YWmhe23KK20IAVbQiZzBhQ.__coverage__ = {}; }
	__cov_YWmhe23KK20IAVbQiZzBhQ = __cov_YWmhe23KK20IAVbQiZzBhQ.__coverage__;
	if (!(__cov_YWmhe23KK20IAVbQiZzBhQ['/home/ubuntu/bemuse/src/polyfill/index.js'])) {
	   __cov_YWmhe23KK20IAVbQiZzBhQ['/home/ubuntu/bemuse/src/polyfill/index.js'] = {"path":"/home/ubuntu/bemuse/src/polyfill/index.js","s":{"1":0,"2":0},"b":{},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":25}},"2":{"start":{"line":5,"column":0},"end":{"line":5,"column":17}}},"branchMap":{},"code":["\"use strict\";","","require(\"6to5/polyfill\");","","require(\"prfun\");"]};
	}
	__cov_YWmhe23KK20IAVbQiZzBhQ = __cov_YWmhe23KK20IAVbQiZzBhQ['/home/ubuntu/bemuse/src/polyfill/index.js'];
	__cov_YWmhe23KK20IAVbQiZzBhQ.s['1']++;__webpack_require__(32);__cov_YWmhe23KK20IAVbQiZzBhQ.s['2']++;__webpack_require__(45);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ubuntu/bemuse/node_modules/style-loader/index.js!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/src/test/support/mocha-overrides.css", function() {
			var newContent = require("!!/home/ubuntu/bemuse/node_modules/style-loader/index.js!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/src/test/support/mocha-overrides.css");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/src/test/support/mocha-overrides.css", function() {
			var newContent = require("!!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/src/test/support/mocha-overrides.css");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	exports.push([module.id, "#mocha-stats em {\n  color: white;\n}\n", ""]);

/***/ },
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(46);


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(35)(__webpack_require__(36))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ubuntu/bemuse/node_modules/style-loader/index.js!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/node_modules/mocha/mocha.css", function() {
			var newContent = require("!!/home/ubuntu/bemuse/node_modules/style-loader/index.js!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/node_modules/mocha/mocha.css");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/node_modules/mocha/mocha.css", function() {
			var newContent = require("!!/home/ubuntu/bemuse/node_modules/css-loader/index.js!/home/ubuntu/bemuse/node_modules/autoprefixer-loader/index.js?browsers=last 2 version!/home/ubuntu/bemuse/node_modules/mocha/mocha.css");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	exports.push([module.id, "@charset \"utf-8\";\n\nbody {\n  margin:0;\n}\n\n#mocha {\n  font: 20px/1.5 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  margin: 60px 50px;\n}\n\n#mocha ul,\n#mocha li {\n  margin: 0;\n  padding: 0;\n}\n\n#mocha ul {\n  list-style: none;\n}\n\n#mocha h1,\n#mocha h2 {\n  margin: 0;\n}\n\n#mocha h1 {\n  margin-top: 15px;\n  font-size: 1em;\n  font-weight: 200;\n}\n\n#mocha h1 a {\n  text-decoration: none;\n  color: inherit;\n}\n\n#mocha h1 a:hover {\n  text-decoration: underline;\n}\n\n#mocha .suite .suite h1 {\n  margin-top: 0;\n  font-size: .8em;\n}\n\n#mocha .hidden {\n  display: none;\n}\n\n#mocha h2 {\n  font-size: 12px;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n#mocha .suite {\n  margin-left: 15px;\n}\n\n#mocha .test {\n  margin-left: 15px;\n  overflow: hidden;\n}\n\n#mocha .test.pending:hover h2::after {\n  content: '(pending)';\n  font-family: arial, sans-serif;\n}\n\n#mocha .test.pass.medium .duration {\n  background: #c09853;\n}\n\n#mocha .test.pass.slow .duration {\n  background: #b94a48;\n}\n\n#mocha .test.pass::before {\n  content: '✓';\n  font-size: 12px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  color: #00d6b2;\n}\n\n#mocha .test.pass .duration {\n  font-size: 9px;\n  margin-left: 5px;\n  padding: 2px 5px;\n  color: #fff;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.2);\n  -o-border-radius: 5px;\n  border-radius: 5px;\n}\n\n#mocha .test.pass.fast .duration {\n  display: none;\n}\n\n#mocha .test.pending {\n  color: #0b97c4;\n}\n\n#mocha .test.pending::before {\n  content: '◦';\n  color: #0b97c4;\n}\n\n#mocha .test.fail {\n  color: #c00;\n}\n\n#mocha .test.fail pre {\n  color: black;\n}\n\n#mocha .test.fail::before {\n  content: '✖';\n  font-size: 12px;\n  display: block;\n  float: left;\n  margin-right: 5px;\n  color: #c00;\n}\n\n#mocha .test pre.error {\n  color: #c00;\n  max-height: 300px;\n  overflow: auto;\n}\n\n/**\n * (1): approximate for browsers not supporting calc\n * (2): 42 = 2*15 + 2*10 + 2*1 (padding + margin + border)\n *      ^^ seriously\n */\n#mocha .test pre {\n  display: block;\n  float: left;\n  clear: left;\n  font: 12px/1.5 monaco, monospace;\n  margin: 5px;\n  padding: 15px;\n  border: 1px solid #eee;\n  max-width: 85%; /*(1)*/\n  max-width: calc(100% - 42px); /*(2)*/\n  word-wrap: break-word;\n  border-bottom-color: #ddd;\n  -webkit-border-radius: 3px;\n  -webkit-box-shadow: 0 1px 3px #eee;\n  -moz-border-radius: 3px;\n  -moz-box-shadow: 0 1px 3px #eee;\n  border-radius: 3px;\n}\n\n#mocha .test h2 {\n  position: relative;\n}\n\n#mocha .test a.replay {\n  position: absolute;\n  top: 3px;\n  right: 0;\n  text-decoration: none;\n  vertical-align: middle;\n  display: block;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  text-align: center;\n  background: #eee;\n  font-size: 15px;\n  border-radius: 15px;\n  transition: opacity 200ms;\n  opacity: 0.3;\n  color: #888;\n}\n\n#mocha .test:hover a.replay {\n  opacity: 1;\n}\n\n#mocha-report.pass .test.fail {\n  display: none;\n}\n\n#mocha-report.fail .test.pass {\n  display: none;\n}\n\n#mocha-report.pending .test.pass,\n#mocha-report.pending .test.fail {\n  display: none;\n}\n#mocha-report.pending .test.pass.pending {\n  display: block;\n}\n\n#mocha-error {\n  color: #c00;\n  font-size: 1.5em;\n  font-weight: 100;\n  letter-spacing: 1px;\n}\n\n#mocha-stats {\n  position: fixed;\n  top: 15px;\n  right: 10px;\n  font-size: 12px;\n  margin: 0;\n  color: #888;\n  z-index: 1;\n}\n\n#mocha-stats .progress {\n  float: right;\n  padding-top: 0;\n}\n\n#mocha-stats em {\n  color: black;\n}\n\n#mocha-stats a {\n  text-decoration: none;\n  color: inherit;\n}\n\n#mocha-stats a:hover {\n  border-bottom: 1px solid #eee;\n}\n\n#mocha-stats li {\n  display: inline-block;\n  margin: 0 5px;\n  list-style: none;\n  padding-top: 11px;\n}\n\n#mocha-stats canvas {\n  width: 40px;\n  height: 40px;\n}\n\n#mocha code .comment { color: #ddd; }\n#mocha code .init { color: #2f6fad; }\n#mocha code .string { color: #5890ad; }\n#mocha code .keyword { color: #8a6343; }\n#mocha code .number { color: #2f6fad; }\n\n@media screen and (max-device-width: 480px) {\n  #mocha {\n    margin: 60px 0px;\n  }\n\n  #mocha #stats {\n    position: absolute;\n  }\n}\n", ""]);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(52);


/***/ },
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript === "function")
			execScript(src);
		else
			eval.call(null, src);
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = ";(function(){\n\n// CommonJS require()\n\nfunction require(p){\n    var path = require.resolve(p)\n      , mod = require.modules[path];\n    if (!mod) throw new Error('failed to require \"' + p + '\"');\n    if (!mod.exports) {\n      mod.exports = {};\n      mod.call(mod.exports, mod, mod.exports, require.relative(path));\n    }\n    return mod.exports;\n  }\n\nrequire.modules = {};\n\nrequire.resolve = function (path){\n    var orig = path\n      , reg = path + '.js'\n      , index = path + '/index.js';\n    return require.modules[reg] && reg\n      || require.modules[index] && index\n      || orig;\n  };\n\nrequire.register = function (path, fn){\n    require.modules[path] = fn;\n  };\n\nrequire.relative = function (parent) {\n    return function(p){\n      if ('.' != p.charAt(0)) return require(p);\n\n      var path = parent.split('/')\n        , segs = p.split('/');\n      path.pop();\n\n      for (var i = 0; i < segs.length; i++) {\n        var seg = segs[i];\n        if ('..' == seg) path.pop();\n        else if ('.' != seg) path.push(seg);\n      }\n\n      return require(path.join('/'));\n    };\n  };\n\n\nrequire.register(\"browser/debug.js\", function(module, exports, require){\nmodule.exports = function(type){\n  return function(){\n  }\n};\n\n}); // module: browser/debug.js\n\nrequire.register(\"browser/diff.js\", function(module, exports, require){\n/* See LICENSE file for terms of use */\n\n/*\n * Text diff implementation.\n *\n * This library supports the following APIS:\n * JsDiff.diffChars: Character by character diff\n * JsDiff.diffWords: Word (as defined by \\b regex) diff which ignores whitespace\n * JsDiff.diffLines: Line based diff\n *\n * JsDiff.diffCss: Diff targeted at CSS content\n *\n * These methods are based on the implementation proposed in\n * \"An O(ND) Difference Algorithm and its Variations\" (Myers, 1986).\n * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927\n */\nvar JsDiff = (function() {\n  /*jshint maxparams: 5*/\n  function clonePath(path) {\n    return { newPos: path.newPos, components: path.components.slice(0) };\n  }\n  function removeEmpty(array) {\n    var ret = [];\n    for (var i = 0; i < array.length; i++) {\n      if (array[i]) {\n        ret.push(array[i]);\n      }\n    }\n    return ret;\n  }\n  function escapeHTML(s) {\n    var n = s;\n    n = n.replace(/&/g, '&amp;');\n    n = n.replace(/</g, '&lt;');\n    n = n.replace(/>/g, '&gt;');\n    n = n.replace(/\"/g, '&quot;');\n\n    return n;\n  }\n\n  var Diff = function(ignoreWhitespace) {\n    this.ignoreWhitespace = ignoreWhitespace;\n  };\n  Diff.prototype = {\n      diff: function(oldString, newString) {\n        // Handle the identity case (this is due to unrolling editLength == 0\n        if (newString === oldString) {\n          return [{ value: newString }];\n        }\n        if (!newString) {\n          return [{ value: oldString, removed: true }];\n        }\n        if (!oldString) {\n          return [{ value: newString, added: true }];\n        }\n\n        newString = this.tokenize(newString);\n        oldString = this.tokenize(oldString);\n\n        var newLen = newString.length, oldLen = oldString.length;\n        var maxEditLength = newLen + oldLen;\n        var bestPath = [{ newPos: -1, components: [] }];\n\n        // Seed editLength = 0\n        var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);\n        if (bestPath[0].newPos+1 >= newLen && oldPos+1 >= oldLen) {\n          return bestPath[0].components;\n        }\n\n        for (var editLength = 1; editLength <= maxEditLength; editLength++) {\n          for (var diagonalPath = -1*editLength; diagonalPath <= editLength; diagonalPath+=2) {\n            var basePath;\n            var addPath = bestPath[diagonalPath-1],\n                removePath = bestPath[diagonalPath+1];\n            oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;\n            if (addPath) {\n              // No one else is going to attempt to use this value, clear it\n              bestPath[diagonalPath-1] = undefined;\n            }\n\n            var canAdd = addPath && addPath.newPos+1 < newLen;\n            var canRemove = removePath && 0 <= oldPos && oldPos < oldLen;\n            if (!canAdd && !canRemove) {\n              bestPath[diagonalPath] = undefined;\n              continue;\n            }\n\n            // Select the diagonal that we want to branch from. We select the prior\n            // path whose position in the new string is the farthest from the origin\n            // and does not pass the bounds of the diff graph\n            if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {\n              basePath = clonePath(removePath);\n              this.pushComponent(basePath.components, oldString[oldPos], undefined, true);\n            } else {\n              basePath = clonePath(addPath);\n              basePath.newPos++;\n              this.pushComponent(basePath.components, newString[basePath.newPos], true, undefined);\n            }\n\n            var oldPos = this.extractCommon(basePath, newString, oldString, diagonalPath);\n\n            if (basePath.newPos+1 >= newLen && oldPos+1 >= oldLen) {\n              return basePath.components;\n            } else {\n              bestPath[diagonalPath] = basePath;\n            }\n          }\n        }\n      },\n\n      pushComponent: function(components, value, added, removed) {\n        var last = components[components.length-1];\n        if (last && last.added === added && last.removed === removed) {\n          // We need to clone here as the component clone operation is just\n          // as shallow array clone\n          components[components.length-1] =\n            {value: this.join(last.value, value), added: added, removed: removed };\n        } else {\n          components.push({value: value, added: added, removed: removed });\n        }\n      },\n      extractCommon: function(basePath, newString, oldString, diagonalPath) {\n        var newLen = newString.length,\n            oldLen = oldString.length,\n            newPos = basePath.newPos,\n            oldPos = newPos - diagonalPath;\n        while (newPos+1 < newLen && oldPos+1 < oldLen && this.equals(newString[newPos+1], oldString[oldPos+1])) {\n          newPos++;\n          oldPos++;\n\n          this.pushComponent(basePath.components, newString[newPos], undefined, undefined);\n        }\n        basePath.newPos = newPos;\n        return oldPos;\n      },\n\n      equals: function(left, right) {\n        var reWhitespace = /\\S/;\n        if (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right)) {\n          return true;\n        } else {\n          return left === right;\n        }\n      },\n      join: function(left, right) {\n        return left + right;\n      },\n      tokenize: function(value) {\n        return value;\n      }\n  };\n\n  var CharDiff = new Diff();\n\n  var WordDiff = new Diff(true);\n  var WordWithSpaceDiff = new Diff();\n  WordDiff.tokenize = WordWithSpaceDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/(\\s+|\\b)/));\n  };\n\n  var CssDiff = new Diff(true);\n  CssDiff.tokenize = function(value) {\n    return removeEmpty(value.split(/([{}:;,]|\\s+)/));\n  };\n\n  var LineDiff = new Diff();\n  LineDiff.tokenize = function(value) {\n    var retLines = [],\n        lines = value.split(/^/m);\n\n    for(var i = 0; i < lines.length; i++) {\n      var line = lines[i],\n          lastLine = lines[i - 1];\n\n      // Merge lines that may contain windows new lines\n      if (line == '\\n' && lastLine && lastLine[lastLine.length - 1] === '\\r') {\n        retLines[retLines.length - 1] += '\\n';\n      } else if (line) {\n        retLines.push(line);\n      }\n    }\n\n    return retLines;\n  };\n\n  return {\n    Diff: Diff,\n\n    diffChars: function(oldStr, newStr) { return CharDiff.diff(oldStr, newStr); },\n    diffWords: function(oldStr, newStr) { return WordDiff.diff(oldStr, newStr); },\n    diffWordsWithSpace: function(oldStr, newStr) { return WordWithSpaceDiff.diff(oldStr, newStr); },\n    diffLines: function(oldStr, newStr) { return LineDiff.diff(oldStr, newStr); },\n\n    diffCss: function(oldStr, newStr) { return CssDiff.diff(oldStr, newStr); },\n\n    createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {\n      var ret = [];\n\n      ret.push('Index: ' + fileName);\n      ret.push('===================================================================');\n      ret.push('--- ' + fileName + (typeof oldHeader === 'undefined' ? '' : '\\t' + oldHeader));\n      ret.push('+++ ' + fileName + (typeof newHeader === 'undefined' ? '' : '\\t' + newHeader));\n\n      var diff = LineDiff.diff(oldStr, newStr);\n      if (!diff[diff.length-1].value) {\n        diff.pop();   // Remove trailing newline add\n      }\n      diff.push({value: '', lines: []});   // Append an empty value to make cleanup easier\n\n      function contextLines(lines) {\n        return lines.map(function(entry) { return ' ' + entry; });\n      }\n      function eofNL(curRange, i, current) {\n        var last = diff[diff.length-2],\n            isLast = i === diff.length-2,\n            isLastOfType = i === diff.length-3 && (current.added !== last.added || current.removed !== last.removed);\n\n        // Figure out if this is the last line for the given file and missing NL\n        if (!/\\n$/.test(current.value) && (isLast || isLastOfType)) {\n          curRange.push('\\\\ No newline at end of file');\n        }\n      }\n\n      var oldRangeStart = 0, newRangeStart = 0, curRange = [],\n          oldLine = 1, newLine = 1;\n      for (var i = 0; i < diff.length; i++) {\n        var current = diff[i],\n            lines = current.lines || current.value.replace(/\\n$/, '').split('\\n');\n        current.lines = lines;\n\n        if (current.added || current.removed) {\n          if (!oldRangeStart) {\n            var prev = diff[i-1];\n            oldRangeStart = oldLine;\n            newRangeStart = newLine;\n\n            if (prev) {\n              curRange = contextLines(prev.lines.slice(-4));\n              oldRangeStart -= curRange.length;\n              newRangeStart -= curRange.length;\n            }\n          }\n          curRange.push.apply(curRange, lines.map(function(entry) { return (current.added?'+':'-') + entry; }));\n          eofNL(curRange, i, current);\n\n          if (current.added) {\n            newLine += lines.length;\n          } else {\n            oldLine += lines.length;\n          }\n        } else {\n          if (oldRangeStart) {\n            // Close out any changes that have been output (or join overlapping)\n            if (lines.length <= 8 && i < diff.length-2) {\n              // Overlapping\n              curRange.push.apply(curRange, contextLines(lines));\n            } else {\n              // end the range and output\n              var contextSize = Math.min(lines.length, 4);\n              ret.push(\n                  '@@ -' + oldRangeStart + ',' + (oldLine-oldRangeStart+contextSize)\n                  + ' +' + newRangeStart + ',' + (newLine-newRangeStart+contextSize)\n                  + ' @@');\n              ret.push.apply(ret, curRange);\n              ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));\n              if (lines.length <= 4) {\n                eofNL(ret, i, current);\n              }\n\n              oldRangeStart = 0;  newRangeStart = 0; curRange = [];\n            }\n          }\n          oldLine += lines.length;\n          newLine += lines.length;\n        }\n      }\n\n      return ret.join('\\n') + '\\n';\n    },\n\n    applyPatch: function(oldStr, uniDiff) {\n      var diffstr = uniDiff.split('\\n');\n      var diff = [];\n      var remEOFNL = false,\n          addEOFNL = false;\n\n      for (var i = (diffstr[0][0]==='I'?4:0); i < diffstr.length; i++) {\n        if(diffstr[i][0] === '@') {\n          var meh = diffstr[i].split(/@@ -(\\d+),(\\d+) \\+(\\d+),(\\d+) @@/);\n          diff.unshift({\n            start:meh[3],\n            oldlength:meh[2],\n            oldlines:[],\n            newlength:meh[4],\n            newlines:[]\n          });\n        } else if(diffstr[i][0] === '+') {\n          diff[0].newlines.push(diffstr[i].substr(1));\n        } else if(diffstr[i][0] === '-') {\n          diff[0].oldlines.push(diffstr[i].substr(1));\n        } else if(diffstr[i][0] === ' ') {\n          diff[0].newlines.push(diffstr[i].substr(1));\n          diff[0].oldlines.push(diffstr[i].substr(1));\n        } else if(diffstr[i][0] === '\\\\') {\n          if (diffstr[i-1][0] === '+') {\n            remEOFNL = true;\n          } else if(diffstr[i-1][0] === '-') {\n            addEOFNL = true;\n          }\n        }\n      }\n\n      var str = oldStr.split('\\n');\n      for (var i = diff.length - 1; i >= 0; i--) {\n        var d = diff[i];\n        for (var j = 0; j < d.oldlength; j++) {\n          if(str[d.start-1+j] !== d.oldlines[j]) {\n            return false;\n          }\n        }\n        Array.prototype.splice.apply(str,[d.start-1,+d.oldlength].concat(d.newlines));\n      }\n\n      if (remEOFNL) {\n        while (!str[str.length-1]) {\n          str.pop();\n        }\n      } else if (addEOFNL) {\n        str.push('');\n      }\n      return str.join('\\n');\n    },\n\n    convertChangesToXML: function(changes){\n      var ret = [];\n      for ( var i = 0; i < changes.length; i++) {\n        var change = changes[i];\n        if (change.added) {\n          ret.push('<ins>');\n        } else if (change.removed) {\n          ret.push('<del>');\n        }\n\n        ret.push(escapeHTML(change.value));\n\n        if (change.added) {\n          ret.push('</ins>');\n        } else if (change.removed) {\n          ret.push('</del>');\n        }\n      }\n      return ret.join('');\n    },\n\n    // See: http://code.google.com/p/google-diff-match-patch/wiki/API\n    convertChangesToDMP: function(changes){\n      var ret = [], change;\n      for ( var i = 0; i < changes.length; i++) {\n        change = changes[i];\n        ret.push([(change.added ? 1 : change.removed ? -1 : 0), change.value]);\n      }\n      return ret;\n    }\n  };\n})();\n\nif (typeof module !== 'undefined') {\n    module.exports = JsDiff;\n}\n\n}); // module: browser/diff.js\n\nrequire.register(\"browser/escape-string-regexp.js\", function(module, exports, require){\n'use strict';\n\nvar matchOperatorsRe = /[|\\\\{}()[\\]^$+*?.]/g;\n\nmodule.exports = function (str) {\n  if (typeof str !== 'string') {\n    throw new TypeError('Expected a string');\n  }\n\n  return str.replace(matchOperatorsRe,  '\\\\$&');\n};\n\n}); // module: browser/escape-string-regexp.js\n\nrequire.register(\"browser/events.js\", function(module, exports, require){\n/**\n * Module exports.\n */\n\nexports.EventEmitter = EventEmitter;\n\n/**\n * Check if `obj` is an array.\n */\n\nfunction isArray(obj) {\n  return '[object Array]' == {}.toString.call(obj);\n}\n\n/**\n * Event emitter constructor.\n *\n * @api public\n */\n\nfunction EventEmitter(){};\n\n/**\n * Adds a listener.\n *\n * @api public\n */\n\nEventEmitter.prototype.on = function (name, fn) {\n  if (!this.$events) {\n    this.$events = {};\n  }\n\n  if (!this.$events[name]) {\n    this.$events[name] = fn;\n  } else if (isArray(this.$events[name])) {\n    this.$events[name].push(fn);\n  } else {\n    this.$events[name] = [this.$events[name], fn];\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n/**\n * Adds a volatile listener.\n *\n * @api public\n */\n\nEventEmitter.prototype.once = function (name, fn) {\n  var self = this;\n\n  function on () {\n    self.removeListener(name, on);\n    fn.apply(this, arguments);\n  };\n\n  on.listener = fn;\n  this.on(name, on);\n\n  return this;\n};\n\n/**\n * Removes a listener.\n *\n * @api public\n */\n\nEventEmitter.prototype.removeListener = function (name, fn) {\n  if (this.$events && this.$events[name]) {\n    var list = this.$events[name];\n\n    if (isArray(list)) {\n      var pos = -1;\n\n      for (var i = 0, l = list.length; i < l; i++) {\n        if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {\n          pos = i;\n          break;\n        }\n      }\n\n      if (pos < 0) {\n        return this;\n      }\n\n      list.splice(pos, 1);\n\n      if (!list.length) {\n        delete this.$events[name];\n      }\n    } else if (list === fn || (list.listener && list.listener === fn)) {\n      delete this.$events[name];\n    }\n  }\n\n  return this;\n};\n\n/**\n * Removes all listeners for an event.\n *\n * @api public\n */\n\nEventEmitter.prototype.removeAllListeners = function (name) {\n  if (name === undefined) {\n    this.$events = {};\n    return this;\n  }\n\n  if (this.$events && this.$events[name]) {\n    this.$events[name] = null;\n  }\n\n  return this;\n};\n\n/**\n * Gets all listeners for a certain event.\n *\n * @api public\n */\n\nEventEmitter.prototype.listeners = function (name) {\n  if (!this.$events) {\n    this.$events = {};\n  }\n\n  if (!this.$events[name]) {\n    this.$events[name] = [];\n  }\n\n  if (!isArray(this.$events[name])) {\n    this.$events[name] = [this.$events[name]];\n  }\n\n  return this.$events[name];\n};\n\n/**\n * Emits an event.\n *\n * @api public\n */\n\nEventEmitter.prototype.emit = function (name) {\n  if (!this.$events) {\n    return false;\n  }\n\n  var handler = this.$events[name];\n\n  if (!handler) {\n    return false;\n  }\n\n  var args = [].slice.call(arguments, 1);\n\n  if ('function' == typeof handler) {\n    handler.apply(this, args);\n  } else if (isArray(handler)) {\n    var listeners = handler.slice();\n\n    for (var i = 0, l = listeners.length; i < l; i++) {\n      listeners[i].apply(this, args);\n    }\n  } else {\n    return false;\n  }\n\n  return true;\n};\n\n}); // module: browser/events.js\n\nrequire.register(\"browser/fs.js\", function(module, exports, require){\n\n}); // module: browser/fs.js\n\nrequire.register(\"browser/glob.js\", function(module, exports, require){\n\n}); // module: browser/glob.js\n\nrequire.register(\"browser/path.js\", function(module, exports, require){\n\n}); // module: browser/path.js\n\nrequire.register(\"browser/progress.js\", function(module, exports, require){\n/**\n * Expose `Progress`.\n */\n\nmodule.exports = Progress;\n\n/**\n * Initialize a new `Progress` indicator.\n */\n\nfunction Progress() {\n  this.percent = 0;\n  this.size(0);\n  this.fontSize(11);\n  this.font('helvetica, arial, sans-serif');\n}\n\n/**\n * Set progress size to `n`.\n *\n * @param {Number} n\n * @return {Progress} for chaining\n * @api public\n */\n\nProgress.prototype.size = function(n){\n  this._size = n;\n  return this;\n};\n\n/**\n * Set text to `str`.\n *\n * @param {String} str\n * @return {Progress} for chaining\n * @api public\n */\n\nProgress.prototype.text = function(str){\n  this._text = str;\n  return this;\n};\n\n/**\n * Set font size to `n`.\n *\n * @param {Number} n\n * @return {Progress} for chaining\n * @api public\n */\n\nProgress.prototype.fontSize = function(n){\n  this._fontSize = n;\n  return this;\n};\n\n/**\n * Set font `family`.\n *\n * @param {String} family\n * @return {Progress} for chaining\n */\n\nProgress.prototype.font = function(family){\n  this._font = family;\n  return this;\n};\n\n/**\n * Update percentage to `n`.\n *\n * @param {Number} n\n * @return {Progress} for chaining\n */\n\nProgress.prototype.update = function(n){\n  this.percent = n;\n  return this;\n};\n\n/**\n * Draw on `ctx`.\n *\n * @param {CanvasRenderingContext2d} ctx\n * @return {Progress} for chaining\n */\n\nProgress.prototype.draw = function(ctx){\n  try {\n    var percent = Math.min(this.percent, 100)\n      , size = this._size\n      , half = size / 2\n      , x = half\n      , y = half\n      , rad = half - 1\n      , fontSize = this._fontSize;\n\n    ctx.font = fontSize + 'px ' + this._font;\n\n    var angle = Math.PI * 2 * (percent / 100);\n    ctx.clearRect(0, 0, size, size);\n\n    // outer circle\n    ctx.strokeStyle = '#9f9f9f';\n    ctx.beginPath();\n    ctx.arc(x, y, rad, 0, angle, false);\n    ctx.stroke();\n\n    // inner circle\n    ctx.strokeStyle = '#eee';\n    ctx.beginPath();\n    ctx.arc(x, y, rad - 1, 0, angle, true);\n    ctx.stroke();\n\n    // text\n    var text = this._text || (percent | 0) + '%'\n      , w = ctx.measureText(text).width;\n\n    ctx.fillText(\n        text\n      , x - w / 2 + 1\n      , y + fontSize / 2 - 1);\n  } catch (ex) {} //don't fail if we can't render progress\n  return this;\n};\n\n}); // module: browser/progress.js\n\nrequire.register(\"browser/tty.js\", function(module, exports, require){\nexports.isatty = function(){\n  return true;\n};\n\nexports.getWindowSize = function(){\n  if ('innerHeight' in global) {\n    return [global.innerHeight, global.innerWidth];\n  } else {\n    // In a Web Worker, the DOM Window is not available.\n    return [640, 480];\n  }\n};\n\n}); // module: browser/tty.js\n\nrequire.register(\"context.js\", function(module, exports, require){\n/**\n * Expose `Context`.\n */\n\nmodule.exports = Context;\n\n/**\n * Initialize a new `Context`.\n *\n * @api private\n */\n\nfunction Context(){}\n\n/**\n * Set or get the context `Runnable` to `runnable`.\n *\n * @param {Runnable} runnable\n * @return {Context}\n * @api private\n */\n\nContext.prototype.runnable = function(runnable){\n  if (0 == arguments.length) return this._runnable;\n  this.test = this._runnable = runnable;\n  return this;\n};\n\n/**\n * Set test timeout `ms`.\n *\n * @param {Number} ms\n * @return {Context} self\n * @api private\n */\n\nContext.prototype.timeout = function(ms){\n  if (arguments.length === 0) return this.runnable().timeout();\n  this.runnable().timeout(ms);\n  return this;\n};\n\n/**\n * Set test timeout `enabled`.\n *\n * @param {Boolean} enabled\n * @return {Context} self\n * @api private\n */\n\nContext.prototype.enableTimeouts = function (enabled) {\n  this.runnable().enableTimeouts(enabled);\n  return this;\n};\n\n\n/**\n * Set test slowness threshold `ms`.\n *\n * @param {Number} ms\n * @return {Context} self\n * @api private\n */\n\nContext.prototype.slow = function(ms){\n  this.runnable().slow(ms);\n  return this;\n};\n\n/**\n * Inspect the context void of `._runnable`.\n *\n * @return {String}\n * @api private\n */\n\nContext.prototype.inspect = function(){\n  return JSON.stringify(this, function(key, val){\n    if ('_runnable' == key) return;\n    if ('test' == key) return;\n    return val;\n  }, 2);\n};\n\n}); // module: context.js\n\nrequire.register(\"hook.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Runnable = require('./runnable');\n\n/**\n * Expose `Hook`.\n */\n\nmodule.exports = Hook;\n\n/**\n * Initialize a new `Hook` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\n\nfunction Hook(title, fn) {\n  Runnable.call(this, title, fn);\n  this.type = 'hook';\n}\n\n/**\n * Inherit from `Runnable.prototype`.\n */\n\nfunction F(){};\nF.prototype = Runnable.prototype;\nHook.prototype = new F;\nHook.prototype.constructor = Hook;\n\n\n/**\n * Get or set the test `err`.\n *\n * @param {Error} err\n * @return {Error}\n * @api public\n */\n\nHook.prototype.error = function(err){\n  if (0 == arguments.length) {\n    var err = this._error;\n    this._error = null;\n    return err;\n  }\n\n  this._error = err;\n};\n\n}); // module: hook.js\n\nrequire.register(\"interfaces/bdd.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite')\n  , Test = require('../test')\n  , utils = require('../utils')\n  , escapeRe = require('browser/escape-string-regexp');\n\n/**\n * BDD-style interface:\n *\n *      describe('Array', function(){\n *        describe('#indexOf()', function(){\n *          it('should return -1 when not present', function(){\n *\n *          });\n *\n *          it('should return the index when present', function(){\n *\n *          });\n *        });\n *      });\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha){\n\n    /**\n     * Execute before running tests.\n     */\n\n    context.before = function(name, fn){\n      suites[0].beforeAll(name, fn);\n    };\n\n    /**\n     * Execute after running tests.\n     */\n\n    context.after = function(name, fn){\n      suites[0].afterAll(name, fn);\n    };\n\n    /**\n     * Execute before each test case.\n     */\n\n    context.beforeEach = function(name, fn){\n      suites[0].beforeEach(name, fn);\n    };\n\n    /**\n     * Execute after each test case.\n     */\n\n    context.afterEach = function(name, fn){\n      suites[0].afterEach(name, fn);\n    };\n\n    /**\n     * Describe a \"suite\" with the given `title`\n     * and callback `fn` containing nested suites\n     * and/or tests.\n     */\n\n    context.describe = context.context = function(title, fn){\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n      return suite;\n    };\n\n    /**\n     * Pending describe.\n     */\n\n    context.xdescribe =\n    context.xcontext =\n    context.describe.skip = function(title, fn){\n      var suite = Suite.create(suites[0], title);\n      suite.pending = true;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n    };\n\n    /**\n     * Exclusive suite.\n     */\n\n    context.describe.only = function(title, fn){\n      var suite = context.describe(title, fn);\n      mocha.grep(suite.fullTitle());\n      return suite;\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.it = context.specify = function(title, fn){\n      var suite = suites[0];\n      if (suite.pending) fn = null;\n      var test = new Test(title, fn);\n      test.file = file;\n      suite.addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.it.only = function(title, fn){\n      var test = context.it(title, fn);\n      var reString = '^' + escapeRe(test.fullTitle()) + '$';\n      mocha.grep(new RegExp(reString));\n      return test;\n    };\n\n    /**\n     * Pending test case.\n     */\n\n    context.xit =\n    context.xspecify =\n    context.it.skip = function(title){\n      context.it(title);\n    };\n  });\n};\n\n}); // module: interfaces/bdd.js\n\nrequire.register(\"interfaces/exports.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite')\n  , Test = require('../test');\n\n/**\n * TDD-style interface:\n *\n *     exports.Array = {\n *       '#indexOf()': {\n *         'should return -1 when the value is not present': function(){\n *\n *         },\n *\n *         'should return the correct index when the value is present': function(){\n *\n *         }\n *       }\n *     };\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on('require', visit);\n\n  function visit(obj, file) {\n    var suite;\n    for (var key in obj) {\n      if ('function' == typeof obj[key]) {\n        var fn = obj[key];\n        switch (key) {\n          case 'before':\n            suites[0].beforeAll(fn);\n            break;\n          case 'after':\n            suites[0].afterAll(fn);\n            break;\n          case 'beforeEach':\n            suites[0].beforeEach(fn);\n            break;\n          case 'afterEach':\n            suites[0].afterEach(fn);\n            break;\n          default:\n            var test = new Test(key, fn);\n            test.file = file;\n            suites[0].addTest(test);\n        }\n      } else {\n        suite = Suite.create(suites[0], key);\n        suites.unshift(suite);\n        visit(obj[key]);\n        suites.shift();\n      }\n    }\n  }\n};\n\n}); // module: interfaces/exports.js\n\nrequire.register(\"interfaces/index.js\", function(module, exports, require){\nexports.bdd = require('./bdd');\nexports.tdd = require('./tdd');\nexports.qunit = require('./qunit');\nexports.exports = require('./exports');\n\n}); // module: interfaces/index.js\n\nrequire.register(\"interfaces/qunit.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite')\n  , Test = require('../test')\n  , escapeRe = require('browser/escape-string-regexp')\n  , utils = require('../utils');\n\n/**\n * QUnit-style interface:\n *\n *     suite('Array');\n *\n *     test('#length', function(){\n *       var arr = [1,2,3];\n *       ok(arr.length == 3);\n *     });\n *\n *     test('#indexOf()', function(){\n *       var arr = [1,2,3];\n *       ok(arr.indexOf(1) == 0);\n *       ok(arr.indexOf(2) == 1);\n *       ok(arr.indexOf(3) == 2);\n *     });\n *\n *     suite('String');\n *\n *     test('#length', function(){\n *       ok('foo'.length == 3);\n *     });\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha){\n\n    /**\n     * Execute before running tests.\n     */\n\n    context.before = function(name, fn){\n      suites[0].beforeAll(name, fn);\n    };\n\n    /**\n     * Execute after running tests.\n     */\n\n    context.after = function(name, fn){\n      suites[0].afterAll(name, fn);\n    };\n\n    /**\n     * Execute before each test case.\n     */\n\n    context.beforeEach = function(name, fn){\n      suites[0].beforeEach(name, fn);\n    };\n\n    /**\n     * Execute after each test case.\n     */\n\n    context.afterEach = function(name, fn){\n      suites[0].afterEach(name, fn);\n    };\n\n    /**\n     * Describe a \"suite\" with the given `title`.\n     */\n\n    context.suite = function(title){\n      if (suites.length > 1) suites.shift();\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      return suite;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.suite.only = function(title, fn){\n      var suite = context.suite(title, fn);\n      mocha.grep(suite.fullTitle());\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.test = function(title, fn){\n      var test = new Test(title, fn);\n      test.file = file;\n      suites[0].addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.test.only = function(title, fn){\n      var test = context.test(title, fn);\n      var reString = '^' + escapeRe(test.fullTitle()) + '$';\n      mocha.grep(new RegExp(reString));\n    };\n\n    /**\n     * Pending test case.\n     */\n\n    context.test.skip = function(title){\n      context.test(title);\n    };\n  });\n};\n\n}); // module: interfaces/qunit.js\n\nrequire.register(\"interfaces/tdd.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Suite = require('../suite')\n  , Test = require('../test')\n  , escapeRe = require('browser/escape-string-regexp')\n  , utils = require('../utils');\n\n/**\n * TDD-style interface:\n *\n *      suite('Array', function(){\n *        suite('#indexOf()', function(){\n *          suiteSetup(function(){\n *\n *          });\n *\n *          test('should return -1 when not present', function(){\n *\n *          });\n *\n *          test('should return the index when present', function(){\n *\n *          });\n *\n *          suiteTeardown(function(){\n *\n *          });\n *        });\n *      });\n *\n */\n\nmodule.exports = function(suite){\n  var suites = [suite];\n\n  suite.on('pre-require', function(context, file, mocha){\n\n    /**\n     * Execute before each test case.\n     */\n\n    context.setup = function(name, fn){\n      suites[0].beforeEach(name, fn);\n    };\n\n    /**\n     * Execute after each test case.\n     */\n\n    context.teardown = function(name, fn){\n      suites[0].afterEach(name, fn);\n    };\n\n    /**\n     * Execute before the suite.\n     */\n\n    context.suiteSetup = function(name, fn){\n      suites[0].beforeAll(name, fn);\n    };\n\n    /**\n     * Execute after the suite.\n     */\n\n    context.suiteTeardown = function(name, fn){\n      suites[0].afterAll(name, fn);\n    };\n\n    /**\n     * Describe a \"suite\" with the given `title`\n     * and callback `fn` containing nested suites\n     * and/or tests.\n     */\n\n    context.suite = function(title, fn){\n      var suite = Suite.create(suites[0], title);\n      suite.file = file;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n      return suite;\n    };\n\n    /**\n     * Pending suite.\n     */\n    context.suite.skip = function(title, fn) {\n      var suite = Suite.create(suites[0], title);\n      suite.pending = true;\n      suites.unshift(suite);\n      fn.call(suite);\n      suites.shift();\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.suite.only = function(title, fn){\n      var suite = context.suite(title, fn);\n      mocha.grep(suite.fullTitle());\n    };\n\n    /**\n     * Describe a specification or test-case\n     * with the given `title` and callback `fn`\n     * acting as a thunk.\n     */\n\n    context.test = function(title, fn){\n      var suite = suites[0];\n      if (suite.pending) fn = null;\n      var test = new Test(title, fn);\n      test.file = file;\n      suite.addTest(test);\n      return test;\n    };\n\n    /**\n     * Exclusive test-case.\n     */\n\n    context.test.only = function(title, fn){\n      var test = context.test(title, fn);\n      var reString = '^' + escapeRe(test.fullTitle()) + '$';\n      mocha.grep(new RegExp(reString));\n    };\n\n    /**\n     * Pending test case.\n     */\n\n    context.test.skip = function(title){\n      context.test(title);\n    };\n  });\n};\n\n}); // module: interfaces/tdd.js\n\nrequire.register(\"mocha.js\", function(module, exports, require){\n/*!\n * mocha\n * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>\n * MIT Licensed\n */\n\n/**\n * Module dependencies.\n */\n\nvar path = require('browser/path')\n  , escapeRe = require('browser/escape-string-regexp')\n  , utils = require('./utils');\n\n/**\n * Expose `Mocha`.\n */\n\nexports = module.exports = Mocha;\n\n/**\n * To require local UIs and reporters when running in node.\n */\n\nif (typeof process !== 'undefined' && typeof process.cwd === 'function') {\n  var join = path.join\n    , cwd = process.cwd();\n  module.paths.push(cwd, join(cwd, 'node_modules'));\n}\n\n/**\n * Expose internals.\n */\n\nexports.utils = utils;\nexports.interfaces = require('./interfaces');\nexports.reporters = require('./reporters');\nexports.Runnable = require('./runnable');\nexports.Context = require('./context');\nexports.Runner = require('./runner');\nexports.Suite = require('./suite');\nexports.Hook = require('./hook');\nexports.Test = require('./test');\n\n/**\n * Return image `name` path.\n *\n * @param {String} name\n * @return {String}\n * @api private\n */\n\nfunction image(name) {\n  return __dirname + '/../images/' + name + '.png';\n}\n\n/**\n * Setup mocha with `options`.\n *\n * Options:\n *\n *   - `ui` name \"bdd\", \"tdd\", \"exports\" etc\n *   - `reporter` reporter instance, defaults to `mocha.reporters.spec`\n *   - `globals` array of accepted globals\n *   - `timeout` timeout in milliseconds\n *   - `bail` bail on the first test failure\n *   - `slow` milliseconds to wait before considering a test slow\n *   - `ignoreLeaks` ignore global leaks\n *   - `grep` string or regexp to filter tests with\n *\n * @param {Object} options\n * @api public\n */\n\nfunction Mocha(options) {\n  options = options || {};\n  this.files = [];\n  this.options = options;\n  this.grep(options.grep);\n  this.suite = new exports.Suite('', new exports.Context);\n  this.ui(options.ui);\n  this.bail(options.bail);\n  this.reporter(options.reporter, options.reporterOptions);\n  if (null != options.timeout) this.timeout(options.timeout);\n  this.useColors(options.useColors)\n  if (options.enableTimeouts !== null) this.enableTimeouts(options.enableTimeouts);\n  if (options.slow) this.slow(options.slow);\n\n  this.suite.on('pre-require', function (context) {\n    exports.afterEach = context.afterEach || context.teardown;\n    exports.after = context.after || context.suiteTeardown;\n    exports.beforeEach = context.beforeEach || context.setup;\n    exports.before = context.before || context.suiteSetup;\n    exports.describe = context.describe || context.suite;\n    exports.it = context.it || context.test;\n    exports.setup = context.setup || context.beforeEach;\n    exports.suiteSetup = context.suiteSetup || context.before;\n    exports.suiteTeardown = context.suiteTeardown || context.after;\n    exports.suite = context.suite || context.describe;\n    exports.teardown = context.teardown || context.afterEach;\n    exports.test = context.test || context.it;\n  });\n}\n\n/**\n * Enable or disable bailing on the first failure.\n *\n * @param {Boolean} [bail]\n * @api public\n */\n\nMocha.prototype.bail = function(bail){\n  if (0 == arguments.length) bail = true;\n  this.suite.bail(bail);\n  return this;\n};\n\n/**\n * Add test `file`.\n *\n * @param {String} file\n * @api public\n */\n\nMocha.prototype.addFile = function(file){\n  this.files.push(file);\n  return this;\n};\n\n/**\n * Set reporter to `reporter`, defaults to \"spec\".\n *\n * @param {String|Function} reporter name or constructor\n * @param {Object} reporterOptions optional options\n * @api public\n */\nMocha.prototype.reporter = function(reporter, reporterOptions){\n  if ('function' == typeof reporter) {\n    this._reporter = reporter;\n  } else {\n    reporter = reporter || 'spec';\n    var _reporter;\n    try { _reporter = require('./reporters/' + reporter); } catch (err) {};\n    if (!_reporter) try { _reporter = require(reporter); } catch (err) {};\n    if (!_reporter && reporter === 'teamcity')\n      console.warn('The Teamcity reporter was moved to a package named ' +\n        'mocha-teamcity-reporter ' +\n        '(https://npmjs.org/package/mocha-teamcity-reporter).');\n    if (!_reporter) throw new Error('invalid reporter \"' + reporter + '\"');\n    this._reporter = _reporter;\n  }\n  this.options.reporterOptions = reporterOptions;\n  return this;\n};\n\n/**\n * Set test UI `name`, defaults to \"bdd\".\n *\n * @param {String} bdd\n * @api public\n */\n\nMocha.prototype.ui = function(name){\n  name = name || 'bdd';\n  this._ui = exports.interfaces[name];\n  if (!this._ui) try { this._ui = require(name); } catch (err) {};\n  if (!this._ui) throw new Error('invalid interface \"' + name + '\"');\n  this._ui = this._ui(this.suite);\n  return this;\n};\n\n/**\n * Load registered files.\n *\n * @api private\n */\n\nMocha.prototype.loadFiles = function(fn){\n  var self = this;\n  var suite = this.suite;\n  var pending = this.files.length;\n  this.files.forEach(function(file){\n    file = path.resolve(file);\n    suite.emit('pre-require', global, file, self);\n    suite.emit('require', require(file), file, self);\n    suite.emit('post-require', global, file, self);\n    --pending || (fn && fn());\n  });\n};\n\n/**\n * Enable growl support.\n *\n * @api private\n */\n\nMocha.prototype._growl = function(runner, reporter) {\n  var notify = require('growl');\n\n  runner.on('end', function(){\n    var stats = reporter.stats;\n    if (stats.failures) {\n      var msg = stats.failures + ' of ' + runner.total + ' tests failed';\n      notify(msg, { name: 'mocha', title: 'Failed', image: image('error') });\n    } else {\n      notify(stats.passes + ' tests passed in ' + stats.duration + 'ms', {\n          name: 'mocha'\n        , title: 'Passed'\n        , image: image('ok')\n      });\n    }\n  });\n};\n\n/**\n * Add regexp to grep, if `re` is a string it is escaped.\n *\n * @param {RegExp|String} re\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.grep = function(re){\n  this.options.grep = 'string' == typeof re\n    ? new RegExp(escapeRe(re))\n    : re;\n  return this;\n};\n\n/**\n * Invert `.grep()` matches.\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.invert = function(){\n  this.options.invert = true;\n  return this;\n};\n\n/**\n * Ignore global leaks.\n *\n * @param {Boolean} ignore\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.ignoreLeaks = function(ignore){\n  this.options.ignoreLeaks = !!ignore;\n  return this;\n};\n\n/**\n * Enable global leak checking.\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.checkLeaks = function(){\n  this.options.ignoreLeaks = false;\n  return this;\n};\n\n/**\n * Enable growl support.\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.growl = function(){\n  this.options.growl = true;\n  return this;\n};\n\n/**\n * Ignore `globals` array or string.\n *\n * @param {Array|String} globals\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.globals = function(globals){\n  this.options.globals = (this.options.globals || []).concat(globals);\n  return this;\n};\n\n/**\n * Emit color output.\n *\n * @param {Boolean} colors\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.useColors = function(colors){\n  if (colors !== undefined) {\n    this.options.useColors = colors;\n  }\n  return this;\n};\n\n/**\n * Use inline diffs rather than +/-.\n *\n * @param {Boolean} inlineDiffs\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.useInlineDiffs = function(inlineDiffs) {\n  this.options.useInlineDiffs = arguments.length && inlineDiffs != undefined\n  ? inlineDiffs\n  : false;\n  return this;\n};\n\n/**\n * Set the timeout in milliseconds.\n *\n * @param {Number} timeout\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.timeout = function(timeout){\n  this.suite.timeout(timeout);\n  return this;\n};\n\n/**\n * Set slowness threshold in milliseconds.\n *\n * @param {Number} slow\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.slow = function(slow){\n  this.suite.slow(slow);\n  return this;\n};\n\n/**\n * Enable timeouts.\n *\n * @param {Boolean} enabled\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.enableTimeouts = function(enabled) {\n  this.suite.enableTimeouts(arguments.length && enabled !== undefined\n    ? enabled\n    : true);\n  return this\n};\n\n/**\n * Makes all tests async (accepting a callback)\n *\n * @return {Mocha}\n * @api public\n */\n\nMocha.prototype.asyncOnly = function(){\n  this.options.asyncOnly = true;\n  return this;\n};\n\n/**\n * Disable syntax highlighting (in browser).\n * @returns {Mocha}\n * @api public\n */\nMocha.prototype.noHighlighting = function() {\n  this.options.noHighlighting = true;\n  return this;\n};\n\n/**\n * Run tests and invoke `fn()` when complete.\n *\n * @param {Function} fn\n * @return {Runner}\n * @api public\n */\n\nMocha.prototype.run = function(fn){\n  if (this.files.length) this.loadFiles();\n  var suite = this.suite;\n  var options = this.options;\n  options.files = this.files;\n  var runner = new exports.Runner(suite);\n  var reporter = new this._reporter(runner, options);\n  runner.ignoreLeaks = false !== options.ignoreLeaks;\n  runner.asyncOnly = options.asyncOnly;\n  if (options.grep) runner.grep(options.grep, options.invert);\n  if (options.globals) runner.globals(options.globals);\n  if (options.growl) this._growl(runner, reporter);\n  if (options.useColors !== undefined) {\n    exports.reporters.Base.useColors = options.useColors;\n  }\n  exports.reporters.Base.inlineDiffs = options.useInlineDiffs;\n\n  function done(failures) {\n      if (reporter.done) {\n          reporter.done(failures, fn);\n      } else {\n          fn(failures);\n      }\n  }\n\n  return runner.run(done);\n};\n\n}); // module: mocha.js\n\nrequire.register(\"ms.js\", function(module, exports, require){\n/**\n * Helpers.\n */\n\nvar s = 1000;\nvar m = s * 60;\nvar h = m * 60;\nvar d = h * 24;\nvar y = d * 365.25;\n\n/**\n * Parse or format the given `val`.\n *\n * Options:\n *\n *  - `long` verbose formatting [false]\n *\n * @param {String|Number} val\n * @param {Object} options\n * @return {String|Number}\n * @api public\n */\n\nmodule.exports = function(val, options){\n  options = options || {};\n  if ('string' == typeof val) return parse(val);\n  return options['long'] ? longFormat(val) : shortFormat(val);\n};\n\n/**\n * Parse the given `str` and return milliseconds.\n *\n * @param {String} str\n * @return {Number}\n * @api private\n */\n\nfunction parse(str) {\n  var match = /^((?:\\d+)?\\.?\\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);\n  if (!match) return;\n  var n = parseFloat(match[1]);\n  var type = (match[2] || 'ms').toLowerCase();\n  switch (type) {\n    case 'years':\n    case 'year':\n    case 'y':\n      return n * y;\n    case 'days':\n    case 'day':\n    case 'd':\n      return n * d;\n    case 'hours':\n    case 'hour':\n    case 'h':\n      return n * h;\n    case 'minutes':\n    case 'minute':\n    case 'm':\n      return n * m;\n    case 'seconds':\n    case 'second':\n    case 's':\n      return n * s;\n    case 'ms':\n      return n;\n  }\n}\n\n/**\n * Short format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction shortFormat(ms) {\n  if (ms >= d) return Math.round(ms / d) + 'd';\n  if (ms >= h) return Math.round(ms / h) + 'h';\n  if (ms >= m) return Math.round(ms / m) + 'm';\n  if (ms >= s) return Math.round(ms / s) + 's';\n  return ms + 'ms';\n}\n\n/**\n * Long format for `ms`.\n *\n * @param {Number} ms\n * @return {String}\n * @api private\n */\n\nfunction longFormat(ms) {\n  return plural(ms, d, 'day')\n    || plural(ms, h, 'hour')\n    || plural(ms, m, 'minute')\n    || plural(ms, s, 'second')\n    || ms + ' ms';\n}\n\n/**\n * Pluralization helper.\n */\n\nfunction plural(ms, n, name) {\n  if (ms < n) return;\n  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;\n  return Math.ceil(ms / n) + ' ' + name + 's';\n}\n\n}); // module: ms.js\n\nrequire.register(\"reporters/base.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar tty = require('browser/tty')\n  , diff = require('browser/diff')\n  , ms = require('../ms')\n  , utils = require('../utils');\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Check if both stdio streams are associated with a tty.\n */\n\nvar isatty = tty.isatty(1) && tty.isatty(2);\n\n/**\n * Expose `Base`.\n */\n\nexports = module.exports = Base;\n\n/**\n * Enable coloring by default.\n */\n\nexports.useColors = isatty || (process.env.MOCHA_COLORS !== undefined);\n\n/**\n * Inline diffs instead of +/-\n */\n\nexports.inlineDiffs = false;\n\n/**\n * Default color map.\n */\n\nexports.colors = {\n    'pass': 90\n  , 'fail': 31\n  , 'bright pass': 92\n  , 'bright fail': 91\n  , 'bright yellow': 93\n  , 'pending': 36\n  , 'suite': 0\n  , 'error title': 0\n  , 'error message': 31\n  , 'error stack': 90\n  , 'checkmark': 32\n  , 'fast': 90\n  , 'medium': 33\n  , 'slow': 31\n  , 'green': 32\n  , 'light': 90\n  , 'diff gutter': 90\n  , 'diff added': 42\n  , 'diff removed': 41\n};\n\n/**\n * Default symbol map.\n */\n\nexports.symbols = {\n  ok: '✓',\n  err: '✖',\n  dot: '․'\n};\n\n// With node.js on Windows: use symbols available in terminal default fonts\nif ('win32' == process.platform) {\n  exports.symbols.ok = '\\u221A';\n  exports.symbols.err = '\\u00D7';\n  exports.symbols.dot = '.';\n}\n\n/**\n * Color `str` with the given `type`,\n * allowing colors to be disabled,\n * as well as user-defined color\n * schemes.\n *\n * @param {String} type\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nvar color = exports.color = function(type, str) {\n  if (!exports.useColors) return String(str);\n  return '\\u001b[' + exports.colors[type] + 'm' + str + '\\u001b[0m';\n};\n\n/**\n * Expose term window size, with some\n * defaults for when stderr is not a tty.\n */\n\nexports.window = {\n  width: isatty\n    ? process.stdout.getWindowSize\n      ? process.stdout.getWindowSize(1)[0]\n      : tty.getWindowSize()[1]\n    : 75\n};\n\n/**\n * Expose some basic cursor interactions\n * that are common among reporters.\n */\n\nexports.cursor = {\n  hide: function(){\n    isatty && process.stdout.write('\\u001b[?25l');\n  },\n\n  show: function(){\n    isatty && process.stdout.write('\\u001b[?25h');\n  },\n\n  deleteLine: function(){\n    isatty && process.stdout.write('\\u001b[2K');\n  },\n\n  beginningOfLine: function(){\n    isatty && process.stdout.write('\\u001b[0G');\n  },\n\n  CR: function(){\n    if (isatty) {\n      exports.cursor.deleteLine();\n      exports.cursor.beginningOfLine();\n    } else {\n      process.stdout.write('\\r');\n    }\n  }\n};\n\n/**\n * Outut the given `failures` as a list.\n *\n * @param {Array} failures\n * @api public\n */\n\nexports.list = function(failures){\n  console.log();\n  failures.forEach(function(test, i){\n    // format\n    var fmt = color('error title', '  %s) %s:\\n')\n      + color('error message', '     %s')\n      + color('error stack', '\\n%s\\n');\n\n    // msg\n    var err = test.err\n      , message = err.message || ''\n      , stack = err.stack || message\n      , index = stack.indexOf(message) + message.length\n      , msg = stack.slice(0, index)\n      , actual = err.actual\n      , expected = err.expected\n      , escape = true;\n\n    // uncaught\n    if (err.uncaught) {\n      msg = 'Uncaught ' + msg;\n    }\n\n    // explicitly show diff\n    if (err.showDiff && sameType(actual, expected)) {\n\n      if ('string' !== typeof actual) {\n        escape = false;\n        err.actual = actual = utils.stringify(actual);\n        err.expected = expected = utils.stringify(expected);\n      }\n\n      fmt = color('error title', '  %s) %s:\\n%s') + color('error stack', '\\n%s\\n');\n      var match = message.match(/^([^:]+): expected/);\n      msg = '\\n      ' + color('error message', match ? match[1] : msg);\n\n      if (exports.inlineDiffs) {\n        msg += inlineDiff(err, escape);\n      } else {\n        msg += unifiedDiff(err, escape);\n      }\n    }\n\n    // indent stack trace without msg\n    stack = stack.slice(index ? index + 1 : index)\n      .replace(/^/gm, '  ');\n\n    console.log(fmt, (i + 1), test.fullTitle(), msg, stack);\n  });\n};\n\n/**\n * Initialize a new `Base` reporter.\n *\n * All other reporters generally\n * inherit from this reporter, providing\n * stats such as test duration, number\n * of tests passed / failed etc.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Base(runner) {\n  var self = this\n    , stats = this.stats = { suites: 0, tests: 0, passes: 0, pending: 0, failures: 0 }\n    , failures = this.failures = [];\n\n  if (!runner) return;\n  this.runner = runner;\n\n  runner.stats = stats;\n\n  runner.on('start', function(){\n    stats.start = new Date;\n  });\n\n  runner.on('suite', function(suite){\n    stats.suites = stats.suites || 0;\n    suite.root || stats.suites++;\n  });\n\n  runner.on('test end', function(test){\n    stats.tests = stats.tests || 0;\n    stats.tests++;\n  });\n\n  runner.on('pass', function(test){\n    stats.passes = stats.passes || 0;\n\n    var medium = test.slow() / 2;\n    test.speed = test.duration > test.slow()\n      ? 'slow'\n      : test.duration > medium\n        ? 'medium'\n        : 'fast';\n\n    stats.passes++;\n  });\n\n  runner.on('fail', function(test, err){\n    stats.failures = stats.failures || 0;\n    stats.failures++;\n    test.err = err;\n    failures.push(test);\n  });\n\n  runner.on('end', function(){\n    stats.end = new Date;\n    stats.duration = new Date - stats.start;\n  });\n\n  runner.on('pending', function(){\n    stats.pending++;\n  });\n}\n\n/**\n * Output common epilogue used by many of\n * the bundled reporters.\n *\n * @api public\n */\n\nBase.prototype.epilogue = function(){\n  var stats = this.stats;\n  var tests;\n  var fmt;\n\n  console.log();\n\n  // passes\n  fmt = color('bright pass', ' ')\n    + color('green', ' %d passing')\n    + color('light', ' (%s)');\n\n  console.log(fmt,\n    stats.passes || 0,\n    ms(stats.duration));\n\n  // pending\n  if (stats.pending) {\n    fmt = color('pending', ' ')\n      + color('pending', ' %d pending');\n\n    console.log(fmt, stats.pending);\n  }\n\n  // failures\n  if (stats.failures) {\n    fmt = color('fail', '  %d failing');\n\n    console.log(fmt, stats.failures);\n\n    Base.list(this.failures);\n    console.log();\n  }\n\n  console.log();\n};\n\n/**\n * Pad the given `str` to `len`.\n *\n * @param {String} str\n * @param {String} len\n * @return {String}\n * @api private\n */\n\nfunction pad(str, len) {\n  str = String(str);\n  return Array(len - str.length + 1).join(' ') + str;\n}\n\n\n/**\n * Returns an inline diff between 2 strings with coloured ANSI output\n *\n * @param {Error} Error with actual/expected\n * @return {String} Diff\n * @api private\n */\n\nfunction inlineDiff(err, escape) {\n  var msg = errorDiff(err, 'WordsWithSpace', escape);\n\n  // linenos\n  var lines = msg.split('\\n');\n  if (lines.length > 4) {\n    var width = String(lines.length).length;\n    msg = lines.map(function(str, i){\n      return pad(++i, width) + ' |' + ' ' + str;\n    }).join('\\n');\n  }\n\n  // legend\n  msg = '\\n'\n    + color('diff removed', 'actual')\n    + ' '\n    + color('diff added', 'expected')\n    + '\\n\\n'\n    + msg\n    + '\\n';\n\n  // indent\n  msg = msg.replace(/^/gm, '      ');\n  return msg;\n}\n\n/**\n * Returns a unified diff between 2 strings\n *\n * @param {Error} Error with actual/expected\n * @return {String} Diff\n * @api private\n */\n\nfunction unifiedDiff(err, escape) {\n  var indent = '      ';\n  function cleanUp(line) {\n    if (escape) {\n      line = escapeInvisibles(line);\n    }\n    if (line[0] === '+') return indent + colorLines('diff added', line);\n    if (line[0] === '-') return indent + colorLines('diff removed', line);\n    if (line.match(/\\@\\@/)) return null;\n    if (line.match(/\\\\ No newline/)) return null;\n    else return indent + line;\n  }\n  function notBlank(line) {\n    return line != null;\n  }\n  msg = diff.createPatch('string', err.actual, err.expected);\n  var lines = msg.split('\\n').splice(4);\n  return '\\n      '\n         + colorLines('diff added',   '+ expected') + ' '\n         + colorLines('diff removed', '- actual')\n         + '\\n\\n'\n         + lines.map(cleanUp).filter(notBlank).join('\\n');\n}\n\n/**\n * Return a character diff for `err`.\n *\n * @param {Error} err\n * @return {String}\n * @api private\n */\n\nfunction errorDiff(err, type, escape) {\n  var actual   = escape ? escapeInvisibles(err.actual)   : err.actual;\n  var expected = escape ? escapeInvisibles(err.expected) : err.expected;\n  return diff['diff' + type](actual, expected).map(function(str){\n    if (str.added) return colorLines('diff added', str.value);\n    if (str.removed) return colorLines('diff removed', str.value);\n    return str.value;\n  }).join('');\n}\n\n/**\n * Returns a string with all invisible characters in plain text\n *\n * @param {String} line\n * @return {String}\n * @api private\n */\nfunction escapeInvisibles(line) {\n    return line.replace(/\\t/g, '<tab>')\n               .replace(/\\r/g, '<CR>')\n               .replace(/\\n/g, '<LF>\\n');\n}\n\n/**\n * Color lines for `str`, using the color `name`.\n *\n * @param {String} name\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nfunction colorLines(name, str) {\n  return str.split('\\n').map(function(str){\n    return color(name, str);\n  }).join('\\n');\n}\n\n/**\n * Check that a / b have the same type.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Boolean}\n * @api private\n */\n\nfunction sameType(a, b) {\n  a = Object.prototype.toString.call(a);\n  b = Object.prototype.toString.call(b);\n  return a == b;\n}\n\n}); // module: reporters/base.js\n\nrequire.register(\"reporters/doc.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , utils = require('../utils');\n\n/**\n * Expose `Doc`.\n */\n\nexports = module.exports = Doc;\n\n/**\n * Initialize a new `Doc` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Doc(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , total = runner.total\n    , indents = 2;\n\n  function indent() {\n    return Array(indents).join('  ');\n  }\n\n  runner.on('suite', function(suite){\n    if (suite.root) return;\n    ++indents;\n    console.log('%s<section class=\"suite\">', indent());\n    ++indents;\n    console.log('%s<h1>%s</h1>', indent(), utils.escape(suite.title));\n    console.log('%s<dl>', indent());\n  });\n\n  runner.on('suite end', function(suite){\n    if (suite.root) return;\n    console.log('%s</dl>', indent());\n    --indents;\n    console.log('%s</section>', indent());\n    --indents;\n  });\n\n  runner.on('pass', function(test){\n    console.log('%s  <dt>%s</dt>', indent(), utils.escape(test.title));\n    var code = utils.escape(utils.clean(test.fn.toString()));\n    console.log('%s  <dd><pre><code>%s</code></pre></dd>', indent(), code);\n  });\n\n  runner.on('fail', function(test, err){\n    console.log('%s  <dt class=\"error\">%s</dt>', indent(), utils.escape(test.title));\n    var code = utils.escape(utils.clean(test.fn.toString()));\n    console.log('%s  <dd class=\"error\"><pre><code>%s</code></pre></dd>', indent(), code);\n    console.log('%s  <dd class=\"error\">%s</dd>', indent(), utils.escape(err));\n  });\n}\n\n}); // module: reporters/doc.js\n\nrequire.register(\"reporters/dot.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , color = Base.color;\n\n/**\n * Expose `Dot`.\n */\n\nexports = module.exports = Dot;\n\n/**\n * Initialize a new `Dot` matrix test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Dot(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , width = Base.window.width * .75 | 0\n    , n = -1;\n\n  runner.on('start', function(){\n    process.stdout.write('\\n  ');\n  });\n\n  runner.on('pending', function(test){\n    if (++n % width == 0) process.stdout.write('\\n  ');\n    process.stdout.write(color('pending', Base.symbols.dot));\n  });\n\n  runner.on('pass', function(test){\n    if (++n % width == 0) process.stdout.write('\\n  ');\n    if ('slow' == test.speed) {\n      process.stdout.write(color('bright yellow', Base.symbols.dot));\n    } else {\n      process.stdout.write(color(test.speed, Base.symbols.dot));\n    }\n  });\n\n  runner.on('fail', function(test, err){\n    if (++n % width == 0) process.stdout.write('\\n  ');\n    process.stdout.write(color('fail', Base.symbols.dot));\n  });\n\n  runner.on('end', function(){\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nDot.prototype = new F;\nDot.prototype.constructor = Dot;\n\n\n}); // module: reporters/dot.js\n\nrequire.register(\"reporters/html-cov.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar JSONCov = require('./json-cov')\n  , fs = require('browser/fs');\n\n/**\n * Expose `HTMLCov`.\n */\n\nexports = module.exports = HTMLCov;\n\n/**\n * Initialize a new `JsCoverage` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction HTMLCov(runner) {\n  var jade = require('jade')\n    , file = __dirname + '/templates/coverage.jade'\n    , str = fs.readFileSync(file, 'utf8')\n    , fn = jade.compile(str, { filename: file })\n    , self = this;\n\n  JSONCov.call(this, runner, false);\n\n  runner.on('end', function(){\n    process.stdout.write(fn({\n        cov: self.cov\n      , coverageClass: coverageClass\n    }));\n  });\n}\n\n/**\n * Return coverage class for `n`.\n *\n * @return {String}\n * @api private\n */\n\nfunction coverageClass(n) {\n  if (n >= 75) return 'high';\n  if (n >= 50) return 'medium';\n  if (n >= 25) return 'low';\n  return 'terrible';\n}\n\n}); // module: reporters/html-cov.js\n\nrequire.register(\"reporters/html.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , utils = require('../utils')\n  , Progress = require('../browser/progress')\n  , escape = utils.escape;\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Expose `HTML`.\n */\n\nexports = module.exports = HTML;\n\n/**\n * Stats template.\n */\n\nvar statsTemplate = '<ul id=\"mocha-stats\">'\n  + '<li class=\"progress\"><canvas width=\"40\" height=\"40\"></canvas></li>'\n  + '<li class=\"passes\"><a href=\"#\">passes:</a> <em>0</em></li>'\n  + '<li class=\"failures\"><a href=\"#\">failures:</a> <em>0</em></li>'\n  + '<li class=\"duration\">duration: <em>0</em>s</li>'\n  + '</ul>';\n\n/**\n * Initialize a new `HTML` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction HTML(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , total = runner.total\n    , stat = fragment(statsTemplate)\n    , items = stat.getElementsByTagName('li')\n    , passes = items[1].getElementsByTagName('em')[0]\n    , passesLink = items[1].getElementsByTagName('a')[0]\n    , failures = items[2].getElementsByTagName('em')[0]\n    , failuresLink = items[2].getElementsByTagName('a')[0]\n    , duration = items[3].getElementsByTagName('em')[0]\n    , canvas = stat.getElementsByTagName('canvas')[0]\n    , report = fragment('<ul id=\"mocha-report\"></ul>')\n    , stack = [report]\n    , progress\n    , ctx\n    , root = document.getElementById('mocha');\n\n  if (canvas.getContext) {\n    var ratio = window.devicePixelRatio || 1;\n    canvas.style.width = canvas.width;\n    canvas.style.height = canvas.height;\n    canvas.width *= ratio;\n    canvas.height *= ratio;\n    ctx = canvas.getContext('2d');\n    ctx.scale(ratio, ratio);\n    progress = new Progress;\n  }\n\n  if (!root) return error('#mocha div missing, add it to your document');\n\n  // pass toggle\n  on(passesLink, 'click', function(){\n    unhide();\n    var name = /pass/.test(report.className) ? '' : ' pass';\n    report.className = report.className.replace(/fail|pass/g, '') + name;\n    if (report.className.trim()) hideSuitesWithout('test pass');\n  });\n\n  // failure toggle\n  on(failuresLink, 'click', function(){\n    unhide();\n    var name = /fail/.test(report.className) ? '' : ' fail';\n    report.className = report.className.replace(/fail|pass/g, '') + name;\n    if (report.className.trim()) hideSuitesWithout('test fail');\n  });\n\n  root.appendChild(stat);\n  root.appendChild(report);\n\n  if (progress) progress.size(40);\n\n  runner.on('suite', function(suite){\n    if (suite.root) return;\n\n    // suite\n    var url = self.suiteURL(suite);\n    var el = fragment('<li class=\"suite\"><h1><a href=\"%s\">%s</a></h1></li>', url, escape(suite.title));\n\n    // container\n    stack[0].appendChild(el);\n    stack.unshift(document.createElement('ul'));\n    el.appendChild(stack[0]);\n  });\n\n  runner.on('suite end', function(suite){\n    if (suite.root) return;\n    stack.shift();\n  });\n\n  runner.on('fail', function(test, err){\n    if ('hook' == test.type) runner.emit('test end', test);\n  });\n\n  runner.on('test end', function(test){\n    // TODO: add to stats\n    var percent = stats.tests / this.total * 100 | 0;\n    if (progress) progress.update(percent).draw(ctx);\n\n    // update stats\n    var ms = new Date - stats.start;\n    text(passes, stats.passes);\n    text(failures, stats.failures);\n    text(duration, (ms / 1000).toFixed(2));\n\n    // test\n    if ('passed' == test.state) {\n      var url = self.testURL(test);\n      var el = fragment('<li class=\"test pass %e\"><h2>%e<span class=\"duration\">%ems</span> <a href=\"%s\" class=\"replay\">‣</a></h2></li>', test.speed, test.title, test.duration, url);\n    } else if (test.pending) {\n      var el = fragment('<li class=\"test pass pending\"><h2>%e</h2></li>', test.title);\n    } else {\n      var el = fragment('<li class=\"test fail\"><h2>%e <a href=\"%e\" class=\"replay\">‣</a></h2></li>', test.title, self.testURL(test));\n      var str = test.err.stack || test.err.toString();\n\n      // FF / Opera do not add the message\n      if (!~str.indexOf(test.err.message)) {\n        str = test.err.message + '\\n' + str;\n      }\n\n      // <=IE7 stringifies to [Object Error]. Since it can be overloaded, we\n      // check for the result of the stringifying.\n      if ('[object Error]' == str) str = test.err.message;\n\n      // Safari doesn't give you a stack. Let's at least provide a source line.\n      if (!test.err.stack && test.err.sourceURL && test.err.line !== undefined) {\n        str += \"\\n(\" + test.err.sourceURL + \":\" + test.err.line + \")\";\n      }\n\n      el.appendChild(fragment('<pre class=\"error\">%e</pre>', str));\n    }\n\n    // toggle code\n    // TODO: defer\n    if (!test.pending) {\n      var h2 = el.getElementsByTagName('h2')[0];\n\n      on(h2, 'click', function(){\n        pre.style.display = 'none' == pre.style.display\n          ? 'block'\n          : 'none';\n      });\n\n      var pre = fragment('<pre><code>%e</code></pre>', utils.clean(test.fn.toString()));\n      el.appendChild(pre);\n      pre.style.display = 'none';\n    }\n\n    // Don't call .appendChild if #mocha-report was already .shift()'ed off the stack.\n    if (stack[0]) stack[0].appendChild(el);\n  });\n}\n\n/**\n * Makes a URL, preserving querystring (\"search\") parameters.\n * @param {string} s\n * @returns {string} your new URL\n */\nvar makeUrl = function makeUrl(s) {\n  var search = window.location.search;\n  return window.location.pathname + (search ? search + '&' : '?' ) + 'grep=' + encodeURIComponent(s);\n};\n\n/**\n * Provide suite URL\n *\n * @param {Object} [suite]\n */\nHTML.prototype.suiteURL = function(suite){\n  return makeUrl(suite.fullTitle());\n};\n\n/**\n * Provide test URL\n *\n * @param {Object} [test]\n */\n\nHTML.prototype.testURL = function(test){\n  return makeUrl(test.fullTitle());\n};\n\n/**\n * Display error `msg`.\n */\n\nfunction error(msg) {\n  document.body.appendChild(fragment('<div id=\"mocha-error\">%s</div>', msg));\n}\n\n/**\n * Return a DOM fragment from `html`.\n */\n\nfunction fragment(html) {\n  var args = arguments\n    , div = document.createElement('div')\n    , i = 1;\n\n  div.innerHTML = html.replace(/%([se])/g, function(_, type){\n    switch (type) {\n      case 's': return String(args[i++]);\n      case 'e': return escape(args[i++]);\n    }\n  });\n\n  return div.firstChild;\n}\n\n/**\n * Check for suites that do not have elements\n * with `classname`, and hide them.\n */\n\nfunction hideSuitesWithout(classname) {\n  var suites = document.getElementsByClassName('suite');\n  for (var i = 0; i < suites.length; i++) {\n    var els = suites[i].getElementsByClassName(classname);\n    if (0 == els.length) suites[i].className += ' hidden';\n  }\n}\n\n/**\n * Unhide .hidden suites.\n */\n\nfunction unhide() {\n  var els = document.getElementsByClassName('suite hidden');\n  for (var i = 0; i < els.length; ++i) {\n    els[i].className = els[i].className.replace('suite hidden', 'suite');\n  }\n}\n\n/**\n * Set `el` text to `str`.\n */\n\nfunction text(el, str) {\n  if (el.textContent) {\n    el.textContent = str;\n  } else {\n    el.innerText = str;\n  }\n}\n\n/**\n * Listen on `event` with callback `fn`.\n */\n\nfunction on(el, event, fn) {\n  if (el.addEventListener) {\n    el.addEventListener(event, fn, false);\n  } else {\n    el.attachEvent('on' + event, fn);\n  }\n}\n\n}); // module: reporters/html.js\n\nrequire.register(\"reporters/index.js\", function(module, exports, require){\nexports.Base = require('./base');\nexports.Dot = require('./dot');\nexports.Doc = require('./doc');\nexports.TAP = require('./tap');\nexports.JSON = require('./json');\nexports.HTML = require('./html');\nexports.List = require('./list');\nexports.Min = require('./min');\nexports.Spec = require('./spec');\nexports.Nyan = require('./nyan');\nexports.XUnit = require('./xunit');\nexports.Markdown = require('./markdown');\nexports.Progress = require('./progress');\nexports.Landing = require('./landing');\nexports.JSONCov = require('./json-cov');\nexports.HTMLCov = require('./html-cov');\nexports.JSONStream = require('./json-stream');\n\n}); // module: reporters/index.js\n\nrequire.register(\"reporters/json-cov.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `JSONCov`.\n */\n\nexports = module.exports = JSONCov;\n\n/**\n * Initialize a new `JsCoverage` reporter.\n *\n * @param {Runner} runner\n * @param {Boolean} output\n * @api public\n */\n\nfunction JSONCov(runner, output) {\n  var self = this\n    , output = 1 == arguments.length ? true : output;\n\n  Base.call(this, runner);\n\n  var tests = []\n    , failures = []\n    , passes = [];\n\n  runner.on('test end', function(test){\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test){\n    passes.push(test);\n  });\n\n  runner.on('fail', function(test){\n    failures.push(test);\n  });\n\n  runner.on('end', function(){\n    var cov = global._$jscoverage || {};\n    var result = self.cov = map(cov);\n    result.stats = self.stats;\n    result.tests = tests.map(clean);\n    result.failures = failures.map(clean);\n    result.passes = passes.map(clean);\n    if (!output) return;\n    process.stdout.write(JSON.stringify(result, null, 2 ));\n  });\n}\n\n/**\n * Map jscoverage data to a JSON structure\n * suitable for reporting.\n *\n * @param {Object} cov\n * @return {Object}\n * @api private\n */\n\nfunction map(cov) {\n  var ret = {\n      instrumentation: 'node-jscoverage'\n    , sloc: 0\n    , hits: 0\n    , misses: 0\n    , coverage: 0\n    , files: []\n  };\n\n  for (var filename in cov) {\n    var data = coverage(filename, cov[filename]);\n    ret.files.push(data);\n    ret.hits += data.hits;\n    ret.misses += data.misses;\n    ret.sloc += data.sloc;\n  }\n\n  ret.files.sort(function(a, b) {\n    return a.filename.localeCompare(b.filename);\n  });\n\n  if (ret.sloc > 0) {\n    ret.coverage = (ret.hits / ret.sloc) * 100;\n  }\n\n  return ret;\n}\n\n/**\n * Map jscoverage data for a single source file\n * to a JSON structure suitable for reporting.\n *\n * @param {String} filename name of the source file\n * @param {Object} data jscoverage coverage data\n * @return {Object}\n * @api private\n */\n\nfunction coverage(filename, data) {\n  var ret = {\n    filename: filename,\n    coverage: 0,\n    hits: 0,\n    misses: 0,\n    sloc: 0,\n    source: {}\n  };\n\n  data.source.forEach(function(line, num){\n    num++;\n\n    if (data[num] === 0) {\n      ret.misses++;\n      ret.sloc++;\n    } else if (data[num] !== undefined) {\n      ret.hits++;\n      ret.sloc++;\n    }\n\n    ret.source[num] = {\n        source: line\n      , coverage: data[num] === undefined\n        ? ''\n        : data[num]\n    };\n  });\n\n  ret.coverage = ret.hits / ret.sloc * 100;\n\n  return ret;\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @param {Object} test\n * @return {Object}\n * @api private\n */\n\nfunction clean(test) {\n  return {\n      title: test.title\n    , fullTitle: test.fullTitle()\n    , duration: test.duration\n  }\n}\n\n}); // module: reporters/json-cov.js\n\nrequire.register(\"reporters/json-stream.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , color = Base.color;\n\n/**\n * Expose `List`.\n */\n\nexports = module.exports = List;\n\n/**\n * Initialize a new `List` test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction List(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , total = runner.total;\n\n  runner.on('start', function(){\n    console.log(JSON.stringify(['start', { total: total }]));\n  });\n\n  runner.on('pass', function(test){\n    console.log(JSON.stringify(['pass', clean(test)]));\n  });\n\n  runner.on('fail', function(test, err){\n    test = clean(test);\n    test.err = err.message;\n    console.log(JSON.stringify(['fail', test]));\n  });\n\n  runner.on('end', function(){\n    process.stdout.write(JSON.stringify(['end', self.stats]));\n  });\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @param {Object} test\n * @return {Object}\n * @api private\n */\n\nfunction clean(test) {\n  return {\n      title: test.title\n    , fullTitle: test.fullTitle()\n    , duration: test.duration\n  }\n}\n\n}); // module: reporters/json-stream.js\n\nrequire.register(\"reporters/json.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `JSON`.\n */\n\nexports = module.exports = JSONReporter;\n\n/**\n * Initialize a new `JSON` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction JSONReporter(runner) {\n  var self = this;\n  Base.call(this, runner);\n\n  var tests = []\n    , pending = []\n    , failures = []\n    , passes = [];\n\n  runner.on('test end', function(test){\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test){\n    passes.push(test);\n  });\n\n  runner.on('fail', function(test){\n    failures.push(test);\n  });\n\n  runner.on('pending', function(test){\n    pending.push(test);\n  });\n\n  runner.on('end', function(){\n    var obj = {\n      stats: self.stats,\n      tests: tests.map(clean),\n      pending: pending.map(clean),\n      failures: failures.map(clean),\n      passes: passes.map(clean)\n    };\n\n    runner.testResults = obj;\n\n    process.stdout.write(JSON.stringify(obj, null, 2));\n  });\n}\n\n/**\n * Return a plain-object representation of `test`\n * free of cyclic properties etc.\n *\n * @param {Object} test\n * @return {Object}\n * @api private\n */\n\nfunction clean(test) {\n  return {\n    title: test.title,\n    fullTitle: test.fullTitle(),\n    duration: test.duration,\n    err: errorJSON(test.err || {})\n  }\n}\n\n/**\n * Transform `error` into a JSON object.\n * @param {Error} err\n * @return {Object}\n */\n\nfunction errorJSON(err) {\n  var res = {};\n  Object.getOwnPropertyNames(err).forEach(function(key) {\n    res[key] = err[key];\n  }, err);\n  return res;\n}\n\n}); // module: reporters/json.js\n\nrequire.register(\"reporters/landing.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `Landing`.\n */\n\nexports = module.exports = Landing;\n\n/**\n * Airplane color.\n */\n\nBase.colors.plane = 0;\n\n/**\n * Airplane crash color.\n */\n\nBase.colors['plane crash'] = 31;\n\n/**\n * Runway color.\n */\n\nBase.colors.runway = 90;\n\n/**\n * Initialize a new `Landing` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Landing(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , width = Base.window.width * .75 | 0\n    , total = runner.total\n    , stream = process.stdout\n    , plane = color('plane', '✈')\n    , crashed = -1\n    , n = 0;\n\n  function runway() {\n    var buf = Array(width).join('-');\n    return '  ' + color('runway', buf);\n  }\n\n  runner.on('start', function(){\n    stream.write('\\n\\n\\n  ');\n    cursor.hide();\n  });\n\n  runner.on('test end', function(test){\n    // check if the plane crashed\n    var col = -1 == crashed\n      ? width * ++n / total | 0\n      : crashed;\n\n    // show the crash\n    if ('failed' == test.state) {\n      plane = color('plane crash', '✈');\n      crashed = col;\n    }\n\n    // render landing strip\n    stream.write('\\u001b['+(width+1)+'D\\u001b[2A');\n    stream.write(runway());\n    stream.write('\\n  ');\n    stream.write(color('runway', Array(col).join('⋅')));\n    stream.write(plane)\n    stream.write(color('runway', Array(width - col).join('⋅') + '\\n'));\n    stream.write(runway());\n    stream.write('\\u001b[0m');\n  });\n\n  runner.on('end', function(){\n    cursor.show();\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nLanding.prototype = new F;\nLanding.prototype.constructor = Landing;\n\n\n}); // module: reporters/landing.js\n\nrequire.register(\"reporters/list.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `List`.\n */\n\nexports = module.exports = List;\n\n/**\n * Initialize a new `List` test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction List(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , n = 0;\n\n  runner.on('start', function(){\n    console.log();\n  });\n\n  runner.on('test', function(test){\n    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));\n  });\n\n  runner.on('pending', function(test){\n    var fmt = color('checkmark', '  -')\n      + color('pending', ' %s');\n    console.log(fmt, test.fullTitle());\n  });\n\n  runner.on('pass', function(test){\n    var fmt = color('checkmark', '  '+Base.symbols.dot)\n      + color('pass', ' %s: ')\n      + color(test.speed, '%dms');\n    cursor.CR();\n    console.log(fmt, test.fullTitle(), test.duration);\n  });\n\n  runner.on('fail', function(test, err){\n    cursor.CR();\n    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());\n  });\n\n  runner.on('end', self.epilogue.bind(self));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nList.prototype = new F;\nList.prototype.constructor = List;\n\n\n}); // module: reporters/list.js\n\nrequire.register(\"reporters/markdown.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , utils = require('../utils');\n\n/**\n * Constants\n */\n\nvar SUITE_PREFIX = '$';\n\n/**\n * Expose `Markdown`.\n */\n\nexports = module.exports = Markdown;\n\n/**\n * Initialize a new `Markdown` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Markdown(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , level = 0\n    , buf = '';\n\n  function title(str) {\n    return Array(level).join('#') + ' ' + str;\n  }\n\n  function indent() {\n    return Array(level).join('  ');\n  }\n\n  function mapTOC(suite, obj) {\n    var ret = obj,\n        key = SUITE_PREFIX + suite.title;\n    obj = obj[key] = obj[key] || { suite: suite };\n    suite.suites.forEach(function(suite){\n      mapTOC(suite, obj);\n    });\n    return ret;\n  }\n\n  function stringifyTOC(obj, level) {\n    ++level;\n    var buf = '';\n    var link;\n    for (var key in obj) {\n      if ('suite' == key) continue;\n      if (key !== SUITE_PREFIX) {\n        link = ' - [' + key.substring(1) + ']';\n        link += '(#' + utils.slug(obj[key].suite.fullTitle()) + ')\\n';\n        buf += Array(level).join('  ') + link;\n      }\n      buf += stringifyTOC(obj[key], level);\n    }\n    return buf;\n  }\n\n  function generateTOC(suite) {\n    var obj = mapTOC(suite, {});\n    return stringifyTOC(obj, 0);\n  }\n\n  generateTOC(runner.suite);\n\n  runner.on('suite', function(suite){\n    ++level;\n    var slug = utils.slug(suite.fullTitle());\n    buf += '<a name=\"' + slug + '\"></a>' + '\\n';\n    buf += title(suite.title) + '\\n';\n  });\n\n  runner.on('suite end', function(suite){\n    --level;\n  });\n\n  runner.on('pass', function(test){\n    var code = utils.clean(test.fn.toString());\n    buf += test.title + '.\\n';\n    buf += '\\n```js\\n';\n    buf += code + '\\n';\n    buf += '```\\n\\n';\n  });\n\n  runner.on('end', function(){\n    process.stdout.write('# TOC\\n');\n    process.stdout.write(generateTOC(runner.suite));\n    process.stdout.write(buf);\n  });\n}\n\n}); // module: reporters/markdown.js\n\nrequire.register(\"reporters/min.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `Min`.\n */\n\nexports = module.exports = Min;\n\n/**\n * Initialize a new `Min` minimal test reporter (best used with --watch).\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Min(runner) {\n  Base.call(this, runner);\n\n  runner.on('start', function(){\n    // clear screen\n    process.stdout.write('\\u001b[2J');\n    // set cursor position\n    process.stdout.write('\\u001b[1;3H');\n  });\n\n  runner.on('end', this.epilogue.bind(this));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nMin.prototype = new F;\nMin.prototype.constructor = Min;\n\n\n}); // module: reporters/min.js\n\nrequire.register(\"reporters/nyan.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base');\n\n/**\n * Expose `Dot`.\n */\n\nexports = module.exports = NyanCat;\n\n/**\n * Initialize a new `Dot` matrix test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction NyanCat(runner) {\n  Base.call(this, runner);\n  var self = this\n    , stats = this.stats\n    , width = Base.window.width * .75 | 0\n    , rainbowColors = this.rainbowColors = self.generateColors()\n    , colorIndex = this.colorIndex = 0\n    , numerOfLines = this.numberOfLines = 4\n    , trajectories = this.trajectories = [[], [], [], []]\n    , nyanCatWidth = this.nyanCatWidth = 11\n    , trajectoryWidthMax = this.trajectoryWidthMax = (width - nyanCatWidth)\n    , scoreboardWidth = this.scoreboardWidth = 5\n    , tick = this.tick = 0\n    , n = 0;\n\n  runner.on('start', function(){\n    Base.cursor.hide();\n    self.draw();\n  });\n\n  runner.on('pending', function(test){\n    self.draw();\n  });\n\n  runner.on('pass', function(test){\n    self.draw();\n  });\n\n  runner.on('fail', function(test, err){\n    self.draw();\n  });\n\n  runner.on('end', function(){\n    Base.cursor.show();\n    for (var i = 0; i < self.numberOfLines; i++) write('\\n');\n    self.epilogue();\n  });\n}\n\n/**\n * Draw the nyan cat\n *\n * @api private\n */\n\nNyanCat.prototype.draw = function(){\n  this.appendRainbow();\n  this.drawScoreboard();\n  this.drawRainbow();\n  this.drawNyanCat();\n  this.tick = !this.tick;\n};\n\n/**\n * Draw the \"scoreboard\" showing the number\n * of passes, failures and pending tests.\n *\n * @api private\n */\n\nNyanCat.prototype.drawScoreboard = function(){\n  var stats = this.stats;\n\n  function draw(type, n) {\n    write(' ');\n    write(Base.color(type, n));\n    write('\\n');\n  }\n\n  draw('green', stats.passes);\n  draw('fail', stats.failures);\n  draw('pending', stats.pending);\n  write('\\n');\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Append the rainbow.\n *\n * @api private\n */\n\nNyanCat.prototype.appendRainbow = function(){\n  var segment = this.tick ? '_' : '-';\n  var rainbowified = this.rainbowify(segment);\n\n  for (var index = 0; index < this.numberOfLines; index++) {\n    var trajectory = this.trajectories[index];\n    if (trajectory.length >= this.trajectoryWidthMax) trajectory.shift();\n    trajectory.push(rainbowified);\n  }\n};\n\n/**\n * Draw the rainbow.\n *\n * @api private\n */\n\nNyanCat.prototype.drawRainbow = function(){\n  var self = this;\n\n  this.trajectories.forEach(function(line, index) {\n    write('\\u001b[' + self.scoreboardWidth + 'C');\n    write(line.join(''));\n    write('\\n');\n  });\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Draw the nyan cat\n *\n * @api private\n */\n\nNyanCat.prototype.drawNyanCat = function() {\n  var self = this;\n  var startWidth = this.scoreboardWidth + this.trajectories[0].length;\n  var dist = '\\u001b[' + startWidth + 'C';\n  var padding = '';\n\n  write(dist);\n  write('_,------,');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? '  ' : '   ';\n  write('_|' + padding + '/\\\\_/\\\\ ');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? '_' : '__';\n  var tail = self.tick ? '~' : '^';\n  var face;\n  write(tail + '|' + padding + this.face() + ' ');\n  write('\\n');\n\n  write(dist);\n  padding = self.tick ? ' ' : '  ';\n  write(padding + '\"\"  \"\" ');\n  write('\\n');\n\n  this.cursorUp(this.numberOfLines);\n};\n\n/**\n * Draw nyan cat face.\n *\n * @return {String}\n * @api private\n */\n\nNyanCat.prototype.face = function() {\n  var stats = this.stats;\n  if (stats.failures) {\n    return '( x .x)';\n  } else if (stats.pending) {\n    return '( o .o)';\n  } else if(stats.passes) {\n    return '( ^ .^)';\n  } else {\n    return '( - .-)';\n  }\n};\n\n/**\n * Move cursor up `n`.\n *\n * @param {Number} n\n * @api private\n */\n\nNyanCat.prototype.cursorUp = function(n) {\n  write('\\u001b[' + n + 'A');\n};\n\n/**\n * Move cursor down `n`.\n *\n * @param {Number} n\n * @api private\n */\n\nNyanCat.prototype.cursorDown = function(n) {\n  write('\\u001b[' + n + 'B');\n};\n\n/**\n * Generate rainbow colors.\n *\n * @return {Array}\n * @api private\n */\n\nNyanCat.prototype.generateColors = function(){\n  var colors = [];\n\n  for (var i = 0; i < (6 * 7); i++) {\n    var pi3 = Math.floor(Math.PI / 3);\n    var n = (i * (1.0 / 6));\n    var r = Math.floor(3 * Math.sin(n) + 3);\n    var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);\n    var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);\n    colors.push(36 * r + 6 * g + b + 16);\n  }\n\n  return colors;\n};\n\n/**\n * Apply rainbow to the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nNyanCat.prototype.rainbowify = function(str){\n  if (!Base.useColors)\n    return str;\n  var color = this.rainbowColors[this.colorIndex % this.rainbowColors.length];\n  this.colorIndex += 1;\n  return '\\u001b[38;5;' + color + 'm' + str + '\\u001b[0m';\n};\n\n/**\n * Stdout helper.\n */\n\nfunction write(string) {\n  process.stdout.write(string);\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nNyanCat.prototype = new F;\nNyanCat.prototype.constructor = NyanCat;\n\n\n}); // module: reporters/nyan.js\n\nrequire.register(\"reporters/progress.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `Progress`.\n */\n\nexports = module.exports = Progress;\n\n/**\n * General progress bar color.\n */\n\nBase.colors.progress = 90;\n\n/**\n * Initialize a new `Progress` bar test reporter.\n *\n * @param {Runner} runner\n * @param {Object} options\n * @api public\n */\n\nfunction Progress(runner, options) {\n  Base.call(this, runner);\n\n  var self = this\n    , options = options || {}\n    , stats = this.stats\n    , width = Base.window.width * .50 | 0\n    , total = runner.total\n    , complete = 0\n    , max = Math.max\n    , lastN = -1;\n\n  // default chars\n  options.open = options.open || '[';\n  options.complete = options.complete || '▬';\n  options.incomplete = options.incomplete || Base.symbols.dot;\n  options.close = options.close || ']';\n  options.verbose = false;\n\n  // tests started\n  runner.on('start', function(){\n    console.log();\n    cursor.hide();\n  });\n\n  // tests complete\n  runner.on('test end', function(){\n    complete++;\n    var incomplete = total - complete\n      , percent = complete / total\n      , n = width * percent | 0\n      , i = width - n;\n\n    if (lastN === n && !options.verbose) {\n      // Don't re-render the line if it hasn't changed\n      return;\n    }\n    lastN = n;\n\n    cursor.CR();\n    process.stdout.write('\\u001b[J');\n    process.stdout.write(color('progress', '  ' + options.open));\n    process.stdout.write(Array(n).join(options.complete));\n    process.stdout.write(Array(i).join(options.incomplete));\n    process.stdout.write(color('progress', options.close));\n    if (options.verbose) {\n      process.stdout.write(color('progress', ' ' + complete + ' of ' + total));\n    }\n  });\n\n  // tests are complete, output some stats\n  // and the failures if any\n  runner.on('end', function(){\n    cursor.show();\n    console.log();\n    self.epilogue();\n  });\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nProgress.prototype = new F;\nProgress.prototype.constructor = Progress;\n\n\n}); // module: reporters/progress.js\n\nrequire.register(\"reporters/spec.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `Spec`.\n */\n\nexports = module.exports = Spec;\n\n/**\n * Initialize a new `Spec` test reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction Spec(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , indents = 0\n    , n = 0;\n\n  function indent() {\n    return Array(indents).join('  ')\n  }\n\n  runner.on('start', function(){\n    console.log();\n  });\n\n  runner.on('suite', function(suite){\n    ++indents;\n    console.log(color('suite', '%s%s'), indent(), suite.title);\n  });\n\n  runner.on('suite end', function(suite){\n    --indents;\n    if (1 == indents) console.log();\n  });\n\n  runner.on('pending', function(test){\n    var fmt = indent() + color('pending', '  - %s');\n    console.log(fmt, test.title);\n  });\n\n  runner.on('pass', function(test){\n    if ('fast' == test.speed) {\n      var fmt = indent()\n        + color('checkmark', '  ' + Base.symbols.ok)\n        + color('pass', ' %s ');\n      cursor.CR();\n      console.log(fmt, test.title);\n    } else {\n      var fmt = indent()\n        + color('checkmark', '  ' + Base.symbols.ok)\n        + color('pass', ' %s ')\n        + color(test.speed, '(%dms)');\n      cursor.CR();\n      console.log(fmt, test.title, test.duration);\n    }\n  });\n\n  runner.on('fail', function(test, err){\n    cursor.CR();\n    console.log(indent() + color('fail', '  %d) %s'), ++n, test.title);\n  });\n\n  runner.on('end', self.epilogue.bind(self));\n}\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nSpec.prototype = new F;\nSpec.prototype.constructor = Spec;\n\n\n}); // module: reporters/spec.js\n\nrequire.register(\"reporters/tap.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , cursor = Base.cursor\n  , color = Base.color;\n\n/**\n * Expose `TAP`.\n */\n\nexports = module.exports = TAP;\n\n/**\n * Initialize a new `TAP` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction TAP(runner) {\n  Base.call(this, runner);\n\n  var self = this\n    , stats = this.stats\n    , n = 1\n    , passes = 0\n    , failures = 0;\n\n  runner.on('start', function(){\n    var total = runner.grepTotal(runner.suite);\n    console.log('%d..%d', 1, total);\n  });\n\n  runner.on('test end', function(){\n    ++n;\n  });\n\n  runner.on('pending', function(test){\n    console.log('ok %d %s # SKIP -', n, title(test));\n  });\n\n  runner.on('pass', function(test){\n    passes++;\n    console.log('ok %d %s', n, title(test));\n  });\n\n  runner.on('fail', function(test, err){\n    failures++;\n    console.log('not ok %d %s', n, title(test));\n    if (err.stack) console.log(err.stack.replace(/^/gm, '  '));\n  });\n\n  runner.on('end', function(){\n    console.log('# tests ' + (passes + failures));\n    console.log('# pass ' + passes);\n    console.log('# fail ' + failures);\n  });\n}\n\n/**\n * Return a TAP-safe title of `test`\n *\n * @param {Object} test\n * @return {String}\n * @api private\n */\n\nfunction title(test) {\n  return test.fullTitle().replace(/#/g, '');\n}\n\n}); // module: reporters/tap.js\n\nrequire.register(\"reporters/xunit.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Base = require('./base')\n  , utils = require('../utils')\n  , fs = require('browser/fs')\n  , escape = utils.escape;\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Expose `XUnit`.\n */\n\nexports = module.exports = XUnit;\n\n/**\n * Initialize a new `XUnit` reporter.\n *\n * @param {Runner} runner\n * @api public\n */\n\nfunction XUnit(runner, options) {\n  Base.call(this, runner);\n  var stats = this.stats\n    , tests = []\n    , self = this;\n\n  if (options.reporterOptions && options.reporterOptions.output) {\n      if (! fs.createWriteStream) {\n          throw new Error('file output not supported in browser');\n      }\n      self.fileStream = fs.createWriteStream(options.reporterOptions.output);\n  }\n\n  runner.on('pending', function(test){\n    tests.push(test);\n  });\n\n  runner.on('pass', function(test){\n    tests.push(test);\n  });\n\n  runner.on('fail', function(test){\n    tests.push(test);\n  });\n\n  runner.on('end', function(){\n    self.write(tag('testsuite', {\n        name: 'Mocha Tests'\n      , tests: stats.tests\n      , failures: stats.failures\n      , errors: stats.failures\n      , skipped: stats.tests - stats.failures - stats.passes\n      , timestamp: (new Date).toUTCString()\n      , time: (stats.duration / 1000) || 0\n    }, false));\n\n    tests.forEach(function(t) { self.test(t); });\n    self.write('</testsuite>');\n  });\n}\n\n/**\n * Override done to close the stream (if it's a file).\n */\nXUnit.prototype.done = function(failures, fn) {\n    if (this.fileStream) {\n        this.fileStream.end(function() {\n            fn(failures);\n        });\n    } else {\n        fn(failures);\n    }\n};\n\n/**\n * Inherit from `Base.prototype`.\n */\n\nfunction F(){};\nF.prototype = Base.prototype;\nXUnit.prototype = new F;\nXUnit.prototype.constructor = XUnit;\n\n\n/**\n * Write out the given line\n */\nXUnit.prototype.write = function(line) {\n    if (this.fileStream) {\n        this.fileStream.write(line + '\\n');\n    } else {\n        console.log(line);\n    }\n};\n\n/**\n * Output tag for the given `test.`\n */\n\nXUnit.prototype.test = function(test, ostream) {\n  var attrs = {\n      classname: test.parent.fullTitle()\n    , name: test.title\n    , time: (test.duration / 1000) || 0\n  };\n\n  if ('failed' == test.state) {\n    var err = test.err;\n    this.write(tag('testcase', attrs, false, tag('failure', {}, false, cdata(escape(err.message) + \"\\n\" + err.stack))));\n  } else if (test.pending) {\n    this.write(tag('testcase', attrs, false, tag('skipped', {}, true)));\n  } else {\n    this.write(tag('testcase', attrs, true) );\n  }\n};\n\n/**\n * HTML tag helper.\n */\n\nfunction tag(name, attrs, close, content) {\n  var end = close ? '/>' : '>'\n    , pairs = []\n    , tag;\n\n  for (var key in attrs) {\n    pairs.push(key + '=\"' + escape(attrs[key]) + '\"');\n  }\n\n  tag = '<' + name + (pairs.length ? ' ' + pairs.join(' ') : '') + end;\n  if (content) tag += content + '</' + name + end;\n  return tag;\n}\n\n/**\n * Return cdata escaped CDATA `str`.\n */\n\nfunction cdata(str) {\n  return '<![CDATA[' + escape(str) + ']]>';\n}\n\n}); // module: reporters/xunit.js\n\nrequire.register(\"runnable.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('browser/events').EventEmitter\n  , debug = require('browser/debug')('mocha:runnable')\n  , milliseconds = require('./ms')\n  , utils = require('./utils');\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date\n  , setTimeout = global.setTimeout\n  , setInterval = global.setInterval\n  , clearTimeout = global.clearTimeout\n  , clearInterval = global.clearInterval;\n\n/**\n * Object#toString().\n */\n\nvar toString = Object.prototype.toString;\n\n/**\n * Expose `Runnable`.\n */\n\nmodule.exports = Runnable;\n\n/**\n * Initialize a new `Runnable` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\n\nfunction Runnable(title, fn) {\n  this.title = title;\n  this.fn = fn;\n  this.async = fn && fn.length;\n  this.sync = ! this.async;\n  this._timeout = 2000;\n  this._slow = 75;\n  this._enableTimeouts = true;\n  this.timedOut = false;\n  this._trace = new Error('done() called multiple times')\n}\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\n\nfunction F(){};\nF.prototype = EventEmitter.prototype;\nRunnable.prototype = new F;\nRunnable.prototype.constructor = Runnable;\n\n\n/**\n * Set & get timeout `ms`.\n *\n * @param {Number|String} ms\n * @return {Runnable|Number} ms or self\n * @api private\n */\n\nRunnable.prototype.timeout = function(ms){\n  if (0 == arguments.length) return this._timeout;\n  if (ms === 0) this._enableTimeouts = false;\n  if ('string' == typeof ms) ms = milliseconds(ms);\n  debug('timeout %d', ms);\n  this._timeout = ms;\n  if (this.timer) this.resetTimeout();\n  return this;\n};\n\n/**\n * Set & get slow `ms`.\n *\n * @param {Number|String} ms\n * @return {Runnable|Number} ms or self\n * @api private\n */\n\nRunnable.prototype.slow = function(ms){\n  if (0 === arguments.length) return this._slow;\n  if ('string' == typeof ms) ms = milliseconds(ms);\n  debug('timeout %d', ms);\n  this._slow = ms;\n  return this;\n};\n\n/**\n * Set and & get timeout `enabled`.\n *\n * @param {Boolean} enabled\n * @return {Runnable|Boolean} enabled or self\n * @api private\n */\n\nRunnable.prototype.enableTimeouts = function(enabled){\n  if (arguments.length === 0) return this._enableTimeouts;\n  debug('enableTimeouts %s', enabled);\n  this._enableTimeouts = enabled;\n  return this;\n};\n\n/**\n * Return the full title generated by recursively\n * concatenating the parent's full title.\n *\n * @return {String}\n * @api public\n */\n\nRunnable.prototype.fullTitle = function(){\n  return this.parent.fullTitle() + ' ' + this.title;\n};\n\n/**\n * Clear the timeout.\n *\n * @api private\n */\n\nRunnable.prototype.clearTimeout = function(){\n  clearTimeout(this.timer);\n};\n\n/**\n * Inspect the runnable void of private properties.\n *\n * @return {String}\n * @api private\n */\n\nRunnable.prototype.inspect = function(){\n  return JSON.stringify(this, function(key, val){\n    if ('_' == key[0]) return;\n    if ('parent' == key) return '#<Suite>';\n    if ('ctx' == key) return '#<Context>';\n    return val;\n  }, 2);\n};\n\n/**\n * Reset the timeout.\n *\n * @api private\n */\n\nRunnable.prototype.resetTimeout = function(){\n  var self = this;\n  var ms = this.timeout() || 1e9;\n\n  if (!this._enableTimeouts) return;\n  this.clearTimeout();\n  this.timer = setTimeout(function(){\n    if (!self._enableTimeouts) return;\n    self.callback(new Error('timeout of ' + ms + 'ms exceeded'));\n    self.timedOut = true;\n  }, ms);\n};\n\n/**\n * Whitelist these globals for this test run\n *\n * @api private\n */\nRunnable.prototype.globals = function(arr){\n  var self = this;\n  this._allowedGlobals = arr;\n};\n\n/**\n * Run the test and invoke `fn(err)`.\n *\n * @param {Function} fn\n * @api private\n */\n\nRunnable.prototype.run = function(fn){\n  var self = this\n    , start = new Date\n    , ctx = this.ctx\n    , finished\n    , emitted;\n\n  // Some times the ctx exists but it is not runnable\n  if (ctx && ctx.runnable) ctx.runnable(this);\n\n  // called multiple times\n  function multiple(err) {\n    if (emitted) return;\n    emitted = true;\n    self.emit('error', err || new Error('done() called multiple times; stacktrace may be inaccurate'));\n  }\n\n  // finished\n  function done(err) {\n    var ms = self.timeout();\n    if (self.timedOut) return;\n    if (finished) return multiple(err || self._trace);\n    self.clearTimeout();\n    self.duration = new Date - start;\n    finished = true;\n    if (!err && self.duration > ms && self._enableTimeouts) err = new Error('timeout of ' + ms + 'ms exceeded');\n    fn(err);\n  }\n\n  // for .resetTimeout()\n  this.callback = done;\n\n  // explicit async with `done` argument\n  if (this.async) {\n    this.resetTimeout();\n\n    try {\n      this.fn.call(ctx, function(err){\n        if (err instanceof Error || toString.call(err) === \"[object Error]\") return done(err);\n        if (null != err) {\n          if (Object.prototype.toString.call(err) === '[object Object]') {\n            return done(new Error('done() invoked with non-Error: ' + JSON.stringify(err)));\n          } else {\n            return done(new Error('done() invoked with non-Error: ' + err));\n          }\n        }\n        done();\n      });\n    } catch (err) {\n      done(utils.getError(err));\n    }\n    return;\n  }\n\n  if (this.asyncOnly) {\n    return done(new Error('--async-only option in use without declaring `done()`'));\n  }\n\n  // sync or promise-returning\n  try {\n    if (this.pending) {\n      done();\n    } else {\n      callFn(this.fn);\n    }\n  } catch (err) {\n    done(utils.getError(err));\n  }\n\n  function callFn(fn) {\n    var result = fn.call(ctx);\n    if (result && typeof result.then === 'function') {\n      self.resetTimeout();\n      result\n        .then(function() {\n          done()\n        },\n        function(reason) {\n          done(reason || new Error('Promise rejected with no or falsy reason'))\n        });\n    } else {\n      done();\n    }\n  }\n};\n\n}); // module: runnable.js\n\nrequire.register(\"runner.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('browser/events').EventEmitter\n  , debug = require('browser/debug')('mocha:runner')\n  , Test = require('./test')\n  , utils = require('./utils')\n  , filter = utils.filter\n  , keys = utils.keys;\n\n/**\n * Non-enumerable globals.\n */\n\nvar globals = [\n  'setTimeout',\n  'clearTimeout',\n  'setInterval',\n  'clearInterval',\n  'XMLHttpRequest',\n  'Date',\n  'setImmediate',\n  'clearImmediate'\n];\n\n/**\n * Expose `Runner`.\n */\n\nmodule.exports = Runner;\n\n/**\n * Initialize a `Runner` for the given `suite`.\n *\n * Events:\n *\n *   - `start`  execution started\n *   - `end`  execution complete\n *   - `suite`  (suite) test suite execution started\n *   - `suite end`  (suite) all tests (and sub-suites) have finished\n *   - `test`  (test) test execution started\n *   - `test end`  (test) test completed\n *   - `hook`  (hook) hook execution started\n *   - `hook end`  (hook) hook complete\n *   - `pass`  (test) test passed\n *   - `fail`  (test, err) test failed\n *   - `pending`  (test) test pending\n *\n * @api public\n */\n\nfunction Runner(suite) {\n  var self = this;\n  this._globals = [];\n  this._abort = false;\n  this.suite = suite;\n  this.total = suite.total();\n  this.failures = 0;\n  this.on('test end', function(test){ self.checkGlobals(test); });\n  this.on('hook end', function(hook){ self.checkGlobals(hook); });\n  this.grep(/.*/);\n  this.globals(this.globalProps().concat(extraGlobals()));\n}\n\n/**\n * Wrapper for setImmediate, process.nextTick, or browser polyfill.\n *\n * @param {Function} fn\n * @api private\n */\n\nRunner.immediately = global.setImmediate || process.nextTick;\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\n\nfunction F(){};\nF.prototype = EventEmitter.prototype;\nRunner.prototype = new F;\nRunner.prototype.constructor = Runner;\n\n\n/**\n * Run tests with full titles matching `re`. Updates runner.total\n * with number of tests matched.\n *\n * @param {RegExp} re\n * @param {Boolean} invert\n * @return {Runner} for chaining\n * @api public\n */\n\nRunner.prototype.grep = function(re, invert){\n  debug('grep %s', re);\n  this._grep = re;\n  this._invert = invert;\n  this.total = this.grepTotal(this.suite);\n  return this;\n};\n\n/**\n * Returns the number of tests matching the grep search for the\n * given suite.\n *\n * @param {Suite} suite\n * @return {Number}\n * @api public\n */\n\nRunner.prototype.grepTotal = function(suite) {\n  var self = this;\n  var total = 0;\n\n  suite.eachTest(function(test){\n    var match = self._grep.test(test.fullTitle());\n    if (self._invert) match = !match;\n    if (match) total++;\n  });\n\n  return total;\n};\n\n/**\n * Return a list of global properties.\n *\n * @return {Array}\n * @api private\n */\n\nRunner.prototype.globalProps = function() {\n  var props = utils.keys(global);\n\n  // non-enumerables\n  for (var i = 0; i < globals.length; ++i) {\n    if (~utils.indexOf(props, globals[i])) continue;\n    props.push(globals[i]);\n  }\n\n  return props;\n};\n\n/**\n * Allow the given `arr` of globals.\n *\n * @param {Array} arr\n * @return {Runner} for chaining\n * @api public\n */\n\nRunner.prototype.globals = function(arr){\n  if (0 == arguments.length) return this._globals;\n  debug('globals %j', arr);\n  this._globals = this._globals.concat(arr);\n  return this;\n};\n\n/**\n * Check for global variable leaks.\n *\n * @api private\n */\n\nRunner.prototype.checkGlobals = function(test){\n  if (this.ignoreLeaks) return;\n  var ok = this._globals;\n\n  var globals = this.globalProps();\n  var leaks;\n\n  if (test) {\n    ok = ok.concat(test._allowedGlobals || []);\n  }\n\n  if(this.prevGlobalsLength == globals.length) return;\n  this.prevGlobalsLength = globals.length;\n\n  leaks = filterLeaks(ok, globals);\n  this._globals = this._globals.concat(leaks);\n\n  if (leaks.length > 1) {\n    this.fail(test, new Error('global leaks detected: ' + leaks.join(', ') + ''));\n  } else if (leaks.length) {\n    this.fail(test, new Error('global leak detected: ' + leaks[0]));\n  }\n};\n\n/**\n * Fail the given `test`.\n *\n * @param {Test} test\n * @param {Error} err\n * @api private\n */\n\nRunner.prototype.fail = function(test, err){\n  ++this.failures;\n  test.state = 'failed';\n\n  if ('string' == typeof err) {\n    err = new Error('the string \"' + err + '\" was thrown, throw an Error :)');\n  }\n\n  this.emit('fail', test, err);\n};\n\n/**\n * Fail the given `hook` with `err`.\n *\n * Hook failures work in the following pattern:\n * - If bail, then exit\n * - Failed `before` hook skips all tests in a suite and subsuites,\n *   but jumps to corresponding `after` hook\n * - Failed `before each` hook skips remaining tests in a\n *   suite and jumps to corresponding `after each` hook,\n *   which is run only once\n * - Failed `after` hook does not alter\n *   execution order\n * - Failed `after each` hook skips remaining tests in a\n *   suite and subsuites, but executes other `after each`\n *   hooks\n *\n * @param {Hook} hook\n * @param {Error} err\n * @api private\n */\n\nRunner.prototype.failHook = function(hook, err){\n  this.fail(hook, err);\n  if (this.suite.bail()) {\n    this.emit('end');\n  }\n};\n\n/**\n * Run hook `name` callbacks and then invoke `fn()`.\n *\n * @param {String} name\n * @param {Function} function\n * @api private\n */\n\nRunner.prototype.hook = function(name, fn){\n  var suite = this.suite\n    , hooks = suite['_' + name]\n    , self = this\n    , timer;\n\n  function next(i) {\n    var hook = hooks[i];\n    if (!hook) return fn();\n    self.currentRunnable = hook;\n\n    hook.ctx.currentTest = self.test;\n\n    self.emit('hook', hook);\n\n    hook.on('error', function(err){\n      self.failHook(hook, err);\n    });\n\n    hook.run(function(err){\n      hook.removeAllListeners('error');\n      var testError = hook.error();\n      if (testError) self.fail(self.test, testError);\n      if (err) {\n        self.failHook(hook, err);\n\n        // stop executing hooks, notify callee of hook err\n        return fn(err);\n      }\n      self.emit('hook end', hook);\n      delete hook.ctx.currentTest;\n      next(++i);\n    });\n  }\n\n  Runner.immediately(function(){\n    next(0);\n  });\n};\n\n/**\n * Run hook `name` for the given array of `suites`\n * in order, and callback `fn(err, errSuite)`.\n *\n * @param {String} name\n * @param {Array} suites\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.hooks = function(name, suites, fn){\n  var self = this\n    , orig = this.suite;\n\n  function next(suite) {\n    self.suite = suite;\n\n    if (!suite) {\n      self.suite = orig;\n      return fn();\n    }\n\n    self.hook(name, function(err){\n      if (err) {\n        var errSuite = self.suite;\n        self.suite = orig;\n        return fn(err, errSuite);\n      }\n\n      next(suites.pop());\n    });\n  }\n\n  next(suites.pop());\n};\n\n/**\n * Run hooks from the top level down.\n *\n * @param {String} name\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.hookUp = function(name, fn){\n  var suites = [this.suite].concat(this.parents()).reverse();\n  this.hooks(name, suites, fn);\n};\n\n/**\n * Run hooks from the bottom up.\n *\n * @param {String} name\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.hookDown = function(name, fn){\n  var suites = [this.suite].concat(this.parents());\n  this.hooks(name, suites, fn);\n};\n\n/**\n * Return an array of parent Suites from\n * closest to furthest.\n *\n * @return {Array}\n * @api private\n */\n\nRunner.prototype.parents = function(){\n  var suite = this.suite\n    , suites = [];\n  while (suite = suite.parent) suites.push(suite);\n  return suites;\n};\n\n/**\n * Run the current test and callback `fn(err)`.\n *\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.runTest = function(fn){\n  var test = this.test\n    , self = this;\n\n  if (this.asyncOnly) test.asyncOnly = true;\n\n  try {\n    test.on('error', function(err){\n      self.fail(test, err);\n    });\n    test.run(fn);\n  } catch (err) {\n    fn(err);\n  }\n};\n\n/**\n * Run tests in the given `suite` and invoke\n * the callback `fn()` when complete.\n *\n * @param {Suite} suite\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.runTests = function(suite, fn){\n  var self = this\n    , tests = suite.tests.slice()\n    , test;\n\n\n  function hookErr(err, errSuite, after) {\n    // before/after Each hook for errSuite failed:\n    var orig = self.suite;\n\n    // for failed 'after each' hook start from errSuite parent,\n    // otherwise start from errSuite itself\n    self.suite = after ? errSuite.parent : errSuite;\n\n    if (self.suite) {\n      // call hookUp afterEach\n      self.hookUp('afterEach', function(err2, errSuite2) {\n        self.suite = orig;\n        // some hooks may fail even now\n        if (err2) return hookErr(err2, errSuite2, true);\n        // report error suite\n        fn(errSuite);\n      });\n    } else {\n      // there is no need calling other 'after each' hooks\n      self.suite = orig;\n      fn(errSuite);\n    }\n  }\n\n  function next(err, errSuite) {\n    // if we bail after first err\n    if (self.failures && suite._bail) return fn();\n\n    if (self._abort) return fn();\n\n    if (err) return hookErr(err, errSuite, true);\n\n    // next test\n    test = tests.shift();\n\n    // all done\n    if (!test) return fn();\n\n    // grep\n    var match = self._grep.test(test.fullTitle());\n    if (self._invert) match = !match;\n    if (!match) return next();\n\n    // pending\n    if (test.pending) {\n      self.emit('pending', test);\n      self.emit('test end', test);\n      return next();\n    }\n\n    // execute test and hook(s)\n    self.emit('test', self.test = test);\n    self.hookDown('beforeEach', function(err, errSuite){\n\n      if (err) return hookErr(err, errSuite, false);\n\n      self.currentRunnable = self.test;\n      self.runTest(function(err){\n        test = self.test;\n\n        if (err) {\n          self.fail(test, err);\n          self.emit('test end', test);\n          return self.hookUp('afterEach', next);\n        }\n\n        test.state = 'passed';\n        self.emit('pass', test);\n        self.emit('test end', test);\n        self.hookUp('afterEach', next);\n      });\n    });\n  }\n\n  this.next = next;\n  next();\n};\n\n/**\n * Run the given `suite` and invoke the\n * callback `fn()` when complete.\n *\n * @param {Suite} suite\n * @param {Function} fn\n * @api private\n */\n\nRunner.prototype.runSuite = function(suite, fn){\n  var total = this.grepTotal(suite)\n    , self = this\n    , i = 0;\n\n  debug('run suite %s', suite.fullTitle());\n\n  if (!total) return fn();\n\n  this.emit('suite', this.suite = suite);\n\n  function next(errSuite) {\n    if (errSuite) {\n      // current suite failed on a hook from errSuite\n      if (errSuite == suite) {\n        // if errSuite is current suite\n        // continue to the next sibling suite\n        return done();\n      } else {\n        // errSuite is among the parents of current suite\n        // stop execution of errSuite and all sub-suites\n        return done(errSuite);\n      }\n    }\n\n    if (self._abort) return done();\n\n    var curr = suite.suites[i++];\n    if (!curr) return done();\n    self.runSuite(curr, next);\n  }\n\n  function done(errSuite) {\n    self.suite = suite;\n    self.hook('afterAll', function(){\n      self.emit('suite end', suite);\n      fn(errSuite);\n    });\n  }\n\n  this.hook('beforeAll', function(err){\n    if (err) return done();\n    self.runTests(suite, next);\n  });\n};\n\n/**\n * Handle uncaught exceptions.\n *\n * @param {Error} err\n * @api private\n */\n\nRunner.prototype.uncaught = function(err){\n  if (err) {\n    debug('uncaught exception %s', err !== function () {\n      return this;\n    }.call(err) ? err : ( err.message || err ));\n  } else {\n    debug('uncaught undefined exception');\n    err = utils.undefinedError();\n  }\n  err.uncaught = true;\n\n  var runnable = this.currentRunnable;\n  if (!runnable) return;\n\n  var wasAlreadyDone = runnable.state;\n  this.fail(runnable, err);\n\n  runnable.clearTimeout();\n\n  if (wasAlreadyDone) return;\n\n  // recover from test\n  if ('test' == runnable.type) {\n    this.emit('test end', runnable);\n    this.hookUp('afterEach', this.next);\n    return;\n  }\n\n  // bail on hooks\n  this.emit('end');\n};\n\n/**\n * Run the root suite and invoke `fn(failures)`\n * on completion.\n *\n * @param {Function} fn\n * @return {Runner} for chaining\n * @api public\n */\n\nRunner.prototype.run = function(fn){\n  var self = this\n    , fn = fn || function(){};\n\n  function uncaught(err){\n    self.uncaught(err);\n  }\n\n  debug('start');\n\n  // callback\n  this.on('end', function(){\n    debug('end');\n    process.removeListener('uncaughtException', uncaught);\n    fn(self.failures);\n  });\n\n  // run suites\n  this.emit('start');\n  this.runSuite(this.suite, function(){\n    debug('finished running');\n    self.emit('end');\n  });\n\n  // uncaught exception\n  process.on('uncaughtException', uncaught);\n\n  return this;\n};\n\n/**\n * Cleanly abort execution\n *\n * @return {Runner} for chaining\n * @api public\n */\nRunner.prototype.abort = function(){\n  debug('aborting');\n  this._abort = true;\n};\n\n/**\n * Filter leaks with the given globals flagged as `ok`.\n *\n * @param {Array} ok\n * @param {Array} globals\n * @return {Array}\n * @api private\n */\n\nfunction filterLeaks(ok, globals) {\n  return filter(globals, function(key){\n    // Firefox and Chrome exposes iframes as index inside the window object\n    if (/^d+/.test(key)) return false;\n\n    // in firefox\n    // if runner runs in an iframe, this iframe's window.getInterface method not init at first\n    // it is assigned in some seconds\n    if (global.navigator && /^getInterface/.test(key)) return false;\n\n    // an iframe could be approached by window[iframeIndex]\n    // in ie6,7,8 and opera, iframeIndex is enumerable, this could cause leak\n    if (global.navigator && /^\\d+/.test(key)) return false;\n\n    // Opera and IE expose global variables for HTML element IDs (issue #243)\n    if (/^mocha-/.test(key)) return false;\n\n    var matched = filter(ok, function(ok){\n      if (~ok.indexOf('*')) return 0 == key.indexOf(ok.split('*')[0]);\n      return key == ok;\n    });\n    return matched.length == 0 && (!global.navigator || 'onerror' !== key);\n  });\n}\n\n/**\n * Array of globals dependent on the environment.\n *\n * @return {Array}\n * @api private\n */\n\n function extraGlobals() {\n  if (typeof(process) === 'object' &&\n      typeof(process.version) === 'string') {\n\n    var nodeVersion = process.version.split('.').reduce(function(a, v) {\n      return a << 8 | v;\n    });\n\n    // 'errno' was renamed to process._errno in v0.9.11.\n\n    if (nodeVersion < 0x00090B) {\n      return ['errno'];\n    }\n  }\n\n  return [];\n }\n\n}); // module: runner.js\n\nrequire.register(\"suite.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar EventEmitter = require('browser/events').EventEmitter\n  , debug = require('browser/debug')('mocha:suite')\n  , milliseconds = require('./ms')\n  , utils = require('./utils')\n  , Hook = require('./hook');\n\n/**\n * Expose `Suite`.\n */\n\nexports = module.exports = Suite;\n\n/**\n * Create a new `Suite` with the given `title`\n * and parent `Suite`. When a suite with the\n * same title is already present, that suite\n * is returned to provide nicer reporter\n * and more flexible meta-testing.\n *\n * @param {Suite} parent\n * @param {String} title\n * @return {Suite}\n * @api public\n */\n\nexports.create = function(parent, title){\n  var suite = new Suite(title, parent.ctx);\n  suite.parent = parent;\n  if (parent.pending) suite.pending = true;\n  title = suite.fullTitle();\n  parent.addSuite(suite);\n  return suite;\n};\n\n/**\n * Initialize a new `Suite` with the given\n * `title` and `ctx`.\n *\n * @param {String} title\n * @param {Context} ctx\n * @api private\n */\n\nfunction Suite(title, parentContext) {\n  this.title = title;\n  var context = function() {};\n  context.prototype = parentContext;\n  this.ctx = new context();\n  this.suites = [];\n  this.tests = [];\n  this.pending = false;\n  this._beforeEach = [];\n  this._beforeAll = [];\n  this._afterEach = [];\n  this._afterAll = [];\n  this.root = !title;\n  this._timeout = 2000;\n  this._enableTimeouts = true;\n  this._slow = 75;\n  this._bail = false;\n}\n\n/**\n * Inherit from `EventEmitter.prototype`.\n */\n\nfunction F(){};\nF.prototype = EventEmitter.prototype;\nSuite.prototype = new F;\nSuite.prototype.constructor = Suite;\n\n\n/**\n * Return a clone of this `Suite`.\n *\n * @return {Suite}\n * @api private\n */\n\nSuite.prototype.clone = function(){\n  var suite = new Suite(this.title);\n  debug('clone');\n  suite.ctx = this.ctx;\n  suite.timeout(this.timeout());\n  suite.enableTimeouts(this.enableTimeouts());\n  suite.slow(this.slow());\n  suite.bail(this.bail());\n  return suite;\n};\n\n/**\n * Set timeout `ms` or short-hand such as \"2s\".\n *\n * @param {Number|String} ms\n * @return {Suite|Number} for chaining\n * @api private\n */\n\nSuite.prototype.timeout = function(ms){\n  if (0 == arguments.length) return this._timeout;\n  if (ms.toString() === '0') this._enableTimeouts = false;\n  if ('string' == typeof ms) ms = milliseconds(ms);\n  debug('timeout %d', ms);\n  this._timeout = parseInt(ms, 10);\n  return this;\n};\n\n/**\n  * Set timeout `enabled`.\n  *\n  * @param {Boolean} enabled\n  * @return {Suite|Boolean} self or enabled\n  * @api private\n  */\n\nSuite.prototype.enableTimeouts = function(enabled){\n  if (arguments.length === 0) return this._enableTimeouts;\n  debug('enableTimeouts %s', enabled);\n  this._enableTimeouts = enabled;\n  return this;\n};\n\n/**\n * Set slow `ms` or short-hand such as \"2s\".\n *\n * @param {Number|String} ms\n * @return {Suite|Number} for chaining\n * @api private\n */\n\nSuite.prototype.slow = function(ms){\n  if (0 === arguments.length) return this._slow;\n  if ('string' == typeof ms) ms = milliseconds(ms);\n  debug('slow %d', ms);\n  this._slow = ms;\n  return this;\n};\n\n/**\n * Sets whether to bail after first error.\n *\n * @param {Boolean} bail\n * @return {Suite|Number} for chaining\n * @api private\n */\n\nSuite.prototype.bail = function(bail){\n  if (0 == arguments.length) return this._bail;\n  debug('bail %s', bail);\n  this._bail = bail;\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` before running tests.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.beforeAll = function(title, fn){\n  if (this.pending) return this;\n  if ('function' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"before all\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._beforeAll.push(hook);\n  this.emit('beforeAll', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` after running tests.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.afterAll = function(title, fn){\n  if (this.pending) return this;\n  if ('function' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"after all\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._afterAll.push(hook);\n  this.emit('afterAll', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` before each test case.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.beforeEach = function(title, fn){\n  if (this.pending) return this;\n  if ('function' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"before each\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._beforeEach.push(hook);\n  this.emit('beforeEach', hook);\n  return this;\n};\n\n/**\n * Run `fn(test[, done])` after each test case.\n *\n * @param {Function} fn\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.afterEach = function(title, fn){\n  if (this.pending) return this;\n  if ('function' === typeof title) {\n    fn = title;\n    title = fn.name;\n  }\n  title = '\"after each\" hook' + (title ? ': ' + title : '');\n\n  var hook = new Hook(title, fn);\n  hook.parent = this;\n  hook.timeout(this.timeout());\n  hook.enableTimeouts(this.enableTimeouts());\n  hook.slow(this.slow());\n  hook.ctx = this.ctx;\n  this._afterEach.push(hook);\n  this.emit('afterEach', hook);\n  return this;\n};\n\n/**\n * Add a test `suite`.\n *\n * @param {Suite} suite\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.addSuite = function(suite){\n  suite.parent = this;\n  suite.timeout(this.timeout());\n  suite.enableTimeouts(this.enableTimeouts());\n  suite.slow(this.slow());\n  suite.bail(this.bail());\n  this.suites.push(suite);\n  this.emit('suite', suite);\n  return this;\n};\n\n/**\n * Add a `test` to this suite.\n *\n * @param {Test} test\n * @return {Suite} for chaining\n * @api private\n */\n\nSuite.prototype.addTest = function(test){\n  test.parent = this;\n  test.timeout(this.timeout());\n  test.enableTimeouts(this.enableTimeouts());\n  test.slow(this.slow());\n  test.ctx = this.ctx;\n  this.tests.push(test);\n  this.emit('test', test);\n  return this;\n};\n\n/**\n * Return the full title generated by recursively\n * concatenating the parent's full title.\n *\n * @return {String}\n * @api public\n */\n\nSuite.prototype.fullTitle = function(){\n  if (this.parent) {\n    var full = this.parent.fullTitle();\n    if (full) return full + ' ' + this.title;\n  }\n  return this.title;\n};\n\n/**\n * Return the total number of tests.\n *\n * @return {Number}\n * @api public\n */\n\nSuite.prototype.total = function(){\n  return utils.reduce(this.suites, function(sum, suite){\n    return sum + suite.total();\n  }, 0) + this.tests.length;\n};\n\n/**\n * Iterates through each suite recursively to find\n * all tests. Applies a function in the format\n * `fn(test)`.\n *\n * @param {Function} fn\n * @return {Suite}\n * @api private\n */\n\nSuite.prototype.eachTest = function(fn){\n  utils.forEach(this.tests, fn);\n  utils.forEach(this.suites, function(suite){\n    suite.eachTest(fn);\n  });\n  return this;\n};\n\n}); // module: suite.js\n\nrequire.register(\"test.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar Runnable = require('./runnable');\n\n/**\n * Expose `Test`.\n */\n\nmodule.exports = Test;\n\n/**\n * Initialize a new `Test` with the given `title` and callback `fn`.\n *\n * @param {String} title\n * @param {Function} fn\n * @api private\n */\n\nfunction Test(title, fn) {\n  Runnable.call(this, title, fn);\n  this.pending = !fn;\n  this.type = 'test';\n}\n\n/**\n * Inherit from `Runnable.prototype`.\n */\n\nfunction F(){};\nF.prototype = Runnable.prototype;\nTest.prototype = new F;\nTest.prototype.constructor = Test;\n\n\n}); // module: test.js\n\nrequire.register(\"utils.js\", function(module, exports, require){\n/**\n * Module dependencies.\n */\n\nvar fs = require('browser/fs')\n  , path = require('browser/path')\n  , basename = path.basename\n  , exists = fs.existsSync || path.existsSync\n  , glob = require('browser/glob')\n  , join = path.join\n  , debug = require('browser/debug')('mocha:watch');\n\n/**\n * Ignored directories.\n */\n\nvar ignore = ['node_modules', '.git'];\n\n/**\n * Escape special characters in the given string of html.\n *\n * @param  {String} html\n * @return {String}\n * @api private\n */\n\nexports.escape = function(html){\n  return String(html)\n    .replace(/&/g, '&amp;')\n    .replace(/\"/g, '&quot;')\n    .replace(/</g, '&lt;')\n    .replace(/>/g, '&gt;');\n};\n\n/**\n * Array#forEach (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @param {Object} scope\n * @api private\n */\n\nexports.forEach = function(arr, fn, scope){\n  for (var i = 0, l = arr.length; i < l; i++)\n    fn.call(scope, arr[i], i);\n};\n\n/**\n * Array#map (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @param {Object} scope\n * @api private\n */\n\nexports.map = function(arr, fn, scope){\n  var result = [];\n  for (var i = 0, l = arr.length; i < l; i++)\n    result.push(fn.call(scope, arr[i], i));\n  return result;\n};\n\n/**\n * Array#indexOf (<=IE8)\n *\n * @parma {Array} arr\n * @param {Object} obj to find index of\n * @param {Number} start\n * @api private\n */\n\nexports.indexOf = function(arr, obj, start){\n  for (var i = start || 0, l = arr.length; i < l; i++) {\n    if (arr[i] === obj)\n      return i;\n  }\n  return -1;\n};\n\n/**\n * Array#reduce (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @param {Object} initial value\n * @api private\n */\n\nexports.reduce = function(arr, fn, val){\n  var rval = val;\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    rval = fn(rval, arr[i], i, arr);\n  }\n\n  return rval;\n};\n\n/**\n * Array#filter (<=IE8)\n *\n * @param {Array} array\n * @param {Function} fn\n * @api private\n */\n\nexports.filter = function(arr, fn){\n  var ret = [];\n\n  for (var i = 0, l = arr.length; i < l; i++) {\n    var val = arr[i];\n    if (fn(val, i, arr)) ret.push(val);\n  }\n\n  return ret;\n};\n\n/**\n * Object.keys (<=IE8)\n *\n * @param {Object} obj\n * @return {Array} keys\n * @api private\n */\n\nexports.keys = Object.keys || function(obj) {\n  var keys = []\n    , has = Object.prototype.hasOwnProperty // for `window` on <=IE8\n\n  for (var key in obj) {\n    if (has.call(obj, key)) {\n      keys.push(key);\n    }\n  }\n\n  return keys;\n};\n\n/**\n * Watch the given `files` for changes\n * and invoke `fn(file)` on modification.\n *\n * @param {Array} files\n * @param {Function} fn\n * @api private\n */\n\nexports.watch = function(files, fn){\n  var options = { interval: 100 };\n  files.forEach(function(file){\n    debug('file %s', file);\n    fs.watchFile(file, options, function(curr, prev){\n      if (prev.mtime < curr.mtime) fn(file);\n    });\n  });\n};\n\n/**\n * Ignored files.\n */\n\nfunction ignored(path){\n  return !~ignore.indexOf(path);\n}\n\n/**\n * Lookup files in the given `dir`.\n *\n * @return {Array}\n * @api private\n */\n\nexports.files = function(dir, ext, ret){\n  ret = ret || [];\n  ext = ext || ['js'];\n\n  var re = new RegExp('\\\\.(' + ext.join('|') + ')$');\n\n  fs.readdirSync(dir)\n  .filter(ignored)\n  .forEach(function(path){\n    path = join(dir, path);\n    if (fs.statSync(path).isDirectory()) {\n      exports.files(path, ext, ret);\n    } else if (path.match(re)) {\n      ret.push(path);\n    }\n  });\n\n  return ret;\n};\n\n/**\n * Compute a slug from the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nexports.slug = function(str){\n  return str\n    .toLowerCase()\n    .replace(/ +/g, '-')\n    .replace(/[^-\\w]/g, '');\n};\n\n/**\n * Strip the function definition from `str`,\n * and re-indent for pre whitespace.\n */\n\nexports.clean = function(str) {\n  str = str\n    .replace(/\\r\\n?|[\\n\\u2028\\u2029]/g, \"\\n\").replace(/^\\uFEFF/, '')\n    .replace(/^function *\\(.*\\) *{|\\(.*\\) *=> *{?/, '')\n    .replace(/\\s+\\}$/, '');\n\n  var spaces = str.match(/^\\n?( *)/)[1].length\n    , tabs = str.match(/^\\n?(\\t*)/)[1].length\n    , re = new RegExp('^\\n?' + (tabs ? '\\t' : ' ') + '{' + (tabs ? tabs : spaces) + '}', 'gm');\n\n  str = str.replace(re, '');\n\n  return exports.trim(str);\n};\n\n/**\n * Trim the given `str`.\n *\n * @param {String} str\n * @return {String}\n * @api private\n */\n\nexports.trim = function(str){\n  return str.replace(/^\\s+|\\s+$/g, '');\n};\n\n/**\n * Parse the given `qs`.\n *\n * @param {String} qs\n * @return {Object}\n * @api private\n */\n\nexports.parseQuery = function(qs){\n  return exports.reduce(qs.replace('?', '').split('&'), function(obj, pair){\n    var i = pair.indexOf('=')\n      , key = pair.slice(0, i)\n      , val = pair.slice(++i);\n\n    obj[key] = decodeURIComponent(val);\n    return obj;\n  }, {});\n};\n\n/**\n * Highlight the given string of `js`.\n *\n * @param {String} js\n * @return {String}\n * @api private\n */\n\nfunction highlight(js) {\n  return js\n    .replace(/</g, '&lt;')\n    .replace(/>/g, '&gt;')\n    .replace(/\\/\\/(.*)/gm, '<span class=\"comment\">//$1</span>')\n    .replace(/('.*?')/gm, '<span class=\"string\">$1</span>')\n    .replace(/(\\d+\\.\\d+)/gm, '<span class=\"number\">$1</span>')\n    .replace(/(\\d+)/gm, '<span class=\"number\">$1</span>')\n    .replace(/\\bnew[ \\t]+(\\w+)/gm, '<span class=\"keyword\">new</span> <span class=\"init\">$1</span>')\n    .replace(/\\b(function|new|throw|return|var|if|else)\\b/gm, '<span class=\"keyword\">$1</span>')\n}\n\n/**\n * Highlight the contents of tag `name`.\n *\n * @param {String} name\n * @api private\n */\n\nexports.highlightTags = function(name) {\n  var code = document.getElementById('mocha').getElementsByTagName(name);\n  for (var i = 0, len = code.length; i < len; ++i) {\n    code[i].innerHTML = highlight(code[i].innerHTML);\n  }\n};\n\n/**\n * If a value could have properties, and has none, this function is called, which returns\n * a string representation of the empty value.\n *\n * Functions w/ no properties return `'[Function]'`\n * Arrays w/ length === 0 return `'[]'`\n * Objects w/ no properties return `'{}'`\n * All else: return result of `value.toString()`\n *\n * @param {*} value Value to inspect\n * @param {string} [type] The type of the value, if known.\n * @returns {string}\n */\nvar emptyRepresentation = function emptyRepresentation(value, type) {\n  type = type || exports.type(value);\n\n  switch(type) {\n    case 'function':\n      return '[Function]';\n    case 'object':\n      return '{}';\n    case 'array':\n      return '[]';\n    default:\n      return value.toString();\n  }\n};\n\n/**\n * Takes some variable and asks `{}.toString()` what it thinks it is.\n * @param {*} value Anything\n * @example\n * type({}) // 'object'\n * type([]) // 'array'\n * type(1) // 'number'\n * type(false) // 'boolean'\n * type(Infinity) // 'number'\n * type(null) // 'null'\n * type(new Date()) // 'date'\n * type(/foo/) // 'regexp'\n * type('type') // 'string'\n * type(global) // 'global'\n * @api private\n * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString\n * @returns {string}\n */\nexports.type = function type(value) {\n  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) {\n    return 'buffer';\n  }\n  return Object.prototype.toString.call(value)\n    .replace(/^\\[.+\\s(.+?)\\]$/, '$1')\n    .toLowerCase();\n};\n\n/**\n * @summary Stringify `value`.\n * @description Different behavior depending on type of value.\n * - If `value` is undefined or null, return `'[undefined]'` or `'[null]'`, respectively.\n * - If `value` is not an object, function or array, return result of `value.toString()` wrapped in double-quotes.\n * - If `value` is an *empty* object, function, or array, return result of function\n *   {@link emptyRepresentation}.\n * - If `value` has properties, call {@link exports.canonicalize} on it, then return result of\n *   JSON.stringify().\n *\n * @see exports.type\n * @param {*} value\n * @return {string}\n * @api private\n */\n\nexports.stringify = function(value) {\n  var prop,\n    type = exports.type(value);\n\n  if (type === 'null' || type === 'undefined') {\n    return '[' + type + ']';\n  }\n\n  if (type === 'date') {\n    return '[Date: ' + value.toISOString() + ']';\n  }\n\n  if (!~exports.indexOf(['object', 'array', 'function'], type)) {\n    return value.toString();\n  }\n\n  for (prop in value) {\n    if (value.hasOwnProperty(prop)) {\n      return JSON.stringify(exports.canonicalize(value), null, 2).replace(/,(\\n|$)/g, '$1');\n    }\n  }\n\n  return emptyRepresentation(value, type);\n};\n\n/**\n * Return if obj is a Buffer\n * @param {Object} arg\n * @return {Boolean}\n * @api private\n */\nexports.isBuffer = function (arg) {\n  return typeof Buffer !== 'undefined' && Buffer.isBuffer(arg);\n};\n\n/**\n * @summary Return a new Thing that has the keys in sorted order.  Recursive.\n * @description If the Thing...\n * - has already been seen, return string `'[Circular]'`\n * - is `undefined`, return string `'[undefined]'`\n * - is `null`, return value `null`\n * - is some other primitive, return the value\n * - is not a primitive or an `Array`, `Object`, or `Function`, return the value of the Thing's `toString()` method\n * - is a non-empty `Array`, `Object`, or `Function`, return the result of calling this function again.\n * - is an empty `Array`, `Object`, or `Function`, return the result of calling `emptyRepresentation()`\n *\n * @param {*} value Thing to inspect.  May or may not have properties.\n * @param {Array} [stack=[]] Stack of seen values\n * @return {(Object|Array|Function|string|undefined)}\n * @see {@link exports.stringify}\n * @api private\n */\n\nexports.canonicalize = function(value, stack) {\n  var canonicalizedObj,\n    type = exports.type(value),\n    prop,\n    withStack = function withStack(value, fn) {\n      stack.push(value);\n      fn();\n      stack.pop();\n    };\n\n  stack = stack || [];\n\n  if (exports.indexOf(stack, value) !== -1) {\n    return '[Circular]';\n  }\n\n  switch(type) {\n    case 'undefined':\n      canonicalizedObj = '[undefined]';\n      break;\n    case 'buffer':\n    case 'null':\n      canonicalizedObj = value;\n      break;\n    case 'array':\n      withStack(value, function () {\n        canonicalizedObj = exports.map(value, function (item) {\n          return exports.canonicalize(item, stack);\n        });\n      });\n      break;\n    case 'date':\n      canonicalizedObj = '[Date: ' + value.toISOString() + ']';\n      break;\n    case 'function':\n      for (prop in value) {\n        canonicalizedObj = {};\n        break;\n      }\n      if (!canonicalizedObj) {\n        canonicalizedObj = emptyRepresentation(value, type);\n        break;\n      }\n    /* falls through */\n    case 'object':\n      canonicalizedObj = canonicalizedObj || {};\n      withStack(value, function () {\n        exports.forEach(exports.keys(value).sort(), function (key) {\n          canonicalizedObj[key] = exports.canonicalize(value[key], stack);\n        });\n      });\n      break;\n    case 'number':\n    case 'boolean':\n      canonicalizedObj = value;\n      break;\n    default:\n      canonicalizedObj = value.toString();\n  }\n\n  return canonicalizedObj;\n};\n\n/**\n * Lookup file names at the given `path`.\n */\nexports.lookupFiles = function lookupFiles(path, extensions, recursive) {\n  var files = [];\n  var re = new RegExp('\\\\.(' + extensions.join('|') + ')$');\n\n  if (!exists(path)) {\n    if (exists(path + '.js')) {\n      path += '.js';\n    } else {\n      files = glob.sync(path);\n      if (!files.length) throw new Error(\"cannot resolve path (or pattern) '\" + path + \"'\");\n      return files;\n    }\n  }\n\n  try {\n    var stat = fs.statSync(path);\n    if (stat.isFile()) return path;\n  }\n  catch (ignored) {\n    return;\n  }\n\n  fs.readdirSync(path).forEach(function(file){\n    file = join(path, file);\n    try {\n      var stat = fs.statSync(file);\n      if (stat.isDirectory()) {\n        if (recursive) {\n          files = files.concat(lookupFiles(file, extensions, recursive));\n        }\n        return;\n      }\n    }\n    catch (ignored) {\n      return;\n    }\n    if (!stat.isFile() || !re.test(file) || basename(file)[0] === '.') return;\n    files.push(file);\n  });\n\n  return files;\n};\n\n/**\n * Generate an undefined error with a message warning the user.\n *\n * @return {Error}\n */\n\nexports.undefinedError = function(){\n  return new Error('Caught undefined error, did you throw without specifying what?');\n};\n\n/**\n * Generate an undefined error if `err` is not defined.\n *\n * @param {Error} err\n * @return {Error}\n */\n\nexports.getError = function(err){\n  return err || exports.undefinedError();\n};\n\n\n}); // module: utils.js\n// The global object is \"self\" in Web Workers.\nvar global = (function() { return this; })();\n\n/**\n * Save timer references to avoid Sinon interfering (see GH-237).\n */\n\nvar Date = global.Date;\nvar setTimeout = global.setTimeout;\nvar setInterval = global.setInterval;\nvar clearTimeout = global.clearTimeout;\nvar clearInterval = global.clearInterval;\n\n/**\n * Node shims.\n *\n * These are meant only to allow\n * mocha.js to run untouched, not\n * to allow running node code in\n * the browser.\n */\n\nvar process = {};\nprocess.exit = function(status){};\nprocess.stdout = {};\n\nvar uncaughtExceptionHandlers = [];\n\nvar originalOnerrorHandler = global.onerror;\n\n/**\n * Remove uncaughtException listener.\n * Revert to original onerror handler if previously defined.\n */\n\nprocess.removeListener = function(e, fn){\n  if ('uncaughtException' == e) {\n    if (originalOnerrorHandler) {\n      global.onerror = originalOnerrorHandler;\n    } else {\n      global.onerror = function() {};\n    }\n    var i = Mocha.utils.indexOf(uncaughtExceptionHandlers, fn);\n    if (i != -1) { uncaughtExceptionHandlers.splice(i, 1); }\n  }\n};\n\n/**\n * Implements uncaughtException listener.\n */\n\nprocess.on = function(e, fn){\n  if ('uncaughtException' == e) {\n    global.onerror = function(err, url, line){\n      fn(new Error(err + ' (' + url + ':' + line + ')'));\n      return true;\n    };\n    uncaughtExceptionHandlers.push(fn);\n  }\n};\n\n/**\n * Expose mocha.\n */\n\nvar Mocha = global.Mocha = require('mocha'),\n    mocha = global.mocha = new Mocha({ reporter: 'html' });\n\n// The BDD UI is registered by default, but no UI will be functional in the\n// browser without an explicit call to the overridden `mocha.ui` (see below).\n// Ensure that this default UI does not expose its methods to the global scope.\nmocha.suite.removeAllListeners('pre-require');\n\nvar immediateQueue = []\n  , immediateTimeout;\n\nfunction timeslice() {\n  var immediateStart = new Date().getTime();\n  while (immediateQueue.length && (new Date().getTime() - immediateStart) < 100) {\n    immediateQueue.shift()();\n  }\n  if (immediateQueue.length) {\n    immediateTimeout = setTimeout(timeslice, 0);\n  } else {\n    immediateTimeout = null;\n  }\n}\n\n/**\n * High-performance override of Runner.immediately.\n */\n\nMocha.Runner.immediately = function(callback) {\n  immediateQueue.push(callback);\n  if (!immediateTimeout) {\n    immediateTimeout = setTimeout(timeslice, 0);\n  }\n};\n\n/**\n * Function to allow assertion libraries to throw errors directly into mocha.\n * This is useful when running tests in a browser because window.onerror will\n * only receive the 'message' attribute of the Error.\n */\nmocha.throwError = function(err) {\n  Mocha.utils.forEach(uncaughtExceptionHandlers, function (fn) {\n    fn(err);\n  });\n  throw err;\n};\n\n/**\n * Override ui to ensure that the ui functions are initialized.\n * Normally this would happen in Mocha.prototype.loadFiles.\n */\n\nmocha.ui = function(ui){\n  Mocha.prototype.ui.call(this, ui);\n  this.suite.emit('pre-require', global, null, this);\n  return this;\n};\n\n/**\n * Setup mocha with the given setting options.\n */\n\nmocha.setup = function(opts){\n  if ('string' == typeof opts) opts = { ui: opts };\n  for (var opt in opts) this[opt](opts[opt]);\n  return this;\n};\n\n/**\n * Run mocha, returning the Runner.\n */\n\nmocha.run = function(fn){\n  var options = mocha.options;\n  mocha.globals('location');\n\n  var query = Mocha.utils.parseQuery(global.location.search || '');\n  if (query.grep) mocha.grep(query.grep);\n  if (query.invert) mocha.invert();\n\n  return Mocha.prototype.run.call(mocha, function(err){\n    // The DOM Document is not available in Web Workers.\n    var document = global.document;\n    if (document && document.getElementById('mocha') && options.noHighlighting !== true) {\n      Mocha.utils.highlightTags('code');\n    }\n    if (fn) fn(err);\n  });\n};\n\n/**\n * Expose the process shim.\n */\n\nMocha.process = process;\n})();\n"

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
	    "use strict";
	
	    // Module systems magic dance.
	
	    if (true) {
	        // NodeJS
	        module.exports = chaiAsPromised;
	    } else if (typeof define === "function" && define.amd) {
	        // AMD
	        define(function () {
	            return chaiAsPromised;
	        });
	    } else {
	        /*global self: false */
	
	        // Other environment (usually <script> tag): plug in to global chai instance directly.
	        chai.use(chaiAsPromised);
	
	        // Expose as a property of the global object so that consumers can configure the `transferPromiseness` property.
	        self.chaiAsPromised = chaiAsPromised;
	    }
	
	    chaiAsPromised.transferPromiseness = function (assertion, promise) {
	        assertion.then = promise.then.bind(promise);
	    };
	
	    function chaiAsPromised(chai, utils) {
	        var Assertion = chai.Assertion;
	        var assert = chai.assert;
	
	        function isJQueryPromise(thenable) {
	            return typeof thenable.always === "function" &&
	                   typeof thenable.done === "function" &&
	                   typeof thenable.fail === "function" &&
	                   typeof thenable.pipe === "function" &&
	                   typeof thenable.progress === "function" &&
	                   typeof thenable.state === "function";
	        }
	
	        function assertIsAboutPromise(assertion) {
	            if (typeof assertion._obj.then !== "function") {
	                throw new TypeError(utils.inspect(assertion._obj) + " is not a thenable.");
	            }
	            if (isJQueryPromise(assertion._obj)) {
	                throw new TypeError("Chai as Promised is incompatible with jQuery's thenables, sorry! Please use a " +
	                                    "Promises/A+ compatible library (see http://promisesaplus.com/).");
	            }
	        }
	
	        function method(name, asserter) {
	            utils.addMethod(Assertion.prototype, name, function () {
	                assertIsAboutPromise(this);
	                return asserter.apply(this, arguments);
	            });
	        }
	
	        function property(name, asserter) {
	            utils.addProperty(Assertion.prototype, name, function () {
	                assertIsAboutPromise(this);
	                return asserter.apply(this, arguments);
	            });
	        }
	
	        function doNotify(promise, done) {
	            promise.then(function () { done(); }, done);
	        }
	
	        // These are for clarity and to bypass Chai refusing to allow `undefined` as actual when used with `assert`.
	        function assertIfNegated(assertion, message, extra) {
	            assertion.assert(true, null, message, extra.expected, extra.actual);
	        }
	
	        function assertIfNotNegated(assertion, message, extra) {
	            assertion.assert(false, message, null, extra.expected, extra.actual);
	        }
	
	        function getBasePromise(assertion) {
	            // We need to chain subsequent asserters on top of ones in the chain already (consider
	            // `eventually.have.property("foo").that.equals("bar")`), only running them after the existing ones pass.
	            // So the first base-promise is `assertion._obj`, but after that we use the assertions themselves, i.e.
	            // previously derived promises, to chain off of.
	            return typeof assertion.then === "function" ? assertion : assertion._obj;
	        }
	
	        // Grab these first, before we modify `Assertion.prototype`.
	
	        var propertyNames = Object.getOwnPropertyNames(Assertion.prototype);
	
	        var propertyDescs = {};
	        propertyNames.forEach(function (name) {
	            propertyDescs[name] = Object.getOwnPropertyDescriptor(Assertion.prototype, name);
	        });
	
	        property("fulfilled", function () {
	            var that = this;
	            var derivedPromise = getBasePromise(that).then(
	                function (value) {
	                    that._obj = value;
	                    assertIfNegated(that,
	                                    "expected promise not to be fulfilled but it was fulfilled with #{act}",
	                                    { actual: value });
	                    return value;
	                },
	                function (reason) {
	                    assertIfNotNegated(that,
	                                       "expected promise to be fulfilled but it was rejected with #{act}",
	                                       { actual: reason });
	                }
	            );
	
	            chaiAsPromised.transferPromiseness(that, derivedPromise);
	        });
	
	        property("rejected", function () {
	            var that = this;
	            var derivedPromise = getBasePromise(that).then(
	                function (value) {
	                    that._obj = value;
	                    assertIfNotNegated(that,
	                                       "expected promise to be rejected but it was fulfilled with #{act}",
	                                       { actual: value });
	                    return value;
	                },
	                function (reason) {
	                    assertIfNegated(that,
	                                    "expected promise not to be rejected but it was rejected with #{act}",
	                                    { actual: reason });
	
	                    // Return the reason, transforming this into a fulfillment, to allow further assertions, e.g.
	                    // `promise.should.be.rejected.and.eventually.equal("reason")`.
	                    return reason;
	                }
	            );
	
	            chaiAsPromised.transferPromiseness(that, derivedPromise);
	        });
	
	        method("rejectedWith", function (Constructor, message) {
	            var desiredReason = null;
	            var constructorName = null;
	
	            if (Constructor instanceof RegExp || typeof Constructor === "string") {
	                message = Constructor;
	                Constructor = null;
	            } else if (Constructor && Constructor instanceof Error) {
	                desiredReason = Constructor;
	                Constructor = null;
	                message = null;
	            } else if (typeof Constructor === "function") {
	                constructorName = (new Constructor()).name;
	            } else {
	                Constructor = null;
	            }
	
	            var that = this;
	            var derivedPromise = getBasePromise(that).then(
	                function (value) {
	                    var assertionMessage = null;
	                    var expected = null;
	
	                    if (Constructor) {
	                        assertionMessage = "expected promise to be rejected with #{exp} but it was fulfilled with " +
	                                           "#{act}";
	                        expected = constructorName;
	                    } else if (message) {
	                        var verb = message instanceof RegExp ? "matching" : "including";
	                        assertionMessage = "expected promise to be rejected with an error " + verb + " #{exp} but it " +
	                                           "was fulfilled with #{act}";
	                        expected = message;
	                    } else if (desiredReason) {
	                        assertionMessage = "expected promise to be rejected with #{exp} but it was fulfilled with " +
	                                           "#{act}";
	                        expected = desiredReason;
	                    }
	
	                    that._obj = value;
	
	                    assertIfNotNegated(that, assertionMessage, { expected: expected, actual: value });
	                },
	                function (reason) {
	                    if (Constructor) {
	                        that.assert(reason instanceof Constructor,
	                                    "expected promise to be rejected with #{exp} but it was rejected with #{act}",
	                                    "expected promise not to be rejected with #{exp} but it was rejected with #{act}",
	                                    constructorName,
	                                    reason);
	                    }
	
	                    var reasonMessage = utils.type(reason) === "object" && "message" in reason ?
	                                            reason.message :
	                                            "" + reason;
	                    if (message && reasonMessage !== null && reasonMessage !== undefined) {
	                        if (message instanceof RegExp) {
	                            that.assert(message.test(reasonMessage),
	                                        "expected promise to be rejected with an error matching #{exp} but got #{act}",
	                                        "expected promise not to be rejected with an error matching #{exp}",
	                                        message,
	                                        reasonMessage);
	                        }
	                        if (typeof message === "string") {
	                            that.assert(reasonMessage.indexOf(message) !== -1,
	                                        "expected promise to be rejected with an error including #{exp} but got #{act}",
	                                        "expected promise not to be rejected with an error including #{exp}",
	                                        message,
	                                        reasonMessage);
	                        }
	                    }
	
	                    if (desiredReason) {
	                        that.assert(reason === desiredReason,
	                                    "expected promise to be rejected with #{exp} but it was rejected with #{act}",
	                                    "expected promise not to be rejected with #{exp}",
	                                    desiredReason,
	                                    reason);
	                    }
	                }
	            );
	
	            chaiAsPromised.transferPromiseness(that, derivedPromise);
	        });
	
	        property("eventually", function () {
	            utils.flag(this, "eventually", true);
	        });
	
	        method("notify", function (done) {
	            doNotify(getBasePromise(this), done);
	        });
	
	        method("become", function (value) {
	            return this.eventually.deep.equal(value);
	        });
	
	        ////////
	        // `eventually`
	
	        // We need to be careful not to trigger any getters, thus `Object.getOwnPropertyDescriptor` usage.
	        var methodNames = propertyNames.filter(function (name) {
	            return name !== "assert" && typeof propertyDescs[name].value === "function";
	        });
	
	        methodNames.forEach(function (methodName) {
	            Assertion.overwriteMethod(methodName, function (originalMethod) {
	                return function () {
	                    doAsserterAsyncAndAddThen(originalMethod, this, arguments);
	                };
	            });
	        });
	
	        var getterNames = propertyNames.filter(function (name) {
	            return name !== "_obj" && typeof propertyDescs[name].get === "function";
	        });
	
	        getterNames.forEach(function (getterName) {
	            var propertyDesc = propertyDescs[getterName];
	
	            // Chainable methods are things like `an`, which can work both for `.should.be.an.instanceOf` and as
	            // `should.be.an("object")`. We need to handle those specially.
	            var isChainableMethod = false;
	            try {
	                isChainableMethod = typeof propertyDesc.get.call({}) === "function";
	            } catch (e) { }
	
	            if (isChainableMethod) {
	                Assertion.addChainableMethod(
	                    getterName,
	                    function () {
	                        var assertion = this;
	                        function originalMethod() {
	                            return propertyDesc.get.call(assertion).apply(assertion, arguments);
	                        }
	                        doAsserterAsyncAndAddThen(originalMethod, this, arguments);
	                    },
	                    function () {
	                        var originalGetter = propertyDesc.get;
	                        doAsserterAsyncAndAddThen(originalGetter, this);
	                    }
	                );
	            } else {
	                Assertion.overwriteProperty(getterName, function (originalGetter) {
	                    return function () {
	                        doAsserterAsyncAndAddThen(originalGetter, this);
	                    };
	                });
	            }
	        });
	
	        function doAsserterAsyncAndAddThen(asserter, assertion, args) {
	            // Since we're intercepting all methods/properties, we need to just pass through if they don't want
	            // `eventually`, or if we've already fulfilled the promise (see below).
	            if (!utils.flag(assertion, "eventually")) {
	                return asserter.apply(assertion, args);
	            }
	
	            var derivedPromise = getBasePromise(assertion).then(function (value) {
	                // Set up the environment for the asserter to actually run: `_obj` should be the fulfillment value, and
	                // now that we have the value, we're no longer in "eventually" mode, so we won't run any of this code,
	                // just the base Chai code that we get to via the short-circuit above.
	                assertion._obj = value;
	                utils.flag(assertion, "eventually", false);
	                asserter.apply(assertion, args);
	
	                // Because asserters, for example `property`, can change the value of `_obj` (i.e. change the "object"
	                // flag), we need to communicate this value change to subsequent chained asserters. Since we build a
	                // promise chain paralleling the asserter chain, we can use it to communicate such changes.
	                return assertion._obj;
	            });
	
	            chaiAsPromised.transferPromiseness(assertion, derivedPromise);
	        }
	
	        ///////
	        // Now use the `Assertion` framework to build an `assert` interface.
	        var originalAssertMethods = Object.getOwnPropertyNames(assert).filter(function (propName) {
	            return typeof assert[propName] === "function";
	        });
	
	        assert.isFulfilled = function (promise, message) {
	            return (new Assertion(promise, message)).to.be.fulfilled;
	        };
	
	        assert.isRejected = function (promise, toTestAgainst, message) {
	            if (typeof toTestAgainst === "string") {
	                message = toTestAgainst;
	                toTestAgainst = undefined;
	            }
	
	            var assertion = (new Assertion(promise, message));
	            return toTestAgainst !== undefined ? assertion.to.be.rejectedWith(toTestAgainst) : assertion.to.be.rejected;
	        };
	
	        assert.becomes = function (promise, value, message) {
	            return assert.eventually.deepEqual(promise, value, message);
	        };
	
	        assert.doesNotBecome = function (promise, value, message) {
	            return assert.eventually.notDeepEqual(promise, value, message);
	        };
	
	        assert.eventually = {};
	        originalAssertMethods.forEach(function (assertMethodName) {
	            assert.eventually[assertMethodName] = function (promise) {
	                var otherArgs = Array.prototype.slice.call(arguments, 1);
	
	                var customRejectionHandler;
	                var message = arguments[assert[assertMethodName].length - 1];
	                if (typeof message === "string") {
	                    customRejectionHandler = function (reason) {
	                        throw new chai.AssertionError(message + "\n\nOriginal reason: " + utils.inspect(reason));
	                    };
	                }
	
	                var returnedPromise = promise.then(
	                    function (fulfillmentValue) {
	                        return assert[assertMethodName].apply(assert, [fulfillmentValue].concat(otherArgs));
	                    },
	                    customRejectionHandler
	                );
	
	                returnedPromise.notify = function (done) {
	                    doNotify(returnedPromise, done);
	                };
	
	                return returnedPromise;
	            };
	        });
	    }
	}());


/***/ },
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Cachier = __webpack_require__(53).Cachier;
	
	
	describe("Cachier", function () {
	  var cachier = undefined;
	  var databaseNumber = 0;
	
	  var retry = function (count) {
	    return function (fn) {
	      return function () {
	        var run = function (n) {
	          var promise = Promise.resolve().then(fn);
	          return n >= count ? promise : promise["catch"](function () {
	            return Promise.delay(100).then(function () {
	              return run(n + 1);
	            });
	          });
	        };
	        return run(1);
	      };
	    };
	  };
	
	  beforeEach(function () {
	    return cachier = new Cachier("test." + new Date().getTime() + "." + ++databaseNumber);
	  });
	  afterEach(retry(3)(function () {
	    return cachier.destroyDatabase();
	  }));
	
	  describe(".connection", function () {
	    it("should be a promise which fullfill with the db connection", function () {
	      return cachier.connection.then(function (db) {
	        expect(db.constructor + "").to.match(/DBDatabase/);
	      });
	    });
	  });
	
	  describe("#save", function () {
	    it("stores a blob", function () {
	      var blob = new Blob(["hello"]);
	      return expect(cachier.save("wow", blob)).to.eventually.be.ok;
	    });
	    it("rejects when key is invalid", function () {
	      var blob = new Blob(["hello"]);
	      return expect(cachier.save(undefined, blob)).to.be.rejected;
	    });
	  });
	
	  describe("with a blob saved", function () {
	    beforeEach(function () {
	      var blob = new Blob(["hello"]);
	      return cachier.save("wow2", blob, { name: "example1" }).delay(10);
	    });
	
	    describe("#load", function () {
	      it("should return the blob value", function () {
	        return cachier.load("wow2").then(function (_ref) {
	          var blob = _ref.blob;
	          var metadata = _ref.metadata;
	          expect(blob.size).to.equal(5);
	          expect(metadata).to.deep.equal({ name: "example1" });
	        });
	      });
	    });
	
	    describe("#save", function () {
	      it("should replace content with a new blob", function () {
	        var blob2 = new Blob(["world!"]);
	        return cachier.save("wow2", blob2).delay(10) // chrome needs this delay
	        .then(function () {
	          return cachier.load("wow2");
	        }).then(function (_ref2) {
	          var blob = _ref2.blob;
	          var metadata = _ref2.metadata;
	          expect(blob.size).to.equal(6);
	          expect(metadata).to.equal(undefined);
	        });
	      });
	    });
	
	    describe("#delete", function () {
	      it("should remove the blob", function () {
	        return cachier["delete"]("wow3").then(function () {
	          return expect(cachier.load("wow3")).to.be.rejected;
	        });
	      });
	    });
	  });
	
	  describe("#destroyDatabase", function () {
	    it("may be called twice", function () {
	      return cachier.destroyDatabase();
	    });
	  });
	
	  describe("without blob support in IndexedDB", function () {
	    it("still works", function () {
	      var blob = new Blob(["hello"], { type: "text/plain" });
	      cachier._NO_BLOB = true;
	      return cachier.save("wow4", blob).delay(10).then(function () {
	        return cachier.load("wow4");
	      }).then(function (_ref3) {
	        var blob = _ref3.blob;
	        expect(blob.size).to.equal(5);
	        expect(blob.type).to.equal("text/plain");
	      });
	    });
	  });
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	describe("The specs", function () {
	  it("runs", function () {
	    expect(({ runs: true }).runs).to.equal(true);
	  });
	});

/***/ },
/* 43 */,
/* 44 */,
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// chain over to `prfun/wrap`, which allows users to specify a non-default
	// Promise implementation if they prefer.
	__webpack_require__(54)();


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var used = []
	  , exports = module.exports = {};
	
	/*!
	 * Chai version
	 */
	
	exports.version = '1.10.0';
	
	/*!
	 * Assertion Error
	 */
	
	exports.AssertionError = __webpack_require__(64);
	
	/*!
	 * Utils for plugins (not exported)
	 */
	
	var util = __webpack_require__(57);
	
	/**
	 * # .use(function)
	 *
	 * Provides a way to extend the internals of Chai
	 *
	 * @param {Function}
	 * @returns {this} for chaining
	 * @api public
	 */
	
	exports.use = function (fn) {
	  if (!~used.indexOf(fn)) {
	    fn(this, util);
	    used.push(fn);
	  }
	
	  return this;
	};
	
	/*!
	 * Configuration
	 */
	
	var config = __webpack_require__(55);
	exports.config = config;
	
	/*!
	 * Primary `Assertion` prototype
	 */
	
	var assertion = __webpack_require__(56);
	exports.use(assertion);
	
	/*!
	 * Core Assertions
	 */
	
	var core = __webpack_require__(58);
	exports.use(core);
	
	/*!
	 * Expect interface
	 */
	
	var expect = __webpack_require__(59);
	exports.use(expect);
	
	/*!
	 * Should interface
	 */
	
	var should = __webpack_require__(60);
	exports.use(should);
	
	/*!
	 * Assert interface
	 */
	
	var assert = __webpack_require__(61);
	exports.use(assert);


/***/ },
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	__webpack_require__(86);


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __cov_7uWEbk3izBPu$2l8Dhsalw = (Function('return this'))();
	if (!__cov_7uWEbk3izBPu$2l8Dhsalw.__coverage__) { __cov_7uWEbk3izBPu$2l8Dhsalw.__coverage__ = {}; }
	__cov_7uWEbk3izBPu$2l8Dhsalw = __cov_7uWEbk3izBPu$2l8Dhsalw.__coverage__;
	if (!(__cov_7uWEbk3izBPu$2l8Dhsalw['/home/ubuntu/bemuse/src/cachier/index.js'])) {
	   __cov_7uWEbk3izBPu$2l8Dhsalw['/home/ubuntu/bemuse/src/cachier/index.js'] = {"path":"/home/ubuntu/bemuse/src/cachier/index.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":1,"10":0,"11":0,"12":0,"13":1,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":1,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":1,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":1,"73":0,"74":0,"75":0,"76":0,"77":0},"b":{"1":[0,0,0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0},"fnMap":{"1":{"name":"(anonymous_1)","line":3,"loc":{"start":{"line":3,"column":15},"end":{"line":3,"column":33}}},"2":{"name":"Cachier","line":18,"loc":{"start":{"line":18,"column":0},"end":{"line":18,"column":31}}},"3":{"name":"connect","line":25,"loc":{"start":{"line":25,"column":2},"end":{"line":25,"column":21}}},"4":{"name":"(anonymous_4)","line":26,"loc":{"start":{"line":26,"column":23},"end":{"line":26,"column":50}}},"5":{"name":"(anonymous_5)","line":28,"loc":{"start":{"line":28,"column":32},"end":{"line":28,"column":49}}},"6":{"name":"(anonymous_6)","line":31,"loc":{"start":{"line":31,"column":39},"end":{"line":31,"column":51}}},"7":{"name":"(anonymous_7)","line":34,"loc":{"start":{"line":34,"column":36},"end":{"line":34,"column":48}}},"8":{"name":"(anonymous_8)","line":38,"loc":{"start":{"line":38,"column":24},"end":{"line":38,"column":36}}},"9":{"name":"(anonymous_9)","line":41,"loc":{"start":{"line":41,"column":26},"end":{"line":41,"column":43}}},"10":{"name":"save","line":50,"loc":{"start":{"line":50,"column":10},"end":{"line":50,"column":45}}},"11":{"name":"(anonymous_11)","line":52,"loc":{"start":{"line":52,"column":29},"end":{"line":52,"column":43}}},"12":{"name":"tryBlob","line":53,"loc":{"start":{"line":53,"column":38},"end":{"line":53,"column":57}}},"13":{"name":"tryObject","line":57,"loc":{"start":{"line":57,"column":20},"end":{"line":57,"column":41}}},"14":{"name":"(anonymous_14)","line":59,"loc":{"start":{"line":59,"column":41},"end":{"line":59,"column":59}}},"15":{"name":"load","line":66,"loc":{"start":{"line":66,"column":10},"end":{"line":66,"column":29}}},"16":{"name":"(anonymous_16)","line":67,"loc":{"start":{"line":67,"column":29},"end":{"line":67,"column":43}}},"17":{"name":"(anonymous_17)","line":69,"loc":{"start":{"line":69,"column":34},"end":{"line":69,"column":46}}},"18":{"name":"_delete","line":77,"loc":{"start":{"line":77,"column":14},"end":{"line":77,"column":36}}},"19":{"name":"(anonymous_19)","line":78,"loc":{"start":{"line":78,"column":29},"end":{"line":78,"column":43}}},"20":{"name":"destroyDatabase","line":83,"loc":{"start":{"line":83,"column":21},"end":{"line":83,"column":48}}},"21":{"name":"(anonymous_21)","line":85,"loc":{"start":{"line":85,"column":29},"end":{"line":85,"column":43}}},"22":{"name":"(anonymous_22)","line":87,"loc":{"start":{"line":87,"column":14},"end":{"line":87,"column":26}}},"23":{"name":"(anonymous_23)","line":90,"loc":{"start":{"line":90,"column":13},"end":{"line":90,"column":25}}},"24":{"name":"trap","line":95,"loc":{"start":{"line":95,"column":2},"end":{"line":95,"column":25}}},"25":{"name":"(anonymous_25)","line":96,"loc":{"start":{"line":96,"column":23},"end":{"line":96,"column":50}}},"26":{"name":"(anonymous_26)","line":97,"loc":{"start":{"line":97,"column":24},"end":{"line":97,"column":36}}},"27":{"name":"(anonymous_27)","line":100,"loc":{"start":{"line":100,"column":26},"end":{"line":100,"column":38}}},"28":{"name":"(anonymous_28)","line":104,"loc":{"start":{"line":104,"column":26},"end":{"line":104,"column":43}}},"29":{"name":"blobToObject","line":110,"loc":{"start":{"line":110,"column":2},"end":{"line":110,"column":30}}},"30":{"name":"(anonymous_30)","line":111,"loc":{"start":{"line":111,"column":23},"end":{"line":111,"column":50}}},"31":{"name":"(anonymous_31)","line":113,"loc":{"start":{"line":113,"column":22},"end":{"line":113,"column":34}}},"32":{"name":"(anonymous_32)","line":116,"loc":{"start":{"line":116,"column":23},"end":{"line":116,"column":35}}},"33":{"name":"objectToBlob","line":123,"loc":{"start":{"line":123,"column":2},"end":{"line":123,"column":32}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":12,"column":2}},"2":{"start":{"line":4,"column":2},"end":{"line":9,"column":3}},"3":{"start":{"line":5,"column":4},"end":{"line":5,"column":30}},"4":{"start":{"line":6,"column":4},"end":{"line":8,"column":5}},"5":{"start":{"line":7,"column":6},"end":{"line":7,"column":32}},"6":{"start":{"line":11,"column":2},"end":{"line":11,"column":16}},"7":{"start":{"line":14,"column":0},"end":{"line":14,"column":35}},"8":{"start":{"line":15,"column":0},"end":{"line":15,"column":26}},"9":{"start":{"line":18,"column":0},"end":{"line":130,"column":1}},"10":{"start":{"line":19,"column":2},"end":{"line":19,"column":127}},"11":{"start":{"line":21,"column":2},"end":{"line":21,"column":29}},"12":{"start":{"line":23,"column":2},"end":{"line":23,"column":43}},"13":{"start":{"line":25,"column":2},"end":{"line":46,"column":3}},"14":{"start":{"line":26,"column":4},"end":{"line":45,"column":7}},"15":{"start":{"line":27,"column":6},"end":{"line":27,"column":52}},"16":{"start":{"line":28,"column":6},"end":{"line":37,"column":8}},"17":{"start":{"line":29,"column":8},"end":{"line":29,"column":37}},"18":{"start":{"line":30,"column":8},"end":{"line":30,"column":72}},"19":{"start":{"line":31,"column":8},"end":{"line":33,"column":10}},"20":{"start":{"line":32,"column":10},"end":{"line":32,"column":22}},"21":{"start":{"line":34,"column":8},"end":{"line":36,"column":10}},"22":{"start":{"line":35,"column":10},"end":{"line":35,"column":56}},"23":{"start":{"line":38,"column":6},"end":{"line":40,"column":8}},"24":{"start":{"line":39,"column":8},"end":{"line":39,"column":54}},"25":{"start":{"line":41,"column":6},"end":{"line":44,"column":8}},"26":{"start":{"line":42,"column":8},"end":{"line":42,"column":37}},"27":{"start":{"line":43,"column":8},"end":{"line":43,"column":20}},"28":{"start":{"line":48,"column":2},"end":{"line":93,"column":8}},"29":{"start":{"line":51,"column":6},"end":{"line":51,"column":36}},"30":{"start":{"line":52,"column":6},"end":{"line":64,"column":9}},"31":{"start":{"line":53,"column":8},"end":{"line":63,"column":11}},"32":{"start":{"line":54,"column":10},"end":{"line":54,"column":74}},"33":{"start":{"line":54,"column":23},"end":{"line":54,"column":74}},"34":{"start":{"line":55,"column":10},"end":{"line":55,"column":136}},"35":{"start":{"line":56,"column":10},"end":{"line":56,"column":31}},"36":{"start":{"line":58,"column":10},"end":{"line":58,"column":74}},"37":{"start":{"line":59,"column":10},"end":{"line":62,"column":13}},"38":{"start":{"line":60,"column":12},"end":{"line":60,"column":140}},"39":{"start":{"line":61,"column":12},"end":{"line":61,"column":33}},"40":{"start":{"line":67,"column":6},"end":{"line":75,"column":9}},"41":{"start":{"line":68,"column":8},"end":{"line":68,"column":80}},"42":{"start":{"line":69,"column":8},"end":{"line":74,"column":11}},"43":{"start":{"line":70,"column":10},"end":{"line":70,"column":38}},"44":{"start":{"line":71,"column":10},"end":{"line":73,"column":40}},"45":{"start":{"line":78,"column":6},"end":{"line":81,"column":9}},"46":{"start":{"line":79,"column":8},"end":{"line":79,"column":99}},"47":{"start":{"line":80,"column":8},"end":{"line":80,"column":29}},"48":{"start":{"line":84,"column":6},"end":{"line":84,"column":48}},"49":{"start":{"line":84,"column":23},"end":{"line":84,"column":48}},"50":{"start":{"line":85,"column":6},"end":{"line":92,"column":9}},"51":{"start":{"line":86,"column":8},"end":{"line":86,"column":19}},"52":{"start":{"line":88,"column":8},"end":{"line":88,"column":61}},"53":{"start":{"line":89,"column":8},"end":{"line":89,"column":29}},"54":{"start":{"line":91,"column":8},"end":{"line":91,"column":26}},"55":{"start":{"line":95,"column":2},"end":{"line":108,"column":3}},"56":{"start":{"line":96,"column":4},"end":{"line":107,"column":7}},"57":{"start":{"line":97,"column":6},"end":{"line":99,"column":8}},"58":{"start":{"line":98,"column":8},"end":{"line":98,"column":63}},"59":{"start":{"line":100,"column":6},"end":{"line":103,"column":8}},"60":{"start":{"line":101,"column":8},"end":{"line":101,"column":29}},"61":{"start":{"line":102,"column":8},"end":{"line":102,"column":59}},"62":{"start":{"line":104,"column":6},"end":{"line":106,"column":8}},"63":{"start":{"line":105,"column":8},"end":{"line":105,"column":23}},"64":{"start":{"line":110,"column":2},"end":{"line":121,"column":3}},"65":{"start":{"line":111,"column":4},"end":{"line":120,"column":7}},"66":{"start":{"line":112,"column":6},"end":{"line":112,"column":36}},"67":{"start":{"line":113,"column":6},"end":{"line":115,"column":8}},"68":{"start":{"line":114,"column":8},"end":{"line":114,"column":60}},"69":{"start":{"line":116,"column":6},"end":{"line":118,"column":8}},"70":{"start":{"line":117,"column":8},"end":{"line":117,"column":63}},"71":{"start":{"line":119,"column":6},"end":{"line":119,"column":37}},"72":{"start":{"line":123,"column":2},"end":{"line":129,"column":3}},"73":{"start":{"line":124,"column":4},"end":{"line":128,"column":5}},"74":{"start":{"line":125,"column":6},"end":{"line":125,"column":20}},"75":{"start":{"line":126,"column":11},"end":{"line":128,"column":5}},"76":{"start":{"line":127,"column":6},"end":{"line":127,"column":62}},"77":{"start":{"line":131,"column":0},"end":{"line":131,"column":55}}},"branchMap":{"1":{"line":19,"type":"binary-expr","locations":[{"start":{"line":19,"column":18},"end":{"line":19,"column":34}},{"start":{"line":19,"column":38},"end":{"line":19,"column":60}},{"start":{"line":19,"column":64},"end":{"line":19,"column":83}},{"start":{"line":19,"column":87},"end":{"line":19,"column":104}},{"start":{"line":19,"column":108},"end":{"line":19,"column":126}}]},"2":{"line":23,"type":"binary-expr","locations":[{"start":{"line":23,"column":17},"end":{"line":23,"column":29}},{"start":{"line":23,"column":33},"end":{"line":23,"column":42}}]},"3":{"line":54,"type":"if","locations":[{"start":{"line":54,"column":10},"end":{"line":54,"column":10}},{"start":{"line":54,"column":10},"end":{"line":54,"column":10}}]},"4":{"line":84,"type":"if","locations":[{"start":{"line":84,"column":6},"end":{"line":84,"column":6}},{"start":{"line":84,"column":6},"end":{"line":84,"column":6}}]},"5":{"line":124,"type":"if","locations":[{"start":{"line":124,"column":4},"end":{"line":124,"column":4}},{"start":{"line":124,"column":4},"end":{"line":124,"column":4}}]},"6":{"line":126,"type":"if","locations":[{"start":{"line":126,"column":11},"end":{"line":126,"column":11}},{"start":{"line":126,"column":11},"end":{"line":126,"column":11}}]}},"code":["\"use strict\";","","var _extends = function (target) {","  for (var i = 1; i < arguments.length; i++) {","    var source = arguments[i];","    for (var key in source) {","      target[key] = source[key];","    }","  }","","  return target;","};","","exports[\"default\"] = new Cachier();","exports.Cachier = Cachier;","","","function Cachier(databaseName) {","  var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB;","","  var connection = connect();","","  databaseName = databaseName || \"cachier\";","","  function connect() {","    return new Promise(function (resolve, reject) {","      var request = indexedDB.open(databaseName, 1);","      request.onupgradeneeded = function (event) {","        var db = event.target.result;","        var store = db.createObjectStore(\"cachier\", { keyPath: \"_id\" });","        store.transaction.oncomplete = function () {","          resolve(db);","        };","        store.transaction.onerror = function () {","          reject(new Error(\"Cannot upgrade database!\"));","        };","      };","      request.onerror = function () {","        reject(new Error(\"Cannot request database!\"));","      };","      request.onsuccess = function (event) {","        var db = event.target.result;","        resolve(db);","      };","    });","  }","","  return {","    connection: connection,","    save: function save(key, blob, metadata) {","      var NO_BLOB = !!this._NO_BLOB; // for testing purpose","      return connection.then(function (db) {","        return Promise.resolve().then(function tryBlob() {","          if (NO_BLOB) throw new Error(\"Requested non-Blob storing mode\");","          var request = db.transaction(\"cachier\", \"readwrite\").objectStore(\"cachier\").put({ _id: key, blob: blob, metadata: metadata });","          return trap(request);","        })[\"catch\"](function tryObject() {","          console.log(\"Cannot store as blob, store as data-URL instead.\");","          return blobToObject(blob).then(function (object) {","            var request = db.transaction(\"cachier\", \"readwrite\").objectStore(\"cachier\").put({ _id: key, blob: object, metadata: metadata });","            return trap(request);","          });","        });","      });","    },","    load: function load(key) {","      return connection.then(function (db) {","        var request = db.transaction(\"cachier\").objectStore(\"cachier\").get(key);","        return trap(request).then(function () {","          var result = request.result;","          return {","            blob: objectToBlob(result.blob),","            metadata: result.metadata };","        });","      });","    },","    \"delete\": function _delete(key) {","      return connection.then(function (db) {","        var request = db.transaction(\"cachier\", \"readwrite\").objectStore(\"cachier\")[\"delete\"](key);","        return trap(request);","      });","    },","    destroyDatabase: function destroyDatabase() {","      if (!connection) return Promise.resolve();","      return connection.then(function (db) {","        db.close();","      }).then(function () {","        var request = indexedDB.deleteDatabase(databaseName);","        return trap(request);","      }).tap(function () {","        connection = null;","      });","    } };","","  function trap(request) {","    return new Promise(function (resolve, reject) {","      request.onerror = function () {","        reject(new Error(\"IndexedDB Error: \" + request.error));","      };","      request.onblocked = function () {","        console.log(request);","        reject(new Error(\"IndexedDB Blocked: \" + request));","      };","      request.onsuccess = function (event) {","        resolve(event);","      };","    });","  }","","  function blobToObject(blob) {","    return new Promise(function (resolve, reject) {","      var reader = new FileReader();","      reader.onload = function () {","        resolve({ buffer: reader.result, type: blob.type });","      };","      reader.onerror = function () {","        reject(new Error(\"Unable to convert blob to object!\"));","      };","      reader.readAsArrayBuffer(blob);","    });","  }","","  function objectToBlob(object) {","    if (object instanceof Blob) {","      return object;","    } else if (object.buffer) {","      return new Blob([object.buffer], { type: object.type });","    }","  }","}","module.exports = _extends(exports[\"default\"], exports);"]};
	}
	__cov_7uWEbk3izBPu$2l8Dhsalw = __cov_7uWEbk3izBPu$2l8Dhsalw['/home/ubuntu/bemuse/src/cachier/index.js'];
	__cov_7uWEbk3izBPu$2l8Dhsalw.s['1']++;var _extends=function(target){__cov_7uWEbk3izBPu$2l8Dhsalw.f['1']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['2']++;for(var i=1;i<arguments.length;i++){__cov_7uWEbk3izBPu$2l8Dhsalw.s['3']++;var source=arguments[i];__cov_7uWEbk3izBPu$2l8Dhsalw.s['4']++;for(var key in source){__cov_7uWEbk3izBPu$2l8Dhsalw.s['5']++;target[key]=source[key];}}__cov_7uWEbk3izBPu$2l8Dhsalw.s['6']++;return target;};__cov_7uWEbk3izBPu$2l8Dhsalw.s['7']++;exports['default']=new Cachier();__cov_7uWEbk3izBPu$2l8Dhsalw.s['8']++;exports.Cachier=Cachier;function Cachier(databaseName){__cov_7uWEbk3izBPu$2l8Dhsalw.f['2']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['10']++;var indexedDB=(__cov_7uWEbk3izBPu$2l8Dhsalw.b['1'][0]++,window.indexedDB)||(__cov_7uWEbk3izBPu$2l8Dhsalw.b['1'][1]++,window.webkitIndexedDB)||(__cov_7uWEbk3izBPu$2l8Dhsalw.b['1'][2]++,window.mozIndexedDB)||(__cov_7uWEbk3izBPu$2l8Dhsalw.b['1'][3]++,window.OIndexedDB)||(__cov_7uWEbk3izBPu$2l8Dhsalw.b['1'][4]++,window.msIndexedDB);__cov_7uWEbk3izBPu$2l8Dhsalw.s['11']++;var connection=connect();__cov_7uWEbk3izBPu$2l8Dhsalw.s['12']++;databaseName=(__cov_7uWEbk3izBPu$2l8Dhsalw.b['2'][0]++,databaseName)||(__cov_7uWEbk3izBPu$2l8Dhsalw.b['2'][1]++,'cachier');function connect(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['3']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['14']++;return new Promise(function(resolve,reject){__cov_7uWEbk3izBPu$2l8Dhsalw.f['4']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['15']++;var request=indexedDB.open(databaseName,1);__cov_7uWEbk3izBPu$2l8Dhsalw.s['16']++;request.onupgradeneeded=function(event){__cov_7uWEbk3izBPu$2l8Dhsalw.f['5']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['17']++;var db=event.target.result;__cov_7uWEbk3izBPu$2l8Dhsalw.s['18']++;var store=db.createObjectStore('cachier',{keyPath:'_id'});__cov_7uWEbk3izBPu$2l8Dhsalw.s['19']++;store.transaction.oncomplete=function(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['6']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['20']++;resolve(db);};__cov_7uWEbk3izBPu$2l8Dhsalw.s['21']++;store.transaction.onerror=function(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['7']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['22']++;reject(new Error('Cannot upgrade database!'));};};__cov_7uWEbk3izBPu$2l8Dhsalw.s['23']++;request.onerror=function(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['8']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['24']++;reject(new Error('Cannot request database!'));};__cov_7uWEbk3izBPu$2l8Dhsalw.s['25']++;request.onsuccess=function(event){__cov_7uWEbk3izBPu$2l8Dhsalw.f['9']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['26']++;var db=event.target.result;__cov_7uWEbk3izBPu$2l8Dhsalw.s['27']++;resolve(db);};});}__cov_7uWEbk3izBPu$2l8Dhsalw.s['28']++;return{connection:connection,save:function save(key,blob,metadata){__cov_7uWEbk3izBPu$2l8Dhsalw.f['10']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['29']++;var NO_BLOB=!!this._NO_BLOB;__cov_7uWEbk3izBPu$2l8Dhsalw.s['30']++;return connection.then(function(db){__cov_7uWEbk3izBPu$2l8Dhsalw.f['11']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['31']++;return Promise.resolve().then(function tryBlob(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['12']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['32']++;if(NO_BLOB){__cov_7uWEbk3izBPu$2l8Dhsalw.b['3'][0]++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['33']++;throw new Error('Requested non-Blob storing mode');}else{__cov_7uWEbk3izBPu$2l8Dhsalw.b['3'][1]++;}__cov_7uWEbk3izBPu$2l8Dhsalw.s['34']++;var request=db.transaction('cachier','readwrite').objectStore('cachier').put({_id:key,blob:blob,metadata:metadata});__cov_7uWEbk3izBPu$2l8Dhsalw.s['35']++;return trap(request);})['catch'](function tryObject(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['13']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['36']++;console.log('Cannot store as blob, store as data-URL instead.');__cov_7uWEbk3izBPu$2l8Dhsalw.s['37']++;return blobToObject(blob).then(function(object){__cov_7uWEbk3izBPu$2l8Dhsalw.f['14']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['38']++;var request=db.transaction('cachier','readwrite').objectStore('cachier').put({_id:key,blob:object,metadata:metadata});__cov_7uWEbk3izBPu$2l8Dhsalw.s['39']++;return trap(request);});});});},load:function load(key){__cov_7uWEbk3izBPu$2l8Dhsalw.f['15']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['40']++;return connection.then(function(db){__cov_7uWEbk3izBPu$2l8Dhsalw.f['16']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['41']++;var request=db.transaction('cachier').objectStore('cachier').get(key);__cov_7uWEbk3izBPu$2l8Dhsalw.s['42']++;return trap(request).then(function(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['17']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['43']++;var result=request.result;__cov_7uWEbk3izBPu$2l8Dhsalw.s['44']++;return{blob:objectToBlob(result.blob),metadata:result.metadata};});});},'delete':function _delete(key){__cov_7uWEbk3izBPu$2l8Dhsalw.f['18']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['45']++;return connection.then(function(db){__cov_7uWEbk3izBPu$2l8Dhsalw.f['19']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['46']++;var request=db.transaction('cachier','readwrite').objectStore('cachier')['delete'](key);__cov_7uWEbk3izBPu$2l8Dhsalw.s['47']++;return trap(request);});},destroyDatabase:function destroyDatabase(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['20']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['48']++;if(!connection){__cov_7uWEbk3izBPu$2l8Dhsalw.b['4'][0]++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['49']++;return Promise.resolve();}else{__cov_7uWEbk3izBPu$2l8Dhsalw.b['4'][1]++;}__cov_7uWEbk3izBPu$2l8Dhsalw.s['50']++;return connection.then(function(db){__cov_7uWEbk3izBPu$2l8Dhsalw.f['21']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['51']++;db.close();}).then(function(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['22']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['52']++;var request=indexedDB.deleteDatabase(databaseName);__cov_7uWEbk3izBPu$2l8Dhsalw.s['53']++;return trap(request);}).tap(function(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['23']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['54']++;connection=null;});}};function trap(request){__cov_7uWEbk3izBPu$2l8Dhsalw.f['24']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['56']++;return new Promise(function(resolve,reject){__cov_7uWEbk3izBPu$2l8Dhsalw.f['25']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['57']++;request.onerror=function(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['26']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['58']++;reject(new Error('IndexedDB Error: '+request.error));};__cov_7uWEbk3izBPu$2l8Dhsalw.s['59']++;request.onblocked=function(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['27']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['60']++;console.log(request);__cov_7uWEbk3izBPu$2l8Dhsalw.s['61']++;reject(new Error('IndexedDB Blocked: '+request));};__cov_7uWEbk3izBPu$2l8Dhsalw.s['62']++;request.onsuccess=function(event){__cov_7uWEbk3izBPu$2l8Dhsalw.f['28']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['63']++;resolve(event);};});}function blobToObject(blob){__cov_7uWEbk3izBPu$2l8Dhsalw.f['29']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['65']++;return new Promise(function(resolve,reject){__cov_7uWEbk3izBPu$2l8Dhsalw.f['30']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['66']++;var reader=new FileReader();__cov_7uWEbk3izBPu$2l8Dhsalw.s['67']++;reader.onload=function(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['31']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['68']++;resolve({buffer:reader.result,type:blob.type});};__cov_7uWEbk3izBPu$2l8Dhsalw.s['69']++;reader.onerror=function(){__cov_7uWEbk3izBPu$2l8Dhsalw.f['32']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['70']++;reject(new Error('Unable to convert blob to object!'));};__cov_7uWEbk3izBPu$2l8Dhsalw.s['71']++;reader.readAsArrayBuffer(blob);});}function objectToBlob(object){__cov_7uWEbk3izBPu$2l8Dhsalw.f['33']++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['73']++;if(object instanceof Blob){__cov_7uWEbk3izBPu$2l8Dhsalw.b['5'][0]++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['74']++;return object;}else{__cov_7uWEbk3izBPu$2l8Dhsalw.b['5'][1]++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['75']++;if(object.buffer){__cov_7uWEbk3izBPu$2l8Dhsalw.b['6'][0]++;__cov_7uWEbk3izBPu$2l8Dhsalw.s['76']++;return new Blob([object.buffer],{type:object.type});}else{__cov_7uWEbk3izBPu$2l8Dhsalw.b['6'][1]++;}}}}__cov_7uWEbk3izBPu$2l8Dhsalw.s['77']++;module.exports=_extends(exports['default'],exports);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(65);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	
	  /**
	   * ### config.includeStack
	   *
	   * User configurable property, influences whether stack trace
	   * is included in Assertion error message. Default of false
	   * suppresses stack trace in the error message.
	   *
	   *     chai.config.includeStack = true;  // enable stack on error
	   *
	   * @param {Boolean}
	   * @api public
	   */
	
	   includeStack: false,
	
	  /**
	   * ### config.showDiff
	   *
	   * User configurable property, influences whether or not
	   * the `showDiff` flag should be included in the thrown
	   * AssertionErrors. `false` will always be `false`; `true`
	   * will be true when the assertion has requested a diff
	   * be shown.
	   *
	   * @param {Boolean}
	   * @api public
	   */
	
	  showDiff: true,
	
	  /**
	   * ### config.truncateThreshold
	   *
	   * User configurable property, sets length threshold for actual and
	   * expected values in assertion errors. If this threshold is exceeded,
	   * the value is truncated.
	   *
	   * Set it to zero if you want to disable truncating altogether.
	   *
	   *     chai.config.truncateThreshold = 0;  // disable truncating
	   *
	   * @param {Number}
	   * @api public
	   */
	
	  truncateThreshold: 40
	
	};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var config = __webpack_require__(55);
	var NOOP = function() { };
	
	module.exports = function (_chai, util) {
	  /*!
	   * Module dependencies.
	   */
	
	  var AssertionError = _chai.AssertionError
	    , flag = util.flag;
	
	  /*!
	   * Module export.
	   */
	
	  _chai.Assertion = Assertion;
	
	  /*!
	   * Assertion Constructor
	   *
	   * Creates object for chaining.
	   *
	   * @api private
	   */
	
	  function Assertion (obj, msg, stack) {
	    flag(this, 'ssfi', stack || arguments.callee);
	    flag(this, 'object', obj);
	    flag(this, 'message', msg);
	  }
	
	  Object.defineProperty(Assertion, 'includeStack', {
	    get: function() {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      return config.includeStack;
	    },
	    set: function(value) {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      config.includeStack = value;
	    }
	  });
	
	  Object.defineProperty(Assertion, 'showDiff', {
	    get: function() {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      return config.showDiff;
	    },
	    set: function(value) {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      config.showDiff = value;
	    }
	  });
	
	  Assertion.addProperty = function (name, fn) {
	    util.addProperty(this.prototype, name, fn);
	  };
	
	  Assertion.addMethod = function (name, fn) {
	    util.addMethod(this.prototype, name, fn);
	  };
	
	  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
	    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };
	
	  Assertion.addChainableNoop = function(name, fn) {
	    util.addChainableMethod(this.prototype, name, NOOP, fn);
	  };
	
	  Assertion.overwriteProperty = function (name, fn) {
	    util.overwriteProperty(this.prototype, name, fn);
	  };
	
	  Assertion.overwriteMethod = function (name, fn) {
	    util.overwriteMethod(this.prototype, name, fn);
	  };
	
	  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
	    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };
	
	  /*!
	   * ### .assert(expression, message, negateMessage, expected, actual)
	   *
	   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
	   *
	   * @name assert
	   * @param {Philosophical} expression to be tested
	   * @param {String or Function} message or function that returns message to display if fails
	   * @param {String or Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
	   * @param {Mixed} expected value (remember to check for negation)
	   * @param {Mixed} actual (optional) will default to `this.obj`
	   * @api private
	   */
	
	  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
	    var ok = util.test(this, arguments);
	    if (true !== showDiff) showDiff = false;
	    if (true !== config.showDiff) showDiff = false;
	
	    if (!ok) {
	      var msg = util.getMessage(this, arguments)
	        , actual = util.getActual(this, arguments);
	      throw new AssertionError(msg, {
	          actual: actual
	        , expected: expected
	        , showDiff: showDiff
	      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
	    }
	  };
	
	  /*!
	   * ### ._obj
	   *
	   * Quick reference to stored `actual` value for plugin developers.
	   *
	   * @api private
	   */
	
	  Object.defineProperty(Assertion.prototype, '_obj',
	    { get: function () {
	        return flag(this, 'object');
	      }
	    , set: function (val) {
	        flag(this, 'object', val);
	      }
	  });
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Main exports
	 */
	
	var exports = module.exports = {};
	
	/*!
	 * test utility
	 */
	
	exports.test = __webpack_require__(66);
	
	/*!
	 * type utility
	 */
	
	exports.type = __webpack_require__(67);
	
	/*!
	 * message utility
	 */
	
	exports.getMessage = __webpack_require__(68);
	
	/*!
	 * actual utility
	 */
	
	exports.getActual = __webpack_require__(69);
	
	/*!
	 * Inspect util
	 */
	
	exports.inspect = __webpack_require__(70);
	
	/*!
	 * Object Display util
	 */
	
	exports.objDisplay = __webpack_require__(71);
	
	/*!
	 * Flag utility
	 */
	
	exports.flag = __webpack_require__(72);
	
	/*!
	 * Flag transferring utility
	 */
	
	exports.transferFlags = __webpack_require__(73);
	
	/*!
	 * Deep equal utility
	 */
	
	exports.eql = __webpack_require__(88);
	
	/*!
	 * Deep path value
	 */
	
	exports.getPathValue = __webpack_require__(74);
	
	/*!
	 * Function name
	 */
	
	exports.getName = __webpack_require__(75);
	
	/*!
	 * add Property
	 */
	
	exports.addProperty = __webpack_require__(76);
	
	/*!
	 * add Method
	 */
	
	exports.addMethod = __webpack_require__(77);
	
	/*!
	 * overwrite Property
	 */
	
	exports.overwriteProperty = __webpack_require__(78);
	
	/*!
	 * overwrite Method
	 */
	
	exports.overwriteMethod = __webpack_require__(79);
	
	/*!
	 * Add a chainable method
	 */
	
	exports.addChainableMethod = __webpack_require__(80);
	
	/*!
	 * Overwrite chainable method
	 */
	
	exports.overwriteChainableMethod = __webpack_require__(81);
	


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, _) {
	  var Assertion = chai.Assertion
	    , toString = Object.prototype.toString
	    , flag = _.flag;
	
	  /**
	   * ### Language Chains
	   *
	   * The following are provided as chainable getters to
	   * improve the readability of your assertions. They
	   * do not provide testing capabilities unless they
	   * have been overwritten by a plugin.
	   *
	   * **Chains**
	   *
	   * - to
	   * - be
	   * - been
	   * - is
	   * - that
	   * - and
	   * - has
	   * - have
	   * - with
	   * - at
	   * - of
	   * - same
	   *
	   * @name language chains
	   * @api public
	   */
	
	  [ 'to', 'be', 'been'
	  , 'is', 'and', 'has', 'have'
	  , 'with', 'that', 'at'
	  , 'of', 'same' ].forEach(function (chain) {
	    Assertion.addProperty(chain, function () {
	      return this;
	    });
	  });
	
	  /**
	   * ### .not
	   *
	   * Negates any of assertions following in the chain.
	   *
	   *     expect(foo).to.not.equal('bar');
	   *     expect(goodFn).to.not.throw(Error);
	   *     expect({ foo: 'baz' }).to.have.property('foo')
	   *       .and.not.equal('bar');
	   *
	   * @name not
	   * @api public
	   */
	
	  Assertion.addProperty('not', function () {
	    flag(this, 'negate', true);
	  });
	
	  /**
	   * ### .deep
	   *
	   * Sets the `deep` flag, later used by the `equal` and
	   * `property` assertions.
	   *
	   *     expect(foo).to.deep.equal({ bar: 'baz' });
	   *     expect({ foo: { bar: { baz: 'quux' } } })
	   *       .to.have.deep.property('foo.bar.baz', 'quux');
	   *
	   * @name deep
	   * @api public
	   */
	
	  Assertion.addProperty('deep', function () {
	    flag(this, 'deep', true);
	  });
	
	  /**
	   * ### .a(type)
	   *
	   * The `a` and `an` assertions are aliases that can be
	   * used either as language chains or to assert a value's
	   * type.
	   *
	   *     // typeof
	   *     expect('test').to.be.a('string');
	   *     expect({ foo: 'bar' }).to.be.an('object');
	   *     expect(null).to.be.a('null');
	   *     expect(undefined).to.be.an('undefined');
	   *
	   *     // language chain
	   *     expect(foo).to.be.an.instanceof(Foo);
	   *
	   * @name a
	   * @alias an
	   * @param {String} type
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function an (type, msg) {
	    if (msg) flag(this, 'message', msg);
	    type = type.toLowerCase();
	    var obj = flag(this, 'object')
	      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';
	
	    this.assert(
	        type === _.type(obj)
	      , 'expected #{this} to be ' + article + type
	      , 'expected #{this} not to be ' + article + type
	    );
	  }
	
	  Assertion.addChainableMethod('an', an);
	  Assertion.addChainableMethod('a', an);
	
	  /**
	   * ### .include(value)
	   *
	   * The `include` and `contain` assertions can be used as either property
	   * based language chains or as methods to assert the inclusion of an object
	   * in an array or a substring in a string. When used as language chains,
	   * they toggle the `contain` flag for the `keys` assertion.
	   *
	   *     expect([1,2,3]).to.include(2);
	   *     expect('foobar').to.contain('foo');
	   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
	   *
	   * @name include
	   * @alias contain
	   * @param {Object|String|Number} obj
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function includeChainingBehavior () {
	    flag(this, 'contains', true);
	  }
	
	  function include (val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var expected = false;
	    if (_.type(obj) === 'array' && _.type(val) === 'object') {
	      for (var i in obj) {
	        if (_.eql(obj[i], val)) {
	          expected = true;
	          break;
	        }
	      }
	    } else if (_.type(val) === 'object') {
	      if (!flag(this, 'negate')) {
	        for (var k in val) new Assertion(obj).property(k, val[k]);
	        return;
	      }
	      var subset = {}
	      for (var k in val) subset[k] = obj[k]
	      expected = _.eql(subset, val);
	    } else {
	      expected = obj && ~obj.indexOf(val)
	    }
	    this.assert(
	        expected
	      , 'expected #{this} to include ' + _.inspect(val)
	      , 'expected #{this} to not include ' + _.inspect(val));
	  }
	
	  Assertion.addChainableMethod('include', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
	
	  /**
	   * ### .ok
	   *
	   * Asserts that the target is truthy.
	   *
	   *     expect('everthing').to.be.ok;
	   *     expect(1).to.be.ok;
	   *     expect(false).to.not.be.ok;
	   *     expect(undefined).to.not.be.ok;
	   *     expect(null).to.not.be.ok;
	   *
	   * Can also be used as a function, which prevents some linter errors.
	   *
	   *     expect('everthing').to.be.ok();
	   *     
	   * @name ok
	   * @api public
	   */
	
	  Assertion.addChainableNoop('ok', function () {
	    this.assert(
	        flag(this, 'object')
	      , 'expected #{this} to be truthy'
	      , 'expected #{this} to be falsy');
	  });
	
	  /**
	   * ### .true
	   *
	   * Asserts that the target is `true`.
	   *
	   *     expect(true).to.be.true;
	   *     expect(1).to.not.be.true;
	   *
	   * Can also be used as a function, which prevents some linter errors.
	   *
	   *     expect(true).to.be.true();
	   *
	   * @name true
	   * @api public
	   */
	
	  Assertion.addChainableNoop('true', function () {
	    this.assert(
	        true === flag(this, 'object')
	      , 'expected #{this} to be true'
	      , 'expected #{this} to be false'
	      , this.negate ? false : true
	    );
	  });
	
	  /**
	   * ### .false
	   *
	   * Asserts that the target is `false`.
	   *
	   *     expect(false).to.be.false;
	   *     expect(0).to.not.be.false;
	   *
	   * Can also be used as a function, which prevents some linter errors.
	   *
	   *     expect(false).to.be.false();
	   *
	   * @name false
	   * @api public
	   */
	
	  Assertion.addChainableNoop('false', function () {
	    this.assert(
	        false === flag(this, 'object')
	      , 'expected #{this} to be false'
	      , 'expected #{this} to be true'
	      , this.negate ? true : false
	    );
	  });
	
	  /**
	   * ### .null
	   *
	   * Asserts that the target is `null`.
	   *
	   *     expect(null).to.be.null;
	   *     expect(undefined).not.to.be.null;
	   *
	   * Can also be used as a function, which prevents some linter errors.
	   *
	   *     expect(null).to.be.null();
	   *
	   * @name null
	   * @api public
	   */
	
	  Assertion.addChainableNoop('null', function () {
	    this.assert(
	        null === flag(this, 'object')
	      , 'expected #{this} to be null'
	      , 'expected #{this} not to be null'
	    );
	  });
	
	  /**
	   * ### .undefined
	   *
	   * Asserts that the target is `undefined`.
	   *
	   *     expect(undefined).to.be.undefined;
	   *     expect(null).to.not.be.undefined;
	   *
	   * Can also be used as a function, which prevents some linter errors.
	   *
	   *     expect(undefined).to.be.undefined();
	   *
	   * @name undefined
	   * @api public
	   */
	
	  Assertion.addChainableNoop('undefined', function () {
	    this.assert(
	        undefined === flag(this, 'object')
	      , 'expected #{this} to be undefined'
	      , 'expected #{this} not to be undefined'
	    );
	  });
	
	  /**
	   * ### .exist
	   *
	   * Asserts that the target is neither `null` nor `undefined`.
	   *
	   *     var foo = 'hi'
	   *       , bar = null
	   *       , baz;
	   *
	   *     expect(foo).to.exist;
	   *     expect(bar).to.not.exist;
	   *     expect(baz).to.not.exist;
	   *
	   * Can also be used as a function, which prevents some linter errors.
	   *
	   *     expect(foo).to.exist();
	   *
	   * @name exist
	   * @api public
	   */
	
	  Assertion.addChainableNoop('exist', function () {
	    this.assert(
	        null != flag(this, 'object')
	      , 'expected #{this} to exist'
	      , 'expected #{this} to not exist'
	    );
	  });
	
	
	  /**
	   * ### .empty
	   *
	   * Asserts that the target's length is `0`. For arrays, it checks
	   * the `length` property. For objects, it gets the count of
	   * enumerable keys.
	   *
	   *     expect([]).to.be.empty;
	   *     expect('').to.be.empty;
	   *     expect({}).to.be.empty;
	   *
	   * Can also be used as a function, which prevents some linter errors.
	   *
	   *     expect([]).to.be.empty();
	   *
	   * @name empty
	   * @api public
	   */
	
	  Assertion.addChainableNoop('empty', function () {
	    var obj = flag(this, 'object')
	      , expected = obj;
	
	    if (Array.isArray(obj) || 'string' === typeof object) {
	      expected = obj.length;
	    } else if (typeof obj === 'object') {
	      expected = Object.keys(obj).length;
	    }
	
	    this.assert(
	        !expected
	      , 'expected #{this} to be empty'
	      , 'expected #{this} not to be empty'
	    );
	  });
	
	  /**
	   * ### .arguments
	   *
	   * Asserts that the target is an arguments object.
	   *
	   *     function test () {
	   *       expect(arguments).to.be.arguments;
	   *     }
	   *
	   * Can also be used as a function, which prevents some linter errors.
	   *
	   *     function test () {
	   *       expect(arguments).to.be.arguments();
	   *     }
	   *
	   * @name arguments
	   * @alias Arguments
	   * @api public
	   */
	
	  function checkArguments () {
	    var obj = flag(this, 'object')
	      , type = Object.prototype.toString.call(obj);
	    this.assert(
	        '[object Arguments]' === type
	      , 'expected #{this} to be arguments but got ' + type
	      , 'expected #{this} to not be arguments'
	    );
	  }
	
	  Assertion.addChainableNoop('arguments', checkArguments);
	  Assertion.addChainableNoop('Arguments', checkArguments);
	
	  /**
	   * ### .equal(value)
	   *
	   * Asserts that the target is strictly equal (`===`) to `value`.
	   * Alternately, if the `deep` flag is set, asserts that
	   * the target is deeply equal to `value`.
	   *
	   *     expect('hello').to.equal('hello');
	   *     expect(42).to.equal(42);
	   *     expect(1).to.not.equal(true);
	   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
	   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
	   *
	   * @name equal
	   * @alias equals
	   * @alias eq
	   * @alias deep.equal
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertEqual (val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'deep')) {
	      return this.eql(val);
	    } else {
	      this.assert(
	          val === obj
	        , 'expected #{this} to equal #{exp}'
	        , 'expected #{this} to not equal #{exp}'
	        , val
	        , this._obj
	        , true
	      );
	    }
	  }
	
	  Assertion.addMethod('equal', assertEqual);
	  Assertion.addMethod('equals', assertEqual);
	  Assertion.addMethod('eq', assertEqual);
	
	  /**
	   * ### .eql(value)
	   *
	   * Asserts that the target is deeply equal to `value`.
	   *
	   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
	   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
	   *
	   * @name eql
	   * @alias eqls
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertEql(obj, msg) {
	    if (msg) flag(this, 'message', msg);
	    this.assert(
	        _.eql(obj, flag(this, 'object'))
	      , 'expected #{this} to deeply equal #{exp}'
	      , 'expected #{this} to not deeply equal #{exp}'
	      , obj
	      , this._obj
	      , true
	    );
	  }
	
	  Assertion.addMethod('eql', assertEql);
	  Assertion.addMethod('eqls', assertEql);
	
	  /**
	   * ### .above(value)
	   *
	   * Asserts that the target is greater than `value`.
	   *
	   *     expect(10).to.be.above(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *
	   * @name above
	   * @alias gt
	   * @alias greaterThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertAbove (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len > n
	        , 'expected #{this} to have a length above #{exp} but got #{act}'
	        , 'expected #{this} to not have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj > n
	        , 'expected #{this} to be above ' + n
	        , 'expected #{this} to be at most ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('above', assertAbove);
	  Assertion.addMethod('gt', assertAbove);
	  Assertion.addMethod('greaterThan', assertAbove);
	
	  /**
	   * ### .least(value)
	   *
	   * Asserts that the target is greater than or equal to `value`.
	   *
	   *     expect(10).to.be.at.least(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.least(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
	   *
	   * @name least
	   * @alias gte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertLeast (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= n
	        , 'expected #{this} to have a length at least #{exp} but got #{act}'
	        , 'expected #{this} to have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj >= n
	        , 'expected #{this} to be at least ' + n
	        , 'expected #{this} to be below ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('least', assertLeast);
	  Assertion.addMethod('gte', assertLeast);
	
	  /**
	   * ### .below(value)
	   *
	   * Asserts that the target is less than `value`.
	   *
	   *     expect(5).to.be.below(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *
	   * @name below
	   * @alias lt
	   * @alias lessThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertBelow (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len < n
	        , 'expected #{this} to have a length below #{exp} but got #{act}'
	        , 'expected #{this} to not have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj < n
	        , 'expected #{this} to be below ' + n
	        , 'expected #{this} to be at least ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('below', assertBelow);
	  Assertion.addMethod('lt', assertBelow);
	  Assertion.addMethod('lessThan', assertBelow);
	
	  /**
	   * ### .most(value)
	   *
	   * Asserts that the target is less than or equal to `value`.
	   *
	   *     expect(5).to.be.at.most(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.most(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
	   *
	   * @name most
	   * @alias lte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertMost (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len <= n
	        , 'expected #{this} to have a length at most #{exp} but got #{act}'
	        , 'expected #{this} to have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj <= n
	        , 'expected #{this} to be at most ' + n
	        , 'expected #{this} to be above ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('most', assertMost);
	  Assertion.addMethod('lte', assertMost);
	
	  /**
	   * ### .within(start, finish)
	   *
	   * Asserts that the target is within a range.
	   *
	   *     expect(7).to.be.within(5,10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a length range. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name within
	   * @param {Number} start lowerbound inclusive
	   * @param {Number} finish upperbound inclusive
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('within', function (start, finish, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , range = start + '..' + finish;
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= start && len <= finish
	        , 'expected #{this} to have a length within ' + range
	        , 'expected #{this} to not have a length within ' + range
	      );
	    } else {
	      this.assert(
	          obj >= start && obj <= finish
	        , 'expected #{this} to be within ' + range
	        , 'expected #{this} to not be within ' + range
	      );
	    }
	  });
	
	  /**
	   * ### .instanceof(constructor)
	   *
	   * Asserts that the target is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , Chai = new Tea('chai');
	   *
	   *     expect(Chai).to.be.an.instanceof(Tea);
	   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
	   *
	   * @name instanceof
	   * @param {Constructor} constructor
	   * @param {String} message _optional_
	   * @alias instanceOf
	   * @api public
	   */
	
	  function assertInstanceOf (constructor, msg) {
	    if (msg) flag(this, 'message', msg);
	    var name = _.getName(constructor);
	    this.assert(
	        flag(this, 'object') instanceof constructor
	      , 'expected #{this} to be an instance of ' + name
	      , 'expected #{this} to not be an instance of ' + name
	    );
	  };
	
	  Assertion.addMethod('instanceof', assertInstanceOf);
	  Assertion.addMethod('instanceOf', assertInstanceOf);
	
	  /**
	   * ### .property(name, [value])
	   *
	   * Asserts that the target has a property `name`, optionally asserting that
	   * the value of that property is strictly equal to  `value`.
	   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
	   * references into objects and arrays.
	   *
	   *     // simple referencing
	   *     var obj = { foo: 'bar' };
	   *     expect(obj).to.have.property('foo');
	   *     expect(obj).to.have.property('foo', 'bar');
	   *
	   *     // deep referencing
	   *     var deepObj = {
	   *         green: { tea: 'matcha' }
	   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
	   *     };
	
	   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
	   *
	   * You can also use an array as the starting point of a `deep.property`
	   * assertion, or traverse nested arrays.
	   *
	   *     var arr = [
	   *         [ 'chai', 'matcha', 'konacha' ]
	   *       , [ { tea: 'chai' }
	   *         , { tea: 'matcha' }
	   *         , { tea: 'konacha' } ]
	   *     ];
	   *
	   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
	   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
	   *
	   * Furthermore, `property` changes the subject of the assertion
	   * to be the value of that property from the original object. This
	   * permits for further chainable assertions on that property.
	   *
	   *     expect(obj).to.have.property('foo')
	   *       .that.is.a('string');
	   *     expect(deepObj).to.have.property('green')
	   *       .that.is.an('object')
	   *       .that.deep.equals({ tea: 'matcha' });
	   *     expect(deepObj).to.have.property('teas')
	   *       .that.is.an('array')
	   *       .with.deep.property('[2]')
	   *         .that.deep.equals({ tea: 'konacha' });
	   *
	   * @name property
	   * @alias deep.property
	   * @param {String} name
	   * @param {Mixed} value (optional)
	   * @param {String} message _optional_
	   * @returns value of property for chaining
	   * @api public
	   */
	
	  Assertion.addMethod('property', function (name, val, msg) {
	    if (msg) flag(this, 'message', msg);
	
	    var descriptor = flag(this, 'deep') ? 'deep property ' : 'property '
	      , negate = flag(this, 'negate')
	      , obj = flag(this, 'object')
	      , value = flag(this, 'deep')
	        ? _.getPathValue(name, obj)
	        : obj[name];
	
	    if (negate && undefined !== val) {
	      if (undefined === value) {
	        msg = (msg != null) ? msg + ': ' : '';
	        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
	      }
	    } else {
	      this.assert(
	          undefined !== value
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
	        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
	    }
	
	    if (undefined !== val) {
	      this.assert(
	          val === value
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
	        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
	        , val
	        , value
	      );
	    }
	
	    flag(this, 'object', value);
	  });
	
	
	  /**
	   * ### .ownProperty(name)
	   *
	   * Asserts that the target has an own property `name`.
	   *
	   *     expect('test').to.have.ownProperty('length');
	   *
	   * @name ownProperty
	   * @alias haveOwnProperty
	   * @param {String} name
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertOwnProperty (name, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        obj.hasOwnProperty(name)
	      , 'expected #{this} to have own property ' + _.inspect(name)
	      , 'expected #{this} to not have own property ' + _.inspect(name)
	    );
	  }
	
	  Assertion.addMethod('ownProperty', assertOwnProperty);
	  Assertion.addMethod('haveOwnProperty', assertOwnProperty);
	
	  /**
	   * ### .length(value)
	   *
	   * Asserts that the target's `length` property has
	   * the expected value.
	   *
	   *     expect([ 1, 2, 3]).to.have.length(3);
	   *     expect('foobar').to.have.length(6);
	   *
	   * Can also be used as a chain precursor to a value
	   * comparison for the length property.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name length
	   * @alias lengthOf
	   * @param {Number} length
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  function assertLengthChain () {
	    flag(this, 'doLength', true);
	  }
	
	  function assertLength (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).to.have.property('length');
	    var len = obj.length;
	
	    this.assert(
	        len == n
	      , 'expected #{this} to have a length of #{exp} but got #{act}'
	      , 'expected #{this} to not have a length of #{act}'
	      , n
	      , len
	    );
	  }
	
	  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
	  Assertion.addMethod('lengthOf', assertLength);
	
	  /**
	   * ### .match(regexp)
	   *
	   * Asserts that the target matches a regular expression.
	   *
	   *     expect('foobar').to.match(/^foo/);
	   *
	   * @name match
	   * @param {RegExp} RegularExpression
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('match', function (re, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        re.exec(obj)
	      , 'expected #{this} to match ' + re
	      , 'expected #{this} not to match ' + re
	    );
	  });
	
	  /**
	   * ### .string(string)
	   *
	   * Asserts that the string target contains another string.
	   *
	   *     expect('foobar').to.have.string('bar');
	   *
	   * @name string
	   * @param {String} string
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('string', function (str, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('string');
	
	    this.assert(
	        ~obj.indexOf(str)
	      , 'expected #{this} to contain ' + _.inspect(str)
	      , 'expected #{this} to not contain ' + _.inspect(str)
	    );
	  });
	
	
	  /**
	   * ### .keys(key1, [key2], [...])
	   *
	   * Asserts that the target has exactly the given keys, or
	   * asserts the inclusion of some keys when using the
	   * `include` or `contain` modifiers.
	   *
	   *     expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('foo', 'bar');
	   *
	   * @name keys
	   * @alias key
	   * @param {String...|Array} keys
	   * @api public
	   */
	
	  function assertKeys (keys) {
	    var obj = flag(this, 'object')
	      , str
	      , ok = true;
	
	    keys = keys instanceof Array
	      ? keys
	      : Array.prototype.slice.call(arguments);
	
	    if (!keys.length) throw new Error('keys required');
	
	    var actual = Object.keys(obj)
	      , expected = keys
	      , len = keys.length;
	
	    // Inclusion
	    ok = keys.every(function(key){
	      return ~actual.indexOf(key);
	    });
	
	    // Strict
	    if (!flag(this, 'negate') && !flag(this, 'contains')) {
	      ok = ok && keys.length == actual.length;
	    }
	
	    // Key string
	    if (len > 1) {
	      keys = keys.map(function(key){
	        return _.inspect(key);
	      });
	      var last = keys.pop();
	      str = keys.join(', ') + ', and ' + last;
	    } else {
	      str = _.inspect(keys[0]);
	    }
	
	    // Form
	    str = (len > 1 ? 'keys ' : 'key ') + str;
	
	    // Have / include
	    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;
	
	    // Assertion
	    this.assert(
	        ok
	      , 'expected #{this} to ' + str
	      , 'expected #{this} to not ' + str
	      , expected.sort()
	      , actual.sort()
	      , true
	    );
	  }
	
	  Assertion.addMethod('keys', assertKeys);
	  Assertion.addMethod('key', assertKeys);
	
	  /**
	   * ### .throw(constructor)
	   *
	   * Asserts that the function target will throw a specific error, or specific type of error
	   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
	   * for the error's message.
	   *
	   *     var err = new ReferenceError('This is a bad function.');
	   *     var fn = function () { throw err; }
	   *     expect(fn).to.throw(ReferenceError);
	   *     expect(fn).to.throw(Error);
	   *     expect(fn).to.throw(/bad function/);
	   *     expect(fn).to.not.throw('good function');
	   *     expect(fn).to.throw(ReferenceError, /bad function/);
	   *     expect(fn).to.throw(err);
	   *     expect(fn).to.not.throw(new RangeError('Out of range.'));
	   *
	   * Please note that when a throw expectation is negated, it will check each
	   * parameter independently, starting with error constructor type. The appropriate way
	   * to check for the existence of a type of error but for a message that does not match
	   * is to use `and`.
	   *
	   *     expect(fn).to.throw(ReferenceError)
	   *        .and.not.throw(/good function/);
	   *
	   * @name throw
	   * @alias throws
	   * @alias Throw
	   * @param {ErrorConstructor} constructor
	   * @param {String|RegExp} expected error message
	   * @param {String} message _optional_
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @returns error for chaining (null if no error)
	   * @api public
	   */
	
	  function assertThrows (constructor, errMsg, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('function');
	
	    var thrown = false
	      , desiredError = null
	      , name = null
	      , thrownError = null;
	
	    if (arguments.length === 0) {
	      errMsg = null;
	      constructor = null;
	    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
	      errMsg = constructor;
	      constructor = null;
	    } else if (constructor && constructor instanceof Error) {
	      desiredError = constructor;
	      constructor = null;
	      errMsg = null;
	    } else if (typeof constructor === 'function') {
	      name = constructor.prototype.name || constructor.name;
	      if (name === 'Error' && constructor !== Error) {
	        name = (new constructor()).name;
	      }
	    } else {
	      constructor = null;
	    }
	
	    try {
	      obj();
	    } catch (err) {
	      // first, check desired error
	      if (desiredError) {
	        this.assert(
	            err === desiredError
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp}'
	          , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	          , (err instanceof Error ? err.toString() : err)
	        );
	
	        flag(this, 'object', err);
	        return this;
	      }
	
	      // next, check constructor
	      if (constructor) {
	        this.assert(
	            err instanceof constructor
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp} but #{act} was thrown'
	          , name
	          , (err instanceof Error ? err.toString() : err)
	        );
	
	        if (!errMsg) {
	          flag(this, 'object', err);
	          return this;
	        }
	      }
	
	      // next, check message
	      var message = 'object' === _.type(err) && "message" in err
	        ? err.message
	        : '' + err;
	
	      if ((message != null) && errMsg && errMsg instanceof RegExp) {
	        this.assert(
	            errMsg.exec(message)
	          , 'expected #{this} to throw error matching #{exp} but got #{act}'
	          , 'expected #{this} to throw error not matching #{exp}'
	          , errMsg
	          , message
	        );
	
	        flag(this, 'object', err);
	        return this;
	      } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
	        this.assert(
	            ~message.indexOf(errMsg)
	          , 'expected #{this} to throw error including #{exp} but got #{act}'
	          , 'expected #{this} to throw error not including #{act}'
	          , errMsg
	          , message
	        );
	
	        flag(this, 'object', err);
	        return this;
	      } else {
	        thrown = true;
	        thrownError = err;
	      }
	    }
	
	    var actuallyGot = ''
	      , expectedThrown = name !== null
	        ? name
	        : desiredError
	          ? '#{exp}' //_.inspect(desiredError)
	          : 'an error';
	
	    if (thrown) {
	      actuallyGot = ' but #{act} was thrown'
	    }
	
	    this.assert(
	        thrown === true
	      , 'expected #{this} to throw ' + expectedThrown + actuallyGot
	      , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
	      , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	      , (thrownError instanceof Error ? thrownError.toString() : thrownError)
	    );
	
	    flag(this, 'object', thrownError);
	  };
	
	  Assertion.addMethod('throw', assertThrows);
	  Assertion.addMethod('throws', assertThrows);
	  Assertion.addMethod('Throw', assertThrows);
	
	  /**
	   * ### .respondTo(method)
	   *
	   * Asserts that the object or class target will respond to a method.
	   *
	   *     Klass.prototype.bar = function(){};
	   *     expect(Klass).to.respondTo('bar');
	   *     expect(obj).to.respondTo('bar');
	   *
	   * To check if a constructor will respond to a static function,
	   * set the `itself` flag.
	   *
	   *     Klass.baz = function(){};
	   *     expect(Klass).itself.to.respondTo('baz');
	   *
	   * @name respondTo
	   * @param {String} method
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('respondTo', function (method, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , itself = flag(this, 'itself')
	      , context = ('function' === _.type(obj) && !itself)
	        ? obj.prototype[method]
	        : obj[method];
	
	    this.assert(
	        'function' === typeof context
	      , 'expected #{this} to respond to ' + _.inspect(method)
	      , 'expected #{this} to not respond to ' + _.inspect(method)
	    );
	  });
	
	  /**
	   * ### .itself
	   *
	   * Sets the `itself` flag, later used by the `respondTo` assertion.
	   *
	   *     function Foo() {}
	   *     Foo.bar = function() {}
	   *     Foo.prototype.baz = function() {}
	   *
	   *     expect(Foo).itself.to.respondTo('bar');
	   *     expect(Foo).itself.not.to.respondTo('baz');
	   *
	   * @name itself
	   * @api public
	   */
	
	  Assertion.addProperty('itself', function () {
	    flag(this, 'itself', true);
	  });
	
	  /**
	   * ### .satisfy(method)
	   *
	   * Asserts that the target passes a given truth test.
	   *
	   *     expect(1).to.satisfy(function(num) { return num > 0; });
	   *
	   * @name satisfy
	   * @param {Function} matcher
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('satisfy', function (matcher, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var result = matcher(obj);
	    this.assert(
	        result
	      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
	      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
	      , this.negate ? false : true
	      , result
	    );
	  });
	
	  /**
	   * ### .closeTo(expected, delta)
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     expect(1.5).to.be.closeTo(1, 0.5);
	   *
	   * @name closeTo
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('closeTo', function (expected, delta, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	
	    new Assertion(obj, msg).is.a('number');
	    if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
	      throw new Error('the arguments to closeTo must be numbers');
	    }
	
	    this.assert(
	        Math.abs(obj - expected) <= delta
	      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
	      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
	    );
	  });
	
	  function isSubsetOf(subset, superset, cmp) {
	    return subset.every(function(elem) {
	      if (!cmp) return superset.indexOf(elem) !== -1;
	
	      return superset.some(function(elem2) {
	        return cmp(elem, elem2);
	      });
	    })
	  }
	
	  /**
	   * ### .members(set)
	   *
	   * Asserts that the target is a superset of `set`,
	   * or that the target and `set` have the same strictly-equal (===) members.
	   * Alternately, if the `deep` flag is set, set members are compared for deep
	   * equality.
	   *
	   *     expect([1, 2, 3]).to.include.members([3, 2]);
	   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
	   *
	   *     expect([4, 2]).to.have.members([2, 4]);
	   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
	   *
	   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
	   *
	   * @name members
	   * @param {Array} set
	   * @param {String} message _optional_
	   * @api public
	   */
	
	  Assertion.addMethod('members', function (subset, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	
	    new Assertion(obj).to.be.an('array');
	    new Assertion(subset).to.be.an('array');
	
	    var cmp = flag(this, 'deep') ? _.eql : undefined;
	
	    if (flag(this, 'contains')) {
	      return this.assert(
	          isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to be a superset of #{act}'
	        , 'expected #{this} to not be a superset of #{act}'
	        , obj
	        , subset
	      );
	    }
	
	    this.assert(
	        isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to have the same members as #{act}'
	        , 'expected #{this} to not have the same members as #{act}'
	        , obj
	        , subset
	    );
	  });
	};


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, util) {
	  chai.expect = function (val, message) {
	    return new chai.Assertion(val, message);
	  };
	};
	


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, util) {
	  var Assertion = chai.Assertion;
	
	  function loadShould () {
	    // explicitly define this method as function as to have it's name to include as `ssfi`
	    function shouldGetter() {
	      if (this instanceof String || this instanceof Number) {
	        return new Assertion(this.constructor(this), null, shouldGetter);
	      } else if (this instanceof Boolean) {
	        return new Assertion(this == true, null, shouldGetter);
	      }
	      return new Assertion(this, null, shouldGetter);
	    }
	    function shouldSetter(value) {
	      // See https://github.com/chaijs/chai/issues/86: this makes
	      // `whatever.should = someValue` actually set `someValue`, which is
	      // especially useful for `global.should = require('chai').should()`.
	      //
	      // Note that we have to use [[DefineProperty]] instead of [[Put]]
	      // since otherwise we would trigger this very setter!
	      Object.defineProperty(this, 'should', {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    }
	    // modify Object.prototype to have `should`
	    Object.defineProperty(Object.prototype, 'should', {
	      set: shouldSetter
	      , get: shouldGetter
	      , configurable: true
	    });
	
	    var should = {};
	
	    should.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.equal(val2);
	    };
	
	    should.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.Throw(errt, errs);
	    };
	
	    should.exist = function (val, msg) {
	      new Assertion(val, msg).to.exist;
	    }
	
	    // negation
	    should.not = {}
	
	    should.not.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.not.equal(val2);
	    };
	
	    should.not.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.not.Throw(errt, errs);
	    };
	
	    should.not.exist = function (val, msg) {
	      new Assertion(val, msg).to.not.exist;
	    }
	
	    should['throw'] = should['Throw'];
	    should.not['throw'] = should.not['Throw'];
	
	    return should;
	  };
	
	  chai.should = loadShould;
	  chai.Should = loadShould;
	};


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	
	module.exports = function (chai, util) {
	
	  /*!
	   * Chai dependencies.
	   */
	
	  var Assertion = chai.Assertion
	    , flag = util.flag;
	
	  /*!
	   * Module export.
	   */
	
	  /**
	   * ### assert(expression, message)
	   *
	   * Write your own test expressions.
	   *
	   *     assert('foo' !== 'bar', 'foo is not bar');
	   *     assert(Array.isArray([]), 'empty arrays are arrays');
	   *
	   * @param {Mixed} expression to test for truthiness
	   * @param {String} message to display on error
	   * @name assert
	   * @api public
	   */
	
	  var assert = chai.assert = function (express, errmsg) {
	    var test = new Assertion(null, null, chai.assert);
	    test.assert(
	        express
	      , errmsg
	      , '[ negation message unavailable ]'
	    );
	  };
	
	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure. Node.js `assert` module-compatible.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @api public
	   */
	
	  assert.fail = function (actual, expected, message, operator) {
	    message = message || 'assert.fail()';
	    throw new chai.AssertionError(message, {
	        actual: actual
	      , expected: expected
	      , operator: operator
	    }, assert.fail);
	  };
	
	  /**
	   * ### .ok(object, [message])
	   *
	   * Asserts that `object` is truthy.
	   *
	   *     assert.ok('everything', 'everything is ok');
	   *     assert.ok(false, 'this will fail');
	   *
	   * @name ok
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @api public
	   */
	
	  assert.ok = function (val, msg) {
	    new Assertion(val, msg).is.ok;
	  };
	
	  /**
	   * ### .notOk(object, [message])
	   *
	   * Asserts that `object` is falsy.
	   *
	   *     assert.notOk('everything', 'this will fail');
	   *     assert.notOk(false, 'this will pass');
	   *
	   * @name notOk
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notOk = function (val, msg) {
	    new Assertion(val, msg).is.not.ok;
	  };
	
	  /**
	   * ### .equal(actual, expected, [message])
	   *
	   * Asserts non-strict equality (`==`) of `actual` and `expected`.
	   *
	   *     assert.equal(3, '3', '== coerces values to strings');
	   *
	   * @name equal
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.equal = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.equal);
	
	    test.assert(
	        exp == flag(test, 'object')
	      , 'expected #{this} to equal #{exp}'
	      , 'expected #{this} to not equal #{act}'
	      , exp
	      , act
	    );
	  };
	
	  /**
	   * ### .notEqual(actual, expected, [message])
	   *
	   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	   *
	   *     assert.notEqual(3, 4, 'these numbers are not equal');
	   *
	   * @name notEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notEqual = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.notEqual);
	
	    test.assert(
	        exp != flag(test, 'object')
	      , 'expected #{this} to not equal #{exp}'
	      , 'expected #{this} to equal #{act}'
	      , exp
	      , act
	    );
	  };
	
	  /**
	   * ### .strictEqual(actual, expected, [message])
	   *
	   * Asserts strict equality (`===`) of `actual` and `expected`.
	   *
	   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
	   *
	   * @name strictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.strictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.equal(exp);
	  };
	
	  /**
	   * ### .notStrictEqual(actual, expected, [message])
	   *
	   * Asserts strict inequality (`!==`) of `actual` and `expected`.
	   *
	   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
	   *
	   * @name notStrictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notStrictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.equal(exp);
	  };
	
	  /**
	   * ### .deepEqual(actual, expected, [message])
	   *
	   * Asserts that `actual` is deeply equal to `expected`.
	   *
	   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
	   *
	   * @name deepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.deepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.eql(exp);
	  };
	
	  /**
	   * ### .notDeepEqual(actual, expected, [message])
	   *
	   * Assert that `actual` is not deeply equal to `expected`.
	   *
	   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
	   *
	   * @name notDeepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notDeepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.eql(exp);
	  };
	
	  /**
	   * ### .isTrue(value, [message])
	   *
	   * Asserts that `value` is true.
	   *
	   *     var teaServed = true;
	   *     assert.isTrue(teaServed, 'the tea has been served');
	   *
	   * @name isTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isTrue = function (val, msg) {
	    new Assertion(val, msg).is['true'];
	  };
	
	  /**
	   * ### .isFalse(value, [message])
	   *
	   * Asserts that `value` is false.
	   *
	   *     var teaServed = false;
	   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
	   *
	   * @name isFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isFalse = function (val, msg) {
	    new Assertion(val, msg).is['false'];
	  };
	
	  /**
	   * ### .isNull(value, [message])
	   *
	   * Asserts that `value` is null.
	   *
	   *     assert.isNull(err, 'there was no error');
	   *
	   * @name isNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNull = function (val, msg) {
	    new Assertion(val, msg).to.equal(null);
	  };
	
	  /**
	   * ### .isNotNull(value, [message])
	   *
	   * Asserts that `value` is not null.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotNull(tea, 'great, time for tea!');
	   *
	   * @name isNotNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotNull = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(null);
	  };
	
	  /**
	   * ### .isUndefined(value, [message])
	   *
	   * Asserts that `value` is `undefined`.
	   *
	   *     var tea;
	   *     assert.isUndefined(tea, 'no tea defined');
	   *
	   * @name isUndefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isUndefined = function (val, msg) {
	    new Assertion(val, msg).to.equal(undefined);
	  };
	
	  /**
	   * ### .isDefined(value, [message])
	   *
	   * Asserts that `value` is not `undefined`.
	   *
	   *     var tea = 'cup of chai';
	   *     assert.isDefined(tea, 'tea has been defined');
	   *
	   * @name isDefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isDefined = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(undefined);
	  };
	
	  /**
	   * ### .isFunction(value, [message])
	   *
	   * Asserts that `value` is a function.
	   *
	   *     function serveTea() { return 'cup of tea'; };
	   *     assert.isFunction(serveTea, 'great, we can have tea now');
	   *
	   * @name isFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isFunction = function (val, msg) {
	    new Assertion(val, msg).to.be.a('function');
	  };
	
	  /**
	   * ### .isNotFunction(value, [message])
	   *
	   * Asserts that `value` is _not_ a function.
	   *
	   *     var serveTea = [ 'heat', 'pour', 'sip' ];
	   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
	   *
	   * @name isNotFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotFunction = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('function');
	  };
	
	  /**
	   * ### .isObject(value, [message])
	   *
	   * Asserts that `value` is an object (as revealed by
	   * `Object.prototype.toString`).
	   *
	   *     var selection = { name: 'Chai', serve: 'with spices' };
	   *     assert.isObject(selection, 'tea selection is an object');
	   *
	   * @name isObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isObject = function (val, msg) {
	    new Assertion(val, msg).to.be.a('object');
	  };
	
	  /**
	   * ### .isNotObject(value, [message])
	   *
	   * Asserts that `value` is _not_ an object.
	   *
	   *     var selection = 'chai'
	   *     assert.isNotObject(selection, 'tea selection is not an object');
	   *     assert.isNotObject(null, 'null is not an object');
	   *
	   * @name isNotObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotObject = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('object');
	  };
	
	  /**
	   * ### .isArray(value, [message])
	   *
	   * Asserts that `value` is an array.
	   *
	   *     var menu = [ 'green', 'chai', 'oolong' ];
	   *     assert.isArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isArray = function (val, msg) {
	    new Assertion(val, msg).to.be.an('array');
	  };
	
	  /**
	   * ### .isNotArray(value, [message])
	   *
	   * Asserts that `value` is _not_ an array.
	   *
	   *     var menu = 'green|chai|oolong';
	   *     assert.isNotArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isNotArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotArray = function (val, msg) {
	    new Assertion(val, msg).to.not.be.an('array');
	  };
	
	  /**
	   * ### .isString(value, [message])
	   *
	   * Asserts that `value` is a string.
	   *
	   *     var teaOrder = 'chai';
	   *     assert.isString(teaOrder, 'order placed');
	   *
	   * @name isString
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isString = function (val, msg) {
	    new Assertion(val, msg).to.be.a('string');
	  };
	
	  /**
	   * ### .isNotString(value, [message])
	   *
	   * Asserts that `value` is _not_ a string.
	   *
	   *     var teaOrder = 4;
	   *     assert.isNotString(teaOrder, 'order placed');
	   *
	   * @name isNotString
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotString = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('string');
	  };
	
	  /**
	   * ### .isNumber(value, [message])
	   *
	   * Asserts that `value` is a number.
	   *
	   *     var cups = 2;
	   *     assert.isNumber(cups, 'how many cups');
	   *
	   * @name isNumber
	   * @param {Number} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNumber = function (val, msg) {
	    new Assertion(val, msg).to.be.a('number');
	  };
	
	  /**
	   * ### .isNotNumber(value, [message])
	   *
	   * Asserts that `value` is _not_ a number.
	   *
	   *     var cups = '2 cups please';
	   *     assert.isNotNumber(cups, 'how many cups');
	   *
	   * @name isNotNumber
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotNumber = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('number');
	  };
	
	  /**
	   * ### .isBoolean(value, [message])
	   *
	   * Asserts that `value` is a boolean.
	   *
	   *     var teaReady = true
	   *       , teaServed = false;
	   *
	   *     assert.isBoolean(teaReady, 'is the tea ready');
	   *     assert.isBoolean(teaServed, 'has tea been served');
	   *
	   * @name isBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isBoolean = function (val, msg) {
	    new Assertion(val, msg).to.be.a('boolean');
	  };
	
	  /**
	   * ### .isNotBoolean(value, [message])
	   *
	   * Asserts that `value` is _not_ a boolean.
	   *
	   *     var teaReady = 'yep'
	   *       , teaServed = 'nope';
	   *
	   *     assert.isNotBoolean(teaReady, 'is the tea ready');
	   *     assert.isNotBoolean(teaServed, 'has tea been served');
	   *
	   * @name isNotBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.isNotBoolean = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('boolean');
	  };
	
	  /**
	   * ### .typeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
	   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
	   *     assert.typeOf('tea', 'string', 'we have a string');
	   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
	   *     assert.typeOf(null, 'null', 'we have a null');
	   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
	   *
	   * @name typeOf
	   * @param {Mixed} value
	   * @param {String} name
	   * @param {String} message
	   * @api public
	   */
	
	  assert.typeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.a(type);
	  };
	
	  /**
	   * ### .notTypeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is _not_ `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
	   *
	   * @name notTypeOf
	   * @param {Mixed} value
	   * @param {String} typeof name
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notTypeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.a(type);
	  };
	
	  /**
	   * ### .instanceOf(object, constructor, [message])
	   *
	   * Asserts that `value` is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new Tea('chai');
	   *
	   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
	   *
	   * @name instanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @api public
	   */
	
	  assert.instanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.instanceOf(type);
	  };
	
	  /**
	   * ### .notInstanceOf(object, constructor, [message])
	   *
	   * Asserts `value` is not an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new String('chai');
	   *
	   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
	   *
	   * @name notInstanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notInstanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.instanceOf(type);
	  };
	
	  /**
	   * ### .include(haystack, needle, [message])
	   *
	   * Asserts that `haystack` includes `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
	   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
	   *
	   * @name include
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @api public
	   */
	
	  assert.include = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.include).include(inc);
	  };
	
	  /**
	   * ### .notInclude(haystack, needle, [message])
	   *
	   * Asserts that `haystack` does not include `needle`. Works
	   * for strings and arrays.
	   *i
	   *     assert.notInclude('foobar', 'baz', 'string not include substring');
	   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
	   *
	   * @name notInclude
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notInclude = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.notInclude).not.include(inc);
	  };
	
	  /**
	   * ### .match(value, regexp, [message])
	   *
	   * Asserts that `value` matches the regular expression `regexp`.
	   *
	   *     assert.match('foobar', /^foo/, 'regexp matches');
	   *
	   * @name match
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @api public
	   */
	
	  assert.match = function (exp, re, msg) {
	    new Assertion(exp, msg).to.match(re);
	  };
	
	  /**
	   * ### .notMatch(value, regexp, [message])
	   *
	   * Asserts that `value` does not match the regular expression `regexp`.
	   *
	   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
	   *
	   * @name notMatch
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notMatch = function (exp, re, msg) {
	    new Assertion(exp, msg).to.not.match(re);
	  };
	
	  /**
	   * ### .property(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`.
	   *
	   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
	   *
	   * @name property
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */
	
	  assert.property = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.property(prop);
	  };
	
	  /**
	   * ### .notProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`.
	   *
	   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
	   *
	   * @name notProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop);
	  };
	
	  /**
	   * ### .deepProperty(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`, which can be a
	   * string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
	   *
	   * @name deepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */
	
	  assert.deepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop);
	  };
	
	  /**
	   * ### .notDeepProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`, which
	   * can be a string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
	   *
	   * @name notDeepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @api public
	   */
	
	  assert.notDeepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop);
	  };
	
	  /**
	   * ### .propertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`.
	   *
	   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
	   *
	   * @name propertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.propertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.property(prop, val);
	  };
	
	  /**
	   * ### .propertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`.
	   *
	   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
	   *
	   * @name propertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.propertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop, val);
	  };
	
	  /**
	   * ### .deepPropertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`. `property` can use dot- and bracket-notation for deep
	   * reference.
	   *
	   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
	   *
	   * @name deepPropertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.deepPropertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop, val);
	  };
	
	  /**
	   * ### .deepPropertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`. `property` can use dot- and
	   * bracket-notation for deep reference.
	   *
	   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
	   *
	   * @name deepPropertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @api public
	   */
	
	  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop, val);
	  };
	
	  /**
	   * ### .lengthOf(object, length, [message])
	   *
	   * Asserts that `object` has a `length` property with the expected value.
	   *
	   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
	   *     assert.lengthOf('foobar', 5, 'string has length of 6');
	   *
	   * @name lengthOf
	   * @param {Mixed} object
	   * @param {Number} length
	   * @param {String} message
	   * @api public
	   */
	
	  assert.lengthOf = function (exp, len, msg) {
	    new Assertion(exp, msg).to.have.length(len);
	  };
	
	  /**
	   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
	   *
	   * Asserts that `function` will throw an error that is an instance of
	   * `constructor`, or alternately that it will throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.throw(fn, 'function throws a reference error');
	   *     assert.throw(fn, /function throws a reference error/);
	   *     assert.throw(fn, ReferenceError);
	   *     assert.throw(fn, ReferenceError, 'function throws a reference error');
	   *     assert.throw(fn, ReferenceError, /function throws a reference error/);
	   *
	   * @name throws
	   * @alias throw
	   * @alias Throw
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @api public
	   */
	
	  assert.Throw = function (fn, errt, errs, msg) {
	    if ('string' === typeof errt || errt instanceof RegExp) {
	      errs = errt;
	      errt = null;
	    }
	
	    var assertErr = new Assertion(fn, msg).to.Throw(errt, errs);
	    return flag(assertErr, 'object');
	  };
	
	  /**
	   * ### .doesNotThrow(function, [constructor/regexp], [message])
	   *
	   * Asserts that `function` will _not_ throw an error that is an instance of
	   * `constructor`, or alternately that it will not throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.doesNotThrow(fn, Error, 'function does not throw');
	   *
	   * @name doesNotThrow
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @api public
	   */
	
	  assert.doesNotThrow = function (fn, type, msg) {
	    if ('string' === typeof type) {
	      msg = type;
	      type = null;
	    }
	
	    new Assertion(fn, msg).to.not.Throw(type);
	  };
	
	  /**
	   * ### .operator(val1, operator, val2, [message])
	   *
	   * Compares two values using `operator`.
	   *
	   *     assert.operator(1, '<', 2, 'everything is ok');
	   *     assert.operator(1, '>', 2, 'this will fail');
	   *
	   * @name operator
	   * @param {Mixed} val1
	   * @param {String} operator
	   * @param {Mixed} val2
	   * @param {String} message
	   * @api public
	   */
	
	  assert.operator = function (val, operator, val2, msg) {
	    if (!~['==', '===', '>', '>=', '<', '<=', '!=', '!=='].indexOf(operator)) {
	      throw new Error('Invalid operator "' + operator + '"');
	    }
	    var test = new Assertion(eval(val + operator + val2), msg);
	    test.assert(
	        true === flag(test, 'object')
	      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
	      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
	  };
	
	  /**
	   * ### .closeTo(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name closeTo
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @api public
	   */
	
	  assert.closeTo = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.closeTo(exp, delta);
	  };
	
	  /**
	   * ### .sameMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members.
	   * Order is not taken into account.
	   *
	   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
	   *
	   * @name sameMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @api public
	   */
	
	  assert.sameMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.members(set2);
	  }
	
	  /**
	   * ### .includeMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset`.
	   * Order is not taken into account.
	   *
	   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
	   *
	   * @name includeMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @api public
	   */
	
	  assert.includeMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.members(subset);
	  }
	
	  /*!
	   * Undocumented / untested
	   */
	
	  assert.ifError = function (val, msg) {
	    new Assertion(val, msg).to.not.be.ok;
	  };
	
	  /*!
	   * Aliases.
	   */
	
	  (function alias(name, as){
	    assert[as] = assert[name];
	    return alias;
	  })
	  ('Throw', 'throw')
	  ('Throw', 'throws');
	};


/***/ },
/* 62 */,
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * assertion-error
	 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Return a function that will copy properties from
	 * one object to another excluding any originally
	 * listed. Returned function will create a new `{}`.
	 *
	 * @param {String} excluded properties ...
	 * @return {Function}
	 */
	
	function exclude () {
	  var excludes = [].slice.call(arguments);
	
	  function excludeProps (res, obj) {
	    Object.keys(obj).forEach(function (key) {
	      if (!~excludes.indexOf(key)) res[key] = obj[key];
	    });
	  }
	
	  return function extendExclude () {
	    var args = [].slice.call(arguments)
	      , i = 0
	      , res = {};
	
	    for (; i < args.length; i++) {
	      excludeProps(res, args[i]);
	    }
	
	    return res;
	  };
	};
	
	/*!
	 * Primary Exports
	 */
	
	module.exports = AssertionError;
	
	/**
	 * ### AssertionError
	 *
	 * An extension of the JavaScript `Error` constructor for
	 * assertion and validation scenarios.
	 *
	 * @param {String} message
	 * @param {Object} properties to include (optional)
	 * @param {callee} start stack function (optional)
	 */
	
	function AssertionError (message, _props, ssf) {
	  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
	    , props = extend(_props || {});
	
	  // default values
	  this.message = message || 'Unspecified AssertionError';
	  this.showDiff = false;
	
	  // copy from properties
	  for (var key in props) {
	    this[key] = props[key];
	  }
	
	  // capture stack trace
	  ssf = ssf || arguments.callee;
	  if (ssf && Error.captureStackTrace) {
	    Error.captureStackTrace(this, ssf);
	  }
	}
	
	/*!
	 * Inherit from Error.prototype
	 */
	
	AssertionError.prototype = Object.create(Error.prototype);
	
	/*!
	 * Statically set name
	 */
	
	AssertionError.prototype.name = 'AssertionError';
	
	/*!
	 * Ensure correct constructor
	 */
	
	AssertionError.prototype.constructor = AssertionError;
	
	/**
	 * Allow errors to be converted to JSON for static transfer.
	 *
	 * @param {Boolean} include stack (default: `true`)
	 * @return {Object} object that can be `JSON.stringify`
	 */
	
	AssertionError.prototype.toJSON = function (stack) {
	  var extend = exclude('constructor', 'toJSON', 'stack')
	    , props = extend({ name: this.name }, this);
	
	  // include stack if exists and not turned off
	  if (false !== stack && this.stack) {
	    props.stack = this.stack;
	  }
	
	  return props;
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// Utility functions for ES6 Promises.
	
	module.exports = function(Promise) {
	  "use strict";
	
	  if (!Promise) { Promise = global.Promise; }
	  // Use Promise implementation from es6-shim if there isn't already one
	  // installed.
	  if (!Promise) { __webpack_require__(92); Promise = global.Promise; }
	
	  // ---------- collections --------------
	
	  // Allow Promise.all to accept a promise for an array (or iterable).
	  Promise.prototype.all = function() {
	    var P = this.constructor || Promise;
	    return this.then(function(value) {
	      return P.all(value);
	    });
	  };
	
	  // Like `Promise.all` but generate array from varargs
	  Promise.join = function() {
	    var P = this || Promise;
	    return P.all(arguments);
	  };
	
	  // Applies the `callback` to the promised value of each element of the
	  // promised array.  Returns a promise for an array of values; that is,
	  // it implicitly applies `Promise.all` to resolve all promises returned
	  // by the mapping function.
	  Promise.prototype.map = function(callback, thisArg) {
	    var P = this.constructor || Promise;
	    return P.map(this, callback, thisArg);
	  };
	
	  var arrayMap = Array.prototype.map;
	  Promise.map = function(pArray, callback, thisArg) {
	    var P = this || Promise;
	    return P.resolve(pArray).then(function(arr) {
	      return P.all(arrayMap.call(arr, function(pElem, index, arr_) {
	        return P.resolve(pElem).then(function(elem) {
	          var t = (thisArg === undefined) ? this : thisArg;
	          return callback.call(t, elem, index, arr_);
	        });
	      }));
	    });
	  };
	
	  // Applies the `callback` to the promised value of each element of
	  // the promised array, and constructs a new array of all the values
	  // for which callback returns a (promise of a) true value.
	  Promise.prototype.filter = function(callback, thisArg) {
	    var P = this.constructor || Promise;
	    return P.filter(this, callback, thisArg);
	  };
	
	  var arrayFilter = Array.prototype.filter;
	  Promise.filter = function(pArray, callback, thisArg) {
	    var P = this || Promise;
	    return P.resolve(pArray).then(function(arr) {
	      var f = new Array(arr.length);
	      return P.all(arrayMap.call(arr, function(pElem, index, arr_) {
	        return P.resolve(pElem).then(function(elem) {
	          var t = (thisArg === undefined) ? this : thisArg;
	          var pBool = callback.call(t, elem, index, arr_);
	          return P.resolve(pBool).then(function(bool) {
	            f[index] = bool;
	            return elem;
	          });
	        });
	      })).then(function(resArr) {
	        return resArr.filter(function(elem, index) { return f[index]; });
	      });
	    });
	  };
	
	  // Like `Promise.all` but for object properties instead of array items.
	  Promise.prototype.props = function() {
	    var P = this.constructor || Promise;
	    return P.props(this);
	  };
	
	  Promise.props = function(pObj) {
	    var P = this || Promise;
	    return P.resolve(pObj).then(function(obj) {
	      var result = {};
	      var keys = Object.keys(obj);
	      if (Object(obj) !== obj) {
	        // Object.keys accepts strings, numbers, etc in ES6.
	        throw new TypeError('not an object');
	      }
	      return P.all(keys.map(function(k) { return obj[k]; })).
	        then(function(values) {
	          keys.forEach(function(k, i) {
	            result[k] = values[i];
	          });
	          return result;
	        });
	    });
	  };
	
	  // Allow Promise.race to accept a promise for an array (or iterable).
	  Promise.prototype.race = function() {
	    var P = this.constructor || Promise;
	    return this.then(function(value) {
	      return P.race(value);
	    });
	  };
	
	  // helper for reduce/reduceAll
	  var reducer = function(P, callback) {
	    return function(pPrev, pCurrent, index, arr) {
	      return P.resolve(pPrev).then(function(prev) {
	        return P.resolve(pCurrent).then(function(current) {
	          return callback.call(this, prev, current, index, arr);
	        });
	      });
	    };
	  };
	
	  // Reduce left-to-right an array which contains promises.
	  Promise.prototype.reduce = function(callback) {
	    var P = this.constructor || Promise;
	    if (arguments.length <= 1) {
	      return P.reduce(this, callback);
	    } else {
	      return P.reduce(this, callback, arguments[1]);
	    }
	  };
	
	  var arrayReduce = Array.prototype.reduce;
	  Promise.reduce = function(pArray, callback) {
	    var P = this || Promise;
	    if (arguments.length <= 2) {
	      return P.resolve(pArray).then(function(arr) {
	        return arrayReduce.call(arr, reducer(P, callback));
	      });
	    } else {
	      var initialValue = P.resolve(arguments[2]);
	      return P.resolve(pArray).then(function(arr) {
	        return arrayReduce.call(arr, reducer(P, callback), initialValue);
	      });
	    }
	  };
	
	  // Reduce right-to-left an array which contains promises.
	  Promise.prototype.reduceRight = function(callback) {
	    var P = this.constructor || Promise;
	    if (arguments.length <= 1) {
	      return P.reduceRight(this, callback);
	    } else {
	      return P.reduceRight(this, callback, arguments[1]);
	    }
	  };
	
	  var arrayReduceRight = Array.prototype.reduceRight;
	  Promise.reduceRight = function(pArray, callback) {
	    var P = this || Promise;
	    if (arguments.length <= 2) {
	      return P.resolve(pArray).then(function(arr) {
	        return arrayReduceRight.call(arr, reducer(P, callback));
	      });
	    } else {
	      var initialValue = P.resolve(arguments[2]);
	      return P.resolve(pArray).then(function(arr) {
	        return arrayReduceRight.call(arr, reducer(P, callback), initialValue);
	      });
	    }
	  };
	
	  Promise.prototype.spread = function(onFulfilled, onRejected) {
	    var P = this.constructor || Promise;
	    var f = onFulfilled ? function(pArgs) {
	      return P.all(pArgs).then(function(args) {
	        return onFulfilled.apply(this, args);
	      });
	    } : undefined;
	    var r = onRejected ? function(pArgs) {
	      return P.all(pArgs).then(function(args) {
	        return onRejected.apply(this, args);
	      });
	    } : undefined;
	    return this.then(f, r);
	  };
	
	  // ---------- Miscellaneous utility functions --------------
	
	  // compatibility with q/when/jquery/etc.
	  // use of this interface is discouraged.
	  var Deferred = function Deferred() { };
	  Object.defineProperties(Deferred.prototype, {
	    resolver: {
	      enumerable: true,
	      get: function() {
	        return { resolve: this.resolve, reject: this.reject };
	      }
	    },
	    callback: {
	      enumerable: true,
	      get: function() {
	        var resolve = this.resolve, reject = this.reject;
	        return function(err, value) {
	          if (err) { return reject(err); }
	          return resolve(value);
	        };
	      }
	    }
	  });
	  Promise.defer = function() {
	    var P = this || Promise;
	    var deferred = new Deferred();
	    deferred.promise = new P(function(resolve, reject) {
	      deferred.resolve = resolve;
	      deferred.reject = reject;
	    });
	    return deferred;
	  };
	
	  Promise.prototype.call = function(propertyName) {
	    var P = this.constructor || Promise;
	    var pArgs = Array.prototype.slice.call(arguments, 1);
	    return this.then(function(obj) {
	      return P.all(pArgs).then(function(args) {
	        return obj[propertyName].apply(obj, args);
	      });
	    });
	  };
	
	  Promise.prototype.get = function(propertyName) {
	    return this.then(function(obj) {
	      return obj[propertyName];
	    });
	  };
	
	  Promise.prototype['return'] = function(v) {
	    return this.then(function() { return v; });
	  };
	
	  Promise.prototype.tap = function(handler) {
	    var P = this.constructor || Promise;
	    return this.then(function(v) {
	      return P.resolve(handler(v))['return'](v);
	    });
	  };
	
	  Promise.prototype['throw'] = function(e) {
	    // ensure that e is resolved, if it is a promise.
	    return this['return'](e).then(function(ee) { throw ee; });
	  };
	
	  Promise.prototype.done = function() {
	    if (arguments.length > 0) {
	      // compatibility
	      return this.then.apply(this, arguments).done();
	    }
	    this['catch'](function(e) {
	      // throw from new scope to ensure the exception will be unhandled
	      setTimeout(function() { throw e; }, 0);
	    });
	    // not chainable!
	  };
	
	  // ---------- Timeouts and delays --------------
	
	  Promise.prototype.delay = function(ms) {
	    var P = this.constructor || Promise;
	    return P.delay(this, ms);
	  };
	
	  Promise.delay = function(pValue, ms) {
	    var P = this || Promise;
	    if (arguments.length===1) {
	      ms = pValue;
	      pValue = undefined;
	    }
	    return P.resolve(pValue).then(function(value) {
	      return new P(function(resolve, reject) {
	        setTimeout(function() { resolve(value); }, ms);
	      });
	    });
	  };
	
	  var TimeoutError = Promise.TimeoutError = function(message) {
	    this.message = (typeof message === 'string') ? message : 'timeout';
	    this.name = 'TimeoutError';
	    if (Error.captureStackTrace) {
	      Error.captureStackTrace(this, this.constructor);
	    }
	  };
	  TimeoutError.prototype = Object.create(Error.prototype);
	
	  var makeRejector = function(reject, message, ms) {
	    // create this function in an outer scope so that we don't inadvertently
	    // keep a reference to the promise here.  Perhaps this is overkill.
	    var id = setTimeout(function() { reject(new TimeoutError(message)); }, ms);
	    return function() { clearTimeout(id); };
	  };
	  Promise.prototype.timeout = function(ms, message) {
	    var P = this.constructor || Promise;
	    var promise = this;
	    return new P(function(resolve, reject) {
	      promise.then(resolve, reject);
	      var cleanup = makeRejector(reject, message, ms);
	      promise.then(cleanup, cleanup);
	    });
	  };
	
	  // ---------- try/caught/finally --------------
	
	  Promise['try'] = function(fn, ctx /* ..args */) {
	    var P = this || Promise;
	    return P.all(arguments).then(function(args) {
	      var fn = args[0], ctx = args[1], rest = args.slice(2);
	      return new P(function(resolve, reject) {
	        try {
	          resolve(fn.apply(ctx, rest));
	        } catch (e) {
	          reject(e);
	        }
	      });
	    });
	  };
	
	  Promise.prototype.caught = function(predicate, handler) {
	    var promise = this;
	    if (arguments.length<=1) { return promise['catch'](predicate); }
	    var predicates = Array.prototype.slice.call(arguments);
	    handler = predicates.pop();
	    predicates = predicates.map(function(v) {
	      /* jshint eqnull: true */
	      var isErrorType = (v === Error) ||
	        (v != null && v.prototype instanceof Error);
	      if (isErrorType) {
	        return function(e) { return (e instanceof v); };
	      } else if (typeof v === 'function') {
	        return function(e) { return !!v(e); };
	      } else {
	        return function(e) {
	          throw new TypeError('caught filter must inherit from Error '+
	                              'or be a simple predicate function');
	        };
	      }
	    });
	    return promise['catch'](function(e) {
	      for (var i=0; i<predicates.length; i++) {
	        if (predicates[i](e)) {
	          return handler.call(this, e);
	        }
	      }
	      // re-throw
	      throw e;
	    });
	  };
	
	  // XXX The return semantics are a bit funny.
	  // eg:
	  // > f = function(g, h) { try { return g(); } finally { return h(); } };
	  // > f(function(){return 1;}, function(){return 2;})
	  // 2
	  // > f(function(){return 1;}, function(){throw new Error('b');})
	  // Error: b
	  // This method would return '1' in the first case (but 'b' in the second).
	  Promise.prototype['finally'] = function(handler) {
	    var promise = this;
	    var P = this.constructor || Promise;
	    return new P(function(resolve, reject) {
	      promise.then(function(value) {
	        var cb = function() { resolve(value); };
	        P.resolve().then(handler).then(cb, reject);
	      }, function(reason) {
	        var cb = function() { reject(reason); };
	        P.resolve().then(handler).then(cb, reject);
	      });
	    });
	  };
	
	  // ---------- wrappers and function-writing helpers --------------
	
	  // Transparently handle synchronous exceptions and early returns.
	  // This is like `Q.promised`.
	  Promise.method = function(fn) {
	    var P = this || Promise;
	    if (typeof fn !== 'function') {
	      throw new TypeError('must wrap a function'); // fail fast
	    }
	    return function() {
	      var self = this;
	      var args = [ fn, this ];
	      Array.prototype.push.apply(args, arguments);
	      return P['try'].apply(P, args);
	    };
	  };
	
	  // Register a node-style callback on this promise.
	  Promise.prototype.nodify = function(callback) {
	    var promise = this;
	    if (callback) {
	      var queueThrow = function(e) {
	        // don't let this exception get swallowed by the Promise handlers
	        setTimeout(function() { throw e; }, 0);
	      };
	      promise.then(function(v) {
	        try {
	          callback.call(this, null, v);
	        } catch (e) {
	          queueThrow(e);
	        }
	      }, function(r) {
	        try {
	          callback.call(this, r);
	        } catch (e) {
	          queueThrow(e);
	        }
	      });
	    }
	    return promise;
	  };
	
	  // Returns a function that wraps a given nodeFunction
	  Promise.promisify = function(nodeFunction, names, optThis) {
	    var P = this || Promise;
	    var hasThis = (arguments.length > 2);
	    return function() {
	      var self = hasThis ? optThis : this;
	      var args = Array.prototype.slice.call(arguments);
	      return new P(function(resolve, reject) {
	        args.push(function(e, v) {
	          if (e) {
	            reject(e);
	          } else if (names === true) {
	            resolve(Array.prototype.slice.call(arguments, 1));
	          } else if (names) {
	            var value = {};
	            for (var index in names) {
	              value[names[index]] = arguments[(+index) + 1];
	            }
	            resolve(value);
	          } else {
	            resolve(v);
	          }
	        });
	        try {
	          nodeFunction.apply(self, args);
	        } catch(e) {
	          reject(e);
	        }
	      });
	    };
	  };
	
	  // Guards: limit the amount of parallelism.
	
	  // Implementation borrowed from:
	  // https://github.com/cujojs/when/blob/master/guard.js
	  // Authors: Brian Cavalier, John Hann, Sakari Jokinen
	  // docs at: https://github.com/cujojs/when/blob/master/docs/api.md#whenguard
	
	  /**
	   * Creates a guarded version of f that can only be entered when the supplied
	   * condition allows.
	   * @param {function} condition represents a critical section that may only
	   *  be entered when allowed by the condition
	   * @param {function} f function to guard
	   * @returns {function} guarded version of f
	   */
	  Promise.guard = function(condition, fn) {
	    var P = this || Promise;
	    if (typeof condition === 'number') {
	      condition = P.guard.n(condition);
	    }
	    return function() {
	      var self, args;
	
	      self = this;
	      args = arguments;
	
	      return P.resolve(condition()).then(function(exit) {
	        return P.resolve(fn.apply(self, args)).finally(exit);
	      });
	    };
	  };
	
	  /**
	   * Creates a condition that allows only n simultaneous executions
	   * of a guarded function
	   * @param {number} allowed number of allowed simultaneous executions
	   * @returns {function} condition function which returns a promise that
	   *  fulfills when the critical section may be entered.  The fulfillment
	   *  value is a function ("notifyExit") that must be called when the critical
	   *  section has been exited.
	   */
	  Promise.guard.n = function (allowed) {
	    var count, waiting;
	
	    count = 0;
	    waiting = [];
	
	    var exit = function() {
	      if (count > 0) {
	        count--;
	      }
	      if(waiting.length) {
	        waiting.shift()(exit);
	      }
	    };
	
	    return function enter() {
	      return new Promise(function(resolve) {
	        if(count < allowed) {
	          resolve(exit);
	        } else {
	          waiting.push(resolve);
	        }
	        count += 1;
	      });
	    };
	  };
	
	  // Promise#bind()
	  // Idea borrowed from bluebird.
	  Promise.bind = function(newThis) {
	    return this.resolve().bind(newThis);
	  };
	
	  Promise.prototype.bind = function(newThis) {
	    var SuperPromise = this._bindSuper || this.constructor || Promise;
	    // create a new Promise subclass (this is less cumbersome in es6, sigh)
	    var BoundPromise = function(exec) {
	      return SuperPromise.call(this, exec);
	    };
	    Object.setPrototypeOf(BoundPromise, SuperPromise);
	    BoundPromise.prototype = Object.create(SuperPromise.prototype);
	    BoundPromise.prototype.constructor = BoundPromise;
	    BoundPromise.prototype._bindSuper = SuperPromise;
	
	    BoundPromise.prototype.then = (function(superThen) {
	      return function(f, r) {
	        var ff = f && f.bind(newThis);
	        var rr = r && r.bind(newThis);
	        return superThen.call(this, ff, rr);
	      };
	    })(BoundPromise.prototype.then);
	    return newThis ? BoundPromise.resolve(this) : SuperPromise.resolve(this);
	  };
	
	  // Generators.
	  // Implementation borrowed from Q.async()
	  Promise.async = function(makeGenerator) {
	    var P = this || Promise;
	    return function() {
	      var generator, callback, errback;
	      // when verb is "send", arg is a value
	      // when verb is "throw", arg is an exception
	      function continuer(verb, arg) {
	        var result;
	        try {
	          result = generator[verb](arg);
	        } catch (exception) {
	          return P.reject(exception);
	        }
	        // xxx: possibly check for array-like (or iterable) value and
	        // use Promise.all() before returning/invoking callback?
	        if (result.done) {
	          return result.value;
	        } else {
	          return P.resolve(result.value).then(callback, errback);
	        }
	      }
	      generator = makeGenerator.apply(this, arguments);
	      callback = continuer.bind(continuer, "next");
	      errback = continuer.bind(continuer, "throw");
	      return callback();
	    };
	  };
	
	  return Promise;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var flag = __webpack_require__(72);
	
	/**
	 * # test(object, expression)
	 *
	 * Test and object for expression.
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 */
	
	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , expr = args[0];
	  return negate ? !expr : expr;
	};


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - type utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Detectable javascript natives
	 */
	
	var natives = {
	    '[object Arguments]': 'arguments'
	  , '[object Array]': 'array'
	  , '[object Date]': 'date'
	  , '[object Function]': 'function'
	  , '[object Number]': 'number'
	  , '[object RegExp]': 'regexp'
	  , '[object String]': 'string'
	};
	
	/**
	 * ### type(object)
	 *
	 * Better implementation of `typeof` detection that can
	 * be used cross-browser. Handles the inconsistencies of
	 * Array, `null`, and `undefined` detection.
	 *
	 *     utils.type({}) // 'object'
	 *     utils.type(null) // `null'
	 *     utils.type(undefined) // `undefined`
	 *     utils.type([]) // `array`
	 *
	 * @param {Mixed} object to detect type of
	 * @name type
	 * @api private
	 */
	
	module.exports = function (obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var flag = __webpack_require__(72)
	  , getActual = __webpack_require__(69)
	  , inspect = __webpack_require__(70)
	  , objDisplay = __webpack_require__(71);
	
	/**
	 * ### .getMessage(object, message, negateMessage)
	 *
	 * Construct the error message based on flags
	 * and template tags. Template tags will return
	 * a stringified inspection of the object referenced.
	 *
	 * Message template tags:
	 * - `#{this}` current asserted object
	 * - `#{act}` actual value
	 * - `#{exp}` expected value
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @name getMessage
	 * @api public
	 */
	
	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , val = flag(obj, 'object')
	    , expected = args[3]
	    , actual = getActual(obj, args)
	    , msg = negate ? args[2] : args[1]
	    , flagMsg = flag(obj, 'message');
	
	  if(typeof msg === "function") msg = msg();
	  msg = msg || '';
	  msg = msg
	    .replace(/#{this}/g, objDisplay(val))
	    .replace(/#{act}/g, objDisplay(actual))
	    .replace(/#{exp}/g, objDisplay(expected));
	
	  return flagMsg ? flagMsg + ': ' + msg : msg;
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getActual utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * # getActual(object, [actual])
	 *
	 * Returns the `actual` value for an Assertion
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 */
	
	module.exports = function (obj, args) {
	  return args.length > 4 ? args[4] : obj._obj;
	};


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// This is (almost) directly from Node.js utils
	// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js
	
	var getName = __webpack_require__(75);
	var getProperties = __webpack_require__(89);
	var getEnumerableProperties = __webpack_require__(90);
	
	module.exports = inspect;
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
	 *    properties of objects.
	 * @param {Number} depth Depth in which to descend in object. Default is 2.
	 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
	 *    output. Default is false (no coloring).
	 */
	function inspect(obj, showHidden, depth, colors) {
	  var ctx = {
	    showHidden: showHidden,
	    seen: [],
	    stylize: function (str) { return str; }
	  };
	  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
	}
	
	// Returns true if object is a DOM element.
	var isDOMElement = function (object) {
	  if (typeof HTMLElement === 'object') {
	    return object instanceof HTMLElement;
	  } else {
	    return object &&
	      typeof object === 'object' &&
	      object.nodeType === 1 &&
	      typeof object.nodeName === 'string';
	  }
	};
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (value && typeof value.inspect === 'function' &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes);
	    if (typeof ret !== 'string') {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // If this is a DOM element, try to get the outer HTML.
	  if (isDOMElement(value)) {
	    if ('outerHTML' in value) {
	      return value.outerHTML;
	      // This value does not have an outerHTML attribute,
	      //   it could still be an XML element
	    } else {
	      // Attempt to serialize it
	      try {
	        if (document.xmlVersion) {
	          var xmlSerializer = new XMLSerializer();
	          return xmlSerializer.serializeToString(value);
	        } else {
	          // Firefox 11- do not support outerHTML
	          //   It does, however, support innerHTML
	          //   Use the following to render the element
	          var ns = "http://www.w3.org/1999/xhtml";
	          var container = document.createElementNS(ns, '_');
	
	          container.appendChild(value.cloneNode(false));
	          html = container.innerHTML
	            .replace('><', '>' + value.innerHTML + '<');
	          container.innerHTML = '';
	          return html;
	        }
	      } catch (err) {
	        // This could be a non-native DOM implementation,
	        //   continue with the normal flow:
	        //   printing the element as if it is an object.
	      }
	    }
	  }
	
	  // Look up the keys of the object.
	  var visibleKeys = getEnumerableProperties(value);
	  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;
	
	  // Some type of object without properties can be shortcutted.
	  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
	  // a `stack` plus `description` property; ignore those for consistency.
	  if (keys.length === 0 || (isError(value) && (
	      (keys.length === 1 && keys[0] === 'stack') ||
	      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
	     ))) {
	    if (typeof value === 'function') {
	      var name = getName(value);
	      var nameSuffix = name ? ': ' + name : '';
	      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (typeof value === 'function') {
	    var name = getName(value);
	    var nameSuffix = name ? ': ' + name : '';
	    base = ' [Function' + nameSuffix + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    return formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  switch (typeof value) {
	    case 'undefined':
	      return ctx.stylize('undefined', 'undefined');
	
	    case 'string':
	      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                               .replace(/'/g, "\\'")
	                                               .replace(/\\"/g, '"') + '\'';
	      return ctx.stylize(simple, 'string');
	
	    case 'number':
	      if (value === 0 && (1/value) === -Infinity) {
	        return ctx.stylize('-0', 'number');
	      }
	      return ctx.stylize('' + value, 'number');
	
	    case 'boolean':
	      return ctx.stylize('' + value, 'boolean');
	  }
	  // For some reason typeof null is "object", so special case here.
	  if (value === null) {
	    return ctx.stylize('null', 'null');
	  }
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str;
	  if (value.__lookupGetter__) {
	    if (value.__lookupGetter__(key)) {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Getter/Setter]', 'special');
	      } else {
	        str = ctx.stylize('[Getter]', 'special');
	      }
	    } else {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Setter]', 'special');
	      }
	    }
	  }
	  if (visibleKeys.indexOf(key) < 0) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(value[key]) < 0) {
	      if (recurseTimes === null) {
	        str = formatValue(ctx, value[key], null);
	      } else {
	        str = formatValue(ctx, value[key], recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (typeof name === 'undefined') {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	function isArray(ar) {
	  return Array.isArray(ar) ||
	         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
	}
	
	function isRegExp(re) {
	  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
	}
	
	function isDate(d) {
	  return typeof d === 'object' && objectToString(d) === '[object Date]';
	}
	
	function isError(e) {
	  return typeof e === 'object' && objectToString(e) === '[object Error]';
	}
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var inspect = __webpack_require__(70);
	var config = __webpack_require__(55);
	
	/**
	 * ### .objDisplay (object)
	 *
	 * Determines if an object or an array matches
	 * criteria to be inspected in-line for error
	 * messages or should be truncated.
	 *
	 * @param {Mixed} javascript object to inspect
	 * @name objDisplay
	 * @api public
	 */
	
	module.exports = function (obj) {
	  var str = inspect(obj)
	    , type = Object.prototype.toString.call(obj);
	
	  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
	    if (type === '[object Function]') {
	      return !obj.name || obj.name === ''
	        ? '[Function]'
	        : '[Function: ' + obj.name + ']';
	    } else if (type === '[object Array]') {
	      return '[ Array(' + obj.length + ') ]';
	    } else if (type === '[object Object]') {
	      var keys = Object.keys(obj)
	        , kstr = keys.length > 2
	          ? keys.splice(0, 2).join(', ') + ', ...'
	          : keys.join(', ');
	      return '{ Object (' + kstr + ') }';
	    } else {
	      return str;
	    }
	  } else {
	    return str;
	  }
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### flag(object ,key, [value])
	 *
	 * Get or set a flag value on an object. If a
	 * value is provided it will be set, else it will
	 * return the currently set value or `undefined` if
	 * the value is not set.
	 *
	 *     utils.flag(this, 'foo', 'bar'); // setter
	 *     utils.flag(this, 'foo'); // getter, returns `bar`
	 *
	 * @param {Object} object (constructed Assertion
	 * @param {String} key
	 * @param {Mixed} value (optional)
	 * @name flag
	 * @api private
	 */
	
	module.exports = function (obj, key, value) {
	  var flags = obj.__flags || (obj.__flags = Object.create(null));
	  if (arguments.length === 3) {
	    flags[key] = value;
	  } else {
	    return flags[key];
	  }
	};


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - transferFlags utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### transferFlags(assertion, object, includeAll = true)
	 *
	 * Transfer all the flags for `assertion` to `object`. If
	 * `includeAll` is set to `false`, then the base Chai
	 * assertion flags (namely `object`, `ssfi`, and `message`)
	 * will not be transferred.
	 *
	 *
	 *     var newAssertion = new Assertion();
	 *     utils.transferFlags(assertion, newAssertion);
	 *
	 *     var anotherAsseriton = new Assertion(myObj);
	 *     utils.transferFlags(assertion, anotherAssertion, false);
	 *
	 * @param {Assertion} assertion the assertion to transfer the flags from
	 * @param {Object} object the object to transfer the flags too; usually a new assertion
	 * @param {Boolean} includeAll
	 * @name getAllFlags
	 * @api private
	 */
	
	module.exports = function (assertion, object, includeAll) {
	  var flags = assertion.__flags || (assertion.__flags = Object.create(null));
	
	  if (!object.__flags) {
	    object.__flags = Object.create(null);
	  }
	
	  includeAll = arguments.length === 3 ? includeAll : true;
	
	  for (var flag in flags) {
	    if (includeAll ||
	        (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
	      object.__flags[flag] = flags[flag];
	    }
	  }
	};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */
	
	/**
	 * ### .getPathValue(path, object)
	 *
	 * This allows the retrieval of values in an
	 * object given a string path.
	 *
	 *     var obj = {
	 *         prop1: {
	 *             arr: ['a', 'b', 'c']
	 *           , str: 'Hello'
	 *         }
	 *       , prop2: {
	 *             arr: [ { nested: 'Universe' } ]
	 *           , str: 'Hello again!'
	 *         }
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     getPathValue('prop1.str', obj); // Hello
	 *     getPathValue('prop1.att[2]', obj); // b
	 *     getPathValue('prop2.arr[0].nested', obj); // Universe
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} value or `undefined`
	 * @name getPathValue
	 * @api public
	 */
	
	var getPathValue = module.exports = function (path, obj) {
	  var parsed = parsePath(path);
	  return _getPathValue(parsed, obj);
	};
	
	/*!
	 * ## parsePath(path)
	 *
	 * Helper function used to parse string object
	 * paths. Use in conjunction with `_getPathValue`.
	 *
	 *      var parsed = parsePath('myobject.property.subprop');
	 *
	 * ### Paths:
	 *
	 * * Can be as near infinitely deep and nested
	 * * Arrays are also valid using the formal `myobject.document[3].property`.
	 *
	 * @param {String} path
	 * @returns {Object} parsed
	 * @api private
	 */
	
	function parsePath (path) {
	  var str = path.replace(/\[/g, '.[')
	    , parts = str.match(/(\\\.|[^.]+?)+/g);
	  return parts.map(function (value) {
	    var re = /\[(\d+)\]$/
	      , mArr = re.exec(value)
	    if (mArr) return { i: parseFloat(mArr[1]) };
	    else return { p: value };
	  });
	};
	
	/*!
	 * ## _getPathValue(parsed, obj)
	 *
	 * Helper companion function for `.parsePath` that returns
	 * the value located at the parsed address.
	 *
	 *      var value = getPathValue(parsed, obj);
	 *
	 * @param {Object} parsed definition from `parsePath`.
	 * @param {Object} object to search against
	 * @returns {Object|Undefined} value
	 * @api private
	 */
	
	function _getPathValue (parsed, obj) {
	  var tmp = obj
	    , res;
	  for (var i = 0, l = parsed.length; i < l; i++) {
	    var part = parsed[i];
	    if (tmp) {
	      if ('undefined' !== typeof part.p)
	        tmp = tmp[part.p];
	      else if ('undefined' !== typeof part.i)
	        tmp = tmp[part.i];
	      if (i == (l - 1)) res = tmp;
	    } else {
	      res = undefined;
	    }
	  }
	  return res;
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getName utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * # getName(func)
	 *
	 * Gets the name of a function, in a cross-browser way.
	 *
	 * @param {Function} a function (usually a constructor)
	 */
	
	module.exports = function (func) {
	  if (func.name) return func.name;
	
	  var match = /^\s?function ([^(]*)\(/.exec(func);
	  return match && match[1] ? match[1] : "";
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### addProperty (ctx, name, getter)
	 *
	 * Adds a property to the prototype of an object.
	 *
	 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.instanceof(Foo);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.foo;
	 *
	 * @param {Object} ctx object to which the property is added
	 * @param {String} name of property to add
	 * @param {Function} getter function to be used for name
	 * @name addProperty
	 * @api public
	 */
	
	module.exports = function (ctx, name, getter) {
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        var result = getter.call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var config = __webpack_require__(55);
	
	/**
	 * ### .addMethod (ctx, name, method)
	 *
	 * Adds a method to the prototype of an object.
	 *
	 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for name
	 * @name addMethod
	 * @api public
	 */
	var flag = __webpack_require__(72);
	
	module.exports = function (ctx, name, method) {
	  ctx[name] = function () {
	    var old_ssfi = flag(this, 'ssfi');
	    if (old_ssfi && config.includeStack === false)
	      flag(this, 'ssfi', ctx[name]);
	    var result = method.apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - overwriteProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteProperty (ctx, name, fn)
	 *
	 * Overwites an already existing property getter and provides
	 * access to previous value. Must return function to use as getter.
	 *
	 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
	 *       return function () {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.name).to.equal('bar');
	 *         } else {
	 *           _super.call(this);
	 *         }
	 *       }
	 *     });
	 *
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.ok;
	 *
	 * @param {Object} ctx object whose property is to be overwritten
	 * @param {String} name of property to overwrite
	 * @param {Function} getter function that returns a getter function to be used for name
	 * @name overwriteProperty
	 * @api public
	 */
	
	module.exports = function (ctx, name, getter) {
	  var _get = Object.getOwnPropertyDescriptor(ctx, name)
	    , _super = function () {};
	
	  if (_get && 'function' === typeof _get.get)
	    _super = _get.get
	
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        var result = getter(_super).call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - overwriteMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteMethod (ctx, name, fn)
	 *
	 * Overwites an already existing method and provides
	 * access to previous function. Must return function
	 * to be used for name.
	 *
	 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
	 *       return function (str) {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.value).to.equal(str);
	 *         } else {
	 *           _super.apply(this, arguments);
	 *         }
	 *       }
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.equal('bar');
	 *
	 * @param {Object} ctx object whose method is to be overwritten
	 * @param {String} name of method to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @name overwriteMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method) {
	  var _method = ctx[name]
	    , _super = function () { return this; };
	
	  if (_method && 'function' === typeof _method)
	    _super = _method;
	
	  ctx[name] = function () {
	    var result = method(_super).apply(this, arguments);
	    return result === undefined ? this : result;
	  }
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependencies
	 */
	
	var transferFlags = __webpack_require__(73);
	var flag = __webpack_require__(72);
	var config = __webpack_require__(55);
	
	/*!
	 * Module variables
	 */
	
	// Check whether `__proto__` is supported
	var hasProtoSupport = '__proto__' in Object;
	
	// Without `__proto__` support, this module will need to add properties to a function.
	// However, some Function.prototype methods cannot be overwritten,
	// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
	var excludeNames = /^(?:length|name|arguments|caller)$/;
	
	// Cache `Function` properties
	var call  = Function.prototype.call,
	    apply = Function.prototype.apply;
	
	/**
	 * ### addChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Adds a method to an object, such that the method can also be chained.
	 *
	 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
	 *
	 * The result can then be used as both a method assertion, executing both `method` and
	 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *     expect(fooStr).to.be.foo.equal('foo');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for `name`, when called
	 * @param {Function} chainingBehavior function to be called every time the property is accessed
	 * @name addChainableMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method, chainingBehavior) {
	  if (typeof chainingBehavior !== 'function') {
	    chainingBehavior = function () { };
	  }
	
	  var chainableBehavior = {
	      method: method
	    , chainingBehavior: chainingBehavior
	  };
	
	  // save the methods so we can overwrite them later, if we need to.
	  if (!ctx.__methods) {
	    ctx.__methods = {};
	  }
	  ctx.__methods[name] = chainableBehavior;
	
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        chainableBehavior.chainingBehavior.call(this);
	
	        var assert = function assert() {
	          var old_ssfi = flag(this, 'ssfi');
	          if (old_ssfi && config.includeStack === false)
	            flag(this, 'ssfi', assert);
	          var result = chainableBehavior.method.apply(this, arguments);
	          return result === undefined ? this : result;
	        };
	
	        // Use `__proto__` if available
	        if (hasProtoSupport) {
	          // Inherit all properties from the object by replacing the `Function` prototype
	          var prototype = assert.__proto__ = Object.create(this);
	          // Restore the `call` and `apply` methods from `Function`
	          prototype.call = call;
	          prototype.apply = apply;
	        }
	        // Otherwise, redefine all properties (slow!)
	        else {
	          var asserterNames = Object.getOwnPropertyNames(ctx);
	          asserterNames.forEach(function (asserterName) {
	            if (!excludeNames.test(asserterName)) {
	              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
	              Object.defineProperty(assert, asserterName, pd);
	            }
	          });
	        }
	
	        transferFlags(this, assert);
	        return assert;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - overwriteChainableMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteChainableMethod (ctx, name, fn)
	 *
	 * Overwites an already existing chainable method
	 * and provides access to the previous function or
	 * property.  Must return functions to be used for
	 * name.
	 *
	 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
	 *       function (_super) {
	 *       }
	 *     , function (_super) {
	 *       }
	 *     );
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.have.length(3);
	 *     expect(myFoo).to.have.length.above(3);
	 *
	 * @param {Object} ctx object whose method / property is to be overwritten
	 * @param {String} name of method / property to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @param {Function} chainingBehavior function that returns a function to be used for property
	 * @name overwriteChainableMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method, chainingBehavior) {
	  var chainableBehavior = ctx.__methods[name];
	
	  var _chainingBehavior = chainableBehavior.chainingBehavior;
	  chainableBehavior.chainingBehavior = function () {
	    var result = chainingBehavior(_chainingBehavior).call(this);
	    return result === undefined ? this : result;
	  };
	
	  var _method = chainableBehavior.method;
	  chainableBehavior.method = function () {
	    var result = method(_method).apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Core.js 0.4.4
	 * https://github.com/zloirock/core-js
	 * License: http://rock.mit-license.org
	 * © 2015 Denis Pushkarev
	 */
	!function(global, framework, undefined){
	'use strict';
	
	/******************************************************************************
	 * Module : common                                                            *
	 ******************************************************************************/
	
	  // Shortcuts for [[Class]] & property names
	var OBJECT          = 'Object'
	  , FUNCTION        = 'Function'
	  , ARRAY           = 'Array'
	  , STRING          = 'String'
	  , NUMBER          = 'Number'
	  , REGEXP          = 'RegExp'
	  , DATE            = 'Date'
	  , MAP             = 'Map'
	  , SET             = 'Set'
	  , WEAKMAP         = 'WeakMap'
	  , WEAKSET         = 'WeakSet'
	  , SYMBOL          = 'Symbol'
	  , PROMISE         = 'Promise'
	  , MATH            = 'Math'
	  , ARGUMENTS       = 'Arguments'
	  , PROTOTYPE       = 'prototype'
	  , CONSTRUCTOR     = 'constructor'
	  , TO_STRING       = 'toString'
	  , TO_STRING_TAG   = TO_STRING + 'Tag'
	  , TO_LOCALE       = 'toLocaleString'
	  , HAS_OWN         = 'hasOwnProperty'
	  , FOR_EACH        = 'forEach'
	  , ITERATOR        = 'iterator'
	  , FF_ITERATOR     = '@@' + ITERATOR
	  , PROCESS         = 'process'
	  , CREATE_ELEMENT  = 'createElement'
	  // Aliases global objects and prototypes
	  , Function        = global[FUNCTION]
	  , Object          = global[OBJECT]
	  , Array           = global[ARRAY]
	  , String          = global[STRING]
	  , Number          = global[NUMBER]
	  , RegExp          = global[REGEXP]
	  , Date            = global[DATE]
	  , Map             = global[MAP]
	  , Set             = global[SET]
	  , WeakMap         = global[WEAKMAP]
	  , WeakSet         = global[WEAKSET]
	  , Symbol          = global[SYMBOL]
	  , Math            = global[MATH]
	  , TypeError       = global.TypeError
	  , setTimeout      = global.setTimeout
	  , setImmediate    = global.setImmediate
	  , clearImmediate  = global.clearImmediate
	  , process         = global[PROCESS]
	  , nextTick        = process && process.nextTick
	  , document        = global.document
	  , html            = document && document.documentElement
	  , navigator       = global.navigator
	  , define          = global.define
	  , ArrayProto      = Array[PROTOTYPE]
	  , ObjectProto     = Object[PROTOTYPE]
	  , FunctionProto   = Function[PROTOTYPE]
	  , Infinity        = 1 / 0
	  , DOT             = '.';
	
	// http://jsperf.com/core-js-isobject
	function isObject(it){
	  return it != null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	// Native function?
	var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);
	
	// Object internal [[Class]] or toStringTag
	// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
	var buildIn = {
	  Undefined: 1, Null: 1, Array: 1, String: 1, Arguments: 1,
	  Function: 1, Error: 1, Boolean: 1, Number: 1, Date: 1, RegExp:1 
	} , toString = ObjectProto[TO_STRING];
	function setToStringTag(it, tag, stat){
	  if(it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))hidden(it, SYMBOL_TAG, tag);
	}
	function cof(it){
	  return it == undefined ? it === undefined
	    ? 'Undefined' : 'Null' : toString.call(it).slice(8, -1);
	}
	function classof(it){
	  var klass = cof(it), tag;
	  return klass == OBJECT && (tag = it[SYMBOL_TAG]) ? has(buildIn, tag) ? '~' + tag : tag : klass;
	}
	
	// Function
	var call  = FunctionProto.call
	  , apply = FunctionProto.apply
	  , REFERENCE_GET;
	// Partial apply
	function part(/* ...args */){
	  var length = arguments.length
	    , args   = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((args[i] = arguments[i++]) === _)holder = true;
	  return partial(this, args, length, holder, _, false);
	}
	// Internal partial application & context binding
	function partial(fn, argsPart, lengthPart, holder, _, bind, context){
	  assertFunction(fn);
	  return function(/* ...args */){
	    var that   = bind ? context : this
	      , length = arguments.length
	      , i = 0, j = 0, args;
	    if(!holder && !length)return invoke(fn, argsPart, that);
	    args = argsPart.slice();
	    if(holder)for(;lengthPart > i; i++)if(args[i] === _)args[i] = arguments[j++];
	    while(length > j)args.push(arguments[j++]);
	    return invoke(fn, args, that);
	  }
	}
	// Optional / simple context binding
	function ctx(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    }
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    }
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    }
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	  }
	}
	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	function invoke(fn, args, that){
	  var un = that === undefined;
	  switch(args.length | 0){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	}
	function construct(target, argumentsList){
	  var instance = create(target[PROTOTYPE])
	    , result   = apply.call(target, instance, argumentsList);
	  return isObject(result) ? result : instance;
	}
	
	// Object:
	var create           = Object.create
	  , getPrototypeOf   = Object.getPrototypeOf
	  , setPrototypeOf   = Object.setPrototypeOf
	  , defineProperty   = Object.defineProperty
	  , defineProperties = Object.defineProperties
	  , getOwnDescriptor = Object.getOwnPropertyDescriptor
	  , getKeys          = Object.keys
	  , getNames         = Object.getOwnPropertyNames
	  , getSymbols       = Object.getOwnPropertySymbols
	  , has              = ctx(call, ObjectProto[HAS_OWN], 2)
	  // Dummy, fix for not array-like ES3 string in es5 module
	  , ES5Object        = Object;
	function toObject(it){
	  return ES5Object(assertDefined(it));
	}
	function returnIt(it){
	  return it;
	}
	function returnThis(){
	  return this;
	}
	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function ownKeys(it){
	  return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
	}
	// 19.1.2.1 Object.assign(target, source, ...)
	var assign = Object.assign || function(target, source){
	  var T = Object(assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	}
	function keyOf(object, el){
	  var O      = toObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	}
	
	// Array
	// array('str1,str2,str3') => ['str1', 'str2', 'str3']
	function array(it){
	  return String(it).split(',');
	}
	var push    = ArrayProto.push
	  , unshift = ArrayProto.unshift
	  , slice   = ArrayProto.slice
	  , splice  = ArrayProto.splice
	  , indexOf = ArrayProto.indexOf
	  , forEach = ArrayProto[FOR_EACH];
	/*
	 * 0 -> forEach
	 * 1 -> map
	 * 2 -> filter
	 * 3 -> some
	 * 4 -> every
	 * 5 -> find
	 * 6 -> findIndex
	 */
	function createArrayMethod(type){
	  var isMap       = type == 1
	    , isFilter    = type == 2
	    , isSome      = type == 3
	    , isEvery     = type == 4
	    , isFindIndex = type == 6
	    , noholes     = type == 5 || isFindIndex;
	  return function(callbackfn/*, that = undefined */){
	    var O      = Object(assertDefined(this))
	      , that   = arguments[1]
	      , self   = ES5Object(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = isMap ? Array(length) : isFilter ? [] : undefined
	      , val, res;
	    for(;length > index; index++)if(noholes || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(type){
	        if(isMap)result[index] = res;             // map
	        else if(res)switch(type){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(isEvery)return false;           // every
	      }
	    }
	    return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
	  }
	}
	function createArrayContains(isContains){
	  return function(el /*, fromIndex = 0 */){
	    var O      = toObject(this)
	      , length = toLength(O.length)
	      , index  = toIndex(arguments[1], length);
	    if(isContains && el != el){
	      for(;length > index; index++)if(sameNaN(O[index]))return isContains || index;
	    } else for(;length > index; index++)if(isContains || index in O){
	      if(O[index] === el)return isContains || index;
	    } return !isContains && -1;
	  }
	}
	function generic(A, B){
	  // strange IE quirks mode bug -> use typeof vs isFunction
	  return typeof A == 'function' ? A : B;
	}
	
	// Math
	var MAX_SAFE_INTEGER = 0x1fffffffffffff // pow(2, 53) - 1 == 9007199254740991
	  , ceil   = Math.ceil
	  , floor  = Math.floor
	  , max    = Math.max
	  , min    = Math.min
	  , random = Math.random
	  , trunc  = Math.trunc || function(it){
	      return (it > 0 ? floor : ceil)(it);
	    }
	// 20.1.2.4 Number.isNaN(number)
	function sameNaN(number){
	  return number != number;
	}
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it) ? 0 : trunc(it);
	}
	// 7.1.15 ToLength
	function toLength(it){
	  return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
	}
	function toIndex(index, length){
	  var index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	}
	
	function createReplacer(regExp, replace, isStatic){
	  var replacer = isObject(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(isStatic ? it : this).replace(regExp, replacer);
	  }
	}
	function createPointAt(toString){
	  return function(pos){
	    var s = String(assertDefined(this))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return toString ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? toString ? s.charAt(i) : a
	      : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  }
	}
	
	// Assertion & errors
	var REDUCE_ERROR = 'Reduce of empty object with no initial value';
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError('Function called on null or undefined');
	  return it;
	}
	function assertFunction(it){
	  assert(isFunction(it), it, ' is not a function!');
	  return it;
	}
	function assertObject(it){
	  assert(isObject(it), it, ' is not an object!');
	  return it;
	}
	function assertInstance(it, Constructor, name){
	  assert(it instanceof Constructor, name, ": use the 'new' operator!");
	}
	
	// Property descriptors & Symbol
	function descriptor(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  }
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return defineProperty(object, key, descriptor(bitmap, value));
	  } : simpleSet;
	}
	function uid(key){
	  return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
	}
	function getWellKnownSymbol(name, setter){
	  return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
	}
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC   = !!function(){try{return defineProperty({}, DOT, ObjectProto)}catch(e){}}()
	  , sid    = 0
	  , hidden = createDefiner(1)
	  , set    = Symbol ? simpleSet : hidden
	  , safeSymbol = Symbol || uid;
	function assignHidden(target, src){
	  for(var key in src)hidden(target, key, src[key]);
	  return target;
	}
	
	var SYMBOL_UNSCOPABLES = getWellKnownSymbol('unscopables')
	  , ArrayUnscopables   = ArrayProto[SYMBOL_UNSCOPABLES] || {};
	
	// Iterators
	var SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR)
	  , SYMBOL_TAG      = getWellKnownSymbol(TO_STRING_TAG)
	  , SUPPORT_FF_ITER = FF_ITERATOR in ArrayProto
	  , ITER  = safeSymbol('iter')
	  , KEY   = 1
	  , VALUE = 2
	  , Iterators = {}
	  , IteratorPrototype = {}
	  , NATIVE_ITERATORS = SYMBOL_ITERATOR in ArrayProto
	    // Safari define byggy iterators w/o `next`
	  , BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, returnThis);
	function setIterator(O, value){
	  hidden(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  SUPPORT_FF_ITER && hidden(O, FF_ITERATOR, value);
	}
	function createIterator(Constructor, NAME, next, proto){
	  Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	}
	function defineIterator(Constructor, NAME, value, DEFAULT){
	  var proto = Constructor[PROTOTYPE]
	    , iter  = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
	  if(framework){
	    // Define iterator
	    setIterator(proto, iter);
	    if(iter !== value){
	      var iterProto = getPrototypeOf(iter.call(new Constructor));
	      // Set @@toStringTag to native iterators
	      setToStringTag(iterProto, NAME + ' Iterator', true);
	      // FF fix
	      has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
	    }
	  }
	  // Plug for library
	  Iterators[NAME] = iter;
	  // FF & v8 fix
	  Iterators[NAME + ' Iterator'] = returnThis;
	  return iter;
	}
	function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET){
	  function createIter(kind){
	    return function(){
	      return new Constructor(this, kind);
	    }
	  }
	  createIterator(Constructor, NAME, next);
	  var entries = createIter(KEY+VALUE)
	    , values  = createIter(VALUE);
	  if(DEFAULT == VALUE)values = defineIterator(Base, NAME, values, 'values');
	  else entries = defineIterator(Base, NAME, entries, 'entries');
	  if(DEFAULT){
	    $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
	      entries: entries,
	      keys: IS_SET ? values : createIter(KEY),
	      values: values
	    });
	  }
	}
	function iterResult(done, value){
	  return {value: value, done: !!done};
	}
	function isIterable(it){
	  var O      = Object(it)
	    , Symbol = global[SYMBOL]
	    , hasExt = !!(Symbol && Symbol[ITERATOR] && Symbol[ITERATOR] in O);
	  return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
	}
	function getIterator(it){
	  var Symbol  = global[SYMBOL]
	    , ext     = Symbol && Symbol[ITERATOR] && it[Symbol[ITERATOR]]
	    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
	  return assertObject(getIter.call(it));
	}
	function stepCall(fn, value, entries){
	  return entries ? invoke(fn, value) : fn(value);
	}
	function forOf(iterable, entries, fn, that){
	  var iterator = getIterator(iterable)
	    , f        = ctx(fn, that, entries ? 2 : 1)
	    , step;
	  while(!(step = iterator.next()).done)if(stepCall(f, step.value, entries) === false)return;
	}
	
	// core
	var NODE = cof(process) == PROCESS
	  , core = {}
	  , path = framework ? global : core
	  , old  = global.core
	  // type bitmap
	  , FORCED = 1
	  , GLOBAL = 2
	  , STATIC = 4
	  , PROTO  = 8
	  , BIND   = 16
	  , WRAP   = 32;
	function $define(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & GLOBAL
	    , target   = isGlobal ? global : (type & STATIC)
	        ? global[name] : (global[name] || ObjectProto)[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // there is a similar native
	    own = !(type & FORCED) && target && key in target
	      && (!isFunction(target[key]) || isNative(target[key]));
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    if(type & BIND && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & WRAP && !framework && target[key] == out){
	      exp = function(param){
	        return this instanceof out ? new out(param) : out(param);
	      }
	      exp[PROTOTYPE] = out[PROTOTYPE];
	    } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
	    // export
	    if(exports[key] != out)hidden(exports, key, exp);
	    // extend global
	    if(framework && target && !own){
	      if(isGlobal)target[key] = out;
	      else delete target[key] && hidden(target, key, out);
	    }
	  }
	}
	// CommonJS export
	if(typeof module != 'undefined' && module.exports)module.exports = core;
	// RequireJS export
	if(isFunction(define) && define.amd)define(function(){return core});
	// Export to global object
	if(!NODE || framework){
	  core.noConflict = function(){
	    global.core = old;
	    return core;
	  }
	  global.core = core;
	}
	
	/******************************************************************************
	 * Module : global                                                            *
	 ******************************************************************************/
	
	$define(GLOBAL + FORCED, {global: global});
	
	/******************************************************************************
	 * Module : es6_symbol                                                        *
	 ******************************************************************************/
	
	// ECMAScript 6 symbols shim
	!function(TAG, SymbolRegistry, setter){
	  // 19.4.1.1 Symbol([description])
	  if(!isNative(Symbol)){
	    Symbol = function(description){
	      assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
	      var tag = uid(description);
	      DESC && setter && defineProperty(ObjectProto, tag, {
	        configurable: true,
	        set: function(value){
	          hidden(this, tag, value);
	        }
	      });
	      return set(create(Symbol[PROTOTYPE]), TAG, tag);
	    }
	    hidden(Symbol[PROTOTYPE], TO_STRING, function(){
	      return this[TAG];
	    });
	  }
	  $define(GLOBAL + WRAP, {Symbol: Symbol});
	  
	  var symbolStatics = {
	    // 19.4.2.1 Symbol.for(key)
	    'for': function(key){
	      return has(SymbolRegistry, key += '')
	        ? SymbolRegistry[key]
	        : SymbolRegistry[key] = Symbol(key);
	    },
	    // 19.4.2.4 Symbol.iterator
	    iterator: SYMBOL_ITERATOR,
	    // 19.4.2.5 Symbol.keyFor(sym)
	    keyFor: part.call(keyOf, SymbolRegistry),
	    // 19.4.2.13 Symbol.toStringTag
	    toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
	    // 19.4.2.14 Symbol.unscopables
	    unscopables: SYMBOL_UNSCOPABLES,
	    pure: safeSymbol,
	    set: set,
	    useSetter: function(){setter = true},
	    useSimple: function(){setter = false}
	  };
	  // 19.4.2.2 Symbol.hasInstance
	  // 19.4.2.3 Symbol.isConcatSpreadable
	  // 19.4.2.6 Symbol.match
	  // 19.4.2.8 Symbol.replace
	  // 19.4.2.9 Symbol.search
	  // 19.4.2.10 Symbol.species
	  // 19.4.2.11 Symbol.split
	  // 19.4.2.12 Symbol.toPrimitive
	  forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,' +
	    'species,split,toPrimitive'), function(it){
	      symbolStatics[it] = getWellKnownSymbol(it);
	    }
	  );
	  $define(STATIC, SYMBOL, symbolStatics);
	  
	  setToStringTag(Symbol, SYMBOL);
	  
	  // 26.1.11 Reflect.ownKeys(target)
	  $define(GLOBAL, {Reflect: {ownKeys: ownKeys}});
	}(safeSymbol('tag'), {}, true);
	
	/******************************************************************************
	 * Module : es6                                                               *
	 ******************************************************************************/
	
	// ECMAScript 6 shim
	!function(RegExpProto, isFinite, tmp, NAME){
	  var RangeError = global.RangeError
	      // 20.1.2.3 Number.isInteger(number)
	    , isInteger = Number.isInteger || function(it){
	        return !isObject(it) && isFinite(it) && floor(it) === it;
	      }
	      // 20.2.2.28 Math.sign(x)
	    , sign = Math.sign || function sign(it){
	        return (it = +it) == 0 || it != it ? it : it < 0 ? -1 : 1;
	      }
	    , pow  = Math.pow
	    , abs  = Math.abs
	    , exp  = Math.exp
	    , log  = Math.log
	    , sqrt = Math.sqrt
	    , fcc  = String.fromCharCode
	    , at   = createPointAt(true);
	  
	  var objectStatic = {
	    // 19.1.3.1 Object.assign(target, source)
	    assign: assign,
	    // 19.1.3.10 Object.is(value1, value2)
	    is: function(x, y){
	      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	    }
	  };
	  // 19.1.3.19 Object.setPrototypeOf(O, proto)
	  // Works with __proto__ only. Old v8 can't works with null proto objects.
	  '__proto__' in ObjectProto && function(buggy, set){
	    try {
	      set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
	      set({}, ArrayProto);
	    } catch(e){ buggy = true }
	    objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function(O, proto){
	      assertObject(O);
	      assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
	      if(buggy)O.__proto__ = proto;
	      else set(O, proto);
	      return O;
	    }
	  }();
	  $define(STATIC, OBJECT, objectStatic);
	  
	  // 20.2.2.5 Math.asinh(x)
	  function asinh(x){
	    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
	  }
	  
	  $define(STATIC, NUMBER, {
	    // 20.1.2.1 Number.EPSILON
	    EPSILON: pow(2, -52),
	    // 20.1.2.2 Number.isFinite(number)
	    isFinite: function(it){
	      return typeof it == 'number' && isFinite(it);
	    },
	    // 20.1.2.3 Number.isInteger(number)
	    isInteger: isInteger,
	    // 20.1.2.4 Number.isNaN(number)
	    isNaN: sameNaN,
	    // 20.1.2.5 Number.isSafeInteger(number)
	    isSafeInteger: function(number){
	      return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
	    },
	    // 20.1.2.6 Number.MAX_SAFE_INTEGER
	    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
	    // 20.1.2.10 Number.MIN_SAFE_INTEGER
	    MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
	    // 20.1.2.12 Number.parseFloat(string)
	    parseFloat: parseFloat,
	    // 20.1.2.13 Number.parseInt(string, radix)
	    parseInt: parseInt
	  });
	  
	  $define(STATIC, MATH, {
	    // 20.2.2.3 Math.acosh(x)
	    acosh: function(x){
	      return x < 1 ? NaN : log(x + sqrt(x * x - 1));
	    },
	    // 20.2.2.5 Math.asinh(x)
	    asinh: asinh,
	    // 20.2.2.7 Math.atanh(x)
	    atanh: function(x){
	      return x == 0 ? +x : log((1 + +x) / (1 - x)) / 2;
	    },
	    // 20.2.2.9 Math.cbrt(x)
	    cbrt: function(x){
	      return sign(x) * pow(abs(x), 1 / 3);
	    },
	    // 20.2.2.11 Math.clz32(x)
	    clz32: function(x){
	      return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
	    },
	    // 20.2.2.12 Math.cosh(x)
	    cosh: function(x){
	      return (exp(x) + exp(-x)) / 2;
	    },
	    // 20.2.2.14 Math.expm1(x)
	    expm1: function(x){
	      return x == 0 ? +x : x > -1e-6 && x < 1e-6 ? +x + x * x / 2 : exp(x) - 1;
	    },
	    // 20.2.2.16 Math.fround(x)
	    // TODO: fallback for IE9-
	    fround: function(x){
	      return new Float32Array([x])[0];
	    },
	    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	    // TODO: work with very large & small numbers
	    hypot: function(value1, value2){
	      var sum    = 0
	        , length = arguments.length
	        , value;
	      while(length--){
	        value = +arguments[length];
	        if(value == Infinity || value == -Infinity)return Infinity;
	        sum += value * value;
	      }
	      return sqrt(sum);
	    },
	    // 20.2.2.18 Math.imul(x, y)
	    imul: function(x, y){
	      var UInt16 = 0xffff
	        , xn = +x
	        , yn = +y
	        , xl = UInt16 & xn
	        , yl = UInt16 & yn;
	      return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
	    },
	    // 20.2.2.20 Math.log1p(x)
	    log1p: function(x){
	      return x > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + +x);
	    },
	    // 20.2.2.21 Math.log10(x)
	    log10: function(x){
	      return log(x) / Math.LN10;
	    },
	    // 20.2.2.22 Math.log2(x)
	    log2: function(x){
	      return log(x) / Math.LN2;
	    },
	    // 20.2.2.28 Math.sign(x)
	    sign: sign,
	    // 20.2.2.30 Math.sinh(x)
	    sinh: function(x){
	      return x == 0 ? +x : (exp(x) - exp(-x)) / 2;
	    },
	    // 20.2.2.33 Math.tanh(x)
	    tanh: function(x){
	      return isFinite(x) ? x == 0 ? +x : (exp(x) - exp(-x)) / (exp(x) + exp(-x)) : sign(x);
	    },
	    // 20.2.2.34 Math.trunc(x)
	    trunc: trunc
	  });
	  // 20.2.1.9 Math[@@toStringTag]
	  setToStringTag(Math, MATH, true);
	  
	  function assertNotRegExp(it){
	    if(cof(it) == REGEXP)throw TypeError();
	  }
	  $define(STATIC, STRING, {
	    // 21.1.2.2 String.fromCodePoint(...codePoints)
	    fromCodePoint: function(x){
	      var res = []
	        , len = arguments.length
	        , i   = 0
	        , code
	      while(len > i){
	        code = +arguments[i++];
	        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	        res.push(code < 0x10000
	          ? fcc(code)
	          : fcc(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	        );
	      } return res.join('');
	    },
	    // 21.1.2.4 String.raw(callSite, ...substitutions)
	    raw: function(callSite){
	      var raw = toObject(callSite.raw)
	        , len = toLength(raw.length)
	        , sln = arguments.length
	        , res = []
	        , i   = 0;
	      while(len > i){
	        res.push(String(raw[i++]));
	        if(i < sln)res.push(String(arguments[i]));
	      } return res.join('');
	    }
	  });
	  $define(PROTO, STRING, {
	    // 21.1.3.3 String.prototype.codePointAt(pos)
	    codePointAt: createPointAt(false),
	    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	    endsWith: function(searchString /*, endPosition = @length */){
	      assertNotRegExp(searchString);
	      var that = String(assertDefined(this))
	        , endPosition = arguments[1]
	        , len = toLength(that.length)
	        , end = endPosition === undefined ? len : min(toLength(endPosition), len);
	      searchString += '';
	      return that.slice(end - searchString.length, end) === searchString;
	    },
	    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	    includes: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      return !!~String(assertDefined(this)).indexOf(searchString, arguments[1]);
	    },
	    // 21.1.3.13 String.prototype.repeat(count)
	    repeat: function(count){
	      var str = String(assertDefined(this))
	        , res = ''
	        , n   = toInteger(count);
	      if(0 > n || n == Infinity)throw RangeError("Count can't be negative");
	      for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	      return res;
	    },
	    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	    startsWith: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      var that  = String(assertDefined(this))
	        , index = toLength(min(arguments[1], that.length));
	      searchString += '';
	      return that.slice(index, index + searchString.length) === searchString;
	    }
	  });
	  // 21.1.3.27 String.prototype[@@iterator]()
	  defineStdIterators(String, STRING, function(iterated){
	    set(this, ITER, {o: String(iterated), i: 0});
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , index = iter.i
	      , point;
	    if(index >= O.length)return iterResult(1);
	    point = at.call(O, index);
	    iter.i += point.length;
	    return iterResult(0, point);
	  });
	  
	  $define(STATIC, ARRAY, {
	    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	    from: function(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	      var O       = Object(assertDefined(arrayLike))
	        , result  = new (generic(this, Array))
	        , mapfn   = arguments[1]
	        , that    = arguments[2]
	        , mapping = mapfn !== undefined
	        , f       = mapping ? ctx(mapfn, that, 2) : undefined
	        , index   = 0
	        , length;
	      if(isIterable(O))for(var iter = getIterator(O), step; !(step = iter.next()).done; index++){
	        result[index] = mapping ? f(step.value, index) : step.value;
	      } else for(length = toLength(O.length); length > index; index++){
	        result[index] = mapping ? f(O[index], index) : O[index];
	      }
	      result.length = index;
	      return result;
	    },
	    // 22.1.2.3 Array.of( ...items)
	    of: function(/* ...args */){
	      var index  = 0
	        , length = arguments.length
	        , result = new (generic(this, Array))(length);
	      while(length > index)result[index] = arguments[index++];
	      result.length = length;
	      return result;
	    }
	  });
	  $define(PROTO, ARRAY, {
	    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	    copyWithin: function(target /* = 0 */, start /* = 0, end = @length */){
	      var O     = Object(assertDefined(this))
	        , len   = toLength(O.length)
	        , to    = toIndex(target, len)
	        , from  = toIndex(start, len)
	        , end   = arguments[2]
	        , fin   = end === undefined ? len : toIndex(end, len)
	        , count = min(fin - from, len - to)
	        , inc   = 1;
	      if(from < to && to < from + count){
	        inc  = -1;
	        from = from + count - 1;
	        to   = to + count - 1;
	      }
	      while(count-- > 0){
	        if(from in O)O[to] = O[from];
	        else delete O[to];
	        to += inc;
	        from += inc;
	      } return O;
	    },
	    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	    fill: function(value /*, start = 0, end = @length */){
	      var O      = Object(assertDefined(this))
	        , length = toLength(O.length)
	        , index  = toIndex(arguments[1], length)
	        , end    = arguments[2]
	        , endPos = end === undefined ? length : toIndex(end, length);
	      while(endPos > index)O[index++] = value;
	      return O;
	    },
	    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	    find: createArrayMethod(5),
	    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	    findIndex: createArrayMethod(6)
	  });
	  // 22.1.3.4 Array.prototype.entries()
	  // 22.1.3.13 Array.prototype.keys()
	  // 22.1.3.29 Array.prototype.values()
	  // 22.1.3.30 Array.prototype[@@iterator]()
	  defineStdIterators(Array, ARRAY, function(iterated, kind){
	    set(this, ITER, {o: toObject(iterated), i: 0, k: kind});
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , kind  = iter.k
	      , index = iter.i++;
	    if(!O || index >= O.length)return iter.o = undefined, iterResult(1);
	    if(kind == KEY)  return iterResult(0, index);
	    if(kind == VALUE)return iterResult(0, O[index]);
	                     return iterResult(0, [index, O[index]]);
	  }, VALUE);
	  
	  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	  Iterators[ARGUMENTS] = Iterators[ARRAY];
	  
	  // 24.3.3 JSON[@@toStringTag]
	  setToStringTag(global.JSON, 'JSON', true);
	  
	  // Object static methods accept primitives
	  function wrapObjectMethod(key, MODE){
	    var fn  = Object[key]
	      , exp = core[OBJECT][key]
	      , f   = 0
	      , o   = {};
	    if(!exp || isNative(exp)){
	      o[key] =
	        MODE == 1 ? function(it){ return isObject(it) ? fn(it) : it } :
	        MODE == 2 ? function(it){ return isObject(it) ? fn(it) : true } :
	        MODE == 3 ? function(it){ return isObject(it) ? fn(it) : false } :
	        MODE == 4 ? function(it, key){ return fn(toObject(it), key) } :
	                    function(it){ return fn(toObject(it)) }
	      try { fn(DOT) }
	      catch(e){ f = 1}
	      $define(STATIC + FORCED * f, OBJECT, o);
	    }
	  }
	  wrapObjectMethod('freeze', 1);
	  wrapObjectMethod('seal', 1);
	  wrapObjectMethod('preventExtensions', 1);
	  wrapObjectMethod('isFrozen', 2);
	  wrapObjectMethod('isSealed', 2);
	  wrapObjectMethod('isExtensible', 3);
	  wrapObjectMethod('getOwnPropertyDescriptor', 4);
	  wrapObjectMethod('getPrototypeOf');
	  wrapObjectMethod('keys');
	  wrapObjectMethod('getOwnPropertyNames');
	  
	  function WrappedRegExp(pattern, flags){
	    return new RegExp(cof(pattern) == REGEXP && flags !== undefined
	      ? pattern.source : pattern, flags);
	  }
	  if(framework){
	    // 19.1.3.6 Object.prototype.toString()
	    tmp[SYMBOL_TAG] = DOT;
	    if(cof(tmp) != DOT)hidden(ObjectProto, TO_STRING, function(){
	      return '[object ' + classof(this) + ']';
	    });
	    
	    // 19.2.4.2 name
	    NAME in FunctionProto || defineProperty(FunctionProto, NAME, {
	      configurable: true,
	      get: function(){
	        var match = String(this).match(/^\s*function ([^ (]*)/)
	          , name  = match ? match[1] : '';
	        has(this, NAME) || defineProperty(this, NAME, descriptor(5, name));
	        return name;
	      },
	      set: function(value){
	        has(this, NAME) || defineProperty(this, NAME, descriptor(0, value));
	      }
	    });
	    
	    // RegExp allows a regex with flags as the pattern
	    if(DESC && !function(){try{return RegExp(/a/g, 'i') == '/a/i'}catch(e){}}()){
	      forEach.call(getNames(RegExp), function(key){
	        key in WrappedRegExp || defineProperty(WrappedRegExp, key, {
	          configurable: true,
	          get: function(){ return RegExp[key] },
	          set: function(it){ RegExp[key] = it }
	        });
	      });
	      RegExpProto[CONSTRUCTOR] = WrappedRegExp;
	      WrappedRegExp[PROTOTYPE] = RegExpProto;
	      hidden(global, REGEXP, WrappedRegExp);
	    }
	    
	    // 21.2.5.3 get RegExp.prototype.flags()
	    if(/./g.flags != 'g')defineProperty(RegExpProto, 'flags', {
	      configurable: true,
	      get: createReplacer(/^.*\/(\w*)$/, '$1')
	    });
	    
	    // 22.1.3.31 Array.prototype[@@unscopables]
	    forEach.call(array('find,findIndex,fill,copyWithin,entries,keys,values'), function(it){
	      ArrayUnscopables[it] = true;
	    });
	    SYMBOL_UNSCOPABLES in ArrayProto || hidden(ArrayProto, SYMBOL_UNSCOPABLES, ArrayUnscopables);
	  }
	}(RegExp[PROTOTYPE], isFinite, {}, 'name');
	
	/******************************************************************************
	 * Module : immediate                                                         *
	 ******************************************************************************/
	
	// setImmediate shim
	// Node.js 0.9+ & IE10+ has setImmediate, else:
	isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE){
	  var postMessage      = global.postMessage
	    , addEventListener = global.addEventListener
	    , MessageChannel   = global.MessageChannel
	    , counter          = 0
	    , queue            = {}
	    , defer, channel, port;
	  setImmediate = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    }
	    defer(counter);
	    return counter;
	  }
	  clearImmediate = function(id){
	    delete queue[id];
	  }
	  function run(id){
	    if(has(queue, id)){
	      var fn = queue[id];
	      delete queue[id];
	      fn();
	    }
	  }
	  function listner(event){
	    run(event.data);
	  }
	  // Node.js 0.8-
	  if(NODE){
	    defer = function(id){
	      nextTick(part.call(run, id));
	    }
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
	    defer = function(id){
	      postMessage(id, '*');
	    }
	    addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')){
	    defer = function(id){
	      html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run(id);
	      }
	    }
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(part.call(run, id), 0);
	    }
	  }
	}('onreadystatechange');
	$define(GLOBAL + BIND, {
	  setImmediate:   setImmediate,
	  clearImmediate: clearImmediate
	});
	
	/******************************************************************************
	 * Module : es6_promise                                                       *
	 ******************************************************************************/
	
	// ES6 promises shim
	// Based on https://github.com/getify/native-promise-only/
	!function(Promise, test){
	  isFunction(Promise) && isFunction(Promise.resolve)
	  && Promise.resolve(test = new Promise(function(){})) == test
	  || function(asap, DEF){
	    function isThenable(o){
	      var then;
	      if(isObject(o))then = o.then;
	      return isFunction(then) ? then : false;
	    }
	    function notify(def){
	      var chain = def.chain;
	      chain.length && asap(function(){
	        var msg = def.msg
	          , ok  = def.state == 1
	          , i   = 0;
	        while(chain.length > i)!function(react){
	          var cb = ok ? react.ok : react.fail
	            , ret, then;
	          try {
	            if(cb){
	              ret = cb === true ? msg : cb(msg);
	              if(ret === react.P){
	                react.rej(TypeError(PROMISE + '-chain cycle'));
	              } else if(then = isThenable(ret)){
	                then.call(ret, react.res, react.rej);
	              } else react.res(ret);
	            } else react.rej(msg);
	          } catch(err){
	            react.rej(err);
	          }
	        }(chain[i++]);
	        chain.length = 0;
	      });
	    }
	    function resolve(msg){
	      var def = this
	        , then, wrapper;
	      if(def.done)return;
	      def.done = true;
	      def = def.def || def; // unwrap
	      try {
	        if(then = isThenable(msg)){
	          wrapper = {def: def, done: false}; // wrap
	          then.call(msg, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
	        } else {
	          def.msg = msg;
	          def.state = 1;
	          notify(def);
	        }
	      } catch(err){
	        reject.call(wrapper || {def: def, done: false}, err); // wrap
	      }
	    }
	    function reject(msg){
	      var def = this;
	      if(def.done)return;
	      def.done = true;
	      def = def.def || def; // unwrap
	      def.msg = msg;
	      def.state = 2;
	      notify(def);
	    }
	    // 25.4.3.1 Promise(executor)
	    Promise = function(executor){
	      assertFunction(executor);
	      assertInstance(this, Promise, PROMISE);
	      var def = {chain: [], state: 0, done: false, msg: undefined};
	      hidden(this, DEF, def);
	      try {
	        executor(ctx(resolve, def, 1), ctx(reject, def, 1));
	      } catch(err){
	        reject.call(def, err);
	      }
	    }
	    assignHidden(Promise[PROTOTYPE], {
	      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	      then: function(onFulfilled, onRejected){
	        var react = {
	          ok:   isFunction(onFulfilled) ? onFulfilled : true,
	          fail: isFunction(onRejected)  ? onRejected  : false
	        } , P = react.P = new this[CONSTRUCTOR](function(resolve, reject){
	          react.res = assertFunction(resolve);
	          react.rej = assertFunction(reject);
	        }), def = this[DEF];
	        def.chain.push(react);
	        def.state && notify(def);
	        return P;
	      },
	      // 25.4.5.1 Promise.prototype.catch(onRejected)
	      'catch': function(onRejected){
	        return this.then(undefined, onRejected);
	      }
	    });
	    assignHidden(Promise, {
	      // 25.4.4.1 Promise.all(iterable)
	      all: function(iterable){
	        var Promise = this
	          , values  = [];
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, push, values);
	          var remaining = values.length
	            , results   = Array(remaining);
	          if(remaining)forEach.call(values, function(promise, index){
	            Promise.resolve(promise).then(function(value){
	              results[index] = value;
	              --remaining || resolve(results);
	            }, reject);
	          });
	          else resolve(results);
	        });
	      },
	      // 25.4.4.4 Promise.race(iterable)
	      race: function(iterable){
	        var Promise = this;
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, function(promise){
	            Promise.resolve(promise).then(resolve, reject);
	          });
	        });
	      },
	      // 25.4.4.5 Promise.reject(r)
	      reject: function(r){
	        return new this(function(resolve, reject){
	          reject(r);
	        });
	      },
	      // 25.4.4.6 Promise.resolve(x)
	      resolve: function(x){
	        return isObject(x) && getPrototypeOf(x) === this[PROTOTYPE]
	          ? x : new this(function(resolve, reject){
	            resolve(x);
	          });
	      }
	    });
	  }(nextTick || setImmediate, safeSymbol('def'));
	  setToStringTag(Promise, PROMISE);
	  $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
	}(global[PROMISE]);
	
	/******************************************************************************
	 * Module : es6_collections                                                   *
	 ******************************************************************************/
	
	// ECMAScript 6 collections shim
	!function(){
	  var UID   = safeSymbol('uid')
	    , DATA  = safeSymbol('data')
	    , WEAK  = safeSymbol('weak')
	    , LAST  = safeSymbol('last')
	    , FIRST = safeSymbol('first')
	    , SIZE  = DESC ? safeSymbol('size') : 'size'
	    , uid   = 0;
	  
	  function getCollection(C, NAME, methods, commonMethods, isMap, isWeak){
	    var ADDER = isMap ? 'set' : 'add'
	      , proto = C && C[PROTOTYPE]
	      , O     = {};
	    function initFromIterable(that, iterable){
	      if(iterable != undefined)forOf(iterable, isMap, that[ADDER], that);
	      return that;
	    }
	    function fixSVZ(key, chain){
	      var method = proto[key];
	      framework && hidden(proto, key, function(a, b){
	        var result = method.call(this, a === 0 ? 0 : a, b);
	        return chain ? this : result;
	      });
	    }
	    if(!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, 'entries')))){
	      // create collection constructor
	      C = isWeak
	        ? function(iterable){
	            assertInstance(this, C, NAME);
	            set(this, UID, uid++);
	            initFromIterable(this, iterable);
	          }
	        : function(iterable){
	            var that = this;
	            assertInstance(that, C, NAME);
	            set(that, DATA, create(null));
	            set(that, SIZE, 0);
	            set(that, LAST, undefined);
	            set(that, FIRST, undefined);
	            initFromIterable(that, iterable);
	          };
	      assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
	      isWeak || defineProperty(C[PROTOTYPE], 'size', {get: function(){
	        return assertDefined(this[SIZE]);
	      }});
	    } else {
	      var Native = C
	        , inst   = new C
	        , chain  = inst[ADDER](isWeak ? {} : -0, 1)
	        , buggyZero;
	      // wrap to init collections from iterable
	      if(!NATIVE_ITERATORS || !C.length){
	        C = function(iterable){
	          assertInstance(this, C, NAME);
	          return initFromIterable(new Native, iterable);
	        }
	        C[PROTOTYPE] = proto;
	      }
	      isWeak || inst[FOR_EACH](function(val, key){
	        buggyZero = 1 / key === -Infinity;
	      });
	      // fix converting -0 key to +0
	      if(buggyZero){
	        fixSVZ('delete');
	        fixSVZ('has');
	        isMap && fixSVZ('get');
	      }
	      // + fix .add & .set for chaining
	      if(buggyZero || chain !== inst)fixSVZ(ADDER, true);
	    }
	    setToStringTag(C, NAME);
	    
	    O[NAME] = C;
	    $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
	    
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    isWeak || defineStdIterators(C, NAME, function(iterated, kind){
	      set(this, ITER, {o: iterated, k: kind});
	    }, function(){
	      var iter  = this[ITER]
	        , O     = iter.o
	        , kind  = iter.k
	        , entry = iter.l;
	      while(entry && entry.r)entry = entry.p;
	      if(!O || !(iter.l = entry = entry ? entry.n : O[FIRST]))return iter.o = undefined, iterResult(1);
	      if(kind == KEY)  return iterResult(0, entry.k);
	      if(kind == VALUE)return iterResult(0, entry.v);
	                       return iterResult(0, [entry.k, entry.v]);   
	    }, isMap ? KEY+VALUE : VALUE, !isMap);
	    
	    return C;
	  }
	  
	  function fastKey(it, create){
	    // return it with 'S' prefix if it's string or with 'P' prefix for over primitives
	    if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
	    // if it hasn't object id - add next
	    if(!has(it, UID)){
	      if(create)hidden(it, UID, ++uid);
	      else return '';
	    }
	    // return object id with 'O' prefix
	    return 'O' + it[UID];
	  }
	  
	  function def(that, key, value){
	    var index = fastKey(key, true)
	      , data  = that[DATA]
	      , last  = that[LAST]
	      , entry;
	    if(index in data)data[index].v = value;
	    else {
	      entry = data[index] = {k: key, v: value, p: last};
	      if(!that[FIRST])that[FIRST] = entry;
	      if(last)last.n = entry;
	      that[LAST] = entry;
	      that[SIZE]++;
	    } return that;
	  }
	  function del(that, index){
	    var data  = that[DATA]
	      , entry = data[index]
	      , next  = entry.n
	      , prev  = entry.p;
	    delete data[index];
	    entry.r = true;
	    if(prev)prev.n = next;
	    if(next)next.p = prev;
	    if(that[FIRST] == entry)that[FIRST] = next;
	    if(that[LAST] == entry)that[LAST] = prev;
	    that[SIZE]--;
	  }
	
	  var collectionMethods = {
	    // 23.1.3.1 Map.prototype.clear()
	    // 23.2.3.2 Set.prototype.clear()
	    clear: function(){
	      for(var index in this[DATA])del(this, index);
	    },
	    // 23.1.3.3 Map.prototype.delete(key)
	    // 23.2.3.4 Set.prototype.delete(value)
	    'delete': function(key){
	      var index    = fastKey(key)
	        , contains = index in this[DATA];
	      if(contains)del(this, index);
	      return contains;
	    },
	    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	    forEach: function(callbackfn /*, that = undefined */){
	      var f = ctx(callbackfn, arguments[1], 3)
	        , entry;
	      while(entry = entry ? entry.n : this[FIRST]){
	        f(entry.v, entry.k, this);
	        while(entry && entry.r)entry = entry.p;
	      }
	    },
	    // 23.1.3.7 Map.prototype.has(key)
	    // 23.2.3.7 Set.prototype.has(value)
	    has: function(key){
	      return fastKey(key) in this[DATA];
	    }
	  }
	  
	  // 23.1 Map Objects
	  Map = getCollection(Map, MAP, {
	    // 23.1.3.6 Map.prototype.get(key)
	    get: function(key){
	      var entry = this[DATA][fastKey(key)];
	      return entry && entry.v;
	    },
	    // 23.1.3.9 Map.prototype.set(key, value)
	    set: function(key, value){
	      return def(this, key === 0 ? 0 : key, value);
	    }
	  }, collectionMethods, true);
	  
	  // 23.2 Set Objects
	  Set = getCollection(Set, SET, {
	    // 23.2.3.1 Set.prototype.add(value)
	    add: function(value){
	      return def(this, value = value === 0 ? 0 : value, value);
	    }
	  }, collectionMethods);
	  
	  function setWeak(that, key, value){
	    has(assertObject(key), WEAK) || hidden(key, WEAK, {});
	    key[WEAK][that[UID]] = value;
	    return that;
	  }
	  function hasWeak(key){
	    return isObject(key) && has(key, WEAK) && has(key[WEAK], this[UID]);
	  }
	  var weakMethods = {
	    // 23.3.3.2 WeakMap.prototype.delete(key)
	    // 23.4.3.3 WeakSet.prototype.delete(value)
	    'delete': function(key){
	      return hasWeak.call(this, key) && delete key[WEAK][this[UID]];
	    },
	    // 23.3.3.4 WeakMap.prototype.has(key)
	    // 23.4.3.4 WeakSet.prototype.has(value)
	    has: hasWeak
	  };
	  
	  // 23.3 WeakMap Objects
	  WeakMap = getCollection(WeakMap, WEAKMAP, {
	    // 23.3.3.3 WeakMap.prototype.get(key)
	    get: function(key){
	      if(isObject(key) && has(key, WEAK))return key[WEAK][this[UID]];
	    },
	    // 23.3.3.5 WeakMap.prototype.set(key, value)
	    set: function(key, value){
	      return setWeak(this, key, value);
	    }
	  }, weakMethods, true, true);
	  
	  // 23.4 WeakSet Objects
	  WeakSet = getCollection(WeakSet, WEAKSET, {
	    // 23.4.3.1 WeakSet.prototype.add(value)
	    add: function(value){
	      return setWeak(this, value, true);
	    }
	  }, weakMethods, false, true);
	}();
	
	/******************************************************************************
	 * Module : es6_reflect                                                       *
	 ******************************************************************************/
	
	!function(){
	  function Enumerate(iterated){
	    var keys = [], key;
	    for(key in iterated)keys.push(key);
	    set(this, ITER, {o: iterated, a: keys, i: 0});
	  }
	  createIterator(Enumerate, OBJECT, function(){
	    var iter = this[ITER]
	      , keys = iter.a
	      , key;
	    do {
	      if(iter.i >= keys.length)return iterResult(1);
	    } while(!((key = keys[iter.i++]) in iter.o));
	    return iterResult(0, key);
	  });
	  
	  function wrap(fn){
	    return function(it){
	      assertObject(it);
	      try {
	        return fn.apply(undefined, arguments), true;
	      } catch(e){
	        return false;
	      }
	    }
	  }
	  
	  function reflectGet(target, propertyKey/*, receiver*/){
	    var receiver = arguments.length < 3 ? target : arguments[2]
	      , desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc)return desc.get ? desc.get.call(receiver) : desc.value;
	    return isObject(proto = getPrototypeOf(target)) ? reflectGet(proto, propertyKey, receiver) : undefined;
	  }
	  function reflectSet(target, propertyKey, V/*, receiver*/){
	    var receiver = arguments.length < 4 ? target : arguments[3]
	      , desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc){
	      if(desc.writable === false)return false;
	      if(desc.set)return desc.set.call(receiver, V), true;
	    }
	    if(isObject(proto = getPrototypeOf(target)))return reflectSet(proto, propertyKey, V, receiver);
	    desc = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
	    desc.value = V;
	    return defineProperty(receiver, propertyKey, desc), true;
	  }
	  
	  var reflect = {
	    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	    apply: ctx(call, apply, 3),
	    // 26.1.2 Reflect.construct(target, argumentsList)
	    construct: construct,
	    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	    defineProperty: wrap(defineProperty),
	    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	    deleteProperty: function(target, propertyKey){
	      var desc = getOwnDescriptor(assertObject(target), propertyKey);
	      return desc && !desc.configurable ? false : delete target[propertyKey];
	    },
	    // 26.1.5 Reflect.enumerate(target)
	    enumerate: function(target){
	      return new Enumerate(assertObject(target));
	    },
	    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	    get: reflectGet,
	    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	    getOwnPropertyDescriptor: getOwnDescriptor,
	    // 26.1.8 Reflect.getPrototypeOf(target)
	    getPrototypeOf: getPrototypeOf,
	    // 26.1.9 Reflect.has(target, propertyKey)
	    has: function(target, propertyKey){
	      return propertyKey in target;
	    },
	    // 26.1.10 Reflect.isExtensible(target)
	    isExtensible: Object.isExtensible || function(target){
	      return !!assertObject(target);
	    },
	    // 26.1.11 Reflect.ownKeys(target)
	    ownKeys: ownKeys,
	    // 26.1.12 Reflect.preventExtensions(target)
	    preventExtensions: wrap(Object.preventExtensions || returnIt),
	    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	    set: reflectSet
	  }
	  // 26.1.14 Reflect.setPrototypeOf(target, proto)
	  if(setPrototypeOf)reflect.setPrototypeOf = function(target, proto){
	    return setPrototypeOf(assertObject(target), proto), true;
	  };
	  
	  $define(GLOBAL, {Reflect: {}});
	  $define(STATIC, 'Reflect', reflect);
	}();
	
	/******************************************************************************
	 * Module : es7                                                               *
	 ******************************************************************************/
	
	!function(){
	  $define(PROTO, ARRAY, {
	    // https://github.com/domenic/Array.prototype.includes
	    includes: createArrayContains(true)
	  });
	  $define(PROTO, STRING, {
	    // https://github.com/mathiasbynens/String.prototype.at
	    at: createPointAt(true)
	  });
	  
	  function createObjectToArray(isEntries){
	    return function(object){
	      var O      = toObject(object)
	        , keys   = getKeys(object)
	        , length = keys.length
	        , i      = 0
	        , result = Array(length)
	        , key;
	      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
	      else while(length > i)result[i] = O[keys[i++]];
	      return result;
	    }
	  }
	  $define(STATIC, OBJECT, {
	    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
	    values: createObjectToArray(false),
	    entries: createObjectToArray(true)
	  });
	  $define(STATIC, REGEXP, {
	    // https://gist.github.com/kangax/9698100
	    escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
	  });
	}();
	
	/******************************************************************************
	 * Module : es7_refs                                                          *
	 ******************************************************************************/
	
	// https://github.com/zenparsing/es-abstract-refs
	!function(REFERENCE){
	  REFERENCE_GET = getWellKnownSymbol(REFERENCE+'Get', true);
	  var REFERENCE_SET = getWellKnownSymbol(REFERENCE+SET, true)
	    , REFERENCE_DELETE = getWellKnownSymbol(REFERENCE+'Delete', true);
	  
	  $define(STATIC, SYMBOL, {
	    referenceGet: REFERENCE_GET,
	    referenceSet: REFERENCE_SET,
	    referenceDelete: REFERENCE_DELETE
	  });
	  
	  hidden(FunctionProto, REFERENCE_GET, returnThis);
	  
	  function setMapMethods(Constructor){
	    if(Constructor){
	      var MapProto = Constructor[PROTOTYPE];
	      hidden(MapProto, REFERENCE_GET, MapProto.get);
	      hidden(MapProto, REFERENCE_SET, MapProto.set);
	      hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
	    }
	  }
	  setMapMethods(Map);
	  setMapMethods(WeakMap);
	}('reference');
	
	/******************************************************************************
	 * Module : array_statics                                                     *
	 ******************************************************************************/
	
	// JavaScript 1.6 / Strawman array statics shim
	!function(arrayStatics){
	  function setArrayStatics(keys, length){
	    forEach.call(array(keys), function(key){
	      if(key in ArrayProto)arrayStatics[key] = ctx(call, ArrayProto[key], length);
	    });
	  }
	  setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
	  setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	  setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	                  'reduce,reduceRight,copyWithin,fill,turn');
	  $define(STATIC, ARRAY, arrayStatics);
	}({});
	}(typeof window != 'undefined' && window.Math === Math ? window : global, true);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function() {
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  if (typeof regeneratorRuntime === "object") {
	    return;
	  }
	
	  var runtime = regeneratorRuntime =
	    false ? {} : exports;
	
	  function wrap(innerFn, outerFn, self, tryList) {
	    return new Generator(innerFn, outerFn, self || null, tryList || []);
	  }
	  runtime.wrap = wrap;
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  runtime.async = function(innerFn, outerFn, self, tryList) {
	    return new Promise(function(resolve, reject) {
	      var generator = wrap(innerFn, outerFn, self, tryList);
	      var callNext = step.bind(generator.next);
	      var callThrow = step.bind(generator["throw"]);
	
	      function step(arg) {
	        try {
	          var info = this(arg);
	          var value = info.value;
	        } catch (error) {
	          return reject(error);
	        }
	
	        if (info.done) {
	          resolve(value);
	        } else {
	          Promise.resolve(value).then(callNext, callThrow);
	        }
	      }
	
	      callNext();
	    });
	  };
	
	  function Generator(innerFn, outerFn, self, tryList) {
	    var generator = outerFn ? Object.create(outerFn.prototype) : this;
	    var context = new Context(tryList);
	    var state = GenStateSuspendedStart;
	
	    function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          try {
	            var info = delegate.iterator[method](arg);
	
	            // Delegate generator ran and handled its own exceptions so
	            // regardless of what the method was, we continue as if it is
	            // "next" with an undefined arg.
	            method = "next";
	            arg = undefined;
	
	          } catch (uncaught) {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = uncaught;
	
	            continue;
	          }
	
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedStart &&
	              typeof arg !== "undefined") {
	            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	            throw new TypeError(
	              "attempt to send " + JSON.stringify(arg) + " to newborn generator"
	            );
	          }
	
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            delete context.sent;
	          }
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        try {
	          var value = innerFn.call(self, context);
	
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: value,
	            done: context.done
	          };
	
	          if (value === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } catch (thrown) {
	          state = GenStateCompleted;
	
	          if (method === "next") {
	            context.dispatchException(thrown);
	          } else {
	            arg = thrown;
	          }
	        }
	      }
	    }
	
	    generator.next = invoke.bind(generator, "next");
	    generator["throw"] = invoke.bind(generator, "throw");
	    generator["return"] = invoke.bind(generator, "return");
	
	    return generator;
	  }
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(triple) {
	    var entry = { tryLoc: triple[0] };
	
	    if (1 in triple) {
	      entry.catchLoc = triple[1];
	    }
	
	    if (2 in triple) {
	      entry.finallyLoc = triple[2];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry, i) {
	    var record = entry.completion || {};
	    record.type = i === 0 ? "normal" : "return";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryList.forEach(pushTryEntry, this);
	    this.reset();
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1;
	
	        function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        }
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function() {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      // Pre-initialize at least 20 temporary variables to enable hidden
	      // class optimizations for simple generators.
	      for (var tempIndex = 0, tempName;
	           hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20;
	           ++tempIndex) {
	        this[tempName] = null;
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    _findFinallyEntry: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") && (
	              entry.finallyLoc === finallyLoc ||
	              this.prev < entry.finallyLoc)) {
	          return entry;
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      var entry = this._findFinallyEntry();
	      var record = entry ? entry.completion : {};
	
	      record.type = type;
	      record.arg = arg;
	
	      if (entry) {
	        this.next = entry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      var entry = this._findFinallyEntry(finallyLoc);
	      return this.complete(entry.completion);
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry, i);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})();


/***/ },
/* 87 */,
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(91);


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### .getProperties(object)
	 *
	 * This allows the retrieval of property names of an object, enumerable or not,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @name getProperties
	 * @api public
	 */
	
	module.exports = function getProperties(object) {
	  var result = Object.getOwnPropertyNames(subject);
	
	  function addProperty(property) {
	    if (result.indexOf(property) === -1) {
	      result.push(property);
	    }
	  }
	
	  var proto = Object.getPrototypeOf(subject);
	  while (proto !== null) {
	    Object.getOwnPropertyNames(proto).forEach(addProperty);
	    proto = Object.getPrototypeOf(proto);
	  }
	
	  return result;
	};


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getEnumerableProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### .getEnumerableProperties(object)
	 *
	 * This allows the retrieval of enumerable property names of an object,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @name getEnumerableProperties
	 * @api public
	 */
	
	module.exports = function getEnumerableProperties(object) {
	  var result = [];
	  for (var name in object) {
	    result.push(name);
	  }
	  return result;
	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependencies
	 */
	
	var type = __webpack_require__(95);
	
	/*!
	 * Buffer.isBuffer browser shim
	 */
	
	var Buffer;
	try { Buffer = __webpack_require__(93).Buffer; }
	catch(ex) {
	  Buffer = {};
	  Buffer.isBuffer = function() { return false; }
	}
	
	/*!
	 * Primary Export
	 */
	
	module.exports = deepEqual;
	
	/**
	 * Assert super-strict (egal) equality between
	 * two objects of any type.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @param {Array} memoised (optional)
	 * @return {Boolean} equal match
	 */
	
	function deepEqual(a, b, m) {
	  if (sameValue(a, b)) {
	    return true;
	  } else if ('date' === type(a)) {
	    return dateEqual(a, b);
	  } else if ('regexp' === type(a)) {
	    return regexpEqual(a, b);
	  } else if (Buffer.isBuffer(a)) {
	    return bufferEqual(a, b);
	  } else if ('arguments' === type(a)) {
	    return argumentsEqual(a, b, m);
	  } else if (!typeEqual(a, b)) {
	    return false;
	  } else if (('object' !== type(a) && 'object' !== type(b))
	  && ('array' !== type(a) && 'array' !== type(b))) {
	    return sameValue(a, b);
	  } else {
	    return objectEqual(a, b, m);
	  }
	}
	
	/*!
	 * Strict (egal) equality test. Ensures that NaN always
	 * equals NaN and `-0` does not equal `+0`.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} equal match
	 */
	
	function sameValue(a, b) {
	  if (a === b) return a !== 0 || 1 / a === 1 / b;
	  return a !== a && b !== b;
	}
	
	/*!
	 * Compare the types of two given objects and
	 * return if they are equal. Note that an Array
	 * has a type of `array` (not `object`) and arguments
	 * have a type of `arguments` (not `array`/`object`).
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function typeEqual(a, b) {
	  return type(a) === type(b);
	}
	
	/*!
	 * Compare two Date objects by asserting that
	 * the time values are equal using `saveValue`.
	 *
	 * @param {Date} a
	 * @param {Date} b
	 * @return {Boolean} result
	 */
	
	function dateEqual(a, b) {
	  if ('date' !== type(b)) return false;
	  return sameValue(a.getTime(), b.getTime());
	}
	
	/*!
	 * Compare two regular expressions by converting them
	 * to string and checking for `sameValue`.
	 *
	 * @param {RegExp} a
	 * @param {RegExp} b
	 * @return {Boolean} result
	 */
	
	function regexpEqual(a, b) {
	  if ('regexp' !== type(b)) return false;
	  return sameValue(a.toString(), b.toString());
	}
	
	/*!
	 * Assert deep equality of two `arguments` objects.
	 * Unfortunately, these must be sliced to arrays
	 * prior to test to ensure no bad behavior.
	 *
	 * @param {Arguments} a
	 * @param {Arguments} b
	 * @param {Array} memoize (optional)
	 * @return {Boolean} result
	 */
	
	function argumentsEqual(a, b, m) {
	  if ('arguments' !== type(b)) return false;
	  a = [].slice.call(a);
	  b = [].slice.call(b);
	  return deepEqual(a, b, m);
	}
	
	/*!
	 * Get enumerable properties of a given object.
	 *
	 * @param {Object} a
	 * @return {Array} property names
	 */
	
	function enumerable(a) {
	  var res = [];
	  for (var key in a) res.push(key);
	  return res;
	}
	
	/*!
	 * Simple equality for flat iterable objects
	 * such as Arrays or Node.js buffers.
	 *
	 * @param {Iterable} a
	 * @param {Iterable} b
	 * @return {Boolean} result
	 */
	
	function iterableEqual(a, b) {
	  if (a.length !==  b.length) return false;
	
	  var i = 0;
	  var match = true;
	
	  for (; i < a.length; i++) {
	    if (a[i] !== b[i]) {
	      match = false;
	      break;
	    }
	  }
	
	  return match;
	}
	
	/*!
	 * Extension to `iterableEqual` specifically
	 * for Node.js Buffers.
	 *
	 * @param {Buffer} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function bufferEqual(a, b) {
	  if (!Buffer.isBuffer(b)) return false;
	  return iterableEqual(a, b);
	}
	
	/*!
	 * Block for `objectEqual` ensuring non-existing
	 * values don't get in.
	 *
	 * @param {Mixed} object
	 * @return {Boolean} result
	 */
	
	function isValue(a) {
	  return a !== null && a !== undefined;
	}
	
	/*!
	 * Recursively check the equality of two objects.
	 * Once basic sameness has been established it will
	 * defer to `deepEqual` for each enumerable key
	 * in the object.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function objectEqual(a, b, m) {
	  if (!isValue(a) || !isValue(b)) {
	    return false;
	  }
	
	  if (a.prototype !== b.prototype) {
	    return false;
	  }
	
	  var i;
	  if (m) {
	    for (i = 0; i < m.length; i++) {
	      if ((m[i][0] === a && m[i][1] === b)
	      ||  (m[i][0] === b && m[i][1] === a)) {
	        return true;
	      }
	    }
	  } else {
	    m = [];
	  }
	
	  try {
	    var ka = enumerable(a);
	    var kb = enumerable(b);
	  } catch (ex) {
	    return false;
	  }
	
	  ka.sort();
	  kb.sort();
	
	  if (!iterableEqual(ka, kb)) {
	    return false;
	  }
	
	  m.push([ a, b ]);
	
	  var key;
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], m)) {
	      return false;
	    }
	  }
	
	  return true;
	}


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) { /*!
	  * https://github.com/paulmillr/es6-shim
	  * @license es6-shim Copyright 2013-2014 by Paul Miller (http://paulmillr.com)
	  *   and contributors,  MIT License
	  * es6-shim: v0.22.2
	  * see https://github.com/paulmillr/es6-shim/blob/0.22.2/LICENSE
	  * Details and documentation:
	  * https://github.com/paulmillr/es6-shim/
	  */
	
	// UMD (Universal Module Definition)
	// see https://github.com/umdjs/umd/blob/master/returnExports.js
	(function (root, factory) {
	  /*global define, module, exports */
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.returnExports = factory();
	  }
	}(this, function () {
	  'use strict';
	
	  var isCallableWithoutNew = function (func) {
	    try {
	      func();
	    } catch (e) {
	      return false;
	    }
	    return true;
	  };
	
	  var supportsSubclassing = function (C, f) {
	    /* jshint proto:true */
	    try {
	      var Sub = function () { C.apply(this, arguments); };
	      if (!Sub.__proto__) { return false; /* skip test on IE < 11 */ }
	      Object.setPrototypeOf(Sub, C);
	      Sub.prototype = Object.create(C.prototype, {
	        constructor: { value: C }
	      });
	      return f(Sub);
	    } catch (e) {
	      return false;
	    }
	  };
	
	  var arePropertyDescriptorsSupported = function () {
	    try {
	      Object.defineProperty({}, 'x', {});
	      return true;
	    } catch (e) { /* this is IE 8. */
	      return false;
	    }
	  };
	
	  var startsWithRejectsRegex = function () {
	    var rejectsRegex = false;
	    if (String.prototype.startsWith) {
	      try {
	        '/a/'.startsWith(/a/);
	      } catch (e) { /* this is spec compliant */
	        rejectsRegex = true;
	      }
	    }
	    return rejectsRegex;
	  };
	
	  /*jshint evil: true */
	  var getGlobal = new Function('return this;');
	  /*jshint evil: false */
	
	  var globals = getGlobal();
	  var global_isFinite = globals.isFinite;
	  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
	  var startsWithIsCompliant = startsWithRejectsRegex();
	  var _indexOf = Function.call.bind(String.prototype.indexOf);
	  var _toString = Function.call.bind(Object.prototype.toString);
	  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
	  var ArrayIterator; // make our implementation private
	  var noop = function () {};
	
	  var Symbol = globals.Symbol || {};
	  var Type = {
	    string: function (x) { return _toString(x) === '[object String]'; },
	    regex: function (x) { return _toString(x) === '[object RegExp]'; },
	    symbol: function (x) {
	      /*jshint notypeof: true */
	      return typeof globals.Symbol === 'function' && typeof x === 'symbol';
	      /*jshint notypeof: false */
	    }
	  };
	
	  var defineProperty = function (object, name, value, force) {
	    if (!force && name in object) { return; }
	    if (supportsDescriptors) {
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: false,
	        writable: true,
	        value: value
	      });
	    } else {
	      object[name] = value;
	    }
	  };
	
	  var Value = {
	    getter: function (object, name, getter) {
	      if (!supportsDescriptors) {
	        throw new TypeError('getters require true ES5 support');
	      }
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: false,
	        get: getter
	      });
	    },
	    proxy: function (originalObject, key, targetObject) {
	      if (!supportsDescriptors) {
	        throw new TypeError('getters require true ES5 support');
	      }
	      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
	      Object.defineProperty(targetObject, key, {
	        configurable: originalDescriptor.configurable,
	        enumerable: originalDescriptor.enumerable,
	        get: function getKey() { return originalObject[key]; },
	        set: function setKey(value) { originalObject[key] = value; }
	      });
	    },
	    redefine: function (object, property, newValue) {
	      if (supportsDescriptors) {
	        var descriptor = Object.getOwnPropertyDescriptor(object, property);
	        descriptor.value = newValue;
	        Object.defineProperty(object, property, descriptor);
	      } else {
	        object[property] = newValue;
	      }
	    }
	  };
	
	  // Define configurable, writable and non-enumerable props
	  // if they don’t exist.
	  var defineProperties = function (object, map) {
	    Object.keys(map).forEach(function (name) {
	      var method = map[name];
	      defineProperty(object, name, method, false);
	    });
	  };
	
	  // Simple shim for Object.create on ES3 browsers
	  // (unlike real shim, no attempt to support `prototype === null`)
	  var create = Object.create || function (prototype, properties) {
	    function Prototype() {}
	    Prototype.prototype = prototype;
	    var object = new Prototype();
	    if (typeof properties !== 'undefined') {
	      defineProperties(object, properties);
	    }
	    return object;
	  };
	
	  // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
	  // we're going to use an arbitrary _-prefixed name to make our shims
	  // work properly with each other, even though we don't have full Iterator
	  // support.  That is, `Array.from(map.keys())` will work, but we don't
	  // pretend to export a "real" Iterator interface.
	  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
	  // Firefox ships a partial implementation using the name @@iterator.
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
	  // So use that name if we detect it.
	  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
	    $iterator$ = '@@iterator';
	  }
	  var addIterator = function (prototype, impl) {
	    if (!impl) { impl = function iterator() { return this; }; }
	    var o = {};
	    o[$iterator$] = impl;
	    defineProperties(prototype, o);
	    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
	      // implementations are buggy when $iterator$ is a Symbol
	      prototype[$iterator$] = impl;
	    }
	  };
	
	  // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
	  // can be replaced with require('is-arguments') if we ever use a build process instead
	  var isArguments = function isArguments(value) {
	    var str = _toString(value);
	    var result = str === '[object Arguments]';
	    if (!result) {
	      result = str !== '[object Array]' &&
	        value !== null &&
	        typeof value === 'object' &&
	        typeof value.length === 'number' &&
	        value.length >= 0 &&
	        _toString(value.callee) === '[object Function]';
	    }
	    return result;
	  };
	
	  var ES = {
	    CheckObjectCoercible: function (x, optMessage) {
	      /* jshint eqnull:true */
	      if (x == null) {
	        throw new TypeError(optMessage || 'Cannot call method on ' + x);
	      }
	      return x;
	    },
	
	    TypeIsObject: function (x) {
	      /* jshint eqnull:true */
	      // this is expensive when it returns false; use this function
	      // when you expect it to return true in the common case.
	      return x != null && Object(x) === x;
	    },
	
	    ToObject: function (o, optMessage) {
	      return Object(ES.CheckObjectCoercible(o, optMessage));
	    },
	
	    IsCallable: function (x) {
	      // some versions of IE say that typeof /abc/ === 'function'
	      return typeof x === 'function' && _toString(x) === '[object Function]';
	    },
	
	    ToInt32: function (x) {
	      return ES.ToNumber(x) >> 0;
	    },
	
	    ToUint32: function (x) {
	      return ES.ToNumber(x) >>> 0;
	    },
	
	    ToNumber: function (value) {
	      if (_toString(value) === '[object Symbol]') {
	        throw new TypeError('Cannot convert a Symbol value to a number');
	      }
	      return +value;
	    },
	
	    ToInteger: function (value) {
	      var number = ES.ToNumber(value);
	      if (Number.isNaN(number)) { return 0; }
	      if (number === 0 || !Number.isFinite(number)) { return number; }
	      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
	    },
	
	    ToLength: function (value) {
	      var len = ES.ToInteger(value);
	      if (len <= 0) { return 0; } // includes converting -0 to +0
	      if (len > Number.MAX_SAFE_INTEGER) { return Number.MAX_SAFE_INTEGER; }
	      return len;
	    },
	
	    SameValue: function (a, b) {
	      if (a === b) {
	        // 0 === -0, but they are not identical.
	        if (a === 0) { return 1 / a === 1 / b; }
	        return true;
	      }
	      return Number.isNaN(a) && Number.isNaN(b);
	    },
	
	    SameValueZero: function (a, b) {
	      // same as SameValue except for SameValueZero(+0, -0) == true
	      return (a === b) || (Number.isNaN(a) && Number.isNaN(b));
	    },
	
	    IsIterable: function (o) {
	      return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
	    },
	
	    GetIterator: function (o) {
	      if (isArguments(o)) {
	        // special case support for `arguments`
	        return new ArrayIterator(o, 'value');
	      }
	      var itFn = o[$iterator$];
	      if (!ES.IsCallable(itFn)) {
	        throw new TypeError('value is not an iterable');
	      }
	      var it = itFn.call(o);
	      if (!ES.TypeIsObject(it)) {
	        throw new TypeError('bad iterator');
	      }
	      return it;
	    },
	
	    IteratorNext: function (it) {
	      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
	      if (!ES.TypeIsObject(result)) {
	        throw new TypeError('bad iterator');
	      }
	      return result;
	    },
	
	    Construct: function (C, args) {
	      // CreateFromConstructor
	      var obj;
	      if (ES.IsCallable(C['@@create'])) {
	        obj = C['@@create']();
	      } else {
	        // OrdinaryCreateFromConstructor
	        obj = create(C.prototype || null);
	      }
	      // Mark that we've used the es6 construct path
	      // (see emulateES6construct)
	      defineProperties(obj, { _es6construct: true });
	      // Call the constructor.
	      var result = C.apply(obj, args);
	      return ES.TypeIsObject(result) ? result : obj;
	    }
	  };
	
	  var emulateES6construct = function (o) {
	    if (!ES.TypeIsObject(o)) { throw new TypeError('bad object'); }
	    // es5 approximation to es6 subclass semantics: in es6, 'new Foo'
	    // would invoke Foo.@@create to allocation/initialize the new object.
	    // In es5 we just get the plain object.  So if we detect an
	    // uninitialized object, invoke o.constructor.@@create
	    if (!o._es6construct) {
	      if (o.constructor && ES.IsCallable(o.constructor['@@create'])) {
	        o = o.constructor['@@create'](o);
	      }
	      defineProperties(o, { _es6construct: true });
	    }
	    return o;
	  };
	
	
	  var numberConversion = (function () {
	    // from https://github.com/inexorabletash/polyfill/blob/master/typedarray.js#L176-L266
	    // with permission and license, per https://twitter.com/inexorabletash/status/372206509540659200
	
	    function roundToEven(n) {
	      var w = Math.floor(n), f = n - w;
	      if (f < 0.5) {
	        return w;
	      }
	      if (f > 0.5) {
	        return w + 1;
	      }
	      return w % 2 ? w + 1 : w;
	    }
	
	    function packIEEE754(v, ebits, fbits) {
	      var bias = (1 << (ebits - 1)) - 1,
	        s, e, f,
	        i, bits, str, bytes;
	
	      // Compute sign, exponent, fraction
	      if (v !== v) {
	        // NaN
	        // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
	        e = (1 << ebits) - 1;
	        f = Math.pow(2, fbits - 1);
	        s = 0;
	      } else if (v === Infinity || v === -Infinity) {
	        e = (1 << ebits) - 1;
	        f = 0;
	        s = (v < 0) ? 1 : 0;
	      } else if (v === 0) {
	        e = 0;
	        f = 0;
	        s = (1 / v === -Infinity) ? 1 : 0;
	      } else {
	        s = v < 0;
	        v = Math.abs(v);
	
	        if (v >= Math.pow(2, 1 - bias)) {
	          e = Math.min(Math.floor(Math.log(v) / Math.LN2), 1023);
	          f = roundToEven(v / Math.pow(2, e) * Math.pow(2, fbits));
	          if (f / Math.pow(2, fbits) >= 2) {
	            e = e + 1;
	            f = 1;
	          }
	          if (e > bias) {
	            // Overflow
	            e = (1 << ebits) - 1;
	            f = 0;
	          } else {
	            // Normal
	            e = e + bias;
	            f = f - Math.pow(2, fbits);
	          }
	        } else {
	          // Subnormal
	          e = 0;
	          f = roundToEven(v / Math.pow(2, 1 - bias - fbits));
	        }
	      }
	
	      // Pack sign, exponent, fraction
	      bits = [];
	      for (i = fbits; i; i -= 1) {
	        bits.push(f % 2 ? 1 : 0);
	        f = Math.floor(f / 2);
	      }
	      for (i = ebits; i; i -= 1) {
	        bits.push(e % 2 ? 1 : 0);
	        e = Math.floor(e / 2);
	      }
	      bits.push(s ? 1 : 0);
	      bits.reverse();
	      str = bits.join('');
	
	      // Bits to bytes
	      bytes = [];
	      while (str.length) {
	        bytes.push(parseInt(str.slice(0, 8), 2));
	        str = str.slice(8);
	      }
	      return bytes;
	    }
	
	    function unpackIEEE754(bytes, ebits, fbits) {
	      // Bytes to bits
	      var bits = [], i, j, b, str,
	          bias, s, e, f;
	
	      for (i = bytes.length; i; i -= 1) {
	        b = bytes[i - 1];
	        for (j = 8; j; j -= 1) {
	          bits.push(b % 2 ? 1 : 0);
	          b = b >> 1;
	        }
	      }
	      bits.reverse();
	      str = bits.join('');
	
	      // Unpack sign, exponent, fraction
	      bias = (1 << (ebits - 1)) - 1;
	      s = parseInt(str.slice(0, 1), 2) ? -1 : 1;
	      e = parseInt(str.slice(1, 1 + ebits), 2);
	      f = parseInt(str.slice(1 + ebits), 2);
	
	      // Produce number
	      if (e === (1 << ebits) - 1) {
	        return f !== 0 ? NaN : s * Infinity;
	      } else if (e > 0) {
	        // Normalized
	        return s * Math.pow(2, e - bias) * (1 + f / Math.pow(2, fbits));
	      } else if (f !== 0) {
	        // Denormalized
	        return s * Math.pow(2, -(bias - 1)) * (f / Math.pow(2, fbits));
	      } else {
	        return s < 0 ? -0 : 0;
	      }
	    }
	
	    function unpackFloat64(b) { return unpackIEEE754(b, 11, 52); }
	    function packFloat64(v) { return packIEEE754(v, 11, 52); }
	    function unpackFloat32(b) { return unpackIEEE754(b, 8, 23); }
	    function packFloat32(v) { return packIEEE754(v, 8, 23); }
	
	    var conversions = {
	      toFloat32: function (num) { return unpackFloat32(packFloat32(num)); }
	    };
	    if (typeof Float32Array !== 'undefined') {
	      var float32array = new Float32Array(1);
	      conversions.toFloat32 = function (num) {
	        float32array[0] = num;
	        return float32array[0];
	      };
	    }
	    return conversions;
	  }());
	
	  defineProperties(String, {
	    fromCodePoint: function fromCodePoint(codePoints) {
	      var result = [];
	      var next;
	      for (var i = 0, length = arguments.length; i < length; i++) {
	        next = Number(arguments[i]);
	        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
	          throw new RangeError('Invalid code point ' + next);
	        }
	
	        if (next < 0x10000) {
	          result.push(String.fromCharCode(next));
	        } else {
	          next -= 0x10000;
	          result.push(String.fromCharCode((next >> 10) + 0xD800));
	          result.push(String.fromCharCode((next % 0x400) + 0xDC00));
	        }
	      }
	      return result.join('');
	    },
	
	    raw: function raw(callSite) {
	      var cooked = ES.ToObject(callSite, 'bad callSite');
	      var rawValue = cooked.raw;
	      var rawString = ES.ToObject(rawValue, 'bad raw value');
	      var len = rawString.length;
	      var literalsegments = ES.ToLength(len);
	      if (literalsegments <= 0) {
	        return '';
	      }
	
	      var stringElements = [];
	      var nextIndex = 0;
	      var nextKey, next, nextSeg, nextSub;
	      while (nextIndex < literalsegments) {
	        nextKey = String(nextIndex);
	        next = rawString[nextKey];
	        nextSeg = String(next);
	        stringElements.push(nextSeg);
	        if (nextIndex + 1 >= literalsegments) {
	          break;
	        }
	        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
	        nextSub = String(next);
	        stringElements.push(nextSub);
	        nextIndex++;
	      }
	      return stringElements.join('');
	    }
	  });
	
	  // Firefox 31 reports this function's length as 0
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
	  if (String.fromCodePoint.length !== 1) {
	    var originalFromCodePoint = Function.apply.bind(String.fromCodePoint);
	    defineProperty(String, 'fromCodePoint', function fromCodePoint(codePoints) { return originalFromCodePoint(this, arguments); }, true);
	  }
	
	  var StringShims = {
	    // Fast repeat, uses the `Exponentiation by squaring` algorithm.
	    // Perf: http://jsperf.com/string-repeat2/2
	    repeat: (function () {
	      var repeat = function (s, times) {
	        if (times < 1) { return ''; }
	        if (times % 2) { return repeat(s, times - 1) + s; }
	        var half = repeat(s, times / 2);
	        return half + half;
	      };
	
	      return function (times) {
	        var thisStr = String(ES.CheckObjectCoercible(this));
	        times = ES.ToInteger(times);
	        if (times < 0 || times === Infinity) {
	          throw new RangeError('Invalid String#repeat value');
	        }
	        return repeat(thisStr, times);
	      };
	    }()),
	
	    startsWith: function (searchStr) {
	      var thisStr = String(ES.CheckObjectCoercible(this));
	      if (Type.regex(searchStr)) {
	        throw new TypeError('Cannot call method "startsWith" with a regex');
	      }
	      searchStr = String(searchStr);
	      var startArg = arguments.length > 1 ? arguments[1] : void 0;
	      var start = Math.max(ES.ToInteger(startArg), 0);
	      return thisStr.slice(start, start + searchStr.length) === searchStr;
	    },
	
	    endsWith: function (searchStr) {
	      var thisStr = String(ES.CheckObjectCoercible(this));
	      if (Type.regex(searchStr)) {
	        throw new TypeError('Cannot call method "endsWith" with a regex');
	      }
	      searchStr = String(searchStr);
	      var thisLen = thisStr.length;
	      var posArg = arguments.length > 1 ? arguments[1] : void 0;
	      var pos = typeof posArg === 'undefined' ? thisLen : ES.ToInteger(posArg);
	      var end = Math.min(Math.max(pos, 0), thisLen);
	      return thisStr.slice(end - searchStr.length, end) === searchStr;
	    },
	
	    includes: function includes(searchString) {
	      var position = arguments.length > 1 ? arguments[1] : void 0;
	      // Somehow this trick makes method 100% compat with the spec.
	      return _indexOf(this, searchString, position) !== -1;
	    },
	
	    codePointAt: function (pos) {
	      var thisStr = String(ES.CheckObjectCoercible(this));
	      var position = ES.ToInteger(pos);
	      var length = thisStr.length;
	      if (position >= 0 && position < length) {
	        var first = thisStr.charCodeAt(position);
	        var isEnd = (position + 1 === length);
	        if (first < 0xD800 || first > 0xDBFF || isEnd) { return first; }
	        var second = thisStr.charCodeAt(position + 1);
	        if (second < 0xDC00 || second > 0xDFFF) { return first; }
	        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
	      }
	    }
	  };
	  defineProperties(String.prototype, StringShims);
	
	  var hasStringTrimBug = '\u0085'.trim().length !== 1;
	  if (hasStringTrimBug) {
	    delete String.prototype.trim;
	    // whitespace from: http://es5.github.io/#x15.5.4.20
	    // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	    var ws = [
	      '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	      '\u2029\uFEFF'
	    ].join('');
	    var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	    defineProperties(String.prototype, {
	      trim: function () {
	        if (typeof this === 'undefined' || this === null) {
	          throw new TypeError("can't convert " + this + ' to object');
	        }
	        return String(this).replace(trimRegexp, '');
	      }
	    });
	  }
	
	  // see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype-@@iterator
	  var StringIterator = function (s) {
	    this._s = String(ES.CheckObjectCoercible(s));
	    this._i = 0;
	  };
	  StringIterator.prototype.next = function () {
	    var s = this._s, i = this._i;
	    if (typeof s === 'undefined' || i >= s.length) {
	      this._s = void 0;
	      return { value: void 0, done: true };
	    }
	    var first = s.charCodeAt(i), second, len;
	    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {
	      len = 1;
	    } else {
	      second = s.charCodeAt(i + 1);
	      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;
	    }
	    this._i = i + len;
	    return { value: s.substr(i, len), done: false };
	  };
	  addIterator(StringIterator.prototype);
	  addIterator(String.prototype, function () {
	    return new StringIterator(this);
	  });
	
	  if (!startsWithIsCompliant) {
	    // Firefox has a noncompliant startsWith implementation
	    defineProperties(String.prototype, {
	      startsWith: StringShims.startsWith,
	      endsWith: StringShims.endsWith
	    });
	  }
	
	  var ArrayShims = {
	    from: function (iterable) {
	      var mapFn = arguments.length > 1 ? arguments[1] : void 0;
	
	      var list = ES.ToObject(iterable, 'bad iterable');
	      if (typeof mapFn !== 'undefined' && !ES.IsCallable(mapFn)) {
	        throw new TypeError('Array.from: when provided, the second argument must be a function');
	      }
	
	      var hasThisArg = arguments.length > 2;
	      var thisArg = hasThisArg ? arguments[2] : void 0;
	
	      var usingIterator = ES.IsIterable(list);
	      // does the spec really mean that Arrays should use ArrayIterator?
	      // https://bugs.ecmascript.org/show_bug.cgi?id=2416
	      //if (Array.isArray(list)) { usingIterator=false; }
	
	      var length;
	      var result, i, value;
	      if (usingIterator) {
	        i = 0;
	        result = ES.IsCallable(this) ? Object(new this()) : [];
	        var it = usingIterator ? ES.GetIterator(list) : null;
	        var iterationValue;
	
	        do {
	          iterationValue = ES.IteratorNext(it);
	          if (!iterationValue.done) {
	            value = iterationValue.value;
	            if (mapFn) {
	              result[i] = hasThisArg ? mapFn.call(thisArg, value, i) : mapFn(value, i);
	            } else {
	              result[i] = value;
	            }
	            i += 1;
	          }
	        } while (!iterationValue.done);
	        length = i;
	      } else {
	        length = ES.ToLength(list.length);
	        result = ES.IsCallable(this) ? Object(new this(length)) : new Array(length);
	        for (i = 0; i < length; ++i) {
	          value = list[i];
	          if (mapFn) {
	            result[i] = hasThisArg ? mapFn.call(thisArg, value, i) : mapFn(value, i);
	          } else {
	            result[i] = value;
	          }
	        }
	      }
	
	      result.length = length;
	      return result;
	    },
	
	    of: function () {
	      return Array.from(arguments);
	    }
	  };
	  defineProperties(Array, ArrayShims);
	
	  var arrayFromSwallowsNegativeLengths = function () {
	    try {
	      return Array.from({ length: -1 }).length === 0;
	    } catch (e) {
	      return false;
	    }
	  };
	  // Fixes a Firefox bug in v32
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
	  if (!arrayFromSwallowsNegativeLengths()) {
	    defineProperty(Array, 'from', ArrayShims.from, true);
	  }
	
	  // Our ArrayIterator is private; see
	  // https://github.com/paulmillr/es6-shim/issues/252
	  ArrayIterator = function (array, kind) {
	      this.i = 0;
	      this.array = array;
	      this.kind = kind;
	  };
	
	  defineProperties(ArrayIterator.prototype, {
	    next: function () {
	      var i = this.i, array = this.array;
	      if (!(this instanceof ArrayIterator)) {
	        throw new TypeError('Not an ArrayIterator');
	      }
	      if (typeof array !== 'undefined') {
	        var len = ES.ToLength(array.length);
	        for (; i < len; i++) {
	          var kind = this.kind;
	          var retval;
	          if (kind === 'key') {
	            retval = i;
	          } else if (kind === 'value') {
	            retval = array[i];
	          } else if (kind === 'entry') {
	            retval = [i, array[i]];
	          }
	          this.i = i + 1;
	          return { value: retval, done: false };
	        }
	      }
	      this.array = void 0;
	      return { value: void 0, done: true };
	    }
	  });
	  addIterator(ArrayIterator.prototype);
	
	  var ArrayPrototypeShims = {
	    copyWithin: function (target, start) {
	      var end = arguments[2]; // copyWithin.length must be 2
	      var o = ES.ToObject(this);
	      var len = ES.ToLength(o.length);
	      target = ES.ToInteger(target);
	      start = ES.ToInteger(start);
	      var to = target < 0 ? Math.max(len + target, 0) : Math.min(target, len);
	      var from = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
	      end = typeof end === 'undefined' ? len : ES.ToInteger(end);
	      var fin = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
	      var count = Math.min(fin - from, len - to);
	      var direction = 1;
	      if (from < to && to < (from + count)) {
	        direction = -1;
	        from += count - 1;
	        to += count - 1;
	      }
	      while (count > 0) {
	        if (_hasOwnProperty(o, from)) {
	          o[to] = o[from];
	        } else {
	          delete o[from];
	        }
	        from += direction;
	        to += direction;
	        count -= 1;
	      }
	      return o;
	    },
	
	    fill: function (value) {
	      var start = arguments.length > 1 ? arguments[1] : void 0;
	      var end = arguments.length > 2 ? arguments[2] : void 0;
	      var O = ES.ToObject(this);
	      var len = ES.ToLength(O.length);
	      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
	      end = ES.ToInteger(typeof end === 'undefined' ? len : end);
	
	      var relativeStart = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
	      var relativeEnd = end < 0 ? len + end : end;
	
	      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
	        O[i] = value;
	      }
	      return O;
	    },
	
	    find: function find(predicate) {
	      var list = ES.ToObject(this);
	      var length = ES.ToLength(list.length);
	      if (!ES.IsCallable(predicate)) {
	        throw new TypeError('Array#find: predicate must be a function');
	      }
	      var thisArg = arguments.length > 1 ? arguments[1] : null;
	      for (var i = 0, value; i < length; i++) {
	        value = list[i];
	        if (thisArg) {
	          if (predicate.call(thisArg, value, i, list)) { return value; }
	        } else if (predicate(value, i, list)) {
	          return value;
	        }
	      }
	    },
	
	    findIndex: function findIndex(predicate) {
	      var list = ES.ToObject(this);
	      var length = ES.ToLength(list.length);
	      if (!ES.IsCallable(predicate)) {
	        throw new TypeError('Array#findIndex: predicate must be a function');
	      }
	      var thisArg = arguments.length > 1 ? arguments[1] : null;
	      for (var i = 0; i < length; i++) {
	        if (thisArg) {
	          if (predicate.call(thisArg, list[i], i, list)) { return i; }
	        } else if (predicate(list[i], i, list)) {
	          return i;
	        }
	      }
	      return -1;
	    },
	
	    keys: function () {
	      return new ArrayIterator(this, 'key');
	    },
	
	    values: function () {
	      return new ArrayIterator(this, 'value');
	    },
	
	    entries: function () {
	      return new ArrayIterator(this, 'entry');
	    }
	  };
	  // Safari 7.1 defines Array#keys and Array#entries natively,
	  // but the resulting ArrayIterator objects don't have a "next" method.
	  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
	    delete Array.prototype.keys;
	  }
	  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
	    delete Array.prototype.entries;
	  }
	
	  // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
	  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
	    defineProperties(Array.prototype, {
	      values: Array.prototype[$iterator$]
	    });
	    if (Type.symbol(Symbol.unscopables)) {
	      Array.prototype[Symbol.unscopables].values = true;
	    }
	  }
	  defineProperties(Array.prototype, ArrayPrototypeShims);
	
	  addIterator(Array.prototype, function () { return this.values(); });
	  // Chrome defines keys/values/entries on Array, but doesn't give us
	  // any way to identify its iterator.  So add our own shimmed field.
	  if (Object.getPrototypeOf) {
	    addIterator(Object.getPrototypeOf([].values()));
	  }
	
	  var maxSafeInteger = Math.pow(2, 53) - 1;
	  defineProperties(Number, {
	    MAX_SAFE_INTEGER: maxSafeInteger,
	    MIN_SAFE_INTEGER: -maxSafeInteger,
	    EPSILON: 2.220446049250313e-16,
	
	    parseInt: globals.parseInt,
	    parseFloat: globals.parseFloat,
	
	    isFinite: function (value) {
	      return typeof value === 'number' && global_isFinite(value);
	    },
	
	    isInteger: function (value) {
	      return Number.isFinite(value) && ES.ToInteger(value) === value;
	    },
	
	    isSafeInteger: function (value) {
	      return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
	    },
	
	    isNaN: function (value) {
	      // NaN !== NaN, but they are identical.
	      // NaNs are the only non-reflexive value, i.e., if x !== x,
	      // then x is NaN.
	      // isNaN is broken: it converts its argument to number, so
	      // isNaN('foo') => true
	      return value !== value;
	    }
	  });
	
	  // Work around bugs in Array#find and Array#findIndex -- early
	  // implementations skipped holes in sparse arrays. (Note that the
	  // implementations of find/findIndex indirectly use shimmed
	  // methods of Number, so this test has to happen down here.)
	  if (![, 1].find(function (item, idx) { return idx === 0; })) {
	    defineProperty(Array.prototype, 'find', ArrayPrototypeShims.find, true);
	  }
	  if ([, 1].findIndex(function (item, idx) { return idx === 0; }) !== 0) {
	    defineProperty(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex, true);
	  }
	
	  if (supportsDescriptors) {
	    defineProperties(Object, {
	      // 19.1.3.1
	      assign: function (target, source) {
	        if (!ES.TypeIsObject(target)) {
	          throw new TypeError('target must be an object');
	        }
	        return Array.prototype.reduce.call(arguments, function (target, source) {
	          return Object.keys(Object(source)).reduce(function (target, key) {
	            target[key] = source[key];
	            return target;
	          }, target);
	        });
	      },
	
	      is: function (a, b) {
	        return ES.SameValue(a, b);
	      },
	
	      // 19.1.3.9
	      // shim from https://gist.github.com/WebReflection/5593554
	      setPrototypeOf: (function (Object, magic) {
	        var set;
	
	        var checkArgs = function (O, proto) {
	          if (!ES.TypeIsObject(O)) {
	            throw new TypeError('cannot set prototype on a non-object');
	          }
	          if (!(proto === null || ES.TypeIsObject(proto))) {
	            throw new TypeError('can only set prototype to an object or null' + proto);
	          }
	        };
	
	        var setPrototypeOf = function (O, proto) {
	          checkArgs(O, proto);
	          set.call(O, proto);
	          return O;
	        };
	
	        try {
	          // this works already in Firefox and Safari
	          set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
	          set.call({}, null);
	        } catch (e) {
	          if (Object.prototype !== {}[magic]) {
	            // IE < 11 cannot be shimmed
	            return;
	          }
	          // probably Chrome or some old Mobile stock browser
	          set = function (proto) {
	            this[magic] = proto;
	          };
	          // please note that this will **not** work
	          // in those browsers that do not inherit
	          // __proto__ by mistake from Object.prototype
	          // in these cases we should probably throw an error
	          // or at least be informed about the issue
	          setPrototypeOf.polyfill = setPrototypeOf(
	            setPrototypeOf({}, null),
	            Object.prototype
	          ) instanceof Object;
	          // setPrototypeOf.polyfill === true means it works as meant
	          // setPrototypeOf.polyfill === false means it's not 100% reliable
	          // setPrototypeOf.polyfill === undefined
	          // or
	          // setPrototypeOf.polyfill ==  null means it's not a polyfill
	          // which means it works as expected
	          // we can even delete Object.prototype.__proto__;
	        }
	        return setPrototypeOf;
	      }(Object, '__proto__'))
	    });
	  }
	
	  // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
	  // but Object.create(null) does.
	  if (Object.setPrototypeOf && Object.getPrototypeOf &&
	      Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null &&
	      Object.getPrototypeOf(Object.create(null)) === null) {
	    (function () {
	      var FAKENULL = Object.create(null);
	      var gpo = Object.getPrototypeOf, spo = Object.setPrototypeOf;
	      Object.getPrototypeOf = function (o) {
	        var result = gpo(o);
	        return result === FAKENULL ? null : result;
	      };
	      Object.setPrototypeOf = function (o, p) {
	        if (p === null) { p = FAKENULL; }
	        return spo(o, p);
	      };
	      Object.setPrototypeOf.polyfill = false;
	    }());
	  }
	
	  try {
	    Object.keys('foo');
	  } catch (e) {
	    var originalObjectKeys = Object.keys;
	    Object.keys = function (obj) {
	      return originalObjectKeys(ES.ToObject(obj));
	    };
	  }
	
	  if (!RegExp.prototype.flags && supportsDescriptors) {
	    var regExpFlagsGetter = function flags() {
	      if (!ES.TypeIsObject(this)) {
	        throw new TypeError('Method called on incompatible type: must be an object.');
	      }
	      var result = '';
	      if (this.global) {
	        result += 'g';
	      }
	      if (this.ignoreCase) {
	        result += 'i';
	      }
	      if (this.multiline) {
	        result += 'm';
	      }
	      if (this.unicode) {
	        result += 'u';
	      }
	      if (this.sticky) {
	        result += 'y';
	      }
	      return result;
	    };
	
	    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
	  }
	
	  var regExpSupportsFlagsWithRegex = (function () {
	    try {
	      return String(new RegExp(/a/g, 'i')) === '/a/i';
	    } catch (e) {
	      return false;
	    }
	  }());
	
	  if (!regExpSupportsFlagsWithRegex && supportsDescriptors) {
	    var OrigRegExp = RegExp;
	    var RegExpShim = function RegExp(pattern, flags) {
	      if (Type.regex(pattern) && Type.string(flags)) {
	        return new RegExp(pattern.source, flags);
	      }
	      return new OrigRegExp(pattern, flags);
	    };
	    defineProperty(RegExpShim, 'toString', OrigRegExp.toString.bind(OrigRegExp), true);
	    if (Object.setPrototypeOf) {
	      // sets up proper prototype chain where possible
	      Object.setPrototypeOf(OrigRegExp, RegExpShim);
	    }
	    Object.getOwnPropertyNames(OrigRegExp).forEach(function (key) {
	      if (key === '$input') { return; } // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
	      if (key in noop) { return; }
	      Value.proxy(OrigRegExp, key, RegExpShim);
	    });
	    RegExpShim.prototype = OrigRegExp.prototype;
	    Value.redefine(OrigRegExp.prototype, 'constructor', RegExpShim);
	    /*globals RegExp: true */
	    RegExp = RegExpShim;
	    Value.redefine(globals, 'RegExp', RegExpShim);
	    /*globals RegExp: false */
	  }
	
	  var MathShims = {
	    acosh: function (value) {
	      value = Number(value);
	      if (Number.isNaN(value) || value < 1) { return NaN; }
	      if (value === 1) { return 0; }
	      if (value === Infinity) { return value; }
	      return Math.log(value + Math.sqrt(value * value - 1));
	    },
	
	    asinh: function (value) {
	      value = Number(value);
	      if (value === 0 || !global_isFinite(value)) {
	        return value;
	      }
	      return value < 0 ? -Math.asinh(-value) : Math.log(value + Math.sqrt(value * value + 1));
	    },
	
	    atanh: function (value) {
	      value = Number(value);
	      if (Number.isNaN(value) || value < -1 || value > 1) {
	        return NaN;
	      }
	      if (value === -1) { return -Infinity; }
	      if (value === 1) { return Infinity; }
	      if (value === 0) { return value; }
	      return 0.5 * Math.log((1 + value) / (1 - value));
	    },
	
	    cbrt: function (value) {
	      value = Number(value);
	      if (value === 0) { return value; }
	      var negate = value < 0, result;
	      if (negate) { value = -value; }
	      result = Math.pow(value, 1 / 3);
	      return negate ? -result : result;
	    },
	
	    clz32: function (value) {
	      // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
	      value = Number(value);
	      var number = ES.ToUint32(value);
	      if (number === 0) {
	        return 32;
	      }
	      return 32 - (number).toString(2).length;
	    },
	
	    cosh: function (value) {
	      value = Number(value);
	      if (value === 0) { return 1; } // +0 or -0
	      if (Number.isNaN(value)) { return NaN; }
	      if (!global_isFinite(value)) { return Infinity; }
	      if (value < 0) { value = -value; }
	      if (value > 21) { return Math.exp(value) / 2; }
	      return (Math.exp(value) + Math.exp(-value)) / 2;
	    },
	
	    expm1: function (value) {
	      value = Number(value);
	      if (value === -Infinity) { return -1; }
	      if (!global_isFinite(value) || value === 0) { return value; }
	      return Math.exp(value) - 1;
	    },
	
	    hypot: function (x, y) {
	      var anyNaN = false;
	      var allZero = true;
	      var anyInfinity = false;
	      var numbers = [];
	      Array.prototype.every.call(arguments, function (arg) {
	        var num = Number(arg);
	        if (Number.isNaN(num)) {
	          anyNaN = true;
	        } else if (num === Infinity || num === -Infinity) {
	          anyInfinity = true;
	        } else if (num !== 0) {
	          allZero = false;
	        }
	        if (anyInfinity) {
	          return false;
	        } else if (!anyNaN) {
	          numbers.push(Math.abs(num));
	        }
	        return true;
	      });
	      if (anyInfinity) { return Infinity; }
	      if (anyNaN) { return NaN; }
	      if (allZero) { return 0; }
	
	      numbers.sort(function (a, b) { return b - a; });
	      var largest = numbers[0];
	      var divided = numbers.map(function (number) { return number / largest; });
	      var sum = divided.reduce(function (sum, number) { return sum + (number * number); }, 0);
	      return largest * Math.sqrt(sum);
	    },
	
	    log2: function (value) {
	      return Math.log(value) * Math.LOG2E;
	    },
	
	    log10: function (value) {
	      return Math.log(value) * Math.LOG10E;
	    },
	
	    log1p: function (value) {
	      value = Number(value);
	      if (value < -1 || Number.isNaN(value)) { return NaN; }
	      if (value === 0 || value === Infinity) { return value; }
	      if (value === -1) { return -Infinity; }
	      var result = 0;
	      var n = 50;
	
	      if (value < 0 || value > 1) { return Math.log(1 + value); }
	      for (var i = 1; i < n; i++) {
	        if ((i % 2) === 0) {
	          result -= Math.pow(value, i) / i;
	        } else {
	          result += Math.pow(value, i) / i;
	        }
	      }
	
	      return result;
	    },
	
	    sign: function (value) {
	      var number = +value;
	      if (number === 0) { return number; }
	      if (Number.isNaN(number)) { return number; }
	      return number < 0 ? -1 : 1;
	    },
	
	    sinh: function (value) {
	      value = Number(value);
	      if (!global_isFinite(value) || value === 0) { return value; }
	      return (Math.exp(value) - Math.exp(-value)) / 2;
	    },
	
	    tanh: function (value) {
	      value = Number(value);
	      if (Number.isNaN(value) || value === 0) { return value; }
	      if (value === Infinity) { return 1; }
	      if (value === -Infinity) { return -1; }
	      return (Math.exp(value) - Math.exp(-value)) / (Math.exp(value) + Math.exp(-value));
	    },
	
	    trunc: function (value) {
	      var number = Number(value);
	      return number < 0 ? -Math.floor(-number) : Math.floor(number);
	    },
	
	    imul: function (x, y) {
	      // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
	      x = ES.ToUint32(x);
	      y = ES.ToUint32(y);
	      var ah = (x >>> 16) & 0xffff;
	      var al = x & 0xffff;
	      var bh = (y >>> 16) & 0xffff;
	      var bl = y & 0xffff;
	      // the shift by 0 fixes the sign on the high part
	      // the final |0 converts the unsigned value into a signed value
	      return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
	    },
	
	    fround: function (x) {
	      if (x === 0 || x === Infinity || x === -Infinity || Number.isNaN(x)) {
	        return x;
	      }
	      var num = Number(x);
	      return numberConversion.toFloat32(num);
	    }
	  };
	  defineProperties(Math, MathShims);
	
	  if (Math.imul(0xffffffff, 5) !== -5) {
	    // Safari 6.1, at least, reports "0" for this value
	    Math.imul = MathShims.imul;
	  }
	
	  // Promises
	  // Simplest possible implementation; use a 3rd-party library if you
	  // want the best possible speed and/or long stack traces.
	  var PromiseShim = (function () {
	
	    var Promise, Promise$prototype;
	
	    ES.IsPromise = function (promise) {
	      if (!ES.TypeIsObject(promise)) {
	        return false;
	      }
	      if (!promise._promiseConstructor) {
	        // _promiseConstructor is a bit more unique than _status, so we'll
	        // check that instead of the [[PromiseStatus]] internal field.
	        return false;
	      }
	      if (typeof promise._status === 'undefined') {
	        return false; // uninitialized
	      }
	      return true;
	    };
	
	    // "PromiseCapability" in the spec is what most promise implementations
	    // call a "deferred".
	    var PromiseCapability = function (C) {
	      if (!ES.IsCallable(C)) {
	        throw new TypeError('bad promise constructor');
	      }
	      var capability = this;
	      var resolver = function (resolve, reject) {
	        capability.resolve = resolve;
	        capability.reject = reject;
	      };
	      capability.promise = ES.Construct(C, [resolver]);
	      // see https://bugs.ecmascript.org/show_bug.cgi?id=2478
	      if (!capability.promise._es6construct) {
	        throw new TypeError('bad promise constructor');
	      }
	      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
	        throw new TypeError('bad promise constructor');
	      }
	    };
	
	    // find an appropriate setImmediate-alike
	    var setTimeout = globals.setTimeout;
	    var makeZeroTimeout;
	    /*global window */
	    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
	      makeZeroTimeout = function () {
	        // from http://dbaron.org/log/20100309-faster-timeouts
	        var timeouts = [];
	        var messageName = 'zero-timeout-message';
	        var setZeroTimeout = function (fn) {
	          timeouts.push(fn);
	          window.postMessage(messageName, '*');
	        };
	        var handleMessage = function (event) {
	          if (event.source === window && event.data === messageName) {
	            event.stopPropagation();
	            if (timeouts.length === 0) { return; }
	            var fn = timeouts.shift();
	            fn();
	          }
	        };
	        window.addEventListener('message', handleMessage, true);
	        return setZeroTimeout;
	      };
	    }
	    var makePromiseAsap = function () {
	      // An efficient task-scheduler based on a pre-existing Promise
	      // implementation, which we can use even if we override the
	      // global Promise below (in order to workaround bugs)
	      // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
	      var P = globals.Promise;
	      return P && P.resolve && function (task) {
	        return P.resolve().then(task);
	      };
	    };
	    /*global process */
	    var enqueue = ES.IsCallable(globals.setImmediate) ?
	      globals.setImmediate.bind(globals) :
	      typeof process === 'object' && process.nextTick ? process.nextTick :
	      makePromiseAsap() ||
	      (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() :
	      function (task) { setTimeout(task, 0); }); // fallback
	
	    var updatePromiseFromPotentialThenable = function (x, capability) {
	      if (!ES.TypeIsObject(x)) {
	        return false;
	      }
	      var resolve = capability.resolve;
	      var reject = capability.reject;
	      try {
	        var then = x.then; // only one invocation of accessor
	        if (!ES.IsCallable(then)) { return false; }
	        then.call(x, resolve, reject);
	      } catch (e) {
	        reject(e);
	      }
	      return true;
	    };
	
	    var triggerPromiseReactions = function (reactions, x) {
	      reactions.forEach(function (reaction) {
	        enqueue(function () {
	          // PromiseReactionTask
	          var handler = reaction.handler;
	          var capability = reaction.capability;
	          var resolve = capability.resolve;
	          var reject = capability.reject;
	          try {
	            var result = handler(x);
	            if (result === capability.promise) {
	              throw new TypeError('self resolution');
	            }
	            var updateResult =
	              updatePromiseFromPotentialThenable(result, capability);
	            if (!updateResult) {
	              resolve(result);
	            }
	          } catch (e) {
	            reject(e);
	          }
	        });
	      });
	    };
	
	    var promiseResolutionHandler = function (promise, onFulfilled, onRejected) {
	      return function (x) {
	        if (x === promise) {
	          return onRejected(new TypeError('self resolution'));
	        }
	        var C = promise._promiseConstructor;
	        var capability = new PromiseCapability(C);
	        var updateResult = updatePromiseFromPotentialThenable(x, capability);
	        if (updateResult) {
	          return capability.promise.then(onFulfilled, onRejected);
	        } else {
	          return onFulfilled(x);
	        }
	      };
	    };
	
	    Promise = function (resolver) {
	      var promise = this;
	      promise = emulateES6construct(promise);
	      if (!promise._promiseConstructor) {
	        // we use _promiseConstructor as a stand-in for the internal
	        // [[PromiseStatus]] field; it's a little more unique.
	        throw new TypeError('bad promise');
	      }
	      if (typeof promise._status !== 'undefined') {
	        throw new TypeError('promise already initialized');
	      }
	      // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
	      if (!ES.IsCallable(resolver)) {
	        throw new TypeError('not a valid resolver');
	      }
	      promise._status = 'unresolved';
	      promise._resolveReactions = [];
	      promise._rejectReactions = [];
	
	      var resolve = function (resolution) {
	        if (promise._status !== 'unresolved') { return; }
	        var reactions = promise._resolveReactions;
	        promise._result = resolution;
	        promise._resolveReactions = void 0;
	        promise._rejectReactions = void 0;
	        promise._status = 'has-resolution';
	        triggerPromiseReactions(reactions, resolution);
	      };
	      var reject = function (reason) {
	        if (promise._status !== 'unresolved') { return; }
	        var reactions = promise._rejectReactions;
	        promise._result = reason;
	        promise._resolveReactions = void 0;
	        promise._rejectReactions = void 0;
	        promise._status = 'has-rejection';
	        triggerPromiseReactions(reactions, reason);
	      };
	      try {
	        resolver(resolve, reject);
	      } catch (e) {
	        reject(e);
	      }
	      return promise;
	    };
	    Promise$prototype = Promise.prototype;
	    var _promiseAllResolver = function (index, values, capability, remaining) {
	      var done = false;
	      return function (x) {
	        if (done) { return; } // protect against being called multiple times
	        done = true;
	        values[index] = x;
	        if ((--remaining.count) === 0) {
	          var resolve = capability.resolve;
	          resolve(values); // call w/ this===undefined
	        }
	      };
	    };
	
	    defineProperties(Promise, {
	      '@@create': function (obj) {
	        var constructor = this;
	        // AllocatePromise
	        // The `obj` parameter is a hack we use for es5
	        // compatibility.
	        var prototype = constructor.prototype || Promise$prototype;
	        obj = obj || create(prototype);
	        defineProperties(obj, {
	          _status: void 0,
	          _result: void 0,
	          _resolveReactions: void 0,
	          _rejectReactions: void 0,
	          _promiseConstructor: void 0
	        });
	        obj._promiseConstructor = constructor;
	        return obj;
	      },
	
	      all: function all(iterable) {
	        var C = this;
	        var capability = new PromiseCapability(C);
	        var resolve = capability.resolve;
	        var reject = capability.reject;
	        try {
	          if (!ES.IsIterable(iterable)) {
	            throw new TypeError('bad iterable');
	          }
	          var it = ES.GetIterator(iterable);
	          var values = [], remaining = { count: 1 };
	          for (var index = 0; ; index++) {
	            var next = ES.IteratorNext(it);
	            if (next.done) {
	              break;
	            }
	            var nextPromise = C.resolve(next.value);
	            var resolveElement = _promiseAllResolver(
	              index, values, capability, remaining
	            );
	            remaining.count++;
	            nextPromise.then(resolveElement, capability.reject);
	          }
	          if ((--remaining.count) === 0) {
	            resolve(values); // call w/ this===undefined
	          }
	        } catch (e) {
	          reject(e);
	        }
	        return capability.promise;
	      },
	
	      race: function race(iterable) {
	        var C = this;
	        var capability = new PromiseCapability(C);
	        var resolve = capability.resolve;
	        var reject = capability.reject;
	        try {
	          if (!ES.IsIterable(iterable)) {
	            throw new TypeError('bad iterable');
	          }
	          var it = ES.GetIterator(iterable);
	          while (true) {
	            var next = ES.IteratorNext(it);
	            if (next.done) {
	              // If iterable has no items, resulting promise will never
	              // resolve; see:
	              // https://github.com/domenic/promises-unwrapping/issues/75
	              // https://bugs.ecmascript.org/show_bug.cgi?id=2515
	              break;
	            }
	            var nextPromise = C.resolve(next.value);
	            nextPromise.then(resolve, reject);
	          }
	        } catch (e) {
	          reject(e);
	        }
	        return capability.promise;
	      },
	
	      reject: function reject(reason) {
	        var C = this;
	        var capability = new PromiseCapability(C);
	        var rejectPromise = capability.reject;
	        rejectPromise(reason); // call with this===undefined
	        return capability.promise;
	      },
	
	      resolve: function resolve(v) {
	        var C = this;
	        if (ES.IsPromise(v)) {
	          var constructor = v._promiseConstructor;
	          if (constructor === C) { return v; }
	        }
	        var capability = new PromiseCapability(C);
	        var resolvePromise = capability.resolve;
	        resolvePromise(v); // call with this===undefined
	        return capability.promise;
	      }
	    });
	
	    defineProperties(Promise$prototype, {
	      'catch': function (onRejected) {
	        return this.then(void 0, onRejected);
	      },
	
	      then: function then(onFulfilled, onRejected) {
	        var promise = this;
	        if (!ES.IsPromise(promise)) { throw new TypeError('not a promise'); }
	        // this.constructor not this._promiseConstructor; see
	        // https://bugs.ecmascript.org/show_bug.cgi?id=2513
	        var C = this.constructor;
	        var capability = new PromiseCapability(C);
	        if (!ES.IsCallable(onRejected)) {
	          onRejected = function (e) { throw e; };
	        }
	        if (!ES.IsCallable(onFulfilled)) {
	          onFulfilled = function (x) { return x; };
	        }
	        var resolutionHandler = promiseResolutionHandler(promise, onFulfilled, onRejected);
	        var resolveReaction = { capability: capability, handler: resolutionHandler };
	        var rejectReaction = { capability: capability, handler: onRejected };
	        switch (promise._status) {
	          case 'unresolved':
	            promise._resolveReactions.push(resolveReaction);
	            promise._rejectReactions.push(rejectReaction);
	            break;
	          case 'has-resolution':
	            triggerPromiseReactions([resolveReaction], promise._result);
	            break;
	          case 'has-rejection':
	            triggerPromiseReactions([rejectReaction], promise._result);
	            break;
	          default:
	            throw new TypeError('unexpected');
	        }
	        return capability.promise;
	      }
	    });
	
	    return Promise;
	  }());
	
	  // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
	  if (globals.Promise) {
	    delete globals.Promise.accept;
	    delete globals.Promise.defer;
	    delete globals.Promise.prototype.chain;
	  }
	
	  // export the Promise constructor.
	  defineProperties(globals, { Promise: PromiseShim });
	  // In Chrome 33 (and thereabouts) Promise is defined, but the
	  // implementation is buggy in a number of ways.  Let's check subclassing
	  // support to see if we have a buggy implementation.
	  var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {
	    return S.resolve(42) instanceof S;
	  });
	  var promiseIgnoresNonFunctionThenCallbacks = (function () {
	    try {
	      globals.Promise.reject(42).then(null, 5).then(null, noop);
	      return true;
	    } catch (ex) {
	      return false;
	    }
	  }());
	  var promiseRequiresObjectContext = (function () {
	    /*global Promise */
	    try { Promise.call(3, noop); } catch (e) { return true; }
	    return false;
	  }());
	  if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks || !promiseRequiresObjectContext) {
	    /*globals Promise: true */
	    Promise = PromiseShim;
	    /*globals Promise: false */
	    defineProperty(globals, 'Promise', PromiseShim, true);
	  }
	
	  // Map and Set require a true ES5 environment
	  // Their fast path also requires that the environment preserve
	  // property insertion order, which is not guaranteed by the spec.
	  var testOrder = function (a) {
	    var b = Object.keys(a.reduce(function (o, k) {
	      o[k] = true;
	      return o;
	    }, {}));
	    return a.join(':') === b.join(':');
	  };
	  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
	  // some engines (eg, Chrome) only preserve insertion order for string keys
	  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);
	
	  if (supportsDescriptors) {
	
	    var fastkey = function fastkey(key) {
	      if (!preservesInsertionOrder) {
	        return null;
	      }
	      var type = typeof key;
	      if (type === 'string') {
	        return '$' + key;
	      } else if (type === 'number') {
	        // note that -0 will get coerced to "0" when used as a property key
	        if (!preservesNumericInsertionOrder) {
	          return 'n' + key;
	        }
	        return key;
	      }
	      return null;
	    };
	
	    var emptyObject = function emptyObject() {
	      // accomodate some older not-quite-ES5 browsers
	      return Object.create ? Object.create(null) : {};
	    };
	
	    var collectionShims = {
	      Map: (function () {
	
	        var empty = {};
	
	        function MapEntry(key, value) {
	          this.key = key;
	          this.value = value;
	          this.next = null;
	          this.prev = null;
	        }
	
	        MapEntry.prototype.isRemoved = function () {
	          return this.key === empty;
	        };
	
	        function MapIterator(map, kind) {
	          this.head = map._head;
	          this.i = this.head;
	          this.kind = kind;
	        }
	
	        MapIterator.prototype = {
	          next: function () {
	            var i = this.i, kind = this.kind, head = this.head, result;
	            if (typeof this.i === 'undefined') {
	              return { value: void 0, done: true };
	            }
	            while (i.isRemoved() && i !== head) {
	              // back up off of removed entries
	              i = i.prev;
	            }
	            // advance to next unreturned element.
	            while (i.next !== head) {
	              i = i.next;
	              if (!i.isRemoved()) {
	                if (kind === 'key') {
	                  result = i.key;
	                } else if (kind === 'value') {
	                  result = i.value;
	                } else {
	                  result = [i.key, i.value];
	                }
	                this.i = i;
	                return { value: result, done: false };
	              }
	            }
	            // once the iterator is done, it is done forever.
	            this.i = void 0;
	            return { value: void 0, done: true };
	          }
	        };
	        addIterator(MapIterator.prototype);
	
	        function Map(iterable) {
	          var map = this;
	          if (!ES.TypeIsObject(map)) {
	            throw new TypeError('Map does not accept arguments when called as a function');
	          }
	          map = emulateES6construct(map);
	          if (!map._es6map) {
	            throw new TypeError('bad map');
	          }
	
	          var head = new MapEntry(null, null);
	          // circular doubly-linked list.
	          head.next = head.prev = head;
	
	          defineProperties(map, {
	            _head: head,
	            _storage: emptyObject(),
	            _size: 0
	          });
	
	          // Optionally initialize map from iterable
	          if (typeof iterable !== 'undefined' && iterable !== null) {
	            var it = ES.GetIterator(iterable);
	            var adder = map.set;
	            if (!ES.IsCallable(adder)) { throw new TypeError('bad map'); }
	            while (true) {
	              var next = ES.IteratorNext(it);
	              if (next.done) { break; }
	              var nextItem = next.value;
	              if (!ES.TypeIsObject(nextItem)) {
	                throw new TypeError('expected iterable of pairs');
	              }
	              adder.call(map, nextItem[0], nextItem[1]);
	            }
	          }
	          return map;
	        }
	        var Map$prototype = Map.prototype;
	        defineProperties(Map, {
	          '@@create': function (obj) {
	            var constructor = this;
	            var prototype = constructor.prototype || Map$prototype;
	            obj = obj || create(prototype);
	            defineProperties(obj, { _es6map: true });
	            return obj;
	          }
	        });
	
	        Value.getter(Map.prototype, 'size', function () {
	          if (typeof this._size === 'undefined') {
	            throw new TypeError('size method called on incompatible Map');
	          }
	          return this._size;
	        });
	
	        defineProperties(Map.prototype, {
	          get: function (key) {
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              var entry = this._storage[fkey];
	              if (entry) {
	                return entry.value;
	              } else {
	                return;
	              }
	            }
	            var head = this._head, i = head;
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                return i.value;
	              }
	            }
	          },
	
	          has: function (key) {
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              return typeof this._storage[fkey] !== 'undefined';
	            }
	            var head = this._head, i = head;
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                return true;
	              }
	            }
	            return false;
	          },
	
	          set: function (key, value) {
	            var head = this._head, i = head, entry;
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              if (typeof this._storage[fkey] !== 'undefined') {
	                this._storage[fkey].value = value;
	                return this;
	              } else {
	                entry = this._storage[fkey] = new MapEntry(key, value);
	                i = head.prev;
	                // fall through
	              }
	            }
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                i.value = value;
	                return this;
	              }
	            }
	            entry = entry || new MapEntry(key, value);
	            if (ES.SameValue(-0, key)) {
	              entry.key = +0; // coerce -0 to +0 in entry
	            }
	            entry.next = this._head;
	            entry.prev = this._head.prev;
	            entry.prev.next = entry;
	            entry.next.prev = entry;
	            this._size += 1;
	            return this;
	          },
	
	          'delete': function (key) {
	            var head = this._head, i = head;
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              if (typeof this._storage[fkey] === 'undefined') {
	                return false;
	              }
	              i = this._storage[fkey].prev;
	              delete this._storage[fkey];
	              // fall through
	            }
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                i.key = i.value = empty;
	                i.prev.next = i.next;
	                i.next.prev = i.prev;
	                this._size -= 1;
	                return true;
	              }
	            }
	            return false;
	          },
	
	          clear: function () {
	            this._size = 0;
	            this._storage = emptyObject();
	            var head = this._head, i = head, p = i.next;
	            while ((i = p) !== head) {
	              i.key = i.value = empty;
	              p = i.next;
	              i.next = i.prev = head;
	            }
	            head.next = head.prev = head;
	          },
	
	          keys: function () {
	            return new MapIterator(this, 'key');
	          },
	
	          values: function () {
	            return new MapIterator(this, 'value');
	          },
	
	          entries: function () {
	            return new MapIterator(this, 'key+value');
	          },
	
	          forEach: function (callback) {
	            var context = arguments.length > 1 ? arguments[1] : null;
	            var it = this.entries();
	            for (var entry = it.next(); !entry.done; entry = it.next()) {
	              if (context) {
	                callback.call(context, entry.value[1], entry.value[0], this);
	              } else {
	                callback(entry.value[1], entry.value[0], this);
	              }
	            }
	          }
	        });
	        addIterator(Map.prototype, function () { return this.entries(); });
	
	        return Map;
	      }()),
	
	      Set: (function () {
	        // Creating a Map is expensive.  To speed up the common case of
	        // Sets containing only string or numeric keys, we use an object
	        // as backing storage and lazily create a full Map only when
	        // required.
	        var SetShim = function Set(iterable) {
	          var set = this;
	          if (!ES.TypeIsObject(set)) {
	            throw new TypeError('Set does not accept arguments when called as a function');
	          }
	          set = emulateES6construct(set);
	          if (!set._es6set) {
	            throw new TypeError('bad set');
	          }
	
	          defineProperties(set, {
	            '[[SetData]]': null,
	            _storage: emptyObject()
	          });
	
	          // Optionally initialize map from iterable
	          if (typeof iterable !== 'undefined' && iterable !== null) {
	            var it = ES.GetIterator(iterable);
	            var adder = set.add;
	            if (!ES.IsCallable(adder)) { throw new TypeError('bad set'); }
	            while (true) {
	              var next = ES.IteratorNext(it);
	              if (next.done) { break; }
	              var nextItem = next.value;
	              adder.call(set, nextItem);
	            }
	          }
	          return set;
	        };
	        var Set$prototype = SetShim.prototype;
	        defineProperties(SetShim, {
	          '@@create': function (obj) {
	            var constructor = this;
	            var prototype = constructor.prototype || Set$prototype;
	            obj = obj || create(prototype);
	            defineProperties(obj, { _es6set: true });
	            return obj;
	          }
	        });
	
	        // Switch from the object backing storage to a full Map.
	        var ensureMap = function ensureMap(set) {
	          if (!set['[[SetData]]']) {
	            var m = set['[[SetData]]'] = new collectionShims.Map();
	            Object.keys(set._storage).forEach(function (k) {
	              // fast check for leading '$'
	              if (k.charCodeAt(0) === 36) {
	                k = k.slice(1);
	              } else if (k.charAt(0) === 'n') {
	                k = +k.slice(1);
	              } else {
	                k = +k;
	              }
	              m.set(k, k);
	            });
	            set._storage = null; // free old backing storage
	          }
	        };
	
	        Value.getter(SetShim.prototype, 'size', function () {
	          if (typeof this._storage === 'undefined') {
	            // https://github.com/paulmillr/es6-shim/issues/176
	            throw new TypeError('size method called on incompatible Set');
	          }
	          ensureMap(this);
	          return this['[[SetData]]'].size;
	        });
	
	        defineProperties(SetShim.prototype, {
	          has: function (key) {
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              return !!this._storage[fkey];
	            }
	            ensureMap(this);
	            return this['[[SetData]]'].has(key);
	          },
	
	          add: function (key) {
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              this._storage[fkey] = true;
	              return this;
	            }
	            ensureMap(this);
	            this['[[SetData]]'].set(key, key);
	            return this;
	          },
	
	          'delete': function (key) {
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              var hasFKey = _hasOwnProperty(this._storage, fkey);
	              return (delete this._storage[fkey]) && hasFKey;
	            }
	            ensureMap(this);
	            return this['[[SetData]]']['delete'](key);
	          },
	
	          clear: function () {
	            if (this._storage) {
	              this._storage = emptyObject();
	            } else {
	              this['[[SetData]]'].clear();
	            }
	          },
	
	          values: function () {
	            ensureMap(this);
	            return this['[[SetData]]'].values();
	          },
	
	          entries: function () {
	            ensureMap(this);
	            return this['[[SetData]]'].entries();
	          },
	
	          forEach: function (callback) {
	            var context = arguments.length > 1 ? arguments[1] : null;
	            var entireSet = this;
	            ensureMap(entireSet);
	            this['[[SetData]]'].forEach(function (value, key) {
	              if (context) {
	                callback.call(context, key, key, entireSet);
	              } else {
	                callback(key, key, entireSet);
	              }
	            });
	          }
	        });
	        defineProperty(SetShim, 'keys', SetShim.values, true);
	        addIterator(SetShim.prototype, function () { return this.values(); });
	
	        return SetShim;
	      }())
	    };
	    defineProperties(globals, collectionShims);
	
	    if (globals.Map || globals.Set) {
	      /*
	        - In Firefox < 23, Map#size is a function.
	        - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
	        - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
	        - In Firefox 24, Map and Set do not implement forEach
	        - In Firefox 25 at least, Map and Set are callable without "new"
	      */
	      if (
	        typeof globals.Map.prototype.clear !== 'function' ||
	        new globals.Set().size !== 0 ||
	        new globals.Map().size !== 0 ||
	        typeof globals.Map.prototype.keys !== 'function' ||
	        typeof globals.Set.prototype.keys !== 'function' ||
	        typeof globals.Map.prototype.forEach !== 'function' ||
	        typeof globals.Set.prototype.forEach !== 'function' ||
	        isCallableWithoutNew(globals.Map) ||
	        isCallableWithoutNew(globals.Set) ||
	        !supportsSubclassing(globals.Map, function (M) {
	          var m = new M([]);
	          // Firefox 32 is ok with the instantiating the subclass but will
	          // throw when the map is used.
	          m.set(42, 42);
	          return m instanceof M;
	        })
	      ) {
	        globals.Map = collectionShims.Map;
	        globals.Set = collectionShims.Set;
	      }
	    }
	    if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
	      defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
	    }
	    // Shim incomplete iterator implementations.
	    addIterator(Object.getPrototypeOf((new globals.Map()).keys()));
	    addIterator(Object.getPrototypeOf((new globals.Set()).keys()));
	  }
	
	  return globals;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)))

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	var base64 = __webpack_require__(99)
	var ieee754 = __webpack_require__(97)
	var isArray = __webpack_require__(98)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = Buffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation
	
	var kMaxLength = 0x3fffffff
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Note:
	 *
	 * - Implementation must support adding new properties to `Uint8Array` instances.
	 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
	 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *    incorrect length in some situations.
	 *
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
	 * get the Object implementation, which is slower but will work correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = (function () {
	  try {
	    var buf = new ArrayBuffer(0)
	    var arr = new Uint8Array(buf)
	    arr.foo = function () { return 42 }
	    return 42 === arr.foo() && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	})()
	
	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (subject, encoding, noZero) {
	  if (!(this instanceof Buffer))
	    return new Buffer(subject, encoding, noZero)
	
	  var type = typeof subject
	
	  // Find the length
	  var length
	  if (type === 'number')
	    length = subject > 0 ? subject >>> 0 : 0
	  else if (type === 'string') {
	    if (encoding === 'base64')
	      subject = base64clean(subject)
	    length = Buffer.byteLength(subject, encoding)
	  } else if (type === 'object' && subject !== null) { // assume object is array-like
	    if (subject.type === 'Buffer' && isArray(subject.data))
	      subject = subject.data
	    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
	  } else
	    throw new TypeError('must start with number, buffer, array or string')
	
	  if (this.length > kMaxLength)
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	      'size: 0x' + kMaxLength.toString(16) + ' bytes')
	
	  var buf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Preferred: Return an augmented `Uint8Array` instance for best performance
	    buf = Buffer._augment(new Uint8Array(length))
	  } else {
	    // Fallback: Return THIS instance of Buffer (created by `new`)
	    buf = this
	    buf.length = length
	    buf._isBuffer = true
	  }
	
	  var i
	  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
	    // Speed optimization -- use set if we're copying from a typed array
	    buf._set(subject)
	  } else if (isArrayish(subject)) {
	    // Treat array-ish objects as a byte array
	    if (Buffer.isBuffer(subject)) {
	      for (i = 0; i < length; i++)
	        buf[i] = subject.readUInt8(i)
	    } else {
	      for (i = 0; i < length; i++)
	        buf[i] = ((subject[i] % 256) + 256) % 256
	    }
	  } else if (type === 'string') {
	    buf.write(subject, 0, encoding)
	  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
	    for (i = 0; i < length; i++) {
	      buf[i] = 0
	    }
	  }
	
	  return buf
	}
	
	Buffer.isBuffer = function (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
	    throw new TypeError('Arguments must be Buffers')
	
	  var x = a.length
	  var y = b.length
	  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function (list, totalLength) {
	  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')
	
	  if (list.length === 0) {
	    return new Buffer(0)
	  } else if (list.length === 1) {
	    return list[0]
	  }
	
	  var i
	  if (totalLength === undefined) {
	    totalLength = 0
	    for (i = 0; i < list.length; i++) {
	      totalLength += list[i].length
	    }
	  }
	
	  var buf = new Buffer(totalLength)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}
	
	Buffer.byteLength = function (str, encoding) {
	  var ret
	  str = str + ''
	  switch (encoding || 'utf8') {
	    case 'ascii':
	    case 'binary':
	    case 'raw':
	      ret = str.length
	      break
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      ret = str.length * 2
	      break
	    case 'hex':
	      ret = str.length >>> 1
	      break
	    case 'utf8':
	    case 'utf-8':
	      ret = utf8ToBytes(str).length
	      break
	    case 'base64':
	      ret = base64ToBytes(str).length
	      break
	    default:
	      ret = str.length
	  }
	  return ret
	}
	
	// pre-set for values that may exist in the future
	Buffer.prototype.length = undefined
	Buffer.prototype.parent = undefined
	
	// toString(encoding, start=0, end=buffer.length)
	Buffer.prototype.toString = function (encoding, start, end) {
	  var loweredCase = false
	
	  start = start >>> 0
	  end = end === undefined || end === Infinity ? this.length : end >>> 0
	
	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'binary':
	        return binarySlice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase)
	          throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.equals = function (b) {
	  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max)
	      str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  return Buffer.compare(this, b)
	}
	
	// `get` will be removed in Node 0.13+
	Buffer.prototype.get = function (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}
	
	// `set` will be removed in Node 0.13+
	Buffer.prototype.set = function (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var byte = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(byte)) throw new Error('Invalid hex string')
	    buf[offset + i] = byte
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
	  return charsWritten
	}
	
	function asciiWrite (buf, string, offset, length) {
	  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
	  return charsWritten
	}
	
	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
	  return charsWritten
	}
	
	function utf16leWrite (buf, string, offset, length) {
	  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length, 2)
	  return charsWritten
	}
	
	Buffer.prototype.write = function (string, offset, length, encoding) {
	  // Support both (string, offset, length, encoding)
	  // and the legacy (string, encoding, offset, length)
	  if (isFinite(offset)) {
	    if (!isFinite(length)) {
	      encoding = length
	      length = undefined
	    }
	  } else {  // legacy
	    var swap = encoding
	    encoding = offset
	    offset = length
	    length = swap
	  }
	
	  offset = Number(offset) || 0
	  var remaining = this.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	  encoding = String(encoding || 'utf8').toLowerCase()
	
	  var ret
	  switch (encoding) {
	    case 'hex':
	      ret = hexWrite(this, string, offset, length)
	      break
	    case 'utf8':
	    case 'utf-8':
	      ret = utf8Write(this, string, offset, length)
	      break
	    case 'ascii':
	      ret = asciiWrite(this, string, offset, length)
	      break
	    case 'binary':
	      ret = binaryWrite(this, string, offset, length)
	      break
	    case 'base64':
	      ret = base64Write(this, string, offset, length)
	      break
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      ret = utf16leWrite(this, string, offset, length)
	      break
	    default:
	      throw new TypeError('Unknown encoding: ' + encoding)
	  }
	  return ret
	}
	
	Buffer.prototype.toJSON = function () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  var res = ''
	  var tmp = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    if (buf[i] <= 0x7F) {
	      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
	      tmp = ''
	    } else {
	      tmp += '%' + buf[i].toString(16)
	    }
	  }
	
	  return res + decodeUtf8Char(tmp)
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function binarySlice (buf, start, end) {
	  return asciiSlice(buf, start, end)
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len;
	    if (start < 0)
	      start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0)
	      end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start)
	    end = start
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    return Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    var newBuf = new Buffer(sliceLen, undefined, true)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	    return newBuf
	  }
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0)
	    throw new RangeError('offset is not uint')
	  if (offset + ext > length)
	    throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUInt8 = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	      ((this[offset + 1] << 16) |
	      (this[offset + 2] << 8) |
	      this[offset + 3])
	}
	
	Buffer.prototype.readInt8 = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80))
	    return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16) |
	      (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	      (this[offset + 1] << 16) |
	      (this[offset + 2] << 8) |
	      (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function (offset, noAssert) {
	  if (!noAssert)
	    checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new TypeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new TypeError('index out of range')
	}
	
	Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = value
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else objectWriteUInt16(this, value, offset, true)
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else objectWriteUInt16(this, value, offset, false)
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = value
	  } else objectWriteUInt32(this, value, offset, true)
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else objectWriteUInt32(this, value, offset, false)
	  return offset + 4
	}
	
	Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = value
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else objectWriteUInt16(this, value, offset, true)
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else objectWriteUInt16(this, value, offset, false)
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else objectWriteUInt32(this, value, offset, true)
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert)
	    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else objectWriteUInt32(this, value, offset, false)
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new TypeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new TypeError('index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert)
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert)
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function (target, target_start, start, end) {
	  var source = this
	
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (!target_start) target_start = 0
	
	  // Copy 0 bytes; we're done
	  if (end === start) return
	  if (target.length === 0 || source.length === 0) return
	
	  // Fatal error conditions
	  if (end < start) throw new TypeError('sourceEnd < sourceStart')
	  if (target_start < 0 || target_start >= target.length)
	    throw new TypeError('targetStart out of bounds')
	  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
	  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length)
	    end = this.length
	  if (target.length - target_start < end - start)
	    end = target.length - target_start + start
	
	  var len = end - start
	
	  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < len; i++) {
	      target[i + target_start] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), target_start)
	  }
	}
	
	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length
	
	  if (end < start) throw new TypeError('end < start')
	
	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return
	
	  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')
	
	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var BP = Buffer.prototype
	
	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true
	
	  // save reference to original Uint8Array get/set methods before overwriting
	  arr._get = arr.get
	  arr._set = arr.set
	
	  // deprecated, will be removed in node 0.13+
	  arr.get = BP.get
	  arr.set = BP.set
	
	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer
	
	  return arr
	}
	
	var INVALID_BASE64_RE = /[^+\/0-9A-z]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function isArrayish (subject) {
	  return isArray(subject) || Buffer.isBuffer(subject) ||
	      subject && typeof subject === 'object' &&
	      typeof subject.length === 'number'
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    var b = str.charCodeAt(i)
	    if (b <= 0x7F) {
	      byteArray.push(b)
	    } else {
	      var start = i
	      if (b >= 0xD800 && b <= 0xDFFF) i++
	      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
	      for (var j = 0; j < h.length; j++) {
	        byteArray.push(parseInt(h[j], 16))
	      }
	    }
	  }
	  return byteArray
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(str)
	}
	
	function blitBuffer (src, dst, offset, length, unitSize) {
	  if (unitSize) length -= length % unitSize;
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length))
	      break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function decodeUtf8Char (str) {
	  try {
	    return decodeURIComponent(str)
	  } catch (err) {
	    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93).Buffer))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	process.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	    && window.setImmediate;
	    var canMutationObserver = typeof window !== 'undefined'
	    && window.MutationObserver;
	    var canPost = typeof window !== 'undefined'
	    && window.postMessage && window.addEventListener
	    ;
	
	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f) };
	    }
	
	    var queue = [];
	
	    if (canMutationObserver) {
	        var hiddenDiv = document.createElement("div");
	        var observer = new MutationObserver(function () {
	            var queueList = queue.slice();
	            queue.length = 0;
	            queueList.forEach(function (fn) {
	                fn();
	            });
	        });
	
	        observer.observe(hiddenDiv, { attributes: true });
	
	        return function nextTick(fn) {
	            if (!queue.length) {
	                hiddenDiv.setAttribute('yes', 'no');
	            }
	            queue.push(fn);
	        };
	    }
	
	    if (canPost) {
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);
	
	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }
	
	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();
	
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(96);


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Primary Exports
	 */
	
	var exports = module.exports = getType;
	
	/*!
	 * Detectable javascript natives
	 */
	
	var natives = {
	    '[object Array]': 'array'
	  , '[object RegExp]': 'regexp'
	  , '[object Function]': 'function'
	  , '[object Arguments]': 'arguments'
	  , '[object Date]': 'date'
	};
	
	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */
	
	function getType (obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	}
	
	exports.Library = Library;
	
	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */
	
	function Library () {
	  this.tests = {};
	}
	
	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */
	
	Library.prototype.of = getType;
	
	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */
	
	Library.prototype.define = function (type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};
	
	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */
	
	Library.prototype.test = function (obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];
	
	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	exports.read = function(buffer, offset, isLE, mLen, nBytes) {
	  var e, m,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = -7,
	      i = isLE ? (nBytes - 1) : 0,
	      d = isLE ? -1 : 1,
	      s = buffer[offset + i];
	
	  i += d;
	
	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
	
	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
	
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity);
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};
	
	exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c,
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
	      i = isLE ? 0 : (nBytes - 1),
	      d = isLE ? 1 : -1,
	      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
	
	  value = Math.abs(value);
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
	
	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
	
	  buffer[offset + i - d] |= s * 128;
	};


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * isArray
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * toString
	 */
	
	var str = Object.prototype.toString;
	
	/**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */
	
	module.exports = isArray || function (val) {
	  return !! val && '[object Array]' == str.call(val);
	};


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	
	;(function (exports) {
		'use strict';
	
	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array
	
		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
	
		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS)
				return 62 // '+'
			if (code === SLASH)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}
	
		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr
	
			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}
	
			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0
	
			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)
	
			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length
	
			var L = 0
	
			function push (v) {
				arr[L++] = v
			}
	
			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}
	
			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}
	
			return arr
		}
	
		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length
	
			function encode (num) {
				return lookup.charAt(num)
			}
	
			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}
	
			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}
	
			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}
	
			return output
		}
	
		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}(false ? (this.base64js = {}) : exports))


/***/ }
]);
//# sourceMappingURL=2.testMode.js.map