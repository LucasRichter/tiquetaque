import React from 'react'
import PreorderShell from '../../../components/preorderShell'
import SelecionarPlano from '../../../components/selecionarPlano'

export default function passo2() {
  return (
    <section className={ `passo-2` }>
      <PreorderShell>
        <SelecionarPlano />
      </PreorderShell>
    </section>
  )
}
