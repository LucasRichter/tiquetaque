import React from 'react'
import { func } from 'prop-types'
import Input from '../input'
import { TYPE_EMAIL } from '../input/types'
import FeedbackMessage from '../feedbackMessage'
import Firebase from '../../utils/firebase'
import Mixins from '../../utils/models/dados'
import FactoryHelper from '../../utils/FactoryHelper'
import { FEEDBACK_MESSAGE_EMAIL_INDICADO } from '../../utils/constants'
import Button, { TYPE_CHECK, TYPE_CANCEL } from '../button'

export default class CompartilharTiqueTaque extends React.Component {
  static propTypes = {
    onCancel: func.isRequired,
  }

  constructor( props ) {
    super( props )

    this.getDados = () => {
      let dados = {}
      Mixins.email( dados, 'email' )
      return dados
    }

    this.state = {
      dados: this.getDados(),
      showFeedbackMessage: false,
    }
  }

  handleEmail( e ) {
    let dados = FactoryHelper.assign( this.getDados, this.state.dados, { email: e.target.value } )
    this.setState( { dados } )
  }

  validateEmail() {
    this.state.dados.validateEmail()
    let dados = FactoryHelper.clone( this.getDados, this.state.dados )
    this.setState( { dados } )
  }

  showFeedbackMessage() {
    this.setState( { showFeedbackMessage: true } )
    setTimeout( () => this.setState( { showFeedbackMessage: false } ), 3000 )
  }


  render() {
    const { showFeedbackMessage, dados } = this.state
    const { onCancel } = this.props
    return (
      <section className={ `compartilhar-tiquetaque` }>
        <p className={ `compartilhar-tiquetaque__text` }>{ `Compartilhe o TiqueTaque por e-mail:` }</p>
        <div className={ `compartilhar-tiquetaque__wrapper` }>
          <Input
            error={ dados.errors.email }
            fieldName={ `Seu e-mail` }
            onBlur={ this.validateEmail.bind( this ) }
            onChange={ this.handleEmail.bind( this ) }
            type={ TYPE_EMAIL }
            value={ dados.email }
          />
          <div className={ `compartilhar-tiquetaque__buttons` }>
            <Button
              onClick={ () => {
                const { dados } = this.state
                dados.validateEmail()
                if ( !dados.errors.email && dados.email ) {
                  Firebase.salvarIndicado( dados.email )
                  this.showFeedbackMessage()
                }
              } }
              text={ `Enviar` }
              type={ TYPE_CHECK }
            />
            <Button
              onClick={ onCancel }
              text={ `Cancelar` }
              type={ TYPE_CANCEL }
            />
          </div>
          { showFeedbackMessage && <FeedbackMessage message={ FEEDBACK_MESSAGE_EMAIL_INDICADO } />}
        </div>
      </section>
    )
  }
}
