import FactoryHelper from '../../FactoryHelper'

const SharedFieldsMixins = {
  text: ( { validator, setter } ) => {
    return ( obj, field ) => {
      let _field = ''
      Object.defineProperty( obj, field, {
        enumerable: true,
        configurable: false,
        get: () => _field,
        set: value => {
          obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
          _field = setter ? setter( value ) : value
        }
      } )
      if ( validator ) {
        const validate = () => {
          return validator( { field, value: _field, obj } )
        }
        FactoryHelper.validatorMixin( { object: obj, field, validator: validate } )
      }
      obj.errors = Object.assign( {}, obj.errors, { [ field ]: '' } )
    }
  }
}

export default SharedFieldsMixins
