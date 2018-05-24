import React from 'react'
import { element, array, oneOfType } from 'prop-types'

PreorderShell.propTypes = {
  children: oneOfType( [
    array,
    element
  ] ).isRequired
}

export default function PreorderShell( { children } ) {
  return (
    <section className={ `preorder-shell` }>
      <span className={ `preorder-shell__mark` } />
      { children }
    </section>
  )
}
