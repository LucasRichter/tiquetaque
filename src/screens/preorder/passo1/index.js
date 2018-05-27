import React from 'react'
import Logo from '../../../components/logo'
import PreorderShell from '../../../components/preorderShell'
import SelecionarModelo from '../../../components/selecionarModelo'
import isMobile from '../../../utils/device'

export default function passo1() {
  return (
    <section className={ `passo-1 visible` }>
      { isMobile() && <Logo /> }
      <h1 className={ `passos__title` }>{ `Reserve seu TiqueTaque` }</h1>
      <p className={ `passos__text` }>{ `O TiqueTaque será lançado em breve, mas em quantidades limitadas. Faça sua reserva e garanta as unidades da sua empresa. Não é necessário fazer o pagamento agora.` }</p>
      <PreorderShell>
        <SelecionarModelo />
      </PreorderShell>
    </section>
  )
}
