import { Route } from 'react-router-dom'
import Preorder from '../screens/preorder'
import React from 'react'

export default function PreorderRoute() {
  return (
    <Route
      component={ Preorder }
      path="/preorder"
    />
  )
}
