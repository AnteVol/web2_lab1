import { auth as openidAuth } from 'express-openid-connect';
import { auth as validateJwt } from 'express-oauth2-jwt-bearer';
import { authConfig } from '../config/Auth0';

export const TokenValidation = validateJwt({
    secret: process.env.SECRET,
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.IS_SUERBASE_URL,
    tokenSigningAlg: 'HS256',
  });

export const authProps = openidAuth(authConfig);
