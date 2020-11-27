import React from 'react'
import { useSelector } from 'react-redux'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes = () => {
  const { signed } = useSelector(state => state.auth)
  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
