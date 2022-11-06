"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { check, validationResult } from 'express-validator';
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send({ message: 'hello world' });
});
exports.default = router;
//# sourceMappingURL=profile.js.map