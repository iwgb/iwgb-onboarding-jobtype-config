export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const REQUEST_CONFIG = {
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};
