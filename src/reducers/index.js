/* eslint-disable no-duplicate-case */
const reducer = (state, action) => {
  switch (action.type) { // evaluar el type
    case 'GET_SEARCH_INFO_PORTFOLIO':
      if (action.payload === '') return { ...state, searchResultPortfolio: [] };
      return {
        ...state,
        searchResultPortfolio: state.portfolio.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())).sort((a, b) => { return b.year - a.year; }),
      };
    case 'GET_SEARCH_INFO_CERTIFICATE':
      if (action.payload === '') return { ...state, searchResultCertificate: [] };
      return {
        ...state,
        searchResultCertificate: state.certificate.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())).sort((a, b) => { return b.year - a.year; }),
      };

    case 'REGISTER_REQUEST':
      return {
        ...state, //traer el estado que ya tengo
        user: action.payload,
      };
    default:
      return state;

  }
};

export default reducer;
