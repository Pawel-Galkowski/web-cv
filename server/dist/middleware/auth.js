"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("config");
exports.default = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, (0, config_1.get)('jwtSecret'));
        req.body.user = decoded.user;
        return next();
    }
    catch (err) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }
};
//# sourceMappingURL=auth.js.map