import React from 'react'
import Input from '../../../components/input'
import { TYPE_EMAIL } from '../../../components/input/types'
import Button, { TYPE_ICON_EMAIL } from '../../../components/button'
import isMobile from '../../../utils/device'
import Firebase from '../../../utils/firebase'
import Mixins from '../../../utils/models/dados'
import FactoryHelper from '../../../utils/FactoryHelper'
import FeedbackMessage from '../../../components/feedbackMessage'
import { FEEDBACK_MESSAGE_EMAIL_DISPONIVEL } from '../../../utils/constants'

export default class EnviarEmailFaixa extends React.Component {
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

  showFeedbackMessage() {
    this.setState( { showFeedbackMessage: true } )
    setTimeout( () => this.setState( { showFeedbackMessage: false } ), 3000 )
  }

  handleEmail( e ) {
    let dados = FactoryHelper.assign( this.getDados, this.state.dados, { email: e.target.value } )
    this.setState( { dados } )
  }

  getInfos() {
    return (
      <div className={ `enviar-email__infos` }>
        <img
          src={ require( './images/pc.png' ) }
        />
        <div className={ `enviar-email__block` }>
          <p className={ `enviar-email__preco` }>
            { `R$ 0,90` }
          </p>
          <p className={ `enviar-email__funcionarios` }>
            { `por funiconário ao mês` }
          </p>
        </div>
      </div>
    )
  }

  validateEmail() {
    this.state.dados.validateEmail()
    let dados = FactoryHelper.clone( this.getDados, this.state.dados )
    this.setState( { dados } )
  }

  render() {
    const { showFeedbackMessage, dados } = this.state
    return (
      <section className={ `enviar-email` }>
        <img
          className={ `enviar-email__bg` }
          src={ require( './images/fill-1.svg' ) }
        />
        <div className={ `enviar-email__wrapper` }>
          { !isMobile() && this.getInfos() }
          <div className={ `enviar-email__form` }>
            <div className={ `enviar-email__form__header` }>
              <h2 className={ `enviar-email__form__title` }>{ `Só o aplicativo? Tem também!` }</h2>
              <div className={ `enviar-email__form__em-breve` } >
                <p>{ `em breve` }</p>
              </div>
            </div>
            <p className={ `enviar-email__form__text` }>
              { `Use o app do funcionário para o ponto digital e comece uma gestão mais inteligente agora mesmo.` }
            </p>
            { isMobile() && this.getInfos() }
            <Input
              error={ dados.errors.email }
              fieldName={ `Seu e-mail` }
              onBlur={ this.validateEmail.bind( this ) }
              onChange={ this.handleEmail.bind( this ) }
              type={ TYPE_EMAIL }
              value={ dados.email }
            />
            <Button
              onClick={ () => {
                const { dados } = this.state
                dados.validateEmail()
                if ( !dados.errors.email && dados.email ) {
                  Firebase.salvarEmailAvisoDisponivel( dados.email )
                  this.showFeedbackMessage()
                }
              } }
              text={ `Avise-me quando disponível` }
              type={ TYPE_ICON_EMAIL }
            />
            { showFeedbackMessage && <FeedbackMessage message={ FEEDBACK_MESSAGE_EMAIL_DISPONIVEL } />}
          </div>
        </div>
      </section>
    )
  }
}
