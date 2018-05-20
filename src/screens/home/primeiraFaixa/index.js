import React from 'react'
import { Link } from 'react-router-dom'

export default function primeiraFaixa() {
  return (
    <section className={ `home__section-first` }>
      <div className={ `home__section__wrapper` }>
        <div className={ `home__section__title` }>
          <h1>{`Chegamos na hora certa`}</h1>
        </div>
        <div className={ `home__section__text` }>
          <p>{`A solução de ponto simples e conectada para você ter mais dados e menos trabalho.`}</p>
        </div>
        <Link
          className={ `button--gradient` }
          to={ `/preorder` }
        >
          {`Reserve o seu`}
        </Link>
        <div className={ `home__section__descubra` }>
          <p>{`Descubra tudo sobre o TiqueTaque`}</p>
          <img src={ require( 'images/icons/seta-baixo.svg' ) } />
        </div>
      </div>
    </section>
  )
}
