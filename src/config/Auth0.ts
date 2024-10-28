import dotenv from 'dotenv';

dotenv.config();

export const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: 'http://localhost:3000',
  clientID: 'J5zA1Lu5ZTGCV2MWCYq2I0laSr3xFRaB',
  issuerBaseURL: 'https://dev-nuspof171g87mswr.us.auth0.com'
};