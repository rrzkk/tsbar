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
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/guid.ts":
/*!*********************!*\
  !*** ./src/guid.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create_UUID() {
        let dt = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
const guid_1 = __importDefault(__webpack_require__(/*! ./guid */ "./src/guid.ts"));
const jsonop_1 = __importDefault(__webpack_require__(/*! ./jsonop */ "./src/jsonop.ts"));
const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
const app = express_1.default();
app.use(body_parser_1.default.json());
const port = 8080; // default port to listen
// define a route handler for the default home page
// app.use(express.static(path.resolve(__dirname, '../../reactui/build')));
app.use(cors_1.default()); // Use this after the variable declaration
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get("/api/test", (req, res) => {
    res.send("test success");
});
// this method is used to post secret and store guid
app.post("/api/trasfersecret2", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const secret = req.body.data;
    const guidnum = guid_1.default.create_UUID();
    const jsonpair = {
        secret,
        guid: guidnum
    };
    res.send(guidnum);
    const jsonfile = yield jsonop_1.default.jsonreadall();
    jsonop_1.default.jsonwrite(jsonfile, jsonpair);
}));
// this method is used to get secret by guid
app.get("/api/getsecret", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const guid = req.query.guid.toString();
    const result = yield jsonop_1.default.jsonread(guid);
    res.send(result);
    jsonop_1.default.jsondelete(guid);
}));
// start the Express server
const server = app.listen(port, () => {
});
exports.default = { app, server };


/***/ }),

