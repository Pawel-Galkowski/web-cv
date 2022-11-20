"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Main configuration of user account
const UserSchema = new mongoose_1.Schema({
    id: mongoose_1.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    confirmationKey: {
        type: String,
    },
    recoveryToken: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
// UserSchema.methods.summary = () => ({
//   name: this.name,
//   email: this.email,
//   avatar: this.avatar,
//   timestamp: this.timestamp,
//   confirmed: this.confirmed,
//   confirmedKey: this.confirmedKey,
//   recoveryToken: this.recoveryToken,
//   id: this._id.toString(),
// });
exports.default = (0, mongoose_1.model)('users', UserSchema);
//# sourceMappingURL=User.js.map