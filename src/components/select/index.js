import React from 'react'
import { array, string } from 'prop-types'

Select.propTypes = {
  fieldName: string.isRequired,
  options: array.isRequired,
  selected: string,
}

Select.defaultProps = {
  error: '',
  onBlur: () => {},
  onFocus: () => {},
  selected: ''
}

export default function Select( { selected, fieldName, options } ) {

  options = options.map( value => {
    return (
      <option
        key={ value }
        value={ value }
      >
        { value }
      </option>
    )
  } )

  return (
    <div className={ `select__block` }>
      <select
        className={ `select` }
        disabled
        value={ selected }
      >
        <option value={ `` } >{ fieldName }</option>
        { options }
      </select>
      <img src={ require( 'images/icons/seta-baixo.svg' ) } />
    </div>
  )
}

