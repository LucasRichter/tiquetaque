const exceptions = [ 'e', 'o', 'a', 'de', 'do', 'da', 'dos', 'das', 'los', 'las' ]

export default class TitleClass {
  static transform( title ) {
    var titleArray = []

    if ( !title ) {
      return ''
    }

    let lower = ( word ) => {
      return word.toLowerCase()
    }

    let upper = ( word ) => {
      return word.substr( 0, 1 ).toUpperCase() + word.substr( 1 )
    }

    let cond = true
    while ( cond ) {
      let wordArray = title.split( /[\s'&-]+/ )

      for ( let i = 0; i < wordArray.length; i++ ) {
        let lowerWord = lower( wordArray[ i ] )
        exceptions.includes( lowerWord ) ? titleArray.push( lowerWord ) : titleArray.push( upper( lowerWord ) )
      }

      break
    }

    let buffer = ''
    for ( let word of titleArray ) {
      let bufferSize = buffer.length
      while ( /[\s'&-]+/.test( title[ bufferSize ] ) ) {
        buffer = buffer.concat( title[ bufferSize ] )
        bufferSize = buffer.length
      }
      buffer = buffer.concat( word )
    }

    return buffer.replace( '  ', ' ' )
  }
}
