export default class Cliente {
  private id : string
  private nome: string
  private idade: number

  constructor(nome: string, idade: number, id: string = null) {
    this.nome = nome
    this.idade = idade
    this.id = id
  }

  // var id() =>{
  //   return this.id
  //}

  //get id(id: string = null) {
  //  return this.id
  //}

  static vazio(){
    return new Cliente('', 0)
  }

}