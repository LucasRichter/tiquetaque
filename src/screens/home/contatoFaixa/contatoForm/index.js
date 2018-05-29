import React from 'react'

import Input from '../../../../components/input'
import { TYPE_TEXT, TYPE_EMAIL, TYPE_NUMBER } from '../../../../components/input/types'
import Button, { TYPE_FORM } from '../../../../components/button'
import ContatoModel from '../../../../utils/models/ContatoModel'
import FactoryHelper from '../../../../utils/FactoryHelper'
import Firebase from '../../../../utils/firebase'
import FeedbackMessage from '../../../../components/feedBackMessage'
import { FEEDBACK_MESSAGE_CONTATO } from '../../../../utils/constants'

export default class ContatoForm extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      contato: ContatoModel(),
      showFeedbackMessage: false,
    }
  }

  showFeedback() {
    this.setState( { showFeedbackMessage: true } )
    setTimeout( () => this.setState( { showFeedbackMessage: false } ), 3000 )
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

  validateEmail() {
    this.validate( this.state.contato.validateEmail )
  }

  validateTelefone() {
    this.validate( this.state.contato.validateTelefone )
  }

  render() {
    const { contato, showFeedbackMessage } = this.state
    return (
      <div className={ `form__inputs` }>
        <Input
          error={ contato.errors.nome }
          fieldName={ `Seu nome` }
          onChange={ this.handleNome.bind( this ) }
          type={ TYPE_TEXT }
          value={ contato.nome }
        />
        <Input
          error={ contato.errors.email }
          fieldName={ `Seu e-mail` }
          onBlur={ this.validateEmail.bind( this ) }
          onChange={ this.handleEmail.bind( this ) }
          type={ TYPE_EMAIL }
          value={ contato.email }
        />
        <Input
          error={ contato.errors.telefone }
          fieldName={ `Telefone` }
          onBlur={ this.validateTelefone.bind( this ) }
          onChange={ this.handleTelefone.bind( this ) }
          type={ TYPE_NUMBER }
          value={ contato.telefone }
        />
        <Input
          error={ contato.errors.empresa }
          fieldName={ `Empresa` }
          onChange={ this.handleEmpresa.bind( this ) }
          type={ TYPE_TEXT }
          value={ contato.empresa }
        />
        <Input
          error={ contato.errors.mensagem }
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
              this.showFeedback()
            }
          } }
          text={ `Enviar` }
          type={ TYPE_FORM }
        />
        { showFeedbackMessage && <FeedbackMessage message={ FEEDBACK_MESSAGE_CONTATO } />}
      </div>
    )
  }
}
