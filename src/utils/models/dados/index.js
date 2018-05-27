import FactoryHelper from '../../FactoryHelper'
import TitleClass from '../../titleCaps'
import SharedFields from '../shared/fieldMixins'

import { normalizeNumberString, formatTelefone } from '../../formatters'
import { empty, isValidEmail, validateTelephoneNumber } from '../../validators'

const FieldsMixins = {
  cnpj: ( obj, field ) => {
    const INVALID_CNPJ = `CNPJ inválido`
    let _field = ''
    Object.defineProperty( obj, field, {
      enumerable: true,
      configurable: false,
      get: () => {
        if ( !empty( _field ) ) {
          if ( _field.length <= 3 ) {
            return _field
          } else if ( _field.length <= 5 ) {
            return `${_field.substring( 0, 2 )}.${_field.substring( 2 )}`
          } else if ( _field.length <= 8 ) {
            return `${_field.substring( 0, 2 )}.${_field.substring( 2, 5 )}.${_field.substring( 5 )}`
          } else if ( _field.length <= 12 ) {
            return `${_field.substring( 0, 2 )}.${_field.substring( 2, 5 )}.${_field.substring( 5, 8 )}/${_field.substring( 8, 12 )}`
          } else {
            return `${_field.substring( 0, 2 )}.${_field.substring( 2, 5 )}.${_field.substring( 5, 8 )}/${_field.substring( 8, 12 )}.${_field.substring( 12 )}`
          }
        } else {
          return ''
        }
      },
      set: cnpj => {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
        _field = normalizeNumberString( cnpj ).substring( 0, 15 )
      }
    } )
    let validateCpnj = () => {
      if ( empty( _field ) ) {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
        return true
      }

      let invalidCNPJ = [ '00000000000000', '11111111111111', '22222222222222', '33333333333333', '44444444444444', '55555555555555', '66666666666666', '77777777777777', '88888888888888', '99999999999999' ]
      if ( invalidCNPJ.indexOf( _field ) !== -1 ) {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: INVALID_CNPJ } )
        return false
      }

      let tamanho
      let numeros
      let digitos
      let soma
      let pos
      let resultado

      tamanho = _field.length - 2
      numeros = _field.substring( 0, tamanho )
      digitos = _field.substring( tamanho )
      soma = 0
      pos = tamanho - 7
      for ( let i = tamanho; i >= 1; i-- ) {
        soma += numeros.charAt( tamanho - i ) * pos--
        if ( pos < 2 ) {
          pos = 9
        }
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
      if ( resultado != digitos.charAt( 0 ) ) {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: INVALID_CNPJ } )
        return false
      }

      tamanho = tamanho + 1
      numeros = _field.substring( 0, tamanho )
      soma = 0
      pos = tamanho - 7
      for ( let i = tamanho; i >= 1; i-- ) {
        soma += numeros.charAt( tamanho - i ) * pos--
        if ( pos < 2 ) {
          pos = 9
        }
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
      if ( resultado != digitos.charAt( 1 ) ) {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: INVALID_CNPJ } )
        return false
      }
      obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
      return true
    }
    FactoryHelper.validatorMixin( { object: obj, field, validator: validateCpnj } )
    obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
  },
  cpf: ( obj, field ) => {
    const INVALID_CPF = `CPF inválido`
    let _field = ''
    Object.defineProperty( obj, field, {
      enumerable: true,
      configurable: false,
      get: () => {
        if ( !empty( _field ) ) {
          if ( _field.length <= 3 ) {
            return _field
          } else if ( _field.length <= 6 ) {
            return `${_field.substring( 0, 3 )}.${_field.substring( 3 )}`
          } else if ( _field.length <= 9 ) {
            return `${_field.substring( 0, 3 )}.${_field.substring( 3, 6 )}.${_field.substring( 6 )}`
          } else {
            return `${_field.substring( 0, 3 )}.${_field.substring( 3, 6 )}.${_field.substring( 6, 9 )}-${_field.substring( 9 )}`
          }
        } else {
          return ''
        }
      },
      set: cpf => {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
        _field = normalizeNumberString( cpf ).substring( 0, 11 )
      }
    } )
    let validateCpf = () => {
      if ( empty( _field ) ) {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
        return true
      }

      let soma = 0
      let resto
      let invalidCPF = [ '00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999' ]

      let calcResto = ( resto, soma ) => {
        resto = ( soma * 10 ) % 11
        if ( resto == 10 || resto == 11 ) {
          resto = 0
        }
        return resto
      }
      let calcSoma = ( maxPos, digit ) => {
        let soma = 0
        for ( let i = 1; i <= maxPos; i++ ) {
          soma = soma + parseInt( _field.substring( i - 1, i ) ) * ( digit - i )
        }
        return soma
      }
      let digitIsValid = ( resto, digit ) => {
        if ( resto !== parseInt( digit ) ) {
          obj.errors = Object.assign( {}, obj.errors, { [ field ]: INVALID_CPF } )
          return false
        }
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
        return true
      }

      if ( invalidCPF.indexOf( _field ) !== -1 ) {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: INVALID_CPF } )
        return false
      }

      soma = calcSoma( 9, 11 )
      resto = calcResto( resto, soma )
      if ( !digitIsValid( resto, _field.substring( 9, 10 ) ) ) {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: INVALID_CPF } )
        return false
      }

      soma = calcSoma( 10, 12 )
      resto = calcResto( resto, soma )
      if ( !digitIsValid( resto, _field.substring( 10, 11 ) ) ) {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: INVALID_CPF } )
        return false
      }

      return true
    }
    FactoryHelper.validatorMixin( { object: obj, field, validator: validateCpf } )
    obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
  },
  nome: SharedFields.text( { setter: TitleClass.transform } ),
  email: ( obj, field ) => {
    let _field = ''
    Object.defineProperty( obj, field, {
      enumerable: true,
      configurable: false,
      get: () => _field,
      set: email => {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
        _field = email.toLowerCase()
      }
    } )
    const EMAIL_INVALIDO = 'E-mail inválido'
    let validateEmail = () => {
      let isValid = empty( _field ) || isValidEmail( _field )
      obj.errors = Object.assign( {}, obj.errors, { [ field ]: isValid ? '' : EMAIL_INVALIDO } )
      return isValid
    }
    FactoryHelper.validatorMixin( { object: obj, field, validator: validateEmail } )
    obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
  },
  telefone: ( obj, field ) => {
    let _field = ''
    Object.defineProperty( obj, field, {
      enumerable: true,
      configurable: false,
      get: () => formatTelefone( _field ),
      set: telefone => {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
        _field = normalizeNumberString( telefone ).substring( 0, 11 )
      }
    } )
    let validateTelefone = () => {
      const INVALID_PHONE = `Telefone inválido`
      let isValid = empty( _field ) || validateTelephoneNumber( _field )
      obj.errors = Object.assign( {}, obj.errors, { [ field ]: isValid ? '' : INVALID_PHONE } )
      return isValid
    }
    FactoryHelper.validatorMixin( { object: obj, field, validator: validateTelefone } )
    obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
  },
}

export default FieldsMixins
