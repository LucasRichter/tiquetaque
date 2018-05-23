import React, { Fragment } from 'react'
import { element, array, oneOfType } from 'prop-types'

PreorderShell.propTypes = {
  children: oneOfType( [
    array,
    element
  ] ).isRequired
}

export default function PreorderShell( { children } ) {
  return (
    <Fragment>
      <span className={ `preorder-shell__mark` } />
      { children }
    </Fragment>
  )
}
