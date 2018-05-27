import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { func, number } from 'prop-types'
import { trocarEtapa, etapaCompleta, selecionarFuncionarios } from '../../__store__/index.actions'
import ControladorNumero from '../controladorNumero'
import Button, { TYPE_PREORDER } from '../button'

SelecionarFuncionariosComponent.propTypes = {
  etapaCompleta: func.isRequired,
  funcionarios: number.isRequired,
  menorLimite: number.isRequired,
  selecionarFuncionarios: func.isRequired,
  trocarEtapa: func.isRequired,
}

function SelecionarFuncionariosComponent( { menorLimite, selecionarFuncionarios, funcionarios, etapaCompleta, trocarEtapa } ) {
  return (
    <Fragment>
      <p className={ `selecionar-modelo__text` }>{ `Quantos funcionários utilizarão os Funcionarios?` }</p>
      <p className={ `passos__text` }>{ `30 funcionários inclusos por unidade. R$ 0,90 ao mês por funcionário adicional.` }</p>
      <ControladorNumero
        handleNumero={ selecionarFuncionarios }
        menorLimite={ menorLimite }
        numero={ funcionarios }
      />
      <Button
        onClick={ () => {
          etapaCompleta( 4 )
          trocarEtapa( 5 )
        } }
        text={ `Continuar` }
        type={ TYPE_PREORDER }
      />
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    menorLimite: state.tiquetaques * 30,
    funcionarios: state.funcionarios,
  }
}

const SelecionarFuncionarios = connect(
  mapStateToProps,
  { selecionarFuncionarios, etapaCompleta, trocarEtapa }
)( SelecionarFuncionariosComponent )

export default SelecionarFuncionarios
