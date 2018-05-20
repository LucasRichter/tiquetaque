import React from 'react'

export default function tiqueTaqueFaixa() {
  return (
    <section className={ `home__tique-taque` }>
      <div className={ `home__tique-taque__info` }>
        <h2 className={ `home__tique-taque__title` }>
          {`Controle total`}
        </h2>
        <p className={ `home__tique-taque__text` }>
          {`Jornada diária, horas extras, adicional noturno e fechamento da folha de ponto. Tudo em tempo real e com fácil acesso.`}
        </p>
        <img
          alt={ `Digital` }
          className={ `home__tique-taque__img-left` }
          src={ require( `images/home/digital.png` ) }
        />
      </div>
      <img
        alt={ `Tique Taque` }
        src={ require( `images/home/tique-taque.png` ) }
      />
      <div className={ `home__tique-taque__info` }>
        <img
          alt={ `Luminaria` }
          className={ `home__tique-taque__img-right` }
          src={ require( `images/home/luminaria.png` ) }
        />
        <h2 className={ `home__tique-taque__title` }>
          {`Do básico ao sofisticado`}
        </h2>
        <p className={ `home__tique-taque__text` }>
          {`Organiza o controle de ponto ao mesmo tempo que fornece informações gerenciais e de controle.`}
        </p>
      </div>
    </section>
  )
}
