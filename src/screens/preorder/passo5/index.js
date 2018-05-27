import React from 'react'
import PreorderShell from '../../../components/preorderShell'
import Button, { TYPE_FORM } from '../../../components/button'
import ReceberNovidades from '../../../components/receberNovidades'
import DadosForm from '../../../components/dadosForm'
import EnderecoForm from '../../../components/EnderecoForm'

export default function passo5() {
  return (
    <section className={ `passo-5` }>
      <PreorderShell>
        <DadosForm />
        <EnderecoForm />
        <ReceberNovidades />
        <p className={ `passos__finalizar-text` }>
          { `Ao finalizar a reserva, você concorda com nossos ` }
          <a
            href={ `/termos-de-uso` }
            target={ `_blank` }
          >
            { `Termos de uso.` }
          </a>
        </p>
        <Button
          onClick={ () => {} }
          text={ `Finalizar reserva` }
          type={ TYPE_FORM }
        />
      </PreorderShell>
    </section>
  )
}
