export const TROCAR_ETAPA = 'TROCAR-ETAPA'
export const trocarEtapa = proximaEtapa => {
  return {
    type: TROCAR_ETAPA,
    proximaEtapa
  }
}
