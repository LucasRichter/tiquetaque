import React from 'react'
import { object, number } from 'prop-types'
import { connect } from 'react-redux'
import { PLANOS } from '../../utils/constants'
import Logo from '../logo'
import { formatValor } from '../../utils/formatters'

InfosDesktopComponent.propTypes = {
  etapasCompletas: object.isRequired,
  funcionariosAdicionais: number.isRequired,
  modelo: object.isRequired,
  tiquetaques: number.isRequired,
}

InfosDesktopComponent.defaultProps = {
  valor: 0
}

function InfosDesktopComponent( { etapasCompletas, tiquetaques, modelo, funcionariosAdicionais } ) {
  const showUnidades = etapasCompletas.has( 2 )
  const showFuncionario = etapasCompletas.has( 3 )
  const valorPlanoEscolhido = modelo.tipo && PLANOS[ modelo.plano ? modelo.plano : 'anual' ][ modelo.tipo ]
  const valorTotal = showUnidades ? tiquetaques * PLANOS[ modelo.plano ][ modelo.tipo ] : valorPlanoEscolhido

  const modeloInfos = (
    <div className={ 'resumo-pedido__row' }>
      <div className={ 'resumo-pedido__info' }>
        <p>{ `TiqueTaque ${modelo.tipo}${modelo.plano ? ` - ${modelo.plano}` : ''}` }</p>
        { showUnidades && <p>{`${tiquetaques} unidades`}</p> }
      </div>
      <p className={ 'resumo-pedido__info' }>{ `R$ ${formatValor( valorTotal ? valorTotal : 0 )}` }</p>
    </div>
  )

  const funcionariosInfos = (
    <div className={ 'resumo-pedido__row' }>
      <div className={ 'resumo-pedido__info' }>
        <p>{ `${funcionariosAdicionais} funcionários adicionais` }</p>
      </div>
      <p className={ 'resumo-pedido__info' }>{ `R$ ${formatValor( funcionariosAdicionais * 0.90 )}` }</p>
    </div>
  )

  return (
    <div className={ 'resumo-pedido__main' }>
      <Logo branco />
      <div className={ 'resumo-pedido__infos' }>
        { modelo.tipo && modeloInfos }
        { showFuncionario && funcionariosAdicionais ? funcionariosInfos : undefined }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    modelo: state.modelo,
    tiquetaques: state.tiquetaques,
    funcionariosAdicionais: state.funcionarios - ( state.tiquetaques * 30 ),
    etapasCompletas: state.etapasCompletas,
  }
}

const InfosDesktop = connect(
  mapStateToProps
)( InfosDesktopComponent )

export default InfosDesktop
