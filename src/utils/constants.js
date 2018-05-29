//Planos
export const PLANOS = {
  mensal: {
    wifi: 99,
    '3G': 149,
  },
  anual: {
    wifi: 89,
    '3G': 129,
  }
}

export const MODELOS = {
  wifi: {
    dataLancamento: 'Agosto 2018',
    preco: 89,
  },
  '3G': {
    dataLancamento: 'Dezembro 2018',
    preco: 129,
  },
}

//Classes
export const CLASS_CONTATO = 'form'
export const CLASS_TIQUE_TAQUE = 'home__tique-taque'
export const CLASS_PLANOS = 'planos'
export const CLASS_DUVIDAS = 'duvidas'

export const CNPJ = 'CNPJ'
export const CPF = 'CPF'
export const TIPOS_PESSOAS = [ CNPJ, CPF ]

export const validStates = [ 'AC', 'AL', 'AM', 'AP', 'BA', 'CE',
  'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB',
  'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC',
  'SE', 'SP', 'TO'
]

export const VIA_CEP_URL = 'https://viacep.com.br/ws'
export const FEEDBACK_MESSAGE_CONTATO = 'Sua mensagem foi enviada!  Em breve, entraremos em contato.'
export const FEEDBACK_MESSAGE_EMAIL_DISPONIVEL = 'Enviaremos um e-mail quando o aplicativo for lançado.'
export const FEEDBACK_MESSAGE_EMAIL_INDICADO = 'Enviaremos um e-mail quando o aplicativo for lançado.'
