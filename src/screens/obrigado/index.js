import React from 'react'
import Logo from '../../components/logo'
import { Link } from 'react-router-dom'

const REDES_SOCIAIS = [
  {
    rede: 'twitter',
    link: '',
    tag: 'a'
  },
  {
    rede: 'mail',
    link: 'https://www.linkedin.com/company/tiquetaque/',
    tag: 'a'
  },
  {
    rede: 'mail',
    tag: 'i'
  }
]

export default function Obrigado() {
  let redesSociaisView = REDES_SOCIAIS.map( r => (
    <r.tag
      href={ r.link ? r.link : '' }
      key={ r.rede }
      target={ r.link ? `_blank` : '' }
    >
      <img
        alt={ r.rede }
        src={ require( `./images/${r.rede}-rede.svg` ) }
      />
    </r.tag>
  ) )

  return (
    <section className={ `obrigado` }>
      <Logo />
      <div className={ `obrigado__block` }>
        <div>
          <img
            className={ `obrigado__check` }
            src={ require( './images/check-obrigado.svg' ) }
          />
          <div className={ `obrigado__texts` }>
            <h1 className={ `obrigado__title` }>{ `Sua reserva foi realizada com sucesso.` }</h1>
            <p className={ `obrigado__text` }>{ `Quando o TiqueTaque estiver pronto para entrega, entraremos em contato para confirmar seus dados e finalizar o pagamento. Até lá!` }</p>
            <div className={ `obrigado__redes` }>
              { redesSociaisView }
            </div>
            <Link
              className={ `obrigado__link` }
              to={ `/` }
            >
              { `Voltar para o site ` }
            </Link>
          </div>
        </div>
        <img
          className={ `obrigado__img` }
          src={ require( './images/ilustra.png' ) }
        />
      </div>
      <img
        className={ `obrigado__bg` }
        src={ require( './images/obrigado-bg.png' ) }
      />
    </section>
  )
}
