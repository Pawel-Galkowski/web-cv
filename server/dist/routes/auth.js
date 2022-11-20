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
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const express_validator_1 = require("express-validator");
const middleware_1 = require("../middleware");
const models_1 = require("../models");
const router = express_1.default.Router();
// @route   Auth /
// @desc    GET informations about current user
// @access  Private
router.get('/', middleware_1.Auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.findById(req.body.user.id).select('-password');
        if (!user.confirmed) {
            return res.status(400).json({ msg: 'Verify your account first' });
        }
        return res.json(user);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}));
// @route   Auth /login
// @desc    POST Login form
// @access  Private
router.post('/', [
    (0, express_validator_1.check)('email', 'Please include a valid email').isEmail(),
    (0, express_validator_1.check)('password', 'Password is required').exists(),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        const user = yield models_1.User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Wrong email or password' });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Wrong email or password' });
        }
        if (user.confirmed !== true) {
            return res.status(400).json({ msg: 'Verify your account first' });
        }
        const payload = {
            id: user.id,
        };
        jsonwebtoken_1.default.sign(payload, config_1.default.get('jwtSecret'), {
            expiresIn: 360000,
        }, (err, token) => {
            if (err)
                throw err;
            res.json({ token });
        });
        return 'Process succes';
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}));
// @route   Auth /register
// @desc    POST Register form
// @access  Private
router.post('/register', [
    (0, express_validator_1.check)('name', 'Name is required')
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('email', 'Please include a valid email').isEmail(),
    (0, express_validator_1.check)('password', 'Please enter a stronger password').isLength({ min: 6 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, role } = req.body;
    try {
        let user = yield models_1.User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: 'User exist' });
        }
        const secretKey = yield bcryptjs_1.default.hash(email, yield bcryptjs_1.default.genSalt(10));
        user = new models_1.User({
            name,
            email,
            password,
            confirmed: false,
            confirmationKey: false,
        });
        const resEmail = (0, middleware_1.Mailer)(user, secretKey);
        const finChecker = yield resEmail.then((value) => value);
        user.confirmationKey = yield bcryptjs_1.default.hash(user.id, secretKey);
        user.password = yield bcryptjs_1.default.hash(password, yield bcryptjs_1.default.genSalt(10));
        if (finChecker === true) {
            yield user.save();
            return res.redirect('/login');
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}));
// @route   Auth /login
// @desc    POST Login form
// @access  Private
//   router.post('/login', (req: Request, res: Response) => {
//     const { errors } = validateLoginImput(req.body);
//     const { email } = req.body;
//     const password = req.body.passowrd;
//     User.findOne({ email }).then((user) => {
//       if (!user) {
//         errors.email = 'User not found';
//         return res.status(404).json(errors);
//       }
//       const { confirmed } = User;
//       bcrypt.compare(password, user.passowrd).then((isMatch) => {
//         if (isMatch) {
//           if (confirmed !== true) {
//             errors.user = 'Please confirm email first';
//             return res.status(404).json(errors);
//           }
//           const payload = {
//             id: user.id,
//             name: user.name,
//             avatar: user.avatar,
//           };
//           jwt.sign(payload, keys.secretOrKey, { expiresIn: 360000 }, (err, token) => {
//             res.json({
//               sucess: true,
//               token,
//             });
//           });
//         } else {
//           errors.password = 'Password inccorect';
//           return res.status(400).json(errors);
//         }
//         return 'Process finished';
//       });
//       return 'Log in process finished';
//     });
//   });
// @route   Auth /confirmation/:token
// @desc    POST Confirmation email token
// @access  Public
router.post('/confirmation/:token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const verifyuser = yield models_1.User.findOne(req.body.email);
        const secretToken = yield bcryptjs_1.default.hash(verifyuser.id, verifyuser.confirmationKey);
        const isIdentical = jsonwebtoken_1.default.verify(req.params.token, secretToken);
        if (verifyuser._id === isIdentical) {
            yield verifyuser.updateOne({ confirmed: true });
            yield verifyuser.updateOne({ $unset: { confirmationKey: 1 } });
        }
        else {
            return res.status(400).json({ errors: 'Invalid Credentials' });
        }
    }
    catch (err) {
        return res.status(400).json(err);
    }
}));
// @route   Auth /recovery
// @desc    POST recovery user account
// @access  Private
router.post('/recovery', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const recoveryUser = yield models_1.User.findOne(email);
        const secretToken = yield bcryptjs_1.default.hash(email, yield bcryptjs_1.default.genSalt(10));
        const newRecoveryToken = yield bcryptjs_1.default.hash(email, secretToken);
        const cleanToken = newRecoveryToken.replace(/[/]/g, '');
        if (!recoveryUser) {
            return res.status(400).json({ errors: 'Invalid Credentials' });
        }
        const finChecker = yield (0, middleware_1.RecoveryMailer)(recoveryUser, cleanToken).then((value) => value);
        if (finChecker) {
            yield recoveryUser.updateOne({ recoveryToken: cleanToken });
        }
        return res.status(200).json({ msg: 'Mail send' });
    }
    catch (err) {
        return res.status(400).json({ errors: 'Invalid  Email' });
    }
}));
// @route   Auth /recovery/:token
// @desc    POST Recovery account confirmation
// @access  Private
router.post('/recovery/:token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recoveryUser = yield models_1.User.findOne(req.body.email);
        if (recoveryUser.recoveryToken === req.params.token) {
            const cryptPassword = yield bcryptjs_1.default.hash(req.body.password, yield bcryptjs_1.default.genSalt(10));
            yield recoveryUser.updateOne({ password: cryptPassword });
            yield recoveryUser.updateOne({ $unset: { recoveryToken: 1 } });
        }
        else {
            return res.status(400).json({ errors: 'Invalid Credentials' });
        }
    }
    catch (err) {
        return res.status(400).json({ errors: 'Cannot update user' });
    }
}));
exports.default = router;
//# sourceMappingURL=auth.js.map