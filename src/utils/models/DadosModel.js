import Mixins from './dados'
import FactoryHelper from '../FactoryHelper'

const DadosModel = () => {
  const requiredFields = [ 'nome', 'telefone', 'email' ]
  let dados = {}
  Mixins.nome( dados, 'nome' )
  Mixins.cpf( dados, 'cpf' )
  Mixins.cnpj( dados, 'cnpj' )
  Mixins.email( dados, 'email' )
  Mixins.telefone( dados, 'telefone' )
  FactoryHelper.validateMixin( { object: dados, fields: requiredFields, requiredFields } )
  FactoryHelper.isValidMixin( { object: dados, requiredFields } )

  Object.defineProperty( dados, 'toServer', {
    enumerable: false,
    configurable: false,
    value: () => {
      return {
        nome: dados.nome,
        cpf: dados.cpf,
        cnpj: dados.cnpj,
        email: dados.email,
        telefone: dados.telefone
      }
    }
  } )

  return dados
}

export default DadosModel
