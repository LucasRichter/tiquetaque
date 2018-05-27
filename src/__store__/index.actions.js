export const TROCAR_ETAPA = 'TROCAR-ETAPA'
export const trocarEtapa = proximaEtapa => {
  return {
    type: TROCAR_ETAPA,
    proximaEtapa
  }
}

export const ETAPA_COMPLETA = 'ETAPA-COMPLETA'
export const etapaCompleta = etapaCompleta => {
  return {
    type: ETAPA_COMPLETA,
    etapaCompleta
  }
}

export const SELECIONAR_TIQUE_TAQUES = 'SELECIONAR-TIQUE-TAQUES'
export const selecionarTiqueTaques = tiquetaques => {
  return {
    type: SELECIONAR_TIQUE_TAQUES,
    tiquetaques
  }
}

export const SELECIONAR_FUNCIONARIOS = 'SELECIONAR-FUNCIONARIOS'
export const selecionarFuncionarios = funcionarios => {
  return {
    type: SELECIONAR_FUNCIONARIOS,
    funcionarios
  }
}

export const RECEBER_NOVIDADES = 'RECEBER-NOVIDADES'
export const saveReceverNovidades = receberNovidades => {
  return {
    type: RECEBER_NOVIDADES,
    receberNovidades
  }
}

export const SELECIONAR_TIPO_PESSOA = 'SELECIONAR-TIPO-PESSOA'
export const selecionarTipoPessoa = tipoPessoa => {
  return {
    type: SELECIONAR_TIPO_PESSOA,
    tipoPessoa
  }
}
