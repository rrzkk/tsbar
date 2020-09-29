"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(body_parser_1.default.json());
const port = 8080; // default port to listen
// define a route handler for the default home page
// app.use(express.static(path.resolve(__dirname, '../../reactui/build')));
app.get("/", (req, res) => {
    res.send({ 'context': "Hello world!" });
});
app.get('/test/', (req, res) => {
    res.send('This is res from /api/test');
});
app.post("/api/postsecret/", (req, res) => {
    res.send(req.body);
});
// start the Express server
const server = app.listen(port, () => {
    // console.log( `server started at http://localhost:${ port }` );
});
exports.default = { app, server };
//# sourceMappingURL=index.js.map