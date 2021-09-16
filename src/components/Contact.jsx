import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Contact.css';
import PropTypes from 'prop-types';
import { registerRequest } from '../actions';

const Contact = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => { //recopilar informacion de formulario
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => { // enviar informacion formulario
    event.preventDefault();
    props.registerRequest(form); // informacion enviada
  };

  return (
    <section className='contact'>
      <div>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h3>Let's try something new!</h3>
      </div>
      <form className='form-email' onSubmit={handleSubmit}>
        <input
          name='email'
          type='text'
          placeholder='Email'
          onChange={handleInput}
        />
        {' '}
        <button type='submit'>Send</button>
      </form>
    </section>
  );
};

Contact.propTypes = {
  registerRequest: PropTypes.func,
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Contact);
