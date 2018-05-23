import { DADOS, ENDERECO, MODELO } from '../utils/prefixes'
import dados from './dados/dados.reducer'
import endereco from './endereco/endereco.reducer'
import modelo from './modelo/modelo.reducer'
import { TROCAR_ETAPA } from './index.actions'

const initialState = {
  tiquetaques: 0,
  funcionarions: 30,
  modelo: {},
  dados: {},
  endereco: {},
  etapaAtual: 1,
}

export default function preorder( state = initialState, action ) {
  if ( !action ) {
    return state
  }

  let prefix = action.type.split( '_' )[ 0 ]
  switch ( prefix ) {
    case DADOS:
      return Object.assign( {}, state, { dados: dados( state.dados, action ) } )
    case ENDERECO:
      return Object.assign( {}, state, { endereco: endereco( state.endereco, action ) } )
    case MODELO:
      return Object.assign( {}, state, { modelo: modelo( state.modelo, action ) } )
    default:
      switch ( action.type ) {
        case TROCAR_ETAPA:
          return Object.assign( {}, state, { etapaAtual: action.proximaEtapa } )
        default:
          return state
      }
  }
}