/***/ "./src/jsonop.ts":
/*!***********************!*\
  !*** ./src/jsonop.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
exports.default = {
    // concat file1 and file2
    jsonwrite(file1, file2) {
        const file3 = JSON.stringify(file1.concat(file2));
        console.log("write");
        fs_1.default.writeFileSync(path_1.default.join(__dirname, 'guiddata.json'), file3);
    },
    // get the json object with guid===guid
    jsonread(guid) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsondata = this.jsonreadall();
            const result = jsondata.filter((el) => el.guid === guid);
            if (result.length !== 0) {
                return result[0].secret.toString();
            }
            else
                return 'The secret is already burnt!';
        });
    },
    // get the json array
    jsonreadall() {
        let rawdata;
        if (fs_1.default.existsSync(path_1.default.join(__dirname, 'guiddata.json'))) {
            rawdata = fs_1.default.readFileSync(path_1.default.join(__dirname, 'guiddata.json')).toString();
        }
        else {
            fs_1.default.writeFileSync(path_1.default.join(__dirname, 'guiddata.json'), '[]');
            rawdata = '[]';
        }
        const jsondata = JSON.parse(rawdata);
        return jsondata;
    },
    // delete json object with guid= guid
    jsondelete(guid) {
        const alljson = this.jsonreadall();
        const result = alljson.filter((el) => el.guid !== guid);
        const resultstring = JSON.stringify(result);
        fs_1.default.writeFileSync(path_1.default.join(__dirname, 'guiddata.json'), resultstring);
    }
};

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2d1aWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9qc29ub3AudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxrQkFBZTtJQUNYLFdBQVc7UUFDWCxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlC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QyxhQUFhLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUQsT0FBTyxHQUFDLElBQUk7U0FDZjtRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUNELHFDQUFxQztJQUNwQyxVQUFVLENBQUMsSUFBVztRQUNuQixNQUFNLE9BQU8sR0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFakMsTUFBTSxNQUFNLEdBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQWEsRUFBQyxFQUFFLEdBQUUsQ0FBQyxJQUFJLEtBQUcsSUFBSSxDQUFDLENBQUM7UUFDN0QsTUFBTSxZQUFZLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxZQUFFLENBQUMsYUFBYSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXpFLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3RERCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNyZWF0ZV9VVUlEKCl7XHJcbiAgICBsZXQgZHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKT0+IHtcclxuICAgICAgICBjb25zdCByID0gKGR0ICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xyXG4gICAgICAgIGR0ID0gTWF0aC5mbG9vcihkdC8xNik7XHJcbiAgICAgICAgcmV0dXJuIChjPT09J3gnID8gciA6KHImMHgzfDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHV1aWQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCBndWlkIGZyb20gJy4vZ3VpZCc7XHJcbmltcG9ydCBqc29ub3AgZnJvbSAnLi9qc29ub3AnO1xyXG5cclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcblxyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuY29uc3QgcG9ydCA9IDgwODA7IC8vIGRlZmF1bHQgcG9ydCB0byBsaXN0ZW5cclxuXHJcbi8vIGRlZmluZSBhIHJvdXRlIGhhbmRsZXIgZm9yIHRoZSBkZWZhdWx0IGhvbWUgcGFnZVxyXG4vLyBhcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9yZWFjdHVpL2J1aWxkJykpKTtcclxuYXBwLnVzZShjb3JzKCkpIC8vIFVzZSB0aGlzIGFmdGVyIHRoZSB2YXJpYWJsZSBkZWNsYXJhdGlvblxyXG5hcHAuZ2V0KCBcIi9cIiwgKCByZXEsIHJlcyApID0+IHtcclxuXHJcbiAgICByZXMuc2VuZCggXCJIZWxsbyB3b3JsZCFcIiApO1xyXG5cclxufSApO1xyXG5cclxuYXBwLmdldChcIi9hcGkvdGVzdFwiLChyZXEscmVzKT0+e1xyXG5cclxuICAgIHJlcy5zZW5kKFwidGVzdCBzdWNjZXNzXCIpO1xyXG59KVxyXG5cclxuLy8gdGhpcyBtZXRob2QgaXMgdXNlZCB0byBwb3N0IHNlY3JldCBhbmQgc3RvcmUgZ3VpZFxyXG5hcHAucG9zdChcIi9hcGkvdHJhc2ZlcnNlY3JldDJcIixhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHNlY3JldD1yZXEuYm9keS5kYXRhO1xyXG4gICAgY29uc3QgZ3VpZG51bT1ndWlkLmNyZWF0ZV9VVUlEKCk7XHJcbiAgICBjb25zdCBqc29ucGFpcj17XHJcbiAgICAgICAgc2VjcmV0LFxyXG4gICAgICAgIGd1aWQ6Z3VpZG51bVxyXG4gICAgfTtcclxuICAgIHJlcy5zZW5kKGd1aWRudW0pO1xyXG4gICAgY29uc3QganNvbmZpbGU9YXdhaXQganNvbm9wLmpzb25yZWFkYWxsKCk7XHJcbiAgICBqc29ub3AuanNvbndyaXRlKGpzb25maWxlLCBqc29ucGFpcilcclxufSlcclxuLy8gdGhpcyBtZXRob2QgaXMgdXNlZCB0byBnZXQgc2VjcmV0IGJ5IGd1aWRcclxuYXBwLmdldChcIi9hcGkvZ2V0c2VjcmV0XCIsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgZ3VpZD1yZXEucXVlcnkuZ3VpZC50b1N0cmluZygpO1xyXG4gICAgY29uc3QgcmVzdWx0PSBhd2FpdCBqc29ub3AuanNvbnJlYWQoZ3VpZCk7XHJcblxyXG4gICAgcmVzLnNlbmQocmVzdWx0KTtcclxuICAgIGpzb25vcC5qc29uZGVsZXRlKGd1aWQpO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuLy8gc3RhcnQgdGhlIEV4cHJlc3Mgc2VydmVyXHJcbmNvbnN0IHNlcnZlciA9YXBwLmxpc3RlbiggcG9ydCwgKCkgPT4ge1xyXG4gXHJcbn0gKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHthcHAsc2VydmVyfTsiLCJpbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcblxyXG5pbnRlcmZhY2Ugc2luZ2xlSnNvbiB7XHJcbiAgICBzZWNyZXQ6c3RyaW5nLFxyXG4gICAgZ3VpZDpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAvLyBjb25jYXQgZmlsZTEgYW5kIGZpbGUyXHJcbiAgICBqc29ud3JpdGUoZmlsZTE6c2luZ2xlSnNvbltdLGZpbGUyOnNpbmdsZUpzb24pe1xyXG4gICAgICAgIGNvbnN0IGZpbGUzPUpTT04uc3RyaW5naWZ5KCAgZmlsZTEuY29uY2F0KGZpbGUyKSk7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIndyaXRlXCIpO1xyXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKF9fZGlybmFtZSAsJ2d1aWRkYXRhLmpzb24nKSwgZmlsZTMpO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH0sXHJcbiAgICAvLyBnZXQgdGhlIGpzb24gb2JqZWN0IHdpdGggZ3VpZD09PWd1aWRcclxuICAgIGFzeW5jIGpzb25yZWFkKGd1aWQ6c3RyaW5nKXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBqc29uZGF0YSA9IHRoaXMuanNvbnJlYWRhbGwoKTtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQ9IGpzb25kYXRhLmZpbHRlcigoZWw6IHNpbmdsZUpzb24pPT5lbC5ndWlkPT09Z3VpZCk7XHJcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCE9PTApe1xyXG4gICAgICAgIHJldHVybiByZXN1bHRbMF0uc2VjcmV0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuICdUaGUgc2VjcmV0IGlzIGFscmVhZHkgYnVybnQhJztcclxuICAgIH0sXHJcbiAgICAvLyBnZXQgdGhlIGpzb24gYXJyYXlcclxuICAgIGpzb25yZWFkYWxsKCl7XHJcbiAgICAgICAgbGV0IHJhd2RhdGFcclxuICAgICAgICBpZihmcy5leGlzdHNTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUgLCdndWlkZGF0YS5qc29uJykpKXtcclxuICAgICAgICByYXdkYXRhID0gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUgLCdndWlkZGF0YS5qc29uJykpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKF9fZGlybmFtZSAsJ2d1aWRkYXRhLmpzb24nKSwgJ1tdJyk7XHJcbiAgICAgICAgICAgIHJhd2RhdGE9J1tdJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBqc29uZGF0YSA9IEpTT04ucGFyc2UocmF3ZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGpzb25kYXRhO1xyXG4gICAgfSxcclxuICAgIC8vIGRlbGV0ZSBqc29uIG9iamVjdCB3aXRoIGd1aWQ9IGd1aWRcclxuICAgICBqc29uZGVsZXRlKGd1aWQ6c3RyaW5nKXtcclxuICAgICAgICBjb25zdCBhbGxqc29uPXRoaXMuanNvbnJlYWRhbGwoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXN1bHQ9YWxsanNvbi5maWx0ZXIoKGVsOnNpbmdsZUpzb24pPT5lbC5ndWlkIT09Z3VpZCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0c3RyaW5nPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICBcclxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUgLCdndWlkZGF0YS5qc29uJykscmVzdWx0c3RyaW5nKTtcclxuICBcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=