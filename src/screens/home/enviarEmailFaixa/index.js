import React from 'react'
import Input from '../../../components/input'
import { TYPE_EMAIL } from '../../../components/input/types'
import Button, { TYPE_ICON_EMAIL } from '../../../components/button'
import isMobile from '../../../utils/device'
import Firebase from '../../../utils/Firebase'

export default class EnviarEmailFaixa extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      email: ''
    }
  }

  handleEmail( e ) {
    this.setState( { email: e.target.value } )
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

  render() {
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
              fieldName={ `Seu e-mail` }
              onChange={ this.handleEmail.bind( this ) }
              type={ TYPE_EMAIL }
              value={ this.state.email }
            />
            <Button
              onClick={ () => {
                this.dado
                if ( !this.state.dados.erros.email ) {
                  new Firebase().salvarEmailAvisoDisponivel( this.state.email )
                }
              } }
              text={ `Avise-me quando disponível` }
              type={ TYPE_ICON_EMAIL }
            />
          </div>
        </div>
      </section>
    )
  }
}
