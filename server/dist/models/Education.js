"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EducationSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    project: [
        {
            type: String,
            required: true,
        },
    ],
    school: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    isPresent: {
        type: Boolean,
        default: false,
    },
    to: String,
    location: String,
});
exports.default = (0, mongoose_1.model)('education', EducationSchema);
//# sourceMappingURL=Education.js.map