import React from 'react'

export default function Logo() {
  return (
    <img
      className={ `header__logo` }
      src={ require( `images/core/logo.png` ) }
    />
  )
}
