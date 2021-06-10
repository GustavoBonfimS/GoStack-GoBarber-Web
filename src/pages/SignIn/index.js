import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { signFailure, signInSuccess } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import api from '~/services/api';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  const history = useHistory();
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  async function handleSubmit({ email, password }) {
    try {
      const { data } = await api.post('/sessions', {
        email,
        password,
      });
      const { token, user } = data;
      if (!user.provider) {
        toast.error('Usuario não é prestador de serviço');
        return;
      }
      dispatch(signInSuccess(token, user));
      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro ao fazer autenticação');
      dispatch(signFailure());
    }
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>

        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}

export default SignIn;
