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
export const FIREBASE_API_KEY = 'AIzaSyCKG-uuKlaT5y1aM6dIv-LvmNvREG8CsOc'
export const FIREBASE_AUTH_DOMAIN = 'tique-taque-teste.firebaseapp.com'
export const FIREBASE_DATABASE_URL = 'https://tique-taque-teste.firebaseio.com'
export const FIREBASE_PROJET_ID = 'tique-taque-teste'
export const FIREBASE_STORAGE_BUCKET = 'tique-taque-teste.appspot.com'
export const FIREBASE_MESSAGING_SENDER_ID = '766880891163'
