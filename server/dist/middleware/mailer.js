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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mailer = (user, secretKey) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer_1.default.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });
        const msgStyle = 'background-color: #F0F0F0; padding: 25px 0; font-size: 15px; font-family: Georgia; line-height: 25px;';
        const buttonStyle = 'padding: 10px 20px; width: 250px; height: 60px; background-color: #00BFFF; border-radius:10px; border: none; color: white; font-size: 20px; font-weight: bold; text-decoration:none;';
        const secretToken = yield bcryptjs_1.default.hash(user.id, secretKey);
        jsonwebtoken_1.default.sign({ user: user.id }, secretToken, { expiresIn: '1d' }, (err, token) => {
            const url = `http://localhost:3000/api/users/confirmation/${token}`;
            transporter.sendMail({
                to: user.email,
                subject: 'Confirmation Email',
                // html: `Please click this link to confirm your email: <a href="${url}">${url}</a>`
                html: `<div style="${msgStyle}">
          <div style="max-width: 600px; min-width: 300px: width: auto; margin: 0 auto; text-align: center;">
              <p style="text-align: left;">
                  Hello ${user.name},<br />
      
                  Thanks for signing up with JoinJobs! <br />
                  In order to activate your account, we require that you confirm your email address.
              </p>
              <a href="${url}" style="${buttonStyle}">Confirmation</a>
              <p style="text-align: left;">
                  If you did not sign up to JoinJobs, you can safely ignore this email.
              </p>
              <p style="text-align: left;">
                  JoinJobs Team<br />
                  https://joinjobs.com
              </p>
          </div>
              </div>`,
            });
        });
        return true;
    }
    catch (err) {
        return err;
    }
});
exports.default = mailer;
//# sourceMappingURL=mailer.js.map