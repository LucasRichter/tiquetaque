import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo'

const LINKS = [
  {
    texto: 'O TiqueTaque',
    href: '/'
  },
  {
    texto: 'Planos',
    href: '/planos'
  },
  {
    texto: 'Perguntas Frequentes',
    href: '/perguntas-frequentes'
  }
]

export default function Header() {
  const linksViews = LINKS.map( link => (
    <div
      className={ `nav__item-wrapper` }
      key={ link.href }
    >
      <Link
        className={ `nav__item` }
        to={ link.href }
      >
        { link.texto }
      </Link>
    </div>
  ) )
  return (
    <header className={ `header` }>
      <div className={ `header__container` }>
        <Logo />
      </div>
      <nav className={ `nav` }>
        <div className={ `nav__container` }>
          { linksViews }
        </div>
      </nav>
    </header>
  )
}
