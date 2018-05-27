import uuid from 'uuid/v4'

export default class Firebase {
  salvarEmailAvisoDisponivel( email ) {
    let id = uuid()
    firebase.database().ref( `/aviso-email-disponivel/${id}` ).set( { email } )
  }

  salvarPreorder( preorder ) {
    let id = uuid()
    firebase.database().ref( `/aviso-email-disponivel/${id}` ).set( preorder )
  }
}
