export const formatTelefone = ( telefone ) => {
  if ( !telefone ) {
    return ''
  }
  let dotPos = telefone.length > 10 ? '7' : '6'
  if ( telefone.length <= 2 ) {
    return `(${telefone}`
  } else if ( telefone.length <= dotPos ) {
    return `(${telefone.substring( 0, 2 )}) ${telefone.substring( 2 )}`
  } else {
    return `(${ telefone.substring( 0, 2 ) }) ${ telefone.substring( 2, dotPos ) }.${ telefone.substring( dotPos ) }`
  }
}

export const normalizeNumberString = ( str ) => {
  if ( !str ) {
    return ''
  } else {
    return str.replace( /\D/g, '' )
  }
}

export const capitalize = str => `${str[ 0 ].toUpperCase()}${str.toLowerCase().substring( 1 )}`

export const formatValor = valor => valor.toFixed( 2 ).replace( '.', ',' )
