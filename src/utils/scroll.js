import $ from 'jquery'
import isMobile from './device'

export function scrollTo( className, headerHeight = 0 ) {
  let element = $( `.${className}` )

  if ( !element.length ) {
    return
  }

  if ( isMobile() ) {
    headerHeight = 0
  }

  $( 'html, body' ).animate( {
    scrollTop: element.offset().top - headerHeight
  }, 500 )
}

export function isInViewport( element ) {
  var elementTop = element.offset().top - 300
  var elementBottom = elementTop + element.outerHeight()
  var viewportTop = $( window ).scrollTop()
  var viewportBottom = viewportTop + $( window ).height()
  return elementBottom > viewportTop && elementTop < viewportBottom
}
