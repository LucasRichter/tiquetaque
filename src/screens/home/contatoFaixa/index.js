import React from 'react'

import ContatoForm from './contatoForm'

export default function ContatoFaixa() {
  return (
    <section className={ `form` }>
      <h2 className={ `home__title` }>
        {`Fale com a gente`}
      </h2>
      <div className={ `form__infos` }>
        <ContatoForm />
        <img
          src={ require( `images/form/ilustra.png` ) }
        />
      </div>
    </section>
  )
}
