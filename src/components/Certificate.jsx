import React from 'react';
import '../assets/styles/components/Certificate.css';
import PropTypes from 'prop-types';

const Certificate = (props) => {
  const { children } = props;

  return (
    <>
      <section className='certificate'>
        <div className='certificate__container'>
          {children}
        </div>
      </section>
    </>
  );
};
Certificate.propTypes = {
  children: PropTypes.array,
};
export default Certificate;
