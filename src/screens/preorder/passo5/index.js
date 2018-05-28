import React from 'react'
import { connect } from 'react-redux'
import { func, string } from 'prop-types'
import PreorderShell from '../../../components/preorderShell'
import Button, { TYPE_FORM } from '../../../components/button'
import ReceberNovidades from '../../../components/receberNovidades'
import DadosForm from '../../../components/dadosForm'
import EnderecoForm from '../../../components/EnderecoForm'
import { objToArray } from '../../../utils/formatters'
import { salvarPreorder } from '../../../__store__/index.actions'
import { CNPJ, CPF } from '../../../utils/constants'

class passo5 extends React.Component {
  static propTypes = {
    salvarPreorder: func.isRequired,
    tipoPessoa: string.isRequired
  }
  constructor( props ) {
    super( props )

    this.state = {
      endereco: undefined,
      dados: undefined,
    }
  }

  setEndereco( endereco ) {
    this.setState( { endereco } )
  }

  setDados( dados ) {
    this.setState( { dados } )
  }

  isValidDados() {
    const { dados } = this.state
    const { tipoPessoa } = this.props

    const isValidCnpj = tipoPessoa === CNPJ && !dados.errors.cnpj && dados.cnpj
    const isValidCpf = tipoPessoa === CPF && !dados.errors.cpf && dados.cpf

    return dados.isValid && ( isValidCnpj || isValidCpf )
  }

  render() {
    return (
      <section className={ `passo-5` }>
        <PreorderShell>
          <DadosForm setModel={ this.setDados.bind( this ) } />
          <EnderecoForm setModel={ this.setEndereco.bind( this ) } />
          <ReceberNovidades />
          <p className={ `passos__finalizar-text` }>
            { `Ao finalizar a reserva, você concorda com nossos ` }
            <a
              href={ `/termos-de-uso` }
              target={ `_blank` }
            >
              { `Termos de uso.` }
            </a>
          </p>
          <Button
            onClick={ () => {
              const { endereco, dados } = this.state
              const { salvarPreorder } = this.props

              if ( endereco && dados ) {
                endereco.validate()
                dados.validate()

                if ( endereco.isValid && this.isValidDados() ) {
                  const { tipoPessoa } = this.props
                  let newDados = Object.assign( {}, dados.toServer() )
                  delete newDados[ tipoPessoa === CNPJ ? 'cpf' : 'cnpj' ]
                  salvarPreorder( { endereco: endereco.toServer(), dados: newDados } )
                } else {
                  alert( objToArray( endereco.errors ).join( '\n' ) + objToArray( dados.errors ).join( '\n' ) )
                }
              } else {
                alert( 'Preencha seus dados, por favor!' )
              }
            } }
            text={ `Finalizar reserva` }
            type={ TYPE_FORM }
          />
        </PreorderShell>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    tipoPessoa: state.tipoPessoa
  }
}

const Passo5 = connect(
  mapStateToProps,
  { salvarPreorder }
)( passo5 )

export default Passo5
