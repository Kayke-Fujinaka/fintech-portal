const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;

export const baseURL =
  ENVIRONMENT === 'production'
    ? 'https://backend.fintech.fiap.com'
    : 'http://localhost:8085/';
