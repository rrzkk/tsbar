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
const fs_1 = __importDefault(require("fs"));
exports.default = {
    // concat file1 and file2
    jsonwrite(file1, file2) {
        const file3 = JSON.stringify(file1.concat(file2));
        console.log("write");
        fs_1.default.writeFileSync(require('./guiddata.json'), file3);
    },
    // get the json object with guid===guid
    jsonread(guid) {
        return __awaiter(this, void 0, void 0, function* () {
            const rawdata = fs_1.default.readFileSync(require('./guiddata.json')).toString();
            const jsondata = JSON.parse(rawdata);
            const result = jsondata.filter((el) => el.guid === guid);
            if (result.length !== 0) {
                return result[0].secret.toString();
            }
            else
                return '{}';
        });
    },
    // get the json array
    jsonreadall() {
        const rawdata = fs_1.default.readFileSync(require('./guiddata.json')).toString();
        const jsondata = JSON.parse(rawdata);
        return jsondata;
    },
    // delete json object with guid= guid
    jsondelete(guid) {
        const alljson = this.jsonreadall();
        const result = alljson.filter((el) => el.guid !== guid);
        const resultstring = JSON.stringify(result);
        fs_1.default.writeFileSync(require('./guiddata.json'), resultstring);
    }
};
//# sourceMappingURL=jsonop.js.map