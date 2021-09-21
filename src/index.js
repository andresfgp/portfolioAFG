import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import image from './image.js'

const initialState = {
  'user': {},
  'searchResultPortfolio': [],
  'searchResultCertificate': [],
  'portfolio': [
    {
      'id': 1,
      'year': 2018,
      'title': 'Ingenieria Basica subestaciones 2018',
      'company': 'Empresas publicas de Medellín (EPM)',
      'dateStart': '15/01/2018',
      'dateEnd': '30/12/2018',
      'description': 'Ingenieria basica subestaciones Santa Fe de Antioquia, San Jeronimo',
      'url': 'https://www.epm.com.co/si-te/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Logo_EPM.png',
      'imageCountry': image.colombia ,    
    },  {
      'id': 2,
      'year': 2018,
      'title': 'Ingenieria Basica subestaciones 2018',
      'company': 'Empresas publicas de Medellín (EPM)',
      'dateStart': '15/01/2018',
      'dateEnd': '30/12/2018',
      'description': 'Ingenieria basica subestaciones Santa Fe de Antioquia, San Jeronimo',
      'url': 'https://www.epm.com.co/si-te/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Logo_EPM.png',
      'imageCountry': image.chile,    
    }, {
      'id': 3,
      'year': 2021,
      'title': 'Giga Factory Texas Substations',
      'company': 'Tesla',
      'dateStart': '15/04/2021',
      'dateEnd': '15/06/2021',
      'description': 'Interactions with clients in technical aspects, testing and commissioning of substation projects.',
      'image': image.tesla,
      'imageCountry': image.usa,    
    }, {
      'id': 4,
      'year': 2018,
      'title': 'Ingenieria Basica subestaciones 2018',
      'company': 'Empresas publicas de Medellín (EPM)',
      'dateStart': '15/01/2018',
      'dateEnd': '30/12/2018',
      'description': 'Ingenieria basica subestaciones Santa Fe de Antioquia, San Jeronimo',
      'url': 'https://www.epm.com.co/si-te/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Logo_EPM.png',
      'imageCountry': image.colombia,    
    }],
  'certificate': [
    {
      'id': 1001,
      'year': 20200723,
      'date': "2020/07/23",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'ASYNCHRONISM WITH JAVASCRIPT',
      'urlCertificate': image.diploma1,
    },
    {
      'id': 1002,
      'year': 20200515,
      'date': "2020/05/15",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'JAVASCRIPT BASIC',
      'urlCertificate': image.diploma2,
    },
    {
      'id': 1003,
      'year': 20200624,
      'date': "2020/06/24",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'ESCMASCRIPT 6+',
      'urlCertificate': image.diploma3,
    },
    {
      'id': 1004,
      'year': 20200502,
      'date': "2020/05/02",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'FRONTEND DEVELOPER',
      'urlCertificate': image.diploma4,
    },
    {
      'id': 1005,
      'year': 20200616,
      'date': "2020/06/16",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'JAVASCRIPT COURSE',
      'urlCertificate': image.diploma5,
    },
    {
      'id': 1006,
      'year': 20210811,
      'date': "2021/08/11",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'NODE.JS BASICS',
      'urlCertificate': image.diploma6,
    },
    {
      'id': 1007,
      'year': 20200701,
      'date': "2020/07/01",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'WEB ONLINE DEVELOPER',
      'urlCertificate': image.diploma7,
    },
    {
      'id': 1008,
      'year': 20210413,
      'date': "2021/04/13",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'WEB ONLINE DEVELOPER',
      'urlCertificate': image.diploma8,
    },
    {
      'id': 1009,
      'year': 20210825,
      'date': "2021/08/25",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'NPM PACKAGE',
      'urlCertificate': image.diploma9,
    },
    {
      'id': 1010,
      'year': 20200423,
      'date': "2020/04/23",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'PREWORK: DEVELOPING GOOD PRACTICE',
      'urlCertificate': image.diploma10,
    },
    {
      'id': 1011,
      'year': 20200415,
      'date': "2020/04/15",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'BASIC PROGRAMMING',
      'urlCertificate': image.diploma11,
    },
    {
      'id': 1012,
      'year': 20210628,
      'date': "2021/06/28",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'REACT JS',
      'urlCertificate': image.diploma12,
    },
    {
      'id': 1013,
      'year': 20210722,
      'date': "2021/07/22",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'REACT ROUTER Y REDUX',
      'urlCertificate': image.diploma13,
    },
    {
      'id': 1014,
      'year': 20210825,
      'date': "2021/08/25",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'CLOSURES AND SCOPE JAVASCRIPT',
      'urlCertificate': image.diploma14,
    },
    {
      'id': 1015,
      'year': 20210507,
      'date': "2021/05/07",
      'url': 'https://www.platzi.com',
      'image': image.platzi,
      'title': 'WEBPACK',
      'urlCertificate': image.diploma15,
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, initialState, composeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
