import React, { Component } from 'react'
import { number } from 'prop-types'
import { connect } from 'react-redux'
import Passo1 from './passo1'
import Passo2 from './passo2'
import { scrollTo } from '../../utils/scroll'

const ETAPAS = [
  <Passo1 key={ 1 } />,
  <Passo2 key={ 2 } />,
]

class PreorderScreen extends Component {
  static propTypes = {
    etapaAtual: number.isRequired,
  }

  constructor( props ) {
    super( props )

    this.state = {
      etapaAtual: props.etapaAtual,
    }
  }

  componentWillReceiveProps( nextProps ) {
    const { etapaAtual } = nextProps
    this.setState( { etapaAtual }, () => scrollTo( `passo-${etapaAtual}` ) )
  }

  render() {
    const { etapaAtual } = this.state
    return (
      <section className={ `preorder` }>
        { ETAPAS.slice( 0, etapaAtual ) }
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    etapaAtual: state.etapaAtual
  }
}

const Preorder = connect(
  mapStateToProps
)( PreorderScreen )

export default Preorder

