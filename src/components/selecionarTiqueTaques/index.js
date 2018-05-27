import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { func, number } from 'prop-types'
import { trocarEtapa, etapaCompleta, selecionarTiqueTaques } from '../../__store__/index.actions'
import { PLANOS } from '../../utils/constants'
import ControladorNumero from '../controladorNumero'
import Button, { TYPE_PREORDER } from '../button'

SelecionarTiqueTaquesComponents.propTypes = {
  etapaCompleta: func.isRequired,
  selecionarTiqueTaques: func.isRequired,
  tiquetaques: number.isRequired,
  trocarEtapa: func.isRequired,
  valorPlanoEscolhido: number.isRequired,
}

function SelecionarTiqueTaquesComponents( { selecionarTiqueTaques, tiquetaques, valorPlanoEscolhido, etapaCompleta, trocarEtapa } ) {
  return (
    <Fragment>
      <p className={ `selecionar-modelo__text` }>{ `Quantos TiqueTaques você quer?` }</p>
      <p className={ `passos__text` }>{ `Cada unidade sair por R$ ${valorPlanoEscolhido} ao mês no plano escolhido.` }</p>
      <ControladorNumero
        handleNumero={ selecionarTiqueTaques }
        numero={ tiquetaques }
      />
      <Button
        onClick={ () => {
          etapaCompleta( 3 )
          trocarEtapa( 4 )
        } }
        text={ `Continuar` }
        type={ TYPE_PREORDER }
      />
    </Fragment>
  )
}

const mapStateToProps = state => {
  let modelo = state.modelo
  return {
    valorPlanoEscolhido: PLANOS[ modelo.plano ][ modelo.tipo ],
    tiquetaques: state.tiquetaques,
  }
}

const SelecionarPlano = connect(
  mapStateToProps,
  { selecionarTiqueTaques, etapaCompleta, trocarEtapa }
)( SelecionarTiqueTaquesComponents )

export default SelecionarPlano
