import React, { Component } from 'react'
import { number, object } from 'prop-types'
import { connect } from 'react-redux'
import Passo1 from './passo1'
import Passo2 from './passo2'
import Passo3 from './passo3'
import Passo4 from './passo4'
import Passo5 from './passo5'
import { scrollTo, isInViewport } from '../../utils/scroll'
import ResumoPedido from '../../components/resumoPedido'
import isMobile from '../../utils/device'
import $ from 'jquery'


class PreorderScreen extends Component {
  static propTypes = {
    etapaAtual: number.isRequired,
    history: object.isRequired,
    ultimaEtapaCompleta: number.isRequired,
  }

  constructor( props ) {
    super( props )
  }

  componentDidMount() {
    setTimeout( () => window.scrollTo( 0, 0 ), .1 )
    $( isMobile() ? window : this.mainContainer ).scroll( () => {
      for ( let i = 1; i <= this.getEtapas().length; i++ ) {
        let passo = $( `.passo-${i}` )
        if ( passo.length ) {
          let isVisible = isInViewport( passo )
          passo[ isVisible ? `addClass` : `removeClass` ]( 'visible' )
        }
      }
    } )
  }

  componentWillReceiveProps( nextProps ) {
    const { etapaAtual } = nextProps
    this.setState( { etapaAtual }, () => {
      if ( isMobile() ) {
        scrollTo( `passo-${etapaAtual}` )
      } else {
        let el = $( `.passo-${etapaAtual}` )
        let container = $( this.mainContainer )
        container.animate( {
          scrollTop: container.prop( 'scrollHeight' ) - el.height()
        }, 500 )
      }
    } )
  }

  getEtapas() {
    return [
      <Passo1 key={ 1 } />,
      <Passo2 key={ 2 } />,
      <Passo3 key={ 3 } />,
      <Passo4 key={ 4 } />,
      <Passo5
        history={ this.props.history }
        key={ 5 }
      />,
    ]
  }

  render() {
    const { ultimaEtapaCompleta } = this.props

    return (
      <section className={ `main` }>
        <section
          className={ `preorder` }
          ref={ ref => this.mainContainer = ref }
        >
          { this.getEtapas().slice( 0, ultimaEtapaCompleta + 1 ) }
        </section>
        { ( !isMobile() || ( isMobile() && ultimaEtapaCompleta !== 0 ) ) && <ResumoPedido /> }
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    etapaAtual: state.etapaAtual,
    ultimaEtapaCompleta: state.ultimaEtapaCompleta
  }
}

const Preorder = connect(
  mapStateToProps
)( PreorderScreen )

export default Preorder

