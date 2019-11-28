export const ENVIRONMENT = process.env.NODE_ENV;

export const API_URL = ENVIRONMENT === 'development' ? 'http://localhost:4001/images/' : '';