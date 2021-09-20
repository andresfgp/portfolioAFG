import React from 'react'
import '../assets/styles/components/CertificateModal.css'

const CertificateModal = (props) => {
    const { setOpenModal, urlCertificate } = props;
    const handleOnClick=()=>{ 
        setOpenModal(false)
    }
    return (
        <div className="CertificateModal">
            <img src={urlCertificate} alt="" />
            <button 
            className='button'
            onClick={handleOnClick} //funcion
          >+</button>  
        </div>
    )
}

export default CertificateModal
