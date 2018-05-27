export default class Fetch {
  constructor( { headers } ) {
    this.headers = headers ? headers : new Headers()
    this.headers.append( 'Content-Type', 'application/json' )
  }

  fetch( { url, body, method } ) {
    const options = {
      method,
      headers: this.headers,
      body,
    }
    return fetch( url, options )
      .then( response => {
        if ( !response.ok ) {
          return Promise.reject( response )
        }
        return response
      } )
  }

  _fetch( { url, body, method } ) {
    return this.fetch( { url, body: JSON.stringify( body ), method } )
      .then( response => 'json' in response ? response.json() : {} )
      .catch( error => {
        return error.json()
          .then( json => {
            return Promise.reject( json )
          } )
      } )
  }

  get( { url, body } ) {
    return this._fetch( { url, body, method: 'GET' } )
  }

  post( { url, body } ) {
    return this._fetch( { url, body, method: 'POST' } )
  }

  patch( { url, body } ) {
    return this._fetch( { url, body, method: 'PATCH' } )
  }

  delete( { url, body } ) {
    return this.fetch( { url, body, method: 'DELETE' } )
      .then( response => response.text() )
  }
}
