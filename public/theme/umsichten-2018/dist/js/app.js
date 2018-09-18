/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\nimport * as Navigation from '/components/navigation.js';\n\n\nwindow.onload = function(e) {\n\n    var logo = document.getElementById('logo'),\n    \tanimated = false; \n\n    setInterval(function() {\n\n    \tlogo.classList.remove('animated-intro');\n\n    \tif (!animated)\n    \t\tlogo.classList.add('animate-twist');\n    \telse\n    \t\tlogo.classList.remove('animate-twist');\n\n    \tanimated = !animated;\n\n    }, 5000);\n\n};\n*/\n\n\n(function() {\n    var lastTime = 0;\n    var vendors = ['ms', 'moz', 'webkit', 'o'];\n    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\n        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];\n        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']\n                                   || window[vendors[x]+'CancelRequestAnimationFrame'];\n    }\n \n    if (!window.requestAnimationFrame)\n        window.requestAnimationFrame = function(callback, element) {\n            var currTime = new Date().getTime();\n            var timeToCall = Math.max(0, 16 - (currTime - lastTime));\n            var id = window.setTimeout(function() { callback(currTime + timeToCall); },\n              timeToCall);\n            lastTime = currTime + timeToCall;\n            return id;\n        };\n \n    if (!window.cancelAnimationFrame)\n        window.cancelAnimationFrame = function(id) {\n            clearTimeout(id);\n        };\n}());\n\n\n// add scrolling class\nvar fps = 15;\nfunction draw() {\n    setTimeout(function() {\n        requestAnimationFrame(draw);\n        var content = document.getElementById('content');\n        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;\n\n        (scrollTop > 0) ?  document.body.classList.add('scrolled') : document.body.classList.remove('scrolled');\n        \n    }, 1000 / fps);\n    \n}\n\n\n\nif (document.body.scrollIntoView !== undefined) {\n    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n        anchor.addEventListener('click', function (e) {\n            e.preventDefault();\n            requestAnimationFrame(function() {\n                document.querySelector(anchor.getAttribute('href')).scrollIntoView({\n                    behavior: 'smooth'\n                });\n            })\n        });\n    });\n}\nelse {\n    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n        var elem = document.querySelector(anchor.getAttribute('href'))\n        var topPos = elem.offsetTop\n        anchor.addEventListener('click', function (e) {\n            e.preventDefault();\n            requestAnimationFrame(function() {\n            scrollTo(document.scrollingElement || document.documentElement, topPos, 600);\n            })\n        });\n    });\n}\n\n\nfunction getBodyScrollTop () { \n    const el = document.scrollingElement || document.documentElement;\n    return el.scrollTop; \n}\n\nfunction scrollTo(element, to, duration) {\n    var start = getBodyScrollTop(),\n        change = to - start,\n        currentTime = 0,\n        increment = 20;\n\n    var animateScroll = function(){ \n        currentTime += increment;\n\n        var val = Math.easeInOutQuad(currentTime, start, change, duration);\n        element.scrollTop = val;\n        if(currentTime < duration) {\n            setTimeout(animateScroll, increment);\n        }\n    };\n\n    animateScroll();\n}\n\n//t = current time\n//b = start value\n//c = change in value\n//d = duration\nMath.easeInOutQuad = function (t, b, c, d) {\n    t /= d/2;\n    if (t < 1) return c/2*t*t + b;\n    t--;\n    return -c/2 * (t*(t-2) - 1) + b;\n};\n\n\n\ndraw()\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./scss/theme.scss":
/*!*************************!*\
  !*** ./scss/theme.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"css/theme.css\";\n\n//# sourceURL=webpack:///./scss/theme.scss?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./js/app.js ./scss/theme.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app.js */\"./js/app.js\");\nmodule.exports = __webpack_require__(/*! ./scss/theme.scss */\"./scss/theme.scss\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js_./scss/theme.scss?");

/***/ })

/******/ });