import { auth as openidAuth } from 'express-openid-connect';
import { auth as validateJwt } from 'express-oauth2-jwt-bearer';
import { authConfig } from '../config/Auth0';

export const TokenValidation = validateJwt({
    secret: 'eSLb0aAST56pk33DiGo4kGHLfZm5FJ7n',
    audience: 'https://web2lab1/api',
    issuerBaseURL: 'https://dev-nuspof171g87mswr.us.auth0.com/',
    tokenSigningAlg: 'HS256',
  });

export const authProps = openidAuth(authConfig);
