"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LanguagesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)('Languages', LanguagesSchema);
//# sourceMappingURL=Languages.js.map