import FactoryHelper from '../FactoryHelper'
import Mixins from './endereco'
import { normalizeNumberString } from '../formatters'

const EnderecoModel = () => {
  let requiredFields = [ 'cep', 'estado', 'cidade', 'bairro', 'rua', 'numero' ]
  let fields = requiredFields.concat( 'complemento', 'ibge' )

  let endereco = {}
  Mixins.cep( endereco, 'cep' )
  Mixins.estado( endereco, 'estado' )
  Mixins.cidade( endereco, 'cidade' )
  Mixins.bairro( endereco, 'bairro' )
  Mixins.rua( endereco, 'rua' )
  Mixins.numero( endereco, 'numero' )
  Mixins.complemento( endereco, 'complemento' )
  Mixins.ibge( endereco, 'ibge' )

  FactoryHelper.validateMixin( { object: endereco, fields, requiredFields } )
  FactoryHelper.isValidMixin( { object: endereco, requiredFields } )

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
