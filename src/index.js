import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import preorder from './__store__/index.reducer'
import HomeRoute from './routes/home'
import PreorderRoute from './routes/preorder'
import ObrigadoRoute from './routes/obrigado'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

require( 'scss/main.scss' )
require( 'images/core/favicon.ico' )

const store = createStore(
  preorder,
  composeEnhancers( applyMiddleware(
    thunkMiddleware,
  ) )
)

firebase.initializeApp( {
  apiKey: 'AIzaSyCDyEeKM-h_h68C08LgqV-KVnkuj4S_I1A',
  authDomain: 'tique-taque-dados.firebaseapp.com',
  databaseURL: 'https://tique-taque-dados.firebaseio.com',
  projectId: 'tique-taque-dados',
  storageBucket: '',
  messagingSenderId: '826396630468'
} )

render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        { HomeRoute() }
        { PreorderRoute() }
        { ObrigadoRoute() }
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById( 'app' )
)
