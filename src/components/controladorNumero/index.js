import React from 'react'
import { func, number } from 'prop-types'

ControladorNumero.propTypes = {
  handleNumero: func.isRequired,
  menorLimite: number,
  numero: number.isRequired,
}

ControladorNumero.defaultProps = {
  menorLimite: 1
}

export default function ControladorNumero( { menorLimite, handleNumero, numero } ) {
  let menorDisable = numero === menorLimite
  return (
    <section className={ `controlador-numero` }>
      <div
        className={ `controlador-numero__circle${menorDisable ? '--disabled' : ''}` }
        onClick={ () => !menorDisable && handleNumero( numero - 1 ) }
      >
        <img
          src={ require( './images/minus.svg' ) }
        />
      </div>
      <div className={ `controlador-numero__numero` }>
        <p>{ numero }</p>
      </div>
      <div
        className={ `controlador-numero__circle` }
        onClick={ () => handleNumero( numero + 1 ) }
      >
        <img
          src={ require( './images/plus.svg' ) }
        />
      </div>
    </section>
  )
}
