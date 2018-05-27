import React from 'react'
import { connect } from 'react-redux'
import { bool, func } from 'prop-types'
import { saveReceverNovidades } from '../../__store__/index.actions'

ReceberNovidadesComponent.propTypes = {
  receberNovidades: bool.isRequired,
  saveReceverNovidades: func.isRequired,
}

function ReceberNovidadesComponent( { receberNovidades, saveReceverNovidades } ) {
  return (
    <div className={ `checkbox__block` }>
      <input
        checked={ receberNovidades }
        className={ `checkbox` }
        id={ 'receber' }
        name={ 'receber' }
        onChange={ e => saveReceverNovidades( e.target.checked ) }
        type={ `checkbox` }
      />
      <label htmlFor={ 'receber' }>
        { `Receber novidades sobre o desenvolvimento do TiqueTaque` }
      </label>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    receberNovidades: state.receberNovidades
  }
}

const ReceberNovidades = connect(
  mapStateToProps,
  { saveReceverNovidades }
)( ReceberNovidadesComponent )

export default ReceberNovidades
