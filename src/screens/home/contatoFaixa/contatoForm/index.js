import React from 'react'

import Input from '../../../../components/input'
import { TYPE_TEXT, TYPE_EMAIL, TYPE_NUMBER } from '../../../../components/input/types'
import Button, { TYPE_FORM } from '../../../../components/button'
import ContatoModel from '../../../../utils/models/ContatoModel'
import FactoryHelper from '../../../../utils/FactoryHelper'
import Firebase from '../../../../utils/firebase'
import { objToArray } from '../../../../utils/formatters'

export default class ContatoForm extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      contato: ContatoModel()
    }
  }

  update( value ) {
    let contato = FactoryHelper.assign( ContatoModel, this.state.contato, value )
    this.setState( { contato } )
  }

  validate( fn ) {
    fn()
    let contato = FactoryHelper.clone( ContatoModel, this.state.contato )
    this.setState( { contato } )
  }

  handleNome( e ) {
    this.update( { nome: e.target.value } )
  }

  handleEmail( e ) {
    this.update( { email: e.target.value } )
  }

  handleTelefone( e ) {
    this.update( { telefone: e.target.value } )
  }

  handleEmpresa( e ) {
    this.update( { empresa: e.target.value } )
  }

  handleMensagem( e ) {
    this.update( { mensagem: e.target.value } )
  }

  render() {
    const { contato } = this.state
    return (
      <div className={ `form__inputs` }>
        <Input
          fieldName={ `Seu nome` }
          onChange={ this.handleNome.bind( this ) }
          type={ TYPE_TEXT }
          value={ contato.nome }
        />
        <Input
          fieldName={ `Seu e-mail` }
          onChange={ this.handleEmail.bind( this ) }
          type={ TYPE_EMAIL }
          value={ contato.email }
        />
        <Input
          fieldName={ `Telefone` }
          onChange={ this.handleTelefone.bind( this ) }
          type={ TYPE_NUMBER }
          value={ contato.telefone }
        />
        <Input
          fieldName={ `Empresa` }
          onChange={ this.handleEmpresa.bind( this ) }
          type={ TYPE_TEXT }
          value={ contato.empresa }
        />
        <Input
          fieldName={ `Como podemos ajudar?` }
          onChange={ this.handleMensagem.bind( this ) }
          textarea
          type={ TYPE_TEXT }
          value={ contato.mensagem }
        />
        <Button
          onClick={ () => {
            const { contato } = this.state
            contato.validate()
            if ( contato.isValid ) {
              Firebase.salvarContato( contato.toServer() )
              this.setState( { contato: ContatoModel() } )
            } else {
              alert( objToArray( contato.errors ).join( '\n' ) )
            }
          } }
          text={ `Enviar` }
          type={ TYPE_FORM }
        />
      </div>
    )
  }
}
