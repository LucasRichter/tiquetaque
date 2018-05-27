import React from 'react'
import { bool } from 'prop-types'

Logo.propTypes = {
  branco: bool
}

Logo.defaultProps = {
  branco: false
}

export default function Logo( { branco } ) {
  return (
    <img
      className={ `header__logo` }
      src={ require( `images/core/logo${branco ? '-branco' : ''}.svg` ) }
    />
  )
}
