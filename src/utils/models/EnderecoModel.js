import FactoryHelper from '../FactoryHelper'
import Mixins from './endereco'
import { normalizeNumberString } from '../formatters'
import { isEmptyObject } from '../validators'

const EnderecoModel = () => {
  let requiredFields = [ 'cep', 'estado', 'cidade', 'bairro', 'rua', 'numero' ]
  let fields = requiredFields.concat( 'complemento', 'pais' )

  let endereco = {}
  Mixins.cep( endereco, 'cep' )
  Mixins.estado( endereco, 'estado' )
  Mixins.cidade( endereco, 'cidade' )
  Mixins.bairro( endereco, 'bairro' )
  Mixins.rua( endereco, 'rua' )
  Mixins.pais( endereco, 'pais' )
  Mixins.numero( endereco, 'numero' )
  Mixins.complemento( endereco, 'complemento' )

  FactoryHelper.validateMixin( { object: endereco, fields, requiredFields } )
  FactoryHelper.isValidMixin( { object: endereco, requiredFields } )

  Object.defineProperty( endereco, 'fromProps', {
    enumerable: false,
    configurable: false,
    value: props => {
      let newEndereco = EnderecoModel()
      if ( !isEmptyObject( props ) ) {
        newEndereco.cep = props.cep || ''
        newEndereco.estado = props.uf || ''
        newEndereco.cidade = props.localidade || ''
        newEndereco.bairro = props.bairro || ''
        newEndereco.rua = props.logradouro || ''
        newEndereco.numero = props.numero || ''
        newEndereco.complemento = props.complemento || ''
      }
      return newEndereco
    }
  } )
  Object.defineProperty( endereco, 'toServer', {
    enumerable: false,
    configurable: false,
    value: () => {
      return {
        rua: endereco.rua,
        uf: endereco.estado,
        bairro: endereco.bairro,
        complemento: endereco.complemento,
        cidade: endereco.cidade,
        numero: endereco.numero,
        cep: normalizeNumberString( endereco.cep ),
        ibge: endereco.ibge
      }
    }
  } )

  return endereco
}

export default EnderecoModel
