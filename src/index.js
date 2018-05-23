import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import preorder from './__store__/index.reducer'
import HomeRoute from './routes/home'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

require( 'scss/main.scss' )
require( 'images/core/favicon.ico' )

const store = createStore(
  preorder,
  composeEnhancers( applyMiddleware(
    thunkMiddleware,
  ) )
)

render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        { HomeRoute() }
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById( 'app' )
)
