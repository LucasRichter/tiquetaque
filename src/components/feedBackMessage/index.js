import React from 'react'
import { string } from 'prop-types'

FeedbackMessage.propTypes = {
  message: string.isRequired
}

export default function FeedbackMessage( { message } ) {
  return (
    <div className={ `feedback-message` }>
      <p>{ message }</p>
      <img
        src={ require( './images/feedback-icon.svg' ) }
      />
    </div>
  )
}
