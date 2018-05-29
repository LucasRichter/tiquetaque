import uuid from 'uuid/v4'

const Firebase = {
  salvarEmailAvisoDisponivel: email => {
    let id = uuid()
    firebase.database().ref( `/aviso-email-disponivel/${id}` ).set( {
      email
    } )
  },
  salvarPreorder: ( preorder ) => {
    let id = uuid()
    firebase.database().ref( `/preorder/${id}` ).set( preorder )
  },
  salvarContato: contato => {
    let id = uuid()
    firebase.database().ref( `/contato/${id}` ).set( contato )
  },
  salvarIndicado: indicado => {
    let id = uuid()
    firebase.database().ref( `/indicados/${id}` ).set( { indicado } )
  },
}

export default Firebase
