import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { func, string } from 'prop-types'
import { MODELOS } from '../../utils/constants'
import { selecionarTipo } from '../../__store__/modelo/modelo.actions'
import { trocarEtapa, etapaCompleta } from '../../__store__/index.actions'
import isMobile from '../../utils/device'
import Button, { TYPE_PREORDER } from '../button'

SelecionarModeloComponent.propTypes = {
  etapaCompleta: func.isRequired,
  selecionarTipo: func.isRequired,
  tipoSelecionado: string.isRequired,
  trocarEtapa: func.isRequired,
}

function SelecionarModeloComponent( { selecionarTipo, trocarEtapa, etapaCompleta, tipoSelecionado } ) {
  const button = (
    <Button
      onClick={ () => {
        trocarEtapa( 2 )
        etapaCompleta( 1 )
      } }
      text={ `Escolher plano` }
      type={ TYPE_PREORDER }
    />
  )

  const check = (
    <img
      className={ `selecionar-modelo__modelo__check` }
      src={ require( './images/modelo-check.svg' ) }
    />
  )
  return (
    <Fragment>
      <p className={ `selecionar-modelo__text` }>{ `Qual modelo você deseja?` }</p>
      <section className={ `selecionar-modelo` }>
        { Object.keys( MODELOS ).map( key => (
          <div
            className={ `selecionar-modelo__modelo${ key === tipoSelecionado ? '--active' : ''}` }
            key={ key }
            onClick={ () => {
              selecionarTipo( key )
              if ( isMobile() ) {
                trocarEtapa( 2 )
                etapaCompleta( 1 )
              }
            } }
          >
            { key === tipoSelecionado && check }
            <h2 className={ `selecionar-modelo__title` }>{ `TiqueTaque ${key}` }</h2>
            <div className={ `selecionar-modelo__infos` }>
              <p>
                { `Até 30 funcionários` }
              </p>
              <span>
                { `R$ 0,90 por funcionário adicional` }
              </span>
            </div>
            <div className={ `selecionar-modelo__preco` }>
              <h3 >
                { `a partir de` }
              </h3>
              <p className={ `selecionar-modelo__preco__valor` }>
                { `R$ ${MODELOS[ key ].preco}` }
                <span>
                  { `/mês` }
                </span>
              </p>
            </div>
            <div className={ `selecionar-modelo__data` }>
              <h3>
                { `Data de lançamento estimada` }
              </h3>
              <p className={ `selecionar-modelo__data__lancamento` } >
                { MODELOS[ key ].dataLancamento }
              </p>
            </div>
          </div>
        ) ) }
      </section>
      { !isMobile() && tipoSelecionado && button }
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    tipoSelecionado: state.modelo.tipo
  }
}

const SelecionarModelo = connect(
  mapStateToProps,
  { selecionarTipo, trocarEtapa, etapaCompleta }
)( SelecionarModeloComponent )

export default SelecionarModelo
