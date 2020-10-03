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
const path_1 = __importDefault(require("path"));
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
//# sourceMappingURL=jsonop.js.map