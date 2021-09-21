import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CertificateItem.css';
import Modal from '../Modal/index';
import TodoInit from '../Modal/components/CertificateModal';
import {ReactComponent as Certificate} from '../assets/static/certificate.svg';

const CertificateItem = (props) => {
  const [openModal,setOpenModal]=useState(false);
  const { image, title, urlCertificate, date } = props;
  // const { url, image, title, description, urlCertificate, setOpenModal } = props;
  const handleOnclick=() => {
    setOpenModal(true)
  }

  return (
    <div className='certificate-item'>
      <article className='certificate-item__article'>
        <div className='certificate-item__imgTitle'>
          <div>
            <img className='certificate-item__img' src={image} alt={title} /> 
          </div>
          <div>
           <h3 className='certificate-item__title'>{title}</h3>
          </div>
        </div>
        <div className='certificate-item__details'>
          <div className='certificate-item__url'>
            <button type='button' onClick={handleOnclick}><Certificate className='certificate-item__certificate' /></button>
          </div>
          <h3>Date: {date}</h3>
        </div>
      </article>
      {!!openModal && (
      <Modal >
          <TodoInit setOpenModal={setOpenModal} urlCertificate={urlCertificate}/>
      </Modal>
    )}
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
