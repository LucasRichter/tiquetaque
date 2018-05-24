import React from 'react'
import Logo from '../../../components/logo'
import PreorderShell from '../../../components/preorderShell'
import SelecionarModelo from '../../../components/selecionarModelo'
import isMobile from '../../../utils/device'

export default function passo1() {
  return (
    <section className={ `passo-1` }>
      { isMobile() && <Logo /> }
      <h1 className={ `passo-1__title` }>{ `Reserve seu TiqueTaque` }</h1>
      <p className={ `passo-1__text` }>{ `O TiqueTaque será lançado em breve, mas em quantidades limitadas. Faça sua reserva e garanta as unidades da sua empresa. Não é necessário fazer o pagamento agora.` }</p>
      <PreorderShell>
        <SelecionarModelo />
      </PreorderShell>
    </section>
  )
}
