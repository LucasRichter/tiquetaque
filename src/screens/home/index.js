import React, { Fragment, Component } from 'react'

import Header from '../../components/header'
import PrimeiraFaixa from './primeiraFaixa'
import TiqueTaqueFaixa from './tiqueTaqueFaixa'
import OrganizacaoFaixa from './organizacaoFaixa'
import AppFaixa from './appFaixa'
import PlanosFaixa from './planosFaixa'
import EnviarEmailFaixa from './enviarEmailFaixa'
//import Clientes from '../../components/clientes'
//import Duvidas from '../../components/duvidas'
import ContatoFaixa from './contatoFaixa'
import Footer from '../../components/footer'
import isMobile from '../../utils/device'

export default class Home extends Component {
  constructor( props ) {
    super( props )
  }

  componentWillMount() {
    window.onscroll = function() {
      if ( isMobile() ) {
        return
      }
      if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        document.body.classList.add( 'scroll' )
      } else {
        document.body.classList.remove( 'scroll' )
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PrimeiraFaixa />
        <TiqueTaqueFaixa />
        <OrganizacaoFaixa />
        <AppFaixa />
        <PlanosFaixa />
        <EnviarEmailFaixa />
        { !isMobile() &&
          <img
            className={ `home__prints` }
            src={ require( '../../images/home/prints.png' ) }
          />
        }
        <ContatoFaixa />
        <Footer />
      </Fragment>
    )
  }
}
