import $ from 'jquery'

export function scrollTo( className ) {
  let element = $( `.${className}` )

  if ( !element.length ) {
    return
  }

  $( 'html, body' ).animate( {
    scrollTop: element.offset().top - 69
  }, 500 )
}

export function isInViewport( element ) {
  var elementTop = element.offset().top - 300
  var elementBottom = elementTop + element.outerHeight()
  var viewportTop = $( window ).scrollTop()
  var viewportBottom = viewportTop + $( window ).height()
  return elementBottom > viewportTop && elementTop < viewportBottom
}
