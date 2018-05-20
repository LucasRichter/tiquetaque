//<textarea id=`contato-ajuda` placeholder=`Como podemos ajudar?` className=`form__input--textarea`></textarea>
import React from 'react'

import Input from '../../../../components/input'
import { TYPE_TEXT, TYPE_EMAIL, TYPE_NUMBER } from '../../../../components/input/types'

export default class ContatoForm extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      textoAjuda: '',
    }
  }

  handleNome( e ) {
    this.setState( { nome: e.target.value } )
  }

  handleEmail( e ) {
    this.setState( { email: e.target.value } )
  }

  handleTelefone( e ) {
    this.setState( { telefone: e.target.value } )
  }

  handleEmpresa( e ) {
    this.setState( { empresa: e.target.value } )
  }

  render() {
    return (
      <div className={ `form__inputs` }>
        <Input
          fieldName={ `Seu nome` }
          onChange={ this.handleNome.bind( this ) }
          type={ TYPE_TEXT }
          value={ this.state.nome }
        />
        <Input
          fieldName={ `Seu e-mail` }
          onChange={ this.handleEmail.bind( this ) }
          type={ TYPE_EMAIL }
          value={ this.state.email }
        />
        <Input
          fieldName={ `Telefone` }
          onChange={ this.handleTelefone.bind( this ) }
          type={ TYPE_NUMBER }
          value={ this.state.telefone }
        />
        <Input
          fieldName={ `Empresa` }
          onChange={ this.handleEmpresa.bind( this ) }
          type={ TYPE_TEXT }
          value={ this.state.empresa }
        />
        <button className={ `button--contato` }>
          {`Enviar`}
        </button>
      </div>
    )
  }
}
