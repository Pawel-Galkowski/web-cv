"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Configuration of user profile and data
const ProfileSchema = new mongoose_1.Schema({
    id: mongoose_1.Schema.Types.ObjectId,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'users',
    },
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
    contact: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Contact',
        },
    ],
    experience: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Experience',
        },
    ],
    education: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Education',
        },
    ],
    languages: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Languages',
        },
    ],
    interests: [String],
});
exports.default = (0, mongoose_1.model)('profile', ProfileSchema);
//# sourceMappingURL=Profile.js.map