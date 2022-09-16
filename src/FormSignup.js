import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Se matricule no BootCamp Impacta 2022! 
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Nome</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Digite o seu nome:'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Digite o seu email:'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Senha</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Digite sua senha:'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirme sua senha</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirme sua senha:'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Ainda não criou uma conta? Clique <a href='#'>aqui!</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
