import { MODELO } from '../../utils/prefixes'

export const MODELO_SELECIONAR_TIPO = `${MODELO}_SELECIONAR-TIPO`
export const selecionarTipo = tipo => {
  return {
    type: MODELO_SELECIONAR_TIPO,
    tipo,
  }
}

export const MODELO_SELECIONAR_PLANO = `${MODELO}_SELECIONAR-PLANO`
export const selecionarPlano= plano => {
  return {
    type: MODELO_SELECIONAR_TIPO,
    plano,
  }
}
