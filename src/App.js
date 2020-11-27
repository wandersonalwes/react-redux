import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import store, { persistor } from './store'

import { PersistGate } from 'redux-persist/integration/react'
import Routes from './routes'

export default function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <ToastContainer />
      </PersistGate>
    </Provider>
  )
}
