import React from 'react'
import { string, number } from 'prop-types'
import { connect } from 'react-redux'
import { PLANOS } from '../../utils/constants'
import { getValorTotal } from '../../__store__/index.reducer'

ResumoPedidoComponent.propTypes = {
  texto: string.isRequired,
  valor: number,
}

ResumoPedidoComponent.defaultProps = {
  valor: 0
}

function ResumoPedidoComponent( { valor, texto } ) {
  return (
    <section className={ `resumo-pedido` }>
      <p className={ `resumo-pedido__text` }>{ `Valor final` }</p>
      <p className={ `resumo-pedido__valor` }>
        { `R$ ${valor.toString().replace( '.', ',' )}` }
        <span>
          { `/${texto}`}
        </span>
      </p>
    </section>
  )
}

const mapStateToProps = state => {
  let ultimaEtapaCompleta = state.ultimaEtapaCompleta
  let modelo = state.modelo
  let texto = ultimaEtapaCompleta === 1 ? 'mês no plano anual' : 'mês'
  let valor = ultimaEtapaCompleta === 1 ? PLANOS[ 'anual' ][ modelo.tipo ].toFixed( 2 ) : getValorTotal( state )
  return {
    texto,
    valor
  }
}

const ResumoPedido = connect(
  mapStateToProps
)( ResumoPedidoComponent )

export default ResumoPedido
