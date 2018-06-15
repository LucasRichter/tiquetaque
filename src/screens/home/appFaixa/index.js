import React from 'react'

//TODO Adicionar Links do app
const LINK_APP_STORE = ''
const LINK_PLAY_STORE = ''
//END TODO

export default function AppFaixa() {
  return (
    <section className={ `home__app` }>
      <div className={ `home__app__wrapper` }>
        <img
          alt={ `App TiqueTaque` }
          className={ `home__app__img` }
          src={ require( `images/home/app.png` ) }
        />
        <div className={ `home__app__infos` }>
          <img
            className={ `home__app__cracha` }
            src={ require( `images/home/cracha.svg` ) }
          />
          <h2 className={ `home__title` }>
            {`App do funcionário`}
          </h2>
          <p className={ `home__app__text` }>
            {`Baixe o App Funcionário TiqueTaque e faça registros de ponto manuais, controle seu tempo de intervalo com o timer e monitore todos os seus registros de ponto, faltas e atrasos.`}
          </p>
          <div className={ `home__app__links` }>
            <a
              href={ LINK_PLAY_STORE }
              target={ `_blank` }
            >
              <img
                alt={ `Googleplay link` }
                src={ require( `images/home/playstore.png` ) }
              />
            </a>
            <a
              href={ LINK_APP_STORE }
              target={ `_blank` }
            >
              <img
                alt={ `Appstore link` }
                src={ require( `images/home/appstore.png` ) }
              />
            </a>
          </div>
        </div>
      </div>
      <img
        className={ `home__app__bg` }
        src={ require( `images/home/bg-app.svg` ) }
      />
    </section>
  )
}
