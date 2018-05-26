import React, { Component } from 'react'
import { number } from 'prop-types'
import { connect } from 'react-redux'
import Passo1 from './passo1'
import Passo2 from './passo2'
import Passo3 from './passo3'
import Passo4 from './passo4'
import { scrollTo } from '../../utils/scroll'
import ResumoPedido from '../../components/resumoPedido'
import isMobile from '../../utils/device'

const ETAPAS = [
  <Passo1 key={ 1 } />,
  <Passo2 key={ 2 } />,
  <Passo3 key={ 3 } />,
  <Passo4 key={ 4 } />,
]

class PreorderScreen extends Component {
  static propTypes = {
    etapaAtual: number.isRequired,
    ultimaEtapaCompleta: number.isRequired,
  }

  constructor( props ) {
    super( props )
  }

  componentDidMount() {
    setTimeout( () => window.scrollTo( 0, 0 ), .1 )
  }

  componentWillReceiveProps( nextProps ) {
    const { etapaAtual } = nextProps
    this.setState( { etapaAtual }, () => scrollTo( `passo-${etapaAtual}` ) )
  }

  render() {
    const { ultimaEtapaCompleta } = this.props

    return (
      <React.Fragment>
        <section className={ `preorder` }>
          { ETAPAS.slice( 0, ultimaEtapaCompleta + 1 ) }
        </section>
        { isMobile() && ultimaEtapaCompleta !== 0 && <ResumoPedido /> }
      </React.Fragment>
    )
  }
}

ResumoPedido

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

