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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const guid_1 = __importDefault(require("./guid"));
const jsonop_1 = __importDefault(require("./jsonop"));
const cors_1 = __importDefault(require("cors"));
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
    // console.log( `server started at http://localhost:${ port }` );
});
exports.default = { app, server };
//# sourceMappingURL=index.js.map