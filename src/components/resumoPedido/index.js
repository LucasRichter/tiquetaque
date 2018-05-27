import React from 'react'
import { string, any } from 'prop-types'
import { connect } from 'react-redux'
import { PLANOS } from '../../utils/constants'
import { getValorTotal } from '../../__store__/index.reducer'
import isMobile from '../../utils/device'
import InfosDesktop from './infosDesktop'
import $ from 'jquery'

let lastScrollTop = 0

class ResumoPedidoComponent extends React.Component {
  static propTypes = {
    texto: string.isRequired,
    valor: any,
  }

  static defaultProps = {
    valor: 0
  }

  constructor( props ) {
    super( props )
  }

  componentDidMount() {
    let container = this.container
    isMobile() && $( document ).on( 'scroll', function() {
      let st = $( this ).scrollTop()
      container[ st > lastScrollTop ? 'removeClass' : 'addClass' ]( 'fixed ' )
      lastScrollTop = st
    } )
  }

  render() {
    const { valor, texto } = this.props
    return (
      <section
        className={ `resumo-pedido` }
        ref={ ref => this.container = $( ref ) }
      >
        { !isMobile() && <InfosDesktop /> }
        <div className={ `resumo-pedido__block-valor` }>
          <p className={ `resumo-pedido__text` }>{ `Valor final` }</p>
          <p className={ `resumo-pedido__valor` }>
            { `R$ ${valor.toString().replace( '.', ',' )}` }
            <span>
              { `/${texto}`}
            </span>
          </p>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  let ultimaEtapaCompleta = state.ultimaEtapaCompleta
  let modelo = state.modelo
  let texto = ultimaEtapaCompleta === 1 ? 'mês no plano anual' : 'mês'
  let valor = ultimaEtapaCompleta === 1 ? PLANOS[ 'anual' ][ modelo.tipo ].toFixed( 2 ) : getValorTotal( state )
  return {
    texto,
    valor,
  }
}

const ResumoPedido = connect(
  mapStateToProps
)( ResumoPedidoComponent )

export default ResumoPedido
