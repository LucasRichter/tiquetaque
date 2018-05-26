import React from 'react'
import PreorderShell from '../../../components/preorderShell'
import SelecionarTiqueTaques from '../../../components/selecionarTiqueTaques'

export default function passo3() {
  return (
    <section className={ `passo-3` }>
      <PreorderShell>
        <SelecionarTiqueTaques />
      </PreorderShell>
    </section>
  )
}
