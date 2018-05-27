import { DADOS, ENDERECO, MODELO } from '../utils/prefixes'
import dados from './dados/dados.reducer'
import endereco from './endereco/endereco.reducer'
import modelo from './modelo/modelo.reducer'
import { TROCAR_ETAPA, ETAPA_COMPLETA, SELECIONAR_TIQUE_TAQUES, SELECIONAR_FUNCIONARIOS, RECEBER_NOVIDADES, SELECIONAR_TIPO_PESSOA } from './index.actions'
import { PLANOS, CNPJ } from '../utils/constants'
import { formatValor } from '../utils/formatters'

const initialState = {
  tiquetaques: 1,
  funcionarios: 30,
  modelo: {},
  dados: {},
  endereco: {},
  etapaAtual: 1,
  etapasCompletas: new Set(),
  ultimaEtapaCompleta: 0,
  receberNovidades: false,
  tipoPessoa: CNPJ,
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
        case SELECIONAR_TIPO_PESSOA:
          return Object.assign( {}, state, { tipoPessoa: action.tipoPessoa } )
        case TROCAR_ETAPA:
          return Object.assign( {}, state, { etapaAtual: action.proximaEtapa } )
        case RECEBER_NOVIDADES:
          return Object.assign( {}, state, { receberNovidades: action.receberNovidades } )
        case SELECIONAR_FUNCIONARIOS:
          return Object.assign( {}, state, { funcionarios: action.funcionarios } )
        case ETAPA_COMPLETA:
          return Object.assign( {}, state, { etapasCompletas: state.etapasCompletas.add( action.etapaCompleta ), ultimaEtapaCompleta: action.etapaCompleta } )
        case SELECIONAR_TIQUE_TAQUES:
          return Object.assign( {}, state, { tiquetaques: action.tiquetaques, funcionarios: action.tiquetaques * 30 } )
        default:
          return state
      }
  }
}

export function getValorTotal( state ) {
  let modelo = state.modelo
  if ( !modelo.tipo ) {
    return '0,00'
  }
  let valorPlano = PLANOS[ modelo.plano ][ modelo.tipo ]
  let funcionarios = state.funcionarios - ( state.tiquetaques * 30 )
  return formatValor( ( valorPlano * state.tiquetaques ) + ( funcionarios * 0.90 ) )
}
