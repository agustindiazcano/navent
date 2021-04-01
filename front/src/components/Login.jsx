import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../state/user/actions';

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data, '<-----Este es el body');
    dispatch(login(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="mail"
        name="mail"
        ref={register({
          required: { value: true, message: 'Ingrese un mail' },
        })}
      />
      <input
        placeholder="password"
        type="password"
        name="password"
        ref={register({
          required: { value: true, message: 'Ingrese una contraseña' },
        })}
      />
      <span>{errors?.mail?.message}</span>
      <span>{errors?.password?.message}</span>
      <button>Login</button>
    </form>
  );
};

export default Login;
