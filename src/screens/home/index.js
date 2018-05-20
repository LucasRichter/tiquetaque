import React from 'react'

import Header from '../../components/header'
import PrimeiraFaixa from './primeiraFaixa'
import TiqueTaqueFaixa from './tiqueTaqueFaixa'
import OrganizacaoFaixa from './organizacaoFaixa'
import AppFaixa from './appFaixa'
import SemFidelidadeFaixa from './semFidelidadeFaixa'
import Clientes from '../../components/clientes'
import Duvidas from '../../components/duvidas'
import ContatoFaixa from './contatoFaixa'
import Footer from '../../components/footer'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <PrimeiraFaixa />
      <TiqueTaqueFaixa />
      <OrganizacaoFaixa />
      <AppFaixa />
      <SemFidelidadeFaixa />
      <Clientes />
      <Duvidas />
      <ContatoFaixa />
      <Footer />
    </React.Fragment>
  )
}
