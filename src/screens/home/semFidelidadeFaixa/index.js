import React from 'react'

export default function SemFidelidadeFaixa() {
  return (
    <div className={ `home__sem-fidelidade` }>
      <img
        src={ require( 'images/home/paraquedas.svg' ) }
      />
      <p>
        { `Fidelidade? ` }
        <span>{ `Nenhuma. `}</span>
        { `Multas? `}
        <span>{ `Nadinha.`}</span>
      </p>
    </div>
  )
}
