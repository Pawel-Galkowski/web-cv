"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ExperienceSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    data: [
        {
            avatar: String,
            description: {
                type: String,
                required: true,
            },
        },
    ],
    company: {
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
    description: String,
});
exports.default = (0, mongoose_1.model)('experience', ExperienceSchema);
//# sourceMappingURL=Experience.js.map