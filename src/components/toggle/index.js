import React from 'react'
import { func, bool } from 'prop-types'

Toggle.propTypes = {
  checked: bool.isRequired,
  onChange: func.isRequired,
}

export default function Toggle( { checked, onChange } ) {
  return (
    <label className={ `toggle` }>
      <input
        checked={ checked }
        onChange={ onChange }
        type={ `checkbox` }
      />
      <span className={ `toggle__slider` } />
    </label>
  )
}
