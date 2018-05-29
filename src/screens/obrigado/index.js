import React from 'react'
import { connect } from 'react-redux'
import { number, func } from 'prop-types'
import Logo from '../../components/logo'
import { Link } from 'react-router-dom'
import CompartilharTiqueTaque from '../../components/compartilheTiqueTaque'
import { cleanState } from '../../__store__/index.actions'

const REDES_SOCIAIS = [
  {
    rede: 'twitter',
    link: '',
    tag: 'a'
  },
  {
    rede: 'linkedin',
    link: 'https://www.linkedin.com/company/tiquetaque/',
    tag: 'a'
  },
  {
    rede: 'mail',
    tag: 'i',
  }
]

class ObrigadoScreen extends React.Component {
  static propTypes = {
    cleanState: func.isRequired,
    ultimaEtapaCompleta: number.isRequired,
  }

  constructor( props ) {
    super( props )

    this.state = {
      showEmail: false,
    }
  }

  componentWillMount() {
    const { cleanState, ultimaEtapaCompleta } = this.props
    if ( ultimaEtapaCompleta !== 5 ) {
      window.location.pathname = '/'
    }

    cleanState()
  }

  getRedesSociaisView() {
    const { showEmail } = this.state

    const onClick = () => this.setState( { showEmail: true } )
    return REDES_SOCIAIS.map( r => (
      <r.tag
        className={ `rede${r.rede !== 'mail' && showEmail ? '--inative' : ''}` }
        href={ r.link ? r.link : '' }
        key={ r.rede }
        onClick={ r.rede === 'mail' ? () => onClick() : () => {} }
        target={ r.link ? `_blank` : '' }
      >
        <img
          alt={ r.rede }
          src={ require( `./images/${r.rede}-rede.svg` ) }
        />
      </r.tag>
    ) )
  }

  render() {
    const { showEmail } = this.state
    return (
      <section className={ `obrigado` }>
        <Logo />
        <div className={ `obrigado__block` }>
          <div>
            <img
              className={ `obrigado__check` }
              src={ require( './images/check-obrigado.svg' ) }
            />
            <div className={ `obrigado__texts` }>
              <h1 className={ `obrigado__title` }>{ `Sua reserva foi realizada com sucesso.` }</h1>
              <p className={ `obrigado__text` }>{ `Quando o TiqueTaque estiver pronto para entrega, entraremos em contato para confirmar seus dados e finalizar o pagamento. Até lá!` }</p>
              <div className={ `obrigado__redes` }>
                { this.getRedesSociaisView() }
              </div>
              { showEmail && <CompartilharTiqueTaque onCancel={ () => this.setState( { showEmail: false } ) } />}
              <Link
                className={ `obrigado__link` }
                to={ `/` }
              >
                { `Voltar para o site ` }
              </Link>
            </div>
          </div>
          <img
            className={ `obrigado__img` }
            src={ require( './images/ilustra-obrigado.png' ) }
          />
        </div>
        <img
          className={ `obrigado__bg` }
          src={ require( './images/obrigado-bg.png' ) }
        />
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    ultimaEtapaCompleta: state.ultimaEtapaCompleta
  }
}

const Obrigado = connect(
  mapStateToProps,
  { cleanState }
)( ObrigadoScreen )

export default Obrigado
