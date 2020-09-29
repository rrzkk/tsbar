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
    expect(res.text).toBe('Hello world!23445');
}));
it('should return', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield supertest_1.default(src_1.default.app)
        .post('/api/postsecret')
        .send({ data: "secrettest" })
        .set('Accept', 'application/json');
    expect(res.body.data).toBe("secrettest");
}));
//# sourceMappingURL=foo.test.js.map