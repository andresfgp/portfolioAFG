import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

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
    }, {
      'id': 2,
      'year': 2016,
      'title': 'Subestación Buritica 2016',
      'company': 'Empresas publicas de Medellín (EPM)',
      'dateStart': '15/01/2018',
      'dateEnd': '30/12/2018',
      'description': 'Ingenieria basica subestaciones Santa Fe de Antioquia, San Jeronimo',
      'url': 'https://www.epm.com.co/site/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Logo_EPM.png',
    }, {
      'id': 3,
      'year': 2020,
      'title': 'Ingenieria Basica subestaciones 2020',
      'company': 'Empresas publicas de Medellín (EPM)',
      'dateStart': '15/01/2018',
      'dateEnd': '30/12/2018',
      'description': 'Ingenieria basica subestaciones Santa Fe de Antioquia, San Jeronimo',
      'url': 'https://www.epm.com.co/site/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Logo_EPM.png',
    }],
  'certificate': [
    {
      'id': 1001,
      'year': 2018,
      'url': 'https://global.abb/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg',
      'title': 'System integrator 2018 1 ABB',
      'description': 'System integrator',
      'urlCertificate': '',
    }, {
      'id': 1002,
      'year': 2020,
      'url': 'https://global.abb/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg',
      'title': 'System integrator 2020 ABB',
      'description': 'System integrator',
      'urlCertificate': '',
    }, {
      'id': 1003,
      'year': 2018,
      'url': 'https://global.abb/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg',
      'title': 'System integrator 2018 2 ABB',
      'description': 'System integrator',
      'urlCertificate': '',
    }, {
      'id': 1004,
      'year': 2016,
      'url': 'https://global.abb/',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg',
      'title': 'System integrator 2016 ABB',
      'description': 'System integrator',
      'urlCertificate': '',
    }],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, initialState, composeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
