import React from 'react'
import { connect } from 'react-redux'
import { string, func } from 'prop-types'
import Input from '../input'
import { TYPE_TEXT, TYPE_EMAIL, TYPE_NUMBER } from '../input/types'
import DadosModel from '../../utils/models/DadosModel'
import FactoryHelper from '../../utils/FactoryHelper'
import RadioButtonsGroup from '../radioButtonGroup'
import { capitalize } from '../../utils/formatters'
import { TIPOS_PESSOAS } from '../../utils/constants'
import { selecionarTipoPessoa } from '../../__store__/index.actions'

class DadosFormComponent extends React.Component {
  static propTypes = {
    selecionarTipoPessoa: func.isRequired,
    tipoPessoa: string.isRequired,
  }
  constructor( props ) {
    super( props )

    this.state = {
      dados: DadosModel(),
    }
  }

  update( value ) {
    let dados = FactoryHelper.assign( DadosModel, this.state.dados, value )
    this.setState( { dados } )
  }

  handleNome( e ) {
    this.update( { nome: e.target.value } )
  }

  handleEmail( e ) {
    this.update( { email: e.target.value.trim() } )
  }

  handleTelefone( e ) {
    this.update( { telefone: e.target.value } )
  }

  handleCpf( e ) {
    this.update( { cpf: e.target.value } )
  }

  handleCnpj( e ) {
    this.update( { cnpj: e.target.value } )
  }

  validate( fn ) {
    fn()
    let dados = FactoryHelper.clone( DadosModel, this.state.dados )
    this.setState( { dados } )
  }

  validateCpf() {
    this.validate( this.state.dados.validateCpf )
  }

  validateCnpj() {
    this.validate( this.state.dados.validateCnpj )
  }

  validateEmail() {
    this.validate( this.state.dados.email )
  }

  validateTelefone() {
    this.validate( this.state.dados.validateTelefone )
  }

  getRadioButtons() {
    return TIPOS_PESSOAS.map( pessoa => {
      return {
        id: pessoa,
        content: ( <p>{ pessoa }</p> )
      }
    } )
  }

  handleTipoPessoa( tipoPessoa ) {
    const { selecionarTipoPessoa } = this.props
    selecionarTipoPessoa( tipoPessoa )
  }

  render() {
    const { tipoPessoa } = this.props
    const { dados } = this.state
    return (
      <React.Fragment>
        <p className={ `selecionar-modelo__text` }>{ `Seus dados` }</p>
        <p className={ `passos__text` }>{ `Para finalizar, preencha seus dados. Você será avisado quando o TiqueTaque estiver pronto para entrega.` }</p>
        <Input
          fieldName={ `Nome Completo` }
          onChange={ this.handleNome.bind( this ) }
          type={ TYPE_TEXT }
          value={ dados.nome }
        />
        <Input
          fieldName={ `E-mail` }
          onBlue={ this.validateEmail.bind( this ) }
          onChange={ this.handleEmail.bind( this ) }
          type={ TYPE_EMAIL }
          value={ dados.email }
        />
        <Input
          fieldName={ `Telefone` }
          onChange={ this.handleTelefone.bind( this ) }
          type={ TYPE_NUMBER }
          value={ dados.telefone }
        />
        <RadioButtonsGroup
          onSelect={ this.handleTipoPessoa.bind( this ) }
          options={ this.getRadioButtons() }
          radioGroupName={ 'pessoa' }
          selected={ tipoPessoa }
        />
        <Input
          fieldName={ tipoPessoa }
          onBlur={ this[ `validate${capitalize( tipoPessoa )}` ].bind( this ) }
          onChange={ this[ `handle${capitalize( tipoPessoa )}` ].bind( this ) }
          type={ TYPE_NUMBER }
          value={ dados[ tipoPessoa.toLowerCase() ] }
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    tipoPessoa: state.tipoPessoa,
  }
}

const DadosForm = connect(
  mapStateToProps,
  { selecionarTipoPessoa }
)( DadosFormComponent )

export default DadosForm
