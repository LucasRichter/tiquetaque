import { Route } from 'react-router-dom'
import Obrigado from '../screens/obrigado'
import React from 'react'

export default function ObrigadoRoute() {
  return (
    <Route
      component={ Obrigado }
      path="/obrigado"
    />
  )
}
