import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(6, 'No minimo 6 caracteres'),
  name: yup.string().required('O nome é obrigatório'),
});

function SignUp() {
  function handleSubmit(data) {}
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>

        <Link to="/">Ja tenho login</Link>
      </Form>
    </>
  );
}

export default SignUp;
