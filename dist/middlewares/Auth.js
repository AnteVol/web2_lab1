"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authProps = exports.TokenValidation = void 0;
const express_openid_connect_1 = require("express-openid-connect");
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
const Auth0_1 = require("../config/Auth0");
exports.TokenValidation = (0, express_oauth2_jwt_bearer_1.auth)({
    secret: 'eSLb0aAST56pk33DiGo4kGHLfZm5FJ7n',
    audience: 'https://web2lab1/api',
    issuerBaseURL: 'https://dev-nuspof171g87mswr.us.auth0.com/',
    tokenSigningAlg: 'HS256',
});
exports.authProps = (0, express_openid_connect_1.auth)(Auth0_1.authConfig);
