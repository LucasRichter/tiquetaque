import { capitalize } from '../utils/formatters'
import { empty, isEmptyObject, REQUIRED } from '../utils/validators'
import clone from 'clone'

const FactoryHelper = {
  isValidMixin: ( { object, requiredFields } ) => {
    Object.defineProperty( object, `isValid`, {
      enumerable: false,
      configurable: false,
      get: () => {
        let emptyRequiredFields = requiredFields.map( field => empty( object[ field ] ) ).reduce( ( acc, field ) => acc || field )
        return isEmptyObject( object.errors ) && !emptyRequiredFields
      }
    } )
  },
  validatorMixin: ( { object, field, validator } ) => {
    const fieldName = field === 'validate' ? field : `validate${capitalize( field )}`
    Object.defineProperty( object, fieldName, {
      enumerable: true,
      configurable: false,
      writable: false,
      value: validator
    } )
  },
  validateRequiredFields: ( { requiredFields, object } ) => {
    return requiredFields.map( f => {
      return !empty( object[ f ] )
    } ).reduce( ( f1, f2 ) => f1 && f2 )
  },
  clone: ( model, obj ) => {
    const copyProp = ( object, prop ) => {
      let descriptor = Object.getOwnPropertyDescriptor( obj, prop )
      if ( descriptor && ( descriptor.writable || descriptor.set ) ) {
        object[ prop ] = clone( obj[ prop ], undefined, undefined, undefined, true )
      }
      return object
    }
    let hasErrorsObject = false
    let copy = model()
    for ( let prop in obj ) {
      if ( prop === 'errors' ) {
        hasErrorsObject = true
      } else {
        copy = copyProp( copy, prop )
      }
      if ( hasErrorsObject ) {
        copy = copyProp( copy, 'errors' )
      }
    }
    return copy
  },
  assign: ( model, obj1, obj2 ) => {
    let copy = FactoryHelper.clone( model, obj1 )
    for ( let prop in obj2 ) {
      copy[ prop ] = clone( obj2[ prop ], undefined, undefined, undefined, true )
    }
    return copy
  },
  validateMixin: ( { object, fields, requiredFields } ) => {
    let validators = fields.map( field => {
      return `validate${capitalize( field )}`
    } )
    const validate = () => {
      if ( FactoryHelper.validateRequiredFields( { requiredFields, object } ) ) {
        /*
          Todos os campos obrigatórios foram preenchidos.
          Queremos retornar true ou false da validação dos valores informados
          e preencher o objeto de erros de acordo.
        */
        return validators.reduce( ( acc, validator ) => object[ validator ] ? acc && object[ validator ]() : true, true )
      } else {
        /*
          Existem campos obrigatórios que não foram preenchidos.
          Queremos popular o objeto de erros com valores inválidos dos campos
          e com a informação de que o campo é obrigatório caso ele esteja em branco.
          Queremos retornar false pois existem campos obrigatórios em branco.
        */
        for ( let validator of validators ) {
          if ( object[ validator ] ) {
            object[ validator ]()
          }
        }

        requiredFields.forEach( field => {
          if ( empty( object[ field ] ) ) {
            object.errors = Object.assign( {}, object.errors, { [ field ]: REQUIRED } )
          }
        } )
        return false
      }
    }
    FactoryHelper.validatorMixin( { object, field: 'validate', validator: validate } )
  }
}

export default FactoryHelper
