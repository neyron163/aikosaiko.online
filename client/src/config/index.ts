export const ENVIRONMENT = process.env.APP_ENV;

export const API_URL = ENVIRONMENT === 'development' ? 'http://localhost:4001/images/' : '';