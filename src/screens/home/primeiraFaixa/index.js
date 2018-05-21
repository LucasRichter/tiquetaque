import React from 'react'
import Button, { TYPE_GRADIENT } from '../../../components/button'
import { scrollTo } from '../../../utils/scroll'
import { CLASS_TIQUE_TAQUE } from '../../../utils/constants'

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
        <Button
          text={ `Reserve o seu` }
          to={ `/preorder` }
          type={ TYPE_GRADIENT }
        />
        <div
          className={ `home__section__descubra` }
          onClick={ () => scrollTo( CLASS_TIQUE_TAQUE ) }
        >
          <p>{`Descubra tudo sobre o TiqueTaque`}</p>
          <img src={ require( 'images/icons/seta-baixo.svg' ) } />
        </div>
      </div>
    </section>
  )
}
