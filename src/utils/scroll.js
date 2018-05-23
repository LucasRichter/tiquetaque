import $ from 'jquery'

export function scrollTo( className ) {
  let element = $( `.${className}` )

  if ( !element.length ) {
    return
  }

  $( 'html, body' ).animate( {
    scrollTop: element.offset().top
  }, 1000 )
}
