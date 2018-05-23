import React from 'react'
import { string } from 'prop-types'

export default class Duvida extends React.Component {
  static propTypes = {
    resposta: string.isRequired,
    titulo: string.isRequired,
  }

  constructor( props ) {
    super( props )

    this.state = {
      aberto: false,
    }
  }

  verDuvida() {
    const { aberto } = this.state
    this.setState( { aberto: !aberto } )
  }

  render() {
    const { resposta, titulo } = this.props
    const { aberto } = this.state

    return (
      <div className={ `duvida${aberto ? '--aberto' : ''}` } >
        <div
          className={ `duvida__header` }
          onClick={ this.verDuvida.bind( this ) }
        >
          <p>{ titulo }</p>
          <img
            className={ `duvida__seta` }
            src={ require( './images/seta-baixo-branco.svg' ) }
          />
        </div>
        <div className={ `duvida__body` }>
          { resposta.split( ';' ).map( linha => (
            <p
              key={ linha }
            >
              { linha }
            </p>
          ) ) }
        </div>
      </div>
    )
  }
}
