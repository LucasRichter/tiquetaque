import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../logo'

const LINKS = [
  {
    texto: 'Termos de Uso',
    href: '/termos-de-uso'
  },
  {
    texto: 'Política de Privacidade',
    href: '/poltica-de-privacidade'
  },
]

const REDES_SOCIAIS = [
  {
    rede: 'facebook',
    link: ''
  },
  {
    rede: 'instagram',
    link: '',
  },
  {
    rede: 'twitter',
    link: ''
  }
]

export default function Footer() {
  let linksView = LINKS.map( link => (
    <Link
      className={ `nav__item` }
      key={ link.href }
      to={ link.href }
    >
      { link.texto }
    </Link>
  ) )

  let redesSociaisView = REDES_SOCIAIS.map( r => (
    <a
      href={ r.link }
      key={ r.rede }
      target={ `_blank` }
    >
      <img
        alt={ r.rede }
        src={ require( `images/icons/${r.rede}.svg` ) }
      />
    </a>
  ) )

  return (
    <footer className={ `footer` }>
      <div className={ `footer__links` }>
        <Logo />
        <div className={ `footer__links__block` }>
          { linksView }
        </div>
      </div>
      <div className={ `footer__redes-sociais` }>
        <div className={ `footer__redes-sociais__block` }>
          { redesSociaisView }
        </div>
        <p className={ `footer__copyright` }>
          {`© 2018 Todos os direitos reservados.`}
        </p>
      </div>
    </footer>
  )
}
