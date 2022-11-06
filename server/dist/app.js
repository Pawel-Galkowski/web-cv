"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = __importDefault(require("./config/mongoose"));
const profile_1 = __importDefault(require("./routes/profile"));
const app = (0, express_1.default)();
const { PORT = 3000 } = process.env;
mongoose_1.default
    .connect(mongoose_2.default.mongoURI, mongoose_2.default.options)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));
app.use('/', profile_1.default);
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map