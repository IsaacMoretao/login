import Cliente from "../../core/cliente";
import cliente from "../../core/cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepositorio{

  conversor = {
    toFirestore(cliente: Cliente) {
      return{
        nome: cliente.nome,
        idade: cliente.idade,
      } 
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.snapshotOptions){
     const dados = snapshot.data(options)
     return new Cliente(dados.nome, dados.idade, snapshot?.id)
    }
  }

  async salvar(cliente: cliente): Promise<cliente> {
    if(cliente?.id) {
     await this.colecao().doc(cliente.id).set(cliente)
     cliente
    } else {
     const docRef = await this.colecao().add(cliente)
     const doc = await docRef.get()
     return doc.data()
    }
  }
  async excluir(cliente: cliente): Promise<void> {
    return this.colecao().doc(cliente.id).delete()
  }
  async obterTodos (): Promise<cliente[]> {
    const query = await this.colecao().get()
    return query.docs.map(doc => doc.data()) ?? []
  }

  private colecao() {
    return firebase
    .firestore().collection('clientes')
    .withComverter(this.conversor)
  }
}