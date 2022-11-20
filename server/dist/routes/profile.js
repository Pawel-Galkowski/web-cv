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
const models_1 = require("../models");
const express_validator_1 = require("express-validator");
const middleware_1 = require("../middleware");
const router = express_1.default.Router();
// router.get('/', (req: Request, res: Response) => {
//   res.send({ message: 'hello world' })
// })
// @route   GET api/profile
// @desc    Get current user profile
// @access  Private
router.get('/', middleware_1.Auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield models_1.Profile.findOne({
            user: req.body.user.id,
        }).populate('user', ['name', 'avatar']);
        if (!profile) {
            return res.status(404).json({ msg: 'There is no profile for this user' });
        }
        return res.json(profile);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
}));
// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post('/', [
    middleware_1.Auth,
    (0, express_validator_1.check)('status', 'status is required')
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('skills', 'Skills is required')
        .not()
        .isEmpty(),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { company, website, location, bio, status, githubusername, youtube, twitter, facebook, linkedin, instagram, skills, profileImg, user, } = req.body;
    // Get fields
    const profileFields = {
        user: req.body.user.id,
        company: company || undefined,
        website: website || undefined,
        location: location || undefined,
        bio: bio || undefined,
        status: status || undefined,
        githubusername: githubusername || undefined,
        profileImg: profileImg || undefined,
        skills: skills || undefined,
        social: {
            youtube: youtube || undefined,
            twitter: twitter || undefined,
            facebook: facebook || undefined,
            linkedin: linkedin || undefined,
            instagram: instagram || undefined,
        },
    };
    try {
        let profile = yield models_1.Profile.findOne({ user: user.id });
        if (profile) {
            profile = yield models_1.Profile.findOneAndUpdate({
                user: user.id,
            }, { $set: profileFields }, { new: true });
            return res.json(profile);
        }
        profile = new models_1.Profile(profileFields);
        yield profile.save();
        return res.json(profile);
    }
    catch (err) {
        return res.status(500).send(err);
    }
}));
// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
router.put('/experience', [
    middleware_1.Auth,
    (0, express_validator_1.check)('title', 'Title is required')
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('company', 'Company is required')
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('from', 'From date is required')
        .not()
        .isEmpty(),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, data, company, from, isPresent, to, location, description, user, } = req.body;
    const newExp = {
        title,
        data,
        company,
        from,
        isPresent,
        to,
        location,
        description,
    };
    try {
        const profile = yield models_1.Profile.findOne({ user: user.id });
        profile.experience.unshift(newExp);
        yield profile.save();
        return res.json(profile);
    }
    catch (err) {
        return res.status(500).send(err);
    }
}));
// @route   PUT api/profile/education
// @desc    Add education to profile
// @access  Private
router.put('/education', [
    middleware_1.Auth,
    (0, express_validator_1.check)('school', 'School is required')
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('title', 'Title is required')
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('from', 'From date is required')
        .not()
        .isEmpty(),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, project, school, from, isPresent, to, location, user, } = req.body;
    const newEdu = {
        title,
        project,
        school,
        from,
        isPresent,
        to,
        location,
    };
    try {
        const profile = yield models_1.Profile.findOne({ user: user.id });
        profile.education.unshift(newEdu);
        yield profile.save();
        return res.json(profile);
    }
    catch (err) {
        return res.status(err.code).send(err.message);
    }
}));
// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete('/', middleware_1.Auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Profile.findOneAndRemove({ user: req.body.user.id });
        yield models_1.User.findOneAndRemove({ _id: req.body.user.id });
        res.json({ msg: 'User Deleted' });
    }
    catch ({ code, message }) {
        res.status(code).send(message);
    }
}));
exports.default = router;
//# sourceMappingURL=profile.js.map