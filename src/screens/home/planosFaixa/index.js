import React from 'react'
import PlanosInfos from './planosInfos'

export default function PlanosFaixa() {
  return (
    <section className={ `planos` } >
      <h2 className={ `home__title` }>{ `Qual o plano ideal para sua empresa?` }</h2>
      <PlanosInfos />
    </section>
  )
}
