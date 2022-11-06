"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Contact_1 = __importDefault(require("./Contact"));
const Education_1 = __importDefault(require("./Education"));
const Experience_1 = __importDefault(require("./Experience"));
const Languages_1 = __importDefault(require("./Languages"));
const ProfileSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    contact: Contact_1.default,
    experience: Experience_1.default,
    education: Education_1.default,
    languages: Languages_1.default,
    interests: [{
            type: String,
        }]
});
exports.default = (0, mongoose_1.model)('profile', ProfileSchema);
//# sourceMappingURL=Profile.js.map