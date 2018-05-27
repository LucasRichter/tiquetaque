import Fetch from './fetch'
import { VIA_CEP_URL } from './constants'
import { normalizeNumberString } from './formatters'

export const consultaCep = ( { cep } ) => {
  let fetch = new Fetch( {} )
  cep = normalizeNumberString( cep )
  if ( cep.lenght < 8 ) {
    return
  }
  return fetch.get( { url: `${VIA_CEP_URL}/${cep}/json/` } )
}
