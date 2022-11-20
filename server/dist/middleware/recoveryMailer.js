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
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const recoveryMailer = (user, secretKey) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer_1.default.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });
        const url = `http://localhost:3000/api/users/recovery/${secretKey}`;
        transporter.sendMail({
            to: user.email,
            subject: 'Recovery passowrd',
            // html: `Please click this link to confirm your email: <a href="${url}">${url}</a>`
            html: `<div style="background-color: #F0F0F0; padding: 25px 0; font-size: 15px; font-family: Georgia; line-height: 25px;">
          <div style="max-width: 600px; min-width: 300px: width: auto; margin: 0 auto; text-align: center;">
              <p style="text-align: left;">
                  Hello!,<br />

                  You are receiving this email because we received a password reset request for your account.
              </p>
              <a href="${url}" style="padding: 10px 20px; width: 250px; height: 60px; background-color: #00BFFF; border-radius:10px; border: none; color: white; font-size: 20px; font-weight: bold; text-decoration:none;">Reset Password</a>
              <p style="text-align: left;">
                  If you did not request a password reset, no further action is required.
              </p>
              <p style="text-align: left;">
                  JoinJobs Team<br />
                  https://joinjobs.com
              </p>
          </div>
              </div>`,
        });
        return true;
    }
    catch (err) {
        return err;
    }
});
exports.default = recoveryMailer;
//# sourceMappingURL=recoveryMailer.js.map