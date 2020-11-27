import * as types from '../types'

export function signInRequest (email, password) {
  return {
    type: types.SIGN_IN_REQUEST,
    payload: {
      email,
      password
    }
  }
}

export function signInSuccess (payload) {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload
  }
}

export function signInFailure (payload) {
  return {
    type: types.SIGN_IN_FAILURE,
    payload
  }
}
