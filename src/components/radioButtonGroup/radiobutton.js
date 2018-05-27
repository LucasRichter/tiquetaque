import React from 'react'
import { element, func, string, bool, any } from 'prop-types'

RadioButton.propTypes = {
  checked: bool,
  content: element.isRequired,
  onChange: func.isRequired,
  radioGroupName: string.isRequired,
  value: any.isRequired,
}

RadioButton.defaultProps = {
  modifier: '',
  checked: false,
}

export default function RadioButton( { onChange, checked, radioGroupName, value, content } ) {
  return (
    <div className={ `radio-button` }>
      <input
        checked={ checked }
        className={ `radio-button__input` }
        id={ `${radioGroupName}.${value}` }
        name={ radioGroupName }
        onChange={ onChange }
        type={ `radio` }
      />
      <label
        className={ `radio-button__label` }
        htmlFor={ `${radioGroupName}.${value}` }
      >
        { content }
      </label>
    </div>
  )
}
