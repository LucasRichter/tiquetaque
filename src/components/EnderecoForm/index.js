import React from 'react'
import Input from '../input'
import { TYPE_TEXT, TYPE_NUMBER } from '../input/types'
import EnderecoModel from '../../utils/models/EnderecoModel'
import FactoryHelper from '../../utils/FactoryHelper'
import { validStates } from '../../utils/constants'
import Select from '../select'

export default class EnderecoForm extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      endereco: EnderecoModel(),
    }
  }

  update( value ) {
    let endereco = FactoryHelper.assign( EnderecoModel, this.state.endereco, value )
    this.setState( { endereco } )
  }

  handleCep( e ) {
    this.update( { cep: e.target.value } )
  }

  handleComplemento( e ) {
    this.update( { email: e.target.value } )
  }

  handleNumero( e ) {
    this.update( { telefone: e.target.value } )
  }

  validate( fn ) {
    fn()
    let endereco = FactoryHelper.clone( EnderecoModel, this.state.endereco )
    this.setState( { endereco } )
  }

  validateCep() {
    this.validate( this.state.endereco.validateCep )
  }

  render() {
    const { endereco } = this.state

    return (
      <React.Fragment>
        <p className={ `passos__title--big` }>{ `Endereço de entrega` }</p>
        <Input
          fieldName={ `CEP` }
          onBlur={ this.validateCep.bind( this ) }
          onChange={ this.handleCep.bind( this ) }
          type={ TYPE_NUMBER }
          value={ endereco.cep }
        />
        <Input
          disabled
          fieldName={ `Rua` }
          type={ TYPE_TEXT }
          value={ endereco.rua }
        />
        <div className={ `endereco-form__row` }>
          <Input
            fieldName={ `Número` }
            onChange={ this.handleNumero.bind( this ) }
            type={ TYPE_TEXT }
            value={ endereco.numero }
          />
          <div className={ `endereco-form__dummy` } />
          <Input
            fieldName={ `Complemento` }
            onChange={ this.handleComplemento.bind( this ) }
            type={ TYPE_TEXT }
            value={ endereco.complemento }
          />
        </div>
        <Input
          disabled
          fieldName={ `Bairro` }
          type={ TYPE_TEXT }
          value={ endereco.bairro }
        />
        <div className={ `endereco-form__row` }>
          <Input
            disabled
            fieldName={ `Cidade` }
            type={ TYPE_TEXT }
            value={ endereco.cidade }
          />
          <Select
            fieldName={ `UF` }
            options={ validStates }
            selected={ endereco.estado }
          />
        </div>
        <Input
          fieldName={ `País` }
          onChange={ this.handleNumero.bind( this ) }
          type={ TYPE_TEXT }
          value={ endereco.pais }
        />
      </React.Fragment>
    )
  }
}
