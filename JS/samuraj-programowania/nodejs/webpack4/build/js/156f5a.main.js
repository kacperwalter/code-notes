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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tools_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/message */ \"./src/tools/message.js\");\n/* harmony import */ var _tools_test_div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/test-div */ \"./src/tools/test-div.js\");\n/* harmony import */ var _tools_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/list */ \"./src/tools/list.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _data_title_txt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/title.txt */ \"./src/data/title.txt\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\n\nconst div = document.querySelector(\".test-div\");\nconst lst = document.querySelector(\"lst\");\n\n// lst.appendChild(listGenerator('tak', 'tak', 'nie'));\n\nObject(_tools_message__WEBPACK_IMPORTED_MODULE_0__[\"message\"])(\"wszymstko działa\");\nObject(_tools_test_div__WEBPACK_IMPORTED_MODULE_1__[\"divEdit\"])(div, 'No i wszymsto działa równiesz');\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/footer.css":
/*!***********************************!*\
  !*** ./src/components/footer.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/footer.css?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.css */ \"./src/components/footer.css\");\n/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/components/footer.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/data/title.txt":
/*!****************************!*\
  !*** ./src/data/title.txt ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"Witaj, świecie!\");\n\n//# sourceURL=webpack:///./src/data/title.txt?");

/***/ }),

/***/ "./src/tools/list.js":
/*!***************************!*\
  !*** ./src/tools/list.js ***!
  \***************************/
/*! exports provided: listGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listGenerator\", function() { return listGenerator; });\nconst listGenerator = (...elements) => {\n    const addElement = elements.forEach(element => {\n        return `\n            <li>${element}</li>\n        `\n    })\n    return `\n    <ul>\n        ${addElement}\n    </ul>\n    `\n}\n\n//# sourceURL=webpack:///./src/tools/list.js?");

/***/ }),

/***/ "./src/tools/message.js":
/*!******************************!*\
  !*** ./src/tools/message.js ***!
  \******************************/
/*! exports provided: message, messageDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"message\", function() { return message; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messageDOM\", function() { return messageDOM; });\nconst message = (info) => console.log(info);\nconst messageDOM = (info) => document.body.textContent = info;\nconst a = 333;\n\n//# sourceURL=webpack:///./src/tools/message.js?");

/***/ }),

/***/ "./src/tools/test-div.js":
/*!*******************************!*\
  !*** ./src/tools/test-div.js ***!
  \*******************************/
/*! exports provided: divEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divEdit\", function() { return divEdit; });\nconst divEdit = (div, text) => {\n    div.textContent = text;\n}\n\n//# sourceURL=webpack:///./src/tools/test-div.js?");

/***/ })

/******/ });