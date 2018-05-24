import React from 'react'
import { PLANOS, CLASS_CONTATO } from '../../../../utils/constants'
import SemFidelidadeFaixa from '../../semFidelidadeFaixa'
import Button, { TYPE_TRANSPARENT } from '../../../../components/button'
import Toggle from '../../../../components/toggle'
import { scrollTo } from '../../../../utils/scroll'

export default class PlanosInfos extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      planoSelecionado: 'anual'
    }
  }

  getPlanosBlock() {
    const { planoSelecionado } = this.state
    let plano = PLANOS[ planoSelecionado ]

    return Object.keys( plano ).map( key => (
      <div
        className={ `planos__block--${key}` }
        key={ key }
      >
        <h2 className={ `planos__block__title` }>{ `TiqueTaque ${key}` }</h2>
        <p>{ `Todas as funcionalidades inclusas` }</p>
        <div className={ `planos__block__funcionarios` }>
          <p>{ `Até 30 funcionários` }</p>
          <span>{ `R$ 0,90 por funcionário adicional` }</span>
        </div>
        <div className={ `planos__block__preco` } >
          <p>
            { `R$ ${plano[ key ]}` }
            <span>{ `/mes` }</span>
          </p>
        </div>
        <Button
          text={ `Peça o seu agora` }
          to={ `/preorder` }
          type={ TYPE_TRANSPARENT }
        />
      </div>
    ) )
  }

  handleToggleChange( e ) {
    let planoSelecionado = e.target.checked ? 'anual' : 'mensal'
    this.setState( { planoSelecionado } )
  }

  getToggle() {
    const { planoSelecionado } = this.state

    return (
      <div className={ `planos__toggle` }>
        <p className={ `planos__toggle__texto${planoSelecionado === 'mensal' ? '--ativo' : '' }` }>
          { `Plano Mensal` }
        </p>
        <Toggle
          checked={ planoSelecionado === 'anual' }
          onChange={ this.handleToggleChange.bind( this ) }
        />
        <p className={ `planos__toggle__texto${planoSelecionado === 'anual' ? '--ativo' : '' }` }>
          { `Plano Anual` }
        </p>
        <div className={ `planos__desconto` }>
          <p>{ `até 14% off` }</p>
        </div>
        <img
          src={ require( './images/risquinhos.svg' ) }
        />
      </div>
    )
  }

  render() {
    const { planoSelecionado } = this.state

    return (
      <React.Fragment>
        <div>
          { this.getToggle() }
        </div>
        <div className={ `planos__infos` } >
          <img
            className={ `planos__nuvem-left` }
            src={ require( './images/nuvem.svg' ) }
          />
          { this.getPlanosBlock() }
          <img
            className={ `planos__nuvem-right` }
            src={ require( './images/nuvem.svg' ) }
          />
        </div>
        <p className={ `planos__ajuda` }>
          { `Precisa de mais que 20 aparelhos? ` }
          <a onClick={ () => scrollTo( CLASS_CONTATO ) }>
            { `Fale com a gente` }
          </a>
          { ` e descubra condições especiais.`}
        </p>
        { planoSelecionado === 'anual' && <SemFidelidadeFaixa /> }
      </React.Fragment>
    )
  }
}
