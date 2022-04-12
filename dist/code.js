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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin/controller.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/components/TranslateLanguage/ReplaceText.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/TranslateLanguage/ReplaceText.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return replaceTextNode; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function replaceTextNode(figma, textNode, newText) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync(textNode.fontName);
        textNode.characters = textNode.characters.replace(textNode.characters, newText);
    });
}


/***/ }),

/***/ "./src/app/components/TranslateLanguage/TraverseNodes.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/TranslateLanguage/TraverseNodes.ts ***!
  \***************************************************************/
/*! exports provided: getAllTextNodes, getSelectedTextNodes, traverseChildNodesId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTextNodes", function() { return getAllTextNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextNodes", function() { return getSelectedTextNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseChildNodesId", function() { return traverseChildNodesId; });
function getAllTextNodes(figma) {
    return figma.currentPage.findAllWithCriteria({ types: ['TEXT'] });
}
function getSelectedTextNodes(figma) {
    let textNodes = [];
    let textNodesObj = [];
    const selectedAll = figma.currentPage.selection;
    for (const n in selectedAll) {
        const curr = selectedAll[n];
        let temp = traverseChildNodesId(curr);
        for (const i in temp) {
            if (temp.length !== 0) {
                textNodesObj.push(temp[i]);
            }
        }
    }
    const all = figma.currentPage.findAllWithCriteria({ types: ['TEXT'] });
    for (const e in all) {
        for (const i in textNodesObj) {
            if (all[e].id === textNodesObj[i].id) {
                textNodes.push(all[e]);
                break;
            }
        }
    }
    return textNodes;
}
function traverseChildNodesId(arr) {
    let data = [];
    let n = arr;
    function recursive(n) {
        if (!n.children) {
            if (n.type === 'TEXT') {
                data.push({ id: n.id, char: n.characters });
            }
            return;
        }
        else if (n.children) {
            n.children.forEach(recursive);
        }
    }
    recursive(n);
    return data;
}


/***/ }),

