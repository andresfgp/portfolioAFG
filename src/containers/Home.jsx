import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/App.css';
import '../assets/styles/components/Home.css';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Certificate from '../components/Certificate';
import Contact from '../components/Contact';

const Home = (props) => {
  const { searchResultPortfolio, searchResultCertificate, portfolio, certificate } = props;


  return (
    <div className='home'>
      {(searchResultPortfolio.length) > 0 && (
        <Categories title='Portfolio Search Information' isSearch>
          {
            searchResultPortfolio.map((item) => (
              <Portfolio
                key={item.id}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...item}
              />
            ))
          }
        </Categories>
      )}
      {(searchResultCertificate.length) > 0 && (
        <Categories title='Certificates Search Information' isSearch >
          <Certificate >
            {
              searchResultCertificate.map((item) => (
                <CarouselItem
                  key={item.id}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...item}
                />
              ))
            }
          </Certificate>
        </Categories>
      )}
      <Hero />
      {portfolio.length > 0 && (
        <Categories title='Portfolio' id='portfolio' isPortfolio>
          {
            portfolio.sort((a, b) => { return b.year - a.year; }).map((item) => (
              <Portfolio
                key={item.id}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...item}
              />
            ))
          }
        </Categories>
      )}
      {certificate.length > 0 && (
        <Categories title='More about my experience' id='certificates' isCertificate >
          <Certificate>
            {
              certificate.sort((a, b) => { return b.year - a.year; }).map((item) => (
                <CarouselItem
                  key={item.id}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...item}
                />
              ))
            }
          </Certificate>
        </Categories>
      )}
      <Categories id='contact' isContact>
        <Contact />
      </Categories>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResultPortfolio: state.searchResultPortfolio,
    searchResultCertificate: state.searchResultCertificate,
    portfolio: state.portfolio,
    certificate: state.certificate,
  };
};

Home.propTypes = {
  searchResultPortfolio: PropTypes.array,
  searchResultCertificate: PropTypes.array,
  portfolio: PropTypes.array,
  certificate: PropTypes.array,
};
export default connect(mapStateToProps, null)(Home);
