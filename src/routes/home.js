import { Route } from 'react-router-dom'
import Home from '../screens/home'
import React from 'react'

export default function HomeRoute() {
  return (
    <Route
      component={ Home }
      path="/"
    />
  )
}
