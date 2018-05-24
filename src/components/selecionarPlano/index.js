import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { func, string } from 'prop-types'
import { PLANOS } from '../../utils/constants'
import { selecionarPlano } from '../../__store__/modelo/modelo.actions'

SelecionarPlanoComponent.propTypes = {
  selecionarPlano: func.isRequired,
  tipo: string.isRequired
}

const TEXTS = {
  anual: 'pagamento único válido por 12 meses',
  mensal: 'renovação do pagamento todos os meses',
}

function SelecionarPlanoComponent( { selecionarPlano, tipo } ) {
  return (
    <Fragment>
      <p className={ `selecionar-modelo__text` }>{ `O pagamento será mensal ou anual?` }</p>
      <section className={ `selecionar-modelo` }>
        { Object.keys( PLANOS ).map( key => (
          <div
            className={ `selecionar-modelo__modelo` }
            key={ key }
            onClick={ () => selecionarPlano( key ) }
          >
            <div className={ `selecionar-modelo__header` }>
              <h2 className={ `selecionar-modelo__title` }>
                { key }
              </h2>
              { key === 'anual' &&
                <div className={ `planos__desconto` }>
                  <p>{ `14% off` }</p>
                </div>
              }
            </div>
            <div className={ `selecionar-modelo__infos` }>
              <span>
                { TEXTS[ key ] }
              </span>
            </div>
            <p className={ `selecionar-modelo__preco__valor` }>
              { `R$ ${PLANOS[ key ][ tipo ]}` }
              <span>
                { `/mês` }
              </span>
            </p>
            <p className={ `selecionar-modelo__preco__valor--ano` }>
              { `R$ ${PLANOS[ key ][ tipo ] * 12}` }
              <span>
                { `/ano` }
              </span>
            </p>
          </div>
        ) ) }
      </section>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    tipo: state.modelo.tipo
  }
}

const SelecionarPlano = connect(
  mapStateToProps,
  { selecionarPlano }
)( SelecionarPlanoComponent )

export default SelecionarPlano
