import React from 'react'
import Logo from '../logo'
import { scrollTo } from '../../utils/scroll'
import { CLASS_TIQUE_TAQUE, CLASS_PLANOS, CLASS_DUVIDAS } from '../../utils/constants'

const LINKS = [
  {
    texto: 'O TiqueTaque',
    to: CLASS_TIQUE_TAQUE
  },
  {
    texto: 'Planos',
    to: CLASS_PLANOS
  },
  {
    texto: 'Perguntas Frequentes',
    to: CLASS_DUVIDAS
  }
]

export default function Header() {
  const linksViews = LINKS.map( link => (
    <div
      className={ `nav__item-wrapper` }
      key={ link.to }
      onClick={ () => scrollTo( link.to ) }
    >
      <a className={ `nav__item` } >
        { link.texto }
      </a>
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
