import Mixins from './dados'
import FactoryHelper from '../FactoryHelper'

const ContatoModel = () => {
  const requiredFields = [ 'nome', 'telefone', 'email', 'empresa', 'mensagem' ]
  let contato = {}
  Mixins.nome( contato, 'nome' )
  Mixins.email( contato, 'email' )
  Mixins.telefone( contato, 'telefone' )
  Mixins.nome( contato, 'empresa' )
  Mixins.nome( contato, 'mensagem' )
  FactoryHelper.validateMixin( { object: contato, fields: requiredFields, requiredFields } )
  FactoryHelper.isValidMixin( { object: contato, requiredFields } )

  Object.defineProperty( contato, 'toServer', {
    enumerable: false,
    configurable: false,
    value: () => {
      return {
        nome: contato.nome,
        email: contato.email,
        telefone: contato.telefone,
        empresa: contato.empresa,
        mensagem: contato.mensagem,
      }
    }
  } )

  return contato
}

export default ContatoModel
