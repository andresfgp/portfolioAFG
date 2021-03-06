import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Contact.css';
import PropTypes from 'prop-types';
import { registerRequest } from '../actions';

const Contact = (props) => {
  // const [form, setValues] = React.useState({
  //   email: '',
  // });

  // const handleInput = (event) => { //recopilar informacion de formulario
  //   setValues({
  //     ...form,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleSubmit = (event) => { // enviar informacion formulario
  //   event.preventDefault();
  //   props.registerRequest(form); // informacion enviada
  // };

  return (
    <section className='contact'>
      <div className='contact__text'>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <div className='contact__text-name'>
        <div>
          <h3>Let's try something new!</h3>
        </div>
        <div className='contact__text-nameH3'>
          <h3>I'd love to hear from you.</h3>
        </div>
        </div>
        <div className='contact__text-email'>
          <h3>Email me at 
            <a href='mailto:andres.fgp@hotmail.com'>andres.fgp@hotmail.com</a>
          </h3>
        </div>

      </div>
      {/* <form className='form-email' onSubmit={handleSubmit}>
        <input
          name='email'
          type='text'
          placeholder='Email'
          onChange={handleInput}
        />
        {' '}
        <button type='submit'>Send</button>
      </form> */}
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
