const VALID_EMAIL = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
module.exports.VALID_EMAIL = VALID_EMAIL

const INVALID_PHONE = 'Telefone inválido'
module.exports.INVALID_PHONE = INVALID_PHONE

const INVALID_CARD = 'Cartão inválido'
module.exports.INVALID_CARD = INVALID_CARD

const INVALID_CVV = 'CVV inválido'
module.exports.INVALID_CVV = INVALID_CVV

const REQUIRED = 'Campo obrigatório'
module.exports.REQUIRED = REQUIRED

const EMAIL = 'email'
module.exports.EMAIL = EMAIL

let empty = ( data ) => {
  if ( typeof ( data ) == 'number' || typeof ( data ) == 'boolean' ) {
    return false
  }
  if ( typeof ( data ) == 'undefined' || data === null ) {
    return true
  }
  if ( typeof ( data.length ) !== 'undefined' ) {
    return data.length == 0
  }
  if ( Object.prototype.toString.call( data ) === '[object Date]' ) {
    return isNaN( data.getTime() )
  }
  let count = 0
  for ( let i in data ) {
    if ( data.hasOwnProperty( i ) ) {
      count++
    }
  }
  return count === 0
}
module.exports.empty = empty

let isEmptyObject = ( obj ) => {
  if ( !obj ) {
    return true
  }
  for ( let field in obj ) {
    if ( obj.hasOwnProperty( field ) ) {
      if ( !empty( obj[ field ] ) ) {
        return false
      }
    }
  }
  return true
}
module.exports.isEmptyObject = isEmptyObject

let clearEmptyFields = ( obj ) => {
  let ret = {}
  for ( let field of Object.keys( obj ) ) {
    if ( !empty( obj[ field ] ) ) {
      ret = Object.assign( ret, { [ field ]: obj[ field ] } )
    }
  }
  return ret
}
module.exports.clearEmptyFields = clearEmptyFields

let arrayEquals = ( arr1, arr2 ) => {
  for ( let el of arr1 ) {
    if ( arr2.indexOf( el ) === -1 ) {
      return false
    }
  }
  for ( let el of arr2 ) {
    if ( arr1.indexOf( el ) === -1 ) {
      return false
    }
  }
  return true
}
module.exports.arrayEquals = arrayEquals

let objectEquals = ( obj1, obj2 ) => {
  obj1 = clearEmptyFields( obj1 )
  obj2 = clearEmptyFields( obj2 )
  if ( !arrayEquals( Object.keys( obj1 ), Object.keys( obj2 ) ) ) {
    return false
  }
  for ( let field of Object.keys( obj1 ) ) {
    if ( obj1[ field ] !== obj2[ field ] ) {
      return false
    }
  }
  return true
}
module.exports.objectEquals = objectEquals

let sanitizeValue = ( inputValue ) => {
  if ( empty( inputValue ) || typeof ( inputValue.length ) === 'undefined' ) {
    return ''
  }
  // remover os seguintes caracteres especiais: '.', '-', '(', ')', '-', ' ', '/', '\', '*'
  const regex = /[.\-*/()_\s]/g
  return inputValue.replace( regex, '' )
}
module.exports.sanitizeValue = sanitizeValue

function validaCnpj( str ) {
  str = str.replace( '.', '' )
  str = str.replace( '.', '' )
  str = str.replace( '.', '' )
  str = str.replace( '-', '' )
  str = str.replace( '/', '' )
  cnpj = str
  var numeros, 
digitos, 
soma, 
i, 
resultado, 
pos, 
tamanho, 
digitos_iguais
  digitos_iguais = 1
  if ( cnpj.length < 14 && cnpj.length < 15 )
    {return false;}
  for ( i = 0; i < cnpj.length - 1; i++ )
    {if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
      digitos_iguais = 0;
      break;
    }}
  if ( !digitos_iguais ) {
    tamanho = cnpj.length - 2
    numeros = cnpj.substring( 0, tamanho )
    digitos = cnpj.substring( tamanho )
    soma = 0
    pos = tamanho - 7
    for ( i = tamanho; i >= 1; i-- ) {
      soma += numeros.charAt( tamanho - i ) * pos--
      if ( pos < 2 )
        {pos = 9;}
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if ( resultado != digitos.charAt( 0 ) )
      {return false;}
    tamanho = tamanho + 1
    numeros = cnpj.substring( 0, tamanho )
    soma = 0
    pos = tamanho - 7
    for ( i = tamanho; i >= 1; i-- ) {
      soma += numeros.charAt( tamanho - i ) * pos--
      if ( pos < 2 )
        {pos = 9;}
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if ( resultado != digitos.charAt( 1 ) )
      {return false;}
    return true
  } else {
    return false
  }
}

let isValidEmail = ( email ) => {
  return empty( email ) || VALID_EMAIL.test( email )
}
module.exports.isValidEmail = isValidEmail

module.exports.validateEmail = ( field ) => {
  let err = {}

  if ( empty( field.value ) ) {
    err[ field.name ] = REQUIRED
  } else if ( !isValidEmail( field.value ) ) {
    err[ field.name ] = EMAIL_INVALIDO
  } else {
    err[ field.name ] = ''
  }

  return err
}

module.exports.requiredTelefone = ( field ) => {
  if ( !( field && field.value && field.value.length !== 0 ) ) {
    return { [ field.name ]: REQUIRED }
  } else {
    return {
      [ field.name ]: validateTelephoneNumber( field.value ) ? '' : INVALID_PHONE
    }
  }
}

let validateTelephoneNumber = ( tel ) => {
  if ( !( tel && tel.length && typeof ( tel.length ) !== 'undefined' ) ) {
    return false
  }

  let areaCode = parseInt( tel.substring( 0, 2 ), 10 )
  if ( areaCode < 10 || areaCode % 10 === 0 ) {
    return false
  }

  if ( tel.length === 10 || tel.length === 11 ) {
    return true
  } else {
    return false
  }
}

module.exports.validateTelephoneNumber = validateTelephoneNumber

module.exports.requiredField = ( field ) => {
  let err = {}
  err[ field.name ] = empty( field.value ) ? REQUIRED : ''
  return err
}
