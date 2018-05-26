import React from 'react'
import PreorderShell from '../../../components/preorderShell'
import SelecionarFuncionarios from '../../../components/selecionarFuncionarios'

export default function passo3() {
  return (
    <section className={ `passo-4` }>
      <PreorderShell>
        <SelecionarFuncionarios />
      </PreorderShell>
    </section>
  )
}
