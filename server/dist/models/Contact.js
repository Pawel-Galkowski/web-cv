"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ContactSchema = new mongoose_1.Schema({
    mail: String,
    address: String,
    linkedin: String,
    telegram: String,
    instagram: String,
    twitter: String,
    Github: String,
    web: String,
    phone: String,
});
exports.default = (0, mongoose_1.model)('languages', ContactSchema);
//# sourceMappingURL=Contact.js.map