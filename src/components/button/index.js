import React from 'react'
import { bool, string, func, oneOf } from 'prop-types'
import { Link } from 'react-router-dom'

export const TYPE_GRADIENT = 'gradient'
export const TYPE_FORM = 'contato'
export const TYPE_TRANSPARENT = 'transparent'
export const TYPE_ICON_EMAIL = 'email'
export const TYPE_PREORDER = 'preorder'

const VALID_TYPES = [ TYPE_GRADIENT, TYPE_TRANSPARENT, TYPE_FORM, TYPE_ICON_EMAIL, TYPE_PREORDER ]
const ICON_TYPES = [ TYPE_ICON_EMAIL ]

export default class Button extends React.Component {
  static propTypes = {
    disabled: bool,
    isLoading: bool,
    onClick: func,
    target: string,
    text: string.isRequired,
    to: string,
    type: oneOf( VALID_TYPES ).isRequired
  }

  static defaultProps = {
    disabled: false,
    grow: false,
    image: undefined,
    isLoading: false,
    onClick: undefined,
    target: '',
    to: '',
    type: ''
  }

  constructor( props ) {
    super( props )

    this.state = {
      loader: undefined,
      buttonModifer: this.initializeModifer( props )
    }
  }

  componentWillReceiveProps( nextProps ) {
    this.updateModifer( nextProps )
  }

  comopentWillMount() {
    this.updateModifer( this.props )
  }

  updateModifer( nextProps ) {
    let buttonModifer = this.initializeModifer( nextProps )

    this.setState( {
      loader: nextProps.isLoading ? ( <div className={ `button__loader` } /> ) : undefined,
      buttonModifer
    } )
  }

  initializeModifer( props ) {
    let buttonModifer = props.isLoading ? 'is-loading' : ''
    buttonModifer = buttonModifer === '' && props.disabled ? 'is-disabled' : buttonModifer
    return buttonModifer
  }

  click() {
    if ( this.props.isLoading || this.props.disabled || !this.props.onClick ) {
      return
    } else {
      this.props.onClick()
    }
  }

  getContent() {
    if ( !this.props.isLoading ) {
      return (
        <React.Fragment>
          { this.getImage() }
          { this.props.text }
        </React.Fragment>
      )
    }
  }

  getImage() {
    const { type } = this.props

    if ( ICON_TYPES.includes( type ) ) {
      return (
        <img
          className={ `button__image` }
          src={ require( `./images/${type}.svg` ) }
        />
      )
    }
  }

  getButtonView() {
    let classTypeButton = `button--${VALID_TYPES.includes( this.props.type ) ? this.props.type : TYPE_GRADIENT }`
    let className = `${classTypeButton}${this.state.buttonModifer ? '--' + this.state.buttonModifer : ''}`

    return (
      <button
        className={ className }
        onClick={ this.click.bind( this ) }
      >
        { this.state.loader }
        { this.getContent() }
      </button>
    )
  }

  render() {
    if ( this.props.to.length > 0 && !this.props.onClick ) {
      return (
        <Link
          className={ `button__link` }
          target={ this.props.target }
          to={ this.props.to }
        >
          { this.getButtonView() }
        </Link>
      )
    } else {
      return this.getButtonView()
    }
  }
}
