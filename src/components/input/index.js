import React from 'react'
import { string, func, oneOf, bool } from 'prop-types'

import { TYPE_TEXT, TYPE_NUMBER, TYPE_EMAIL, TYPE_PASSWORD } from './types'

const VALID_TYPES = [ TYPE_EMAIL, TYPE_NUMBER, TYPE_TEXT, TYPE_PASSWORD ]

export default class InputComponent extends React.Component {

  static propTypes = {
    autoFocus: bool,
    disabled: bool,
    error: string.isRequired,
    fieldName: string.isRequired,
    menor: bool,
    onBlur: func,
    onChange: func,
    onFocus: func,
    onKeyPress: func,
    textarea: bool,
    type: oneOf( VALID_TYPES ).isRequired,
    value: string.isRequired,
  }

  static defaultProps = {
    autoFocus: false,
    disabled: false,
    menor: false,
    error: '',
    textarea: false,
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    onKeyPress: () => {},
  }

  constructor( props ) {
    super( props )

    let hasError = !!props.error

    this.state = {
      originalType: props.type,
      hasError,
      dirty: false,
      focus: false,
    }
  }

  componentDidMount() {
    if ( this.props.autoFocus ) {
      this.focusInput()
    }
  }

  componentWillReceiveProps( nextProps ) {
    let hasError = !!nextProps.error
    this.setState( { hasError } )
  }

  render() {
    const { disabled, fieldName, type, onFocus, onBlur, onChange, onKeyPress, value, textarea, menor, error } = this.props
    const { hasError } = this.state
    let tag = {}
    tag.type = textarea ? 'textarea' : 'input'
    return (
      <div className={ `input__block${hasError ? '--error' : ''}` } >
        <tag.type
          className={ `input${textarea ? '--textarea' : ''} ${menor ? 'menor' : ''}` }
          disabled={ disabled }
          name={ fieldName }
          onBlur={ onBlur }
          onChange={ onChange }
          onFocus={ onFocus }
          onKeyPress={ onKeyPress }
          placeholder={ fieldName }
          ref={ ref => this.input = ref }
          type={ VALID_TYPES.includes( type ) ? type : TYPE_TEXT }
          value={ value }
        />
        <label
          className={ `label` }
          htmlFor={ fieldName }
        >
          { fieldName }
        </label>
        <p className={ `label-erro` }>{ error }</p>
      </div>
    )
  }
}
