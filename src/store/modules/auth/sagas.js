import { all, takeLatest, call, put } from 'redux-saga/effects';
import { signInSuccess } from './actions';

import api from '~/services/api';

export async function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      console.tron.erro('Usuario não é prestador de serviço');
      return;
    }

    yield put(signInSuccess(token, user));
  } catch (err) {
    console.tron.erro('err');
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    // history.push
  } catch (err) {
    console.tron.erro('erro');
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
