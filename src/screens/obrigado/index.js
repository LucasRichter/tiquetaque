import React from 'react'
import Logo from '../../components/logo'
import { Link } from 'react-router-dom'

export default function Obrigado() {
  return (
    <section className={ `obrigado` }>
      <Logo />
      <h1 className={ `obrigado__title` }>{ `Sua reserva foi realizada com sucesso.` }</h1>
      <p className={ `obrigado__text` }>{ `Quando o TiqueTaque estiver pronto para entrega, entraremos em contato para confirmar seus dados e finalizar o pagamento. Até lá!` }</p>
      <Link
        className={ `obrigado__link` }
        to={ `/` }
      >
        { `Voltar para o site ` }
      </Link>
    </section>
  )
}
