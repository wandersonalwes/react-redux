import * as types from '../types'

const INITIAL_STATE = {
  signed: false,
  user: {},
  loading: true,
  error: null,
  token: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIGN_IN_REQUEST:
      return state

    case types.SIGN_IN_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const newState = { ...state }

      newState.signed = true
      newState.user = action.payload.user
      newState.token = action.payload.token

      return newState

    case types.SIGN_IN_FAILURE:
      return INITIAL_STATE
    default:
      return state
  }
}
