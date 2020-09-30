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
const supertest_1 = __importDefault(require("supertest"));
const src_1 = __importDefault(require("../src/"));
// const request = require('supertest')('http://localhost:8080');
it('should get hello', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield supertest_1.default(src_1.default.app).get('/');
    expect(res.text).toBe('Hello world!');
}));
it('should store secret', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield supertest_1.default(src_1.default.app)
        .post('/api/trasfersecret2')
        .send({ data: "secrettext" })
        .set('Accept', 'application/json');
    expect(res.text.length).toBe(36);
    const res2 = yield supertest_1.default(src_1.default.app)
        .get(`/api/getsecret?guid=${res.text}`);
    expect(res2.text).toBe("secrettext");
    const res3 = yield supertest_1.default(src_1.default.app)
        .get(`/api/getsecret?guid=${res.text}`);
    expect(res3.text).toBe('{}');
}));
/*
it('should burn after read',async ()=>{
    const res = await request(app.app)
    .post('/api/trasfersecret2')
    .send({data:"burnmsg"})
    .set('Accept','application/json');

    const res2 = await request(app.app)
    .get(`/api/getsecret?guid=${res.body.guid}`);

    expect(res2.text).toBe(res.body.secret);

    const res3 = await request(app.app)
    .get(`/api/getsecret?guid=${res.body.guid}`);

    expect(res3.text).toBe('{}');
})*/
//# sourceMappingURL=foo.test.js.map