import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as types from '../types'
import { toast } from 'react-toastify'
import api from '../../../services/api'

function * authRequest ({ payload }) {
  try {
    const response = yield call(api.post, '/auth', payload)
    yield put(actions.signInSuccess({ ...response.data }))

    toast.success('Login efetuado com sucesso')

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
  } catch (err) {
    toast.error(err.response.data.error)
    yield put(actions.signInFailure())
  }
}

function persistRehydrate ({ payload }) {
  const { token } = payload.auth

  if (!token) return

  api.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
  takeLatest(types.SIGN_IN_REQUEST, authRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
])
