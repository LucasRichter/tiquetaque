import $ from 'jquery'

export function scrollTo( className ) {
  $( 'html, body' ).animate( {
    scrollTop: $( `.${className}` ).offset().top
  }, 2000 )
}
