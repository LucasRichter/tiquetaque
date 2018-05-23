import { MODELO_SELECIONAR_TIPO, MODELO_SELECIONAR_PLANO } from './modelo.actions'

export const initialState = {
  tipo: '',
  plano: ''
}

export default function modelo( state = initialState, action ) {
  if ( !action.type ) {
    return state
  }

  switch ( action.type ) {
    case MODELO_SELECIONAR_TIPO:
      return Object.assign( {}, state, { tipo: action.tipo } )
    case MODELO_SELECIONAR_PLANO:
      return Object.assign( {}, state, { plano: action.plano } )
    default:
      return state
  }
}
