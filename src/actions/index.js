// eslint-disable-next-line import/prefer-default-export
export const getSearchInfoPortfolio = (payload) => ({
  type: 'GET_SEARCH_INFO_PORTFOLIO',
  payload,
});

export const getSearchInfoCertificate = (payload) => ({
  type: 'GET_SEARCH_INFO_CERTIFICATE',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});
