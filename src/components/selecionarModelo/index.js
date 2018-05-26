import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'
import { MODELOS } from '../../utils/constants'
import { selecionarTipo } from '../../__store__/modelo/modelo.actions'
import { trocarEtapa, etapaCompleta } from '../../__store__/index.actions'

SelecionarModeloComponent.propTypes = {
  etapaCompleta: func.isRequired,
  selecionarTipo: func.isRequired,
  trocarEtapa: func.isRequired,
}

function SelecionarModeloComponent( { selecionarTipo, trocarEtapa, etapaCompleta } ) {
  return (
    <Fragment>
      <p className={ `selecionar-modelo__text` }>{ `Qual modelo você deseja?` }</p>
      <section className={ `selecionar-modelo` }>
        { Object.keys( MODELOS ).map( key => (
          <div
            className={ `selecionar-modelo__modelo` }
            key={ key }
            onClick={ () => {
              selecionarTipo( key )
              trocarEtapa( 2 )
              etapaCompleta( 1 )
            } }
          >
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
    </Fragment>
  )
}

const SelecionarModelo = connect(
  null,
  { selecionarTipo, trocarEtapa, etapaCompleta }
)( SelecionarModeloComponent )

export default SelecionarModelo
