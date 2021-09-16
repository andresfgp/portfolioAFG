import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Search.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getSearchInfoPortfolio, getSearchInfoCertificate } from '../actions';

const Search = (props) => {
  const { isHome, getSearchInfoPortfolio, getSearchInfoCertificate } = props;

  const handleInput = (event) => { //recopilar informacion del search
    getSearchInfoPortfolio(event.target.value);
    getSearchInfoCertificate(event.target.value);
    //console.log(event.target.value);
  };

  const inputStyles = classNames('input', {
    isHome,
  });
  return (
    <>
      <section className='main'>
        <input
          name='search'
          type='text'
          className={inputStyles}
          placeholder='Search...'
          onChange={handleInput}
        />
      </section>
    </>
  );
};

Search.propTypes = {
  getSearchInfoPortfolio: PropTypes.func,
  getSearchInfoCertificate: PropTypes.func,
  isHome: PropTypes.bool,
};

const mapDispatchToProps = {
  getSearchInfoPortfolio,
  getSearchInfoCertificate,
};

export default connect(null, mapDispatchToProps)(Search);
