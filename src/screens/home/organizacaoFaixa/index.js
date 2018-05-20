import React from 'react'

const LIST = [
  'Saiba quem está na empresa, quem atrasou, quem está fazendo hora extra.',
  'Organiza o controle de ponto ao mesmo tempo que fornece informações gerenciais e de controle.',
  'O cálculo da Folha de Ponto é automático para um fechamento fácil. Inconsistências são avisadas por notificação.'
]

export default function OrganizacaoFaixa() {
  const listView = LIST.map( text => (
    <div
      className={ `home__organizacao__list__item` }
      key={ text }
    >
      <img src={ require( `images/icons/check.svg` ) } />
      <p>{ text }</p>
    </div>
  ) )
  return (
    <section className={ `home__organizacao` }>
      <div className={ `home__organizacao__wrapper` }>
        <h2 className={ `home__title` }>
          {`Organização e inteligência de uma ponta à outra`}
        </h2>
        <div className={ `home__organizacao__infos` }>
          <div className={ `home__organizacao__list` }>
            { listView }
          </div>
          <img
            className={ `home__organizacao__img-horas` }
            src={ require( `images/home/card-horas-extra.png` ) }
          />
          <img
            className={ `home__organizacao__img-jornada` }
            src={ require( `images/home/card-jornada.png` ) }
          />
        </div>
      </div>
      <img
        className={ `home__organizacao__bg` }
        src={ require( `images/home/bg-organizacao.svg` ) }
      />
    </section>
  )
}
