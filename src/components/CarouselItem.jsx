import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CertificateItem.css';

const CertificateItem = (props) => {
  const { url, image, title, description, urlCertificate } = props;

  return (
    <div className='certificate-item'>
      <article className='certificate-item__article'>
        <a href={url}><img className='certificate-item__img' src={image} alt={title} /></a>
        <h3 className='certificate-item__title'>{title}</h3>
        <p className='certificate-item__description'>
          Description:
          {' '}
          {description}
        </p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <div className='certificate-item__url'>
          <a href={urlCertificate}>Certificate</a>
        </div>
      </article>
    </div>
  );
};

CertificateItem.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  urlCertificate: PropTypes.string,
};

export default connect(null, null)(CertificateItem);
