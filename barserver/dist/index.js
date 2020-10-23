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
const pg_1 = __webpack_require__(/*! pg */ "pg");
const app = express_1.default();
app.use(body_parser_1.default.json());
const port = 8080; // default port to listen
const pool = new pg_1.Pool({
    user: 'postgres',
    host: '13.210.249.135',
    database: 'postgresql',
    password: 'zhekun',
    port: 5432
});
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
//get and post using database
app.get("/api/psgl/getsecret", (req, res) => {
    const guid = req.query.guid.toString();
    pool.query('SELECT * FROM secrets WHERE guids=$1', [guid], (err, resp) => {
        if (resp.rows.length !== 0) {
            res.send(resp.rows[0].secrets);
            pool.query('DELETE FROM secrets WHERE guids = $1', [guid], (error, results) => {
                if (error) {
                    throw error;
                }
            });
        }
        else
            res.send("The secret is already burnt!");
    });
});
app.post("/api/psgl/postsecret", (req, res) => {
    const secret = req.body.data;
    const guidnum = guid_1.default.create_UUID();
    res.send(guidnum);
    pool.query('INSERT INTO secrets (secrets,guids) VALUES ($1,$2)', [secret, guidnum], (err, resp) => {
        if (err) {
            throw err;
        }
    });
});
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

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2d1aWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9qc29ub3AudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLGtCQUFlO0lBQ1gsV0FBVztRQUNYLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxF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ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjcmVhdGVfVVVJRCgpe1xyXG4gICAgbGV0IGR0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYyk9PiB7XHJcbiAgICAgICAgY29uc3QgciA9IChkdCArIE1hdGgucmFuZG9tKCkqMTYpJTE2IHwgMDtcclxuICAgICAgICBkdCA9IE1hdGguZmxvb3IoZHQvMTYpO1xyXG4gICAgICAgIHJldHVybiAoYz09PSd4JyA/IHIgOihyJjB4M3wweDgpKS50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1dWlkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgZ3VpZCBmcm9tICcuL2d1aWQnO1xyXG5pbXBvcnQganNvbm9wIGZyb20gJy4vanNvbm9wJztcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XHJcbmltcG9ydCB7UG9vbH0gZnJvbSAncGcnO1xyXG5cclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmNvbnN0IHBvcnQgPSA4MDgwOyAvLyBkZWZhdWx0IHBvcnQgdG8gbGlzdGVuXHJcbmNvbnN0IHBvb2w9bmV3IFBvb2woe1xyXG4gICAgdXNlcjoncG9zdGdyZXMnLFxyXG4gICAgaG9zdDonMTMuMjEwLjI0OS4xMzUnLFxyXG4gICAgZGF0YWJhc2U6J3Bvc3RncmVzcWwnLFxyXG4gICAgcGFzc3dvcmQ6J3poZWt1bicsXHJcbiAgICBwb3J0OjU0MzJcclxufSk7XHJcblxyXG4vLyBkZWZpbmUgYSByb3V0ZSBoYW5kbGVyIGZvciB0aGUgZGVmYXVsdCBob21lIHBhZ2VcclxuLy8gYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vcmVhY3R1aS9idWlsZCcpKSk7XHJcbmFwcC51c2UoY29ycygpKSAvLyBVc2UgdGhpcyBhZnRlciB0aGUgdmFyaWFibGUgZGVjbGFyYXRpb25cclxuYXBwLmdldCggXCIvXCIsICggcmVxLCByZXMgKSA9PiB7XHJcblxyXG4gICAgcmVzLnNlbmQoIFwiSGVsbG8gd29ybGQhXCIgKTtcclxuXHJcbn0gKTtcclxuXHJcbmFwcC5nZXQoXCIvYXBpL3Rlc3RcIiwocmVxLHJlcyk9PntcclxuXHJcbiAgICByZXMuc2VuZChcInRlc3Qgc3VjY2Vzc1wiKTtcclxufSlcclxuXHJcbi8vIHRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gcG9zdCBzZWNyZXQgYW5kIHN0b3JlIGd1aWRcclxuYXBwLnBvc3QoXCIvYXBpL3RyYXNmZXJzZWNyZXQyXCIsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCBzZWNyZXQ9cmVxLmJvZHkuZGF0YTtcclxuICAgIGNvbnN0IGd1aWRudW09Z3VpZC5jcmVhdGVfVVVJRCgpO1xyXG4gICAgY29uc3QganNvbnBhaXI9e1xyXG4gICAgICAgIHNlY3JldCxcclxuICAgICAgICBndWlkOmd1aWRudW1cclxuICAgIH07XHJcbiAgICByZXMuc2VuZChndWlkbnVtKTtcclxuICAgIGNvbnN0IGpzb25maWxlPWF3YWl0IGpzb25vcC5qc29ucmVhZGFsbCgpO1xyXG4gICAganNvbm9wLmpzb253cml0ZShqc29uZmlsZSwganNvbnBhaXIpXHJcbn0pXHJcbi8vIHRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZ2V0IHNlY3JldCBieSBndWlkXHJcbmFwcC5nZXQoXCIvYXBpL2dldHNlY3JldFwiLCBhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IGd1aWQ9cmVxLnF1ZXJ5Lmd1aWQudG9TdHJpbmcoKTtcclxuICAgIGNvbnN0IHJlc3VsdD0gYXdhaXQganNvbm9wLmpzb25yZWFkKGd1aWQpO1xyXG5cclxuICAgIHJlcy5zZW5kKHJlc3VsdCk7XHJcbiAgICBqc29ub3AuanNvbmRlbGV0ZShndWlkKTtcclxufSlcclxuXHJcbi8vZ2V0IGFuZCBwb3N0IHVzaW5nIGRhdGFiYXNlXHJcbmFwcC5nZXQoXCIvYXBpL3BzZ2wvZ2V0c2VjcmV0XCIsKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCBndWlkPXJlcS5xdWVyeS5ndWlkLnRvU3RyaW5nKCk7XHJcbiAgICBwb29sLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHNlY3JldHMgV0hFUkUgZ3VpZHM9JDEnLFtndWlkXSwoZXJyLHJlc3ApPT57XHJcbiAgICAgICAgaWYocmVzcC5yb3dzLmxlbmd0aCE9PTApe1xyXG4gICAgICAgIHJlcy5zZW5kKHJlc3Aucm93c1swXS5zZWNyZXRzKTtcclxuICAgICAgICBwb29sLnF1ZXJ5KCdERUxFVEUgRlJPTSBzZWNyZXRzIFdIRVJFIGd1aWRzID0gJDEnLCBbZ3VpZF0sIChlcnJvciwgcmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJlcy5zZW5kKFwiVGhlIHNlY3JldCBpcyBhbHJlYWR5IGJ1cm50IVwiKVxyXG4gICAgfSlcclxufSlcclxuYXBwLnBvc3QoXCIvYXBpL3BzZ2wvcG9zdHNlY3JldFwiLChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qgc2VjcmV0PXJlcS5ib2R5LmRhdGE7XHJcbiAgICBjb25zdCBndWlkbnVtPWd1aWQuY3JlYXRlX1VVSUQoKTtcclxuICAgXHJcbiAgICByZXMuc2VuZChndWlkbnVtKTtcclxuICAgIHBvb2wucXVlcnkoJ0lOU0VSVCBJTlRPIHNlY3JldHMgKHNlY3JldHMsZ3VpZHMpIFZBTFVFUyAoJDEsJDIpJyxbc2VjcmV0LGd1aWRudW1dLChlcnIscmVzcCk9PntcclxuICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5cclxuXHJcbi8vIHN0YXJ0IHRoZSBFeHByZXNzIHNlcnZlclxyXG5jb25zdCBzZXJ2ZXIgPWFwcC5saXN0ZW4oIHBvcnQsICgpID0+IHtcclxuIFxyXG59ICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7YXBwLHNlcnZlcn07IiwiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIHNpbmdsZUpzb24ge1xyXG4gICAgc2VjcmV0OnN0cmluZyxcclxuICAgIGd1aWQ6c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0e1xyXG4gICAgLy8gY29uY2F0IGZpbGUxIGFuZCBmaWxlMlxyXG4gICAganNvbndyaXRlKGZpbGUxOnNpbmdsZUpzb25bXSxmaWxlMjpzaW5nbGVKc29uKXtcclxuICAgICAgICBjb25zdCBmaWxlMz1KU09OLnN0cmluZ2lmeSggIGZpbGUxLmNvbmNhdChmaWxlMikpO1xyXG4gICAgICAgY29uc29sZS5sb2coXCJ3cml0ZVwiKTtcclxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUgLCdndWlkZGF0YS5qc29uJyksIGZpbGUzKTtcclxuICAgICAgICBcclxuXHJcbiAgICB9LFxyXG4gICAgLy8gZ2V0IHRoZSBqc29uIG9iamVjdCB3aXRoIGd1aWQ9PT1ndWlkXHJcbiAgICBhc3luYyBqc29ucmVhZChndWlkOnN0cmluZyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QganNvbmRhdGEgPSB0aGlzLmpzb25yZWFkYWxsKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0PSBqc29uZGF0YS5maWx0ZXIoKGVsOiBzaW5nbGVKc29uKT0+ZWwuZ3VpZD09PWd1aWQpO1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGghPT0wKXtcclxuICAgICAgICByZXR1cm4gcmVzdWx0WzBdLnNlY3JldC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJldHVybiAnVGhlIHNlY3JldCBpcyBhbHJlYWR5IGJ1cm50ISc7XHJcbiAgICB9LFxyXG4gICAgLy8gZ2V0IHRoZSBqc29uIGFycmF5XHJcbiAgICBqc29ucmVhZGFsbCgpe1xyXG4gICAgICAgIGxldCByYXdkYXRhXHJcbiAgICAgICAgaWYoZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lICwnZ3VpZGRhdGEuanNvbicpKSl7XHJcbiAgICAgICAgcmF3ZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lICwnZ3VpZGRhdGEuanNvbicpKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUgLCdndWlkZGF0YS5qc29uJyksICdbXScpO1xyXG4gICAgICAgICAgICByYXdkYXRhPSdbXSdcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QganNvbmRhdGEgPSBKU09OLnBhcnNlKHJhd2RhdGEpO1xyXG4gICAgICAgIHJldHVybiBqc29uZGF0YTtcclxuICAgIH0sXHJcbiAgICAvLyBkZWxldGUganNvbiBvYmplY3Qgd2l0aCBndWlkPSBndWlkXHJcbiAgICAganNvbmRlbGV0ZShndWlkOnN0cmluZyl7XHJcbiAgICAgICAgY29uc3QgYWxsanNvbj10aGlzLmpzb25yZWFkYWxsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0PWFsbGpzb24uZmlsdGVyKChlbDpzaW5nbGVKc29uKT0+ZWwuZ3VpZCE9PWd1aWQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHN0cmluZz0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgXHJcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lICwnZ3VpZGRhdGEuanNvbicpLHJlc3VsdHN0cmluZyk7XHJcbiAgXHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9