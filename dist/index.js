"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_1 = require("./middlewares/Auth");
const Router_1 = __importDefault(require("./routes/Router"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(Auth_1.authProps);
app.use(express_1.default.json());
app.use(Router_1.default);
app.listen(PORT, () => {
    console.log(`Working on port ${PORT}`);
});