/***/ "./src/plugin/controller.ts":
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
/*! exports provided: fig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fig", function() { return fig; });
/* harmony import */ var _app_components_TranslateLanguage_TraverseNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/components/TranslateLanguage/TraverseNodes */ "./src/app/components/TranslateLanguage/TraverseNodes.ts");
/* harmony import */ var _app_components_TranslateLanguage_ReplaceText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/components/TranslateLanguage/ReplaceText */ "./src/app/components/TranslateLanguage/ReplaceText.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const fig = figma;
let textNodes = [];
let numOfSelected = 0;
let firstClick = false;
if (!figma.currentPage.selection.length) {
    figma.notify('please select something to translate');
}
else {
    figma.showUI(__html__, { width: 250, height: 320, title: 'Language Tester' });
    firstClick = true;
    textNodes = Object(_app_components_TranslateLanguage_TraverseNodes__WEBPACK_IMPORTED_MODULE_0__["getSelectedTextNodes"])(figma);
    numOfSelected = textNodes.length;
    figma.ui.postMessage({
        type: 'numOfSelected',
        selected: numOfSelected,
    });
}
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === 'languageChosen') {
        let target = msg.target;
        for (const node in textNodes) {
            let text = textNodes[node];
            if (firstClick) {
                figma.clientStorage.setAsync(text.id, text.characters);
                console.log("keys" + (yield figma.clientStorage.keysAsync()));
            }
            figma.ui.postMessage({
                type: 'networkRequest',
                text: text.characters,
                target: target,
                id: text.id,
            });
        }
    }
    else if (msg.type === 'response') {
        firstClick = false;
        let processedRes = msg.response.replace(/(&quot;)/g, '"');
        let currTextNode;
        for (const n in textNodes) {
            if (msg.id === textNodes[n].id) {
                currTextNode = textNodes[n];
                break;
            }
        }
        Object(_app_components_TranslateLanguage_ReplaceText__WEBPACK_IMPORTED_MODULE_1__["default"])(figma, currTextNode, processedRes);
        figma.notify('Translating...... Do note large selections may take awhile', { timeout: 1000 }).cancel();
    }
    else if (msg.type === 'reset') {
        for (const node in textNodes) {
            let text = textNodes[node];
            let oldData = yield figma.clientStorage.getAsync(text.id);
            console.log("oldData: " + oldData);
            Object(_app_components_TranslateLanguage_ReplaceText__WEBPACK_IMPORTED_MODULE_1__["default"])(figma, textNodes[node], oldData);
        }
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1RyYW5zbGF0ZUxhbmd1YWdlL1JlcGxhY2VUZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9UcmFuc2xhdGVMYW5ndWFnZS9UcmF2ZXJzZU5vZGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQLGtEQUFrRCxrQkFBa0I7QUFDcEU7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxrQkFBa0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDeUY7QUFDWDtBQUN2RTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9EQUFvRDtBQUNoRjtBQUNBLGdCQUFnQiw0R0FBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2RkFBZTtBQUN2QixvRkFBb0YsZ0JBQWdCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkZBQWU7QUFDM0I7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzXCIpO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXBsYWNlVGV4dE5vZGUoZmlnbWEsIHRleHROb2RlLCBuZXdUZXh0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh0ZXh0Tm9kZS5mb250TmFtZSk7XG4gICAgICAgIHRleHROb2RlLmNoYXJhY3RlcnMgPSB0ZXh0Tm9kZS5jaGFyYWN0ZXJzLnJlcGxhY2UodGV4dE5vZGUuY2hhcmFjdGVycywgbmV3VGV4dCk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0QWxsVGV4dE5vZGVzKGZpZ21hKSB7XG4gICAgcmV0dXJuIGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGxXaXRoQ3JpdGVyaWEoeyB0eXBlczogWydURVhUJ10gfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRUZXh0Tm9kZXMoZmlnbWEpIHtcbiAgICBsZXQgdGV4dE5vZGVzID0gW107XG4gICAgbGV0IHRleHROb2Rlc09iaiA9IFtdO1xuICAgIGNvbnN0IHNlbGVjdGVkQWxsID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGZvciAoY29uc3QgbiBpbiBzZWxlY3RlZEFsbCkge1xuICAgICAgICBjb25zdCBjdXJyID0gc2VsZWN0ZWRBbGxbbl07XG4gICAgICAgIGxldCB0ZW1wID0gdHJhdmVyc2VDaGlsZE5vZGVzSWQoY3Vycik7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0ZW1wKSB7XG4gICAgICAgICAgICBpZiAodGVtcC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZXNPYmoucHVzaCh0ZW1wW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhbGwgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsV2l0aENyaXRlcmlhKHsgdHlwZXM6IFsnVEVYVCddIH0pO1xuICAgIGZvciAoY29uc3QgZSBpbiBhbGwpIHtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRleHROb2Rlc09iaikge1xuICAgICAgICAgICAgaWYgKGFsbFtlXS5pZCA9PT0gdGV4dE5vZGVzT2JqW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGVzLnB1c2goYWxsW2VdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlQ2hpbGROb2Rlc0lkKGFycikge1xuICAgIGxldCBkYXRhID0gW107XG4gICAgbGV0IG4gPSBhcnI7XG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlKG4pIHtcbiAgICAgICAgaWYgKCFuLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAobi50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goeyBpZDogbi5pZCwgY2hhcjogbi5jaGFyYWN0ZXJzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG4uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChyZWN1cnNpdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY3Vyc2l2ZShuKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRUZXh0Tm9kZXMgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9UcmFuc2xhdGVMYW5ndWFnZS9UcmF2ZXJzZU5vZGVzJztcbmltcG9ydCByZXBsYWNlVGV4dE5vZGUgZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvVHJhbnNsYXRlTGFuZ3VhZ2UvUmVwbGFjZVRleHQnO1xuZXhwb3J0IGNvbnN0IGZpZyA9IGZpZ21hO1xubGV0IHRleHROb2RlcyA9IFtdO1xubGV0IG51bU9mU2VsZWN0ZWQgPSAwO1xubGV0IGZpcnN0Q2xpY2sgPSBmYWxzZTtcbmlmICghZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgIGZpZ21hLm5vdGlmeSgncGxlYXNlIHNlbGVjdCBzb21ldGhpbmcgdG8gdHJhbnNsYXRlJyk7XG59XG5lbHNlIHtcbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDI1MCwgaGVpZ2h0OiAzMjAsIHRpdGxlOiAnTGFuZ3VhZ2UgVGVzdGVyJyB9KTtcbiAgICBmaXJzdENsaWNrID0gdHJ1ZTtcbiAgICB0ZXh0Tm9kZXMgPSBnZXRTZWxlY3RlZFRleHROb2RlcyhmaWdtYSk7XG4gICAgbnVtT2ZTZWxlY3RlZCA9IHRleHROb2Rlcy5sZW5ndGg7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAnbnVtT2ZTZWxlY3RlZCcsXG4gICAgICAgIHNlbGVjdGVkOiBudW1PZlNlbGVjdGVkLFxuICAgIH0pO1xufVxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKG1zZy50eXBlID09PSAnbGFuZ3VhZ2VDaG9zZW4nKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBtc2cudGFyZ2V0O1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgaW4gdGV4dE5vZGVzKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IHRleHROb2Rlc1tub2RlXTtcbiAgICAgICAgICAgIGlmIChmaXJzdENsaWNrKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyh0ZXh0LmlkLCB0ZXh0LmNoYXJhY3RlcnMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5c1wiICsgKHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2Uua2V5c0FzeW5jKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbmV0d29ya1JlcXVlc3QnLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRleHQuY2hhcmFjdGVycyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBpZDogdGV4dC5pZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAncmVzcG9uc2UnKSB7XG4gICAgICAgIGZpcnN0Q2xpY2sgPSBmYWxzZTtcbiAgICAgICAgbGV0IHByb2Nlc3NlZFJlcyA9IG1zZy5yZXNwb25zZS5yZXBsYWNlKC8oJnF1b3Q7KS9nLCAnXCInKTtcbiAgICAgICAgbGV0IGN1cnJUZXh0Tm9kZTtcbiAgICAgICAgZm9yIChjb25zdCBuIGluIHRleHROb2Rlcykge1xuICAgICAgICAgICAgaWYgKG1zZy5pZCA9PT0gdGV4dE5vZGVzW25dLmlkKSB7XG4gICAgICAgICAgICAgICAgY3VyclRleHROb2RlID0gdGV4dE5vZGVzW25dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlcGxhY2VUZXh0Tm9kZShmaWdtYSwgY3VyclRleHROb2RlLCBwcm9jZXNzZWRSZXMpO1xuICAgICAgICBmaWdtYS5ub3RpZnkoJ1RyYW5zbGF0aW5nLi4uLi4uIERvIG5vdGUgbGFyZ2Ugc2VsZWN0aW9ucyBtYXkgdGFrZSBhd2hpbGUnLCB7IHRpbWVvdXQ6IDEwMDAgfSkuY2FuY2VsKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAncmVzZXQnKSB7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBpbiB0ZXh0Tm9kZXMpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gdGV4dE5vZGVzW25vZGVdO1xuICAgICAgICAgICAgbGV0IG9sZERhdGEgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKHRleHQuaWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbGREYXRhOiBcIiArIG9sZERhdGEpO1xuICAgICAgICAgICAgcmVwbGFjZVRleHROb2RlKGZpZ21hLCB0ZXh0Tm9kZXNbbm9kZV0sIG9sZERhdGEpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9