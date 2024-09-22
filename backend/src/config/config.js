export const config = {
  PORT: process.env.PORT || 3001,
  HOST: process.env.PORT || 'http://localhost',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5000',

  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:4200;http://localhost:3000;http://13.51.68.184:3000',

  CRON_JOB_PERIOD: process.env.CRON_JOB_PERIOD || '0 0 * * *',

  JWT_SECRET: process.env.JWT_SECRET || 'uf7e^WaiUGFSA7fd8&^dadh',
  JWT_SECRET_ADMIN: process.env.JWT_SECRET_ADMIN || 'uf7e^WaiUGFSA7fd8&^dadhADMIN',
  ACCESS_TOKEN_LIFETIME: process.env.ACCESS_TOKEN_LIFETIME || '5h',

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || '3fhfsdjfkf$$uIEFSHFKdf',
  JWT_REFRESH_SECRET_ADMIN: process.env.JWT_REFRESH_SECRET_ADMIN || '3fhfsdjfkf$$uIEFSHFKdfADMIN',
  REFRESH_TOKEN_LIFETIME: process.env.REFRESH_TOKEN_LIFETIME || '10h',

  serverRateLimits: {
    period: 15 * 60 * 1000, // 15 minutes
    maxRequests: 1000,
  },

  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/box_breakers',
};
