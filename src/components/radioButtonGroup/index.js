import React from 'react'
import { func, array, any, oneOfType, object, string } from 'prop-types'
import RadioButton from './radioButton'

export default class RadioButtonsGroup extends React.Component {

  static propTypes = {
    onSelect: func.isRequired,
    options: oneOfType( [ array, object ] ).isRequired,
    radioGroupName: string.isRequired,
    selected: any,
  }

  static defaultProps = {
    selected: undefined,
  }

  constructor( props ) {
    super( props )
  }

  handleSelect( id ) {
    this.props.onSelect( id )
  }

  getRadioButton( option ) {
    const { radioGroupName } = this.props
    if ( option ) {
      return (
        <RadioButton
          checked={ option.id === this.props.selected }
          content={ option.content }
          key={ `${radioGroupName}.${option.id}` }
          onChange={ this.handleSelect.bind( this, option.id ) }
          radioGroupName={ radioGroupName }
          value={ option.id }
        />
      )
    }
  }

  render() {
    const { options } = this.props
    return (
      <section className={ `radio-buttons-group` }>
        { options.map( option => this.getRadioButton( option ) )}
      </section>
    )
  }
}
