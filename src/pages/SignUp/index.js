import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import logo from '~/assets/logo.svg';
import { signFailure, signUpRequest } from '~/store/modules/auth/actions';
import api from '~/services/api';

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
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleSubmit({ name, email, password }) {
    try {
      await api.post('/users', {
        name,
        email,
        password,
      });
      toast.success('Usuário cadastrado com sucesso');
      history.push('/');
    } catch (err) {
      toast.error('Falha ao cadastrar usuário');
      // dispatch(signUpRequest(name, email, password));
      dispatch(signFailure());
    }
  }
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
