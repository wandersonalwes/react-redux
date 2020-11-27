import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={SignIn} />
    </BrowserRouter>
  )
}

export default AuthRoutes
