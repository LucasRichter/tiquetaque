import FactoryHelper from '../../FactoryHelper'
import SharedFields from '../shared/fieldMixins'
import TitleClass from '../../titleCaps'
import { validStates } from '../../constants'
import { normalizeNumberString } from '../../formatters'
import { empty } from '../../validators'

const INVALID_FIELD_MIN_SIZE = `Tamanho mínimo 2 caracteres`

const FieldsMixins = {
  cep: ( obj, field ) => {
    const INVALID_CEP = `CEP inválido`
    let _field = ''
    Object.defineProperty( obj, field, {
      enumerable: true,
      configurable: false,
      get: () => {
        if ( !empty( _field ) ) {
          if ( _field.length <= 2 ) {
            return _field
          } else if ( _field.length <= 5 ) {
            return `${_field.substring( 0, 2 )}.${_field.substring( 2 )}`
          } else if ( _field.length <= 8 ) {
            return `${_field.substring( 0, 2 )}.${_field.substring( 2, 5 )}-${_field.substring( 5 )}`
          } else {
            return `${_field.substring( 0, 2 )}.${_field.substring( 2, 5 )}-${_field.substring( 5, 7 )}`
          }
        } else {
          return ''
        }
      },
      set: cep => {
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
        obj[ `${field}Raw` ] = normalizeNumberString( cep ).substring( 0, 8 )
        _field = normalizeNumberString( cep ).substring( 0, 8 )
      }
    } )
    let validateCep = () => {
      let isValid = empty( _field ) || _field.length === 8
      obj.errors = Object.assign( {}, obj.errors, { [ field ]: isValid ? '' : INVALID_CEP } )
      return isValid
    }
    FactoryHelper.validatorMixin( { object: obj, field, validator: validateCep } )
    obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
  },
  estado: ( obj, field ) => {
    const INVALID_STATE = `Estado inválido`
    let _field = ''
    Object.defineProperty( obj, field, {
      enumerable: true,
      configurable: false,
      get: () => _field,
      set: estado => {
        if ( !validStates.includes( estado ) ) {
          return
        }
        obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
        _field = estado
      }
    } )
    const validateEstado = () => {
      let isValid = empty( _field ) || validStates.includes( _field )
      obj.errors = Object.assign( {}, obj.errors, { [ field ]: isValid ? '' : INVALID_STATE } )
      return isValid
    }
    FactoryHelper.validatorMixin( { object: obj, field, validator: validateEstado } )
    obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
  },
  cidade: SharedFields.text( { setter: TitleClass.transform, validator: data => {
    const INVALID_LONG_CITY = `Tamanho máximo 40 caracteres`
    let isValid = empty( data.value ) || data.value.length <= 40 && data.value.length >= 2
    data.obj.errors = Object.assign( {}, data.obj.errors, { [ data.field ]: isValid ? '' : data.value.length < 2 ? INVALID_FIELD_MIN_SIZE : INVALID_LONG_CITY } )
    return isValid
  } } ),
  bairro: SharedFields.text( { setter: TitleClass.transform, validator: data => {
    const INVALID_LONG_NEIGHBORHOOD = `Tamanho máximo 50 caracteres`
    let isValid = empty( data.value ) || data.value.length <= 50 && data.value.length >= 2
    data.obj.errors = Object.assign( {}, data.obj.errors, { [ data.field ]: isValid ? '' : data.value.length < 2 ? INVALID_FIELD_MIN_SIZE : INVALID_LONG_NEIGHBORHOOD } )
    return isValid
  } } ),
  rua: SharedFields.text( { setter: TitleClass.transform, validator: data => {
    const INVALID_LONG_STREET = `Tamanho máximo 90 caracteres`
    let isValid = empty( data.value ) || data.value.length <= 90
    data.obj.errors = Object.assign( {}, data.obj.errors, { [ data.field ]: isValid ? '' : INVALID_LONG_STREET } )
    return isValid
  } } ),
  numero: SharedFields.text( { validator: data => {
    const INVALID_LONG_NUMBER = `Tamanho máximo 5 dígitos`
    let isValid = empty( data.value ) || data.value.length <= 5
    data.obj.errors = Object.assign( {}, data.obj.errors, { [ data.field ]: isValid ? '' : INVALID_LONG_NUMBER } )
    return isValid
  } } ),
  complemento: SharedFields.text( { validator: data => {
    const INVALID_LONG_COMPLEMENT = `Tamanho máximo 50 caracteres`
    let isValid = empty( data.value ) || data.value.length <= 50
    data.obj.errors = Object.assign( {}, data.obj.errors, { [ data.field ]: isValid ? '' : INVALID_LONG_COMPLEMENT } )
    return isValid
  } } ),
  pais: SharedFields.text( {} )
}

export default FieldsMixins
