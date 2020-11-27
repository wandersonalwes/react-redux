import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Dashboard} />
    </BrowserRouter>
  )
}

export default AppRoutes
