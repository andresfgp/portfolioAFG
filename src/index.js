import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import tesla from './assets/static/tesla.png'
import platzi from './assets/static/platzi.png'
import colombia from './assets/static/colombia.png'
import usa from './assets/static/usa.png'
import chile from './assets/static/chile.png'
import diplomaProgramacionBasica from './assets/static/certificate/diplomaProgramacionBasica.png'

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
      'imageCountry': colombia ,    
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
      'imageCountry': chile,    
    }, {
      'id': 3,
      'year': 2021,
      'title': 'Giga Factory Texas Substations',
      'company': 'Tesla',
      'dateStart': '15/04/2021',
      'dateEnd': '15/06/2021',
      'description': 'Interactions with clients in technical aspects, testing and commissioning of substation projects.',
      'image': tesla,
      'imageCountry': usa,    
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
      'imageCountry': colombia,    
    }],
  'certificate': [
    {
      'id': 1001,
      'year': 2020,
      'url': 'https://www.platzi.com',
      'image': platzi,
      'title': 'Basic Programming',
      'urlCertificate': diplomaProgramacionBasica,
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
