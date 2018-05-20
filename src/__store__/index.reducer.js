import { DADOS, ENDERECO, PLANO } from '../utils/prefixes'
import dados from './dados/dados.reducer'
import endereco from './endereco/endereco.reducer'
import plano from './plano/plano.reducer'

const initialState = {
  tiquetaques: 0,
  funcionarions: 30,
  plano: {},
  dados: {},
  endereco: {}
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
    case PLANO:
      return Object.assign( {}, state, { plano: plano( state.plano, action ) } )
    default:
      return state
  }
}
