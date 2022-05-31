let json = {
    "nome" : "Felipe",
    "email" : "felipe.estekmedical",
    "idade" : "24",
    "apelido" : "fumaca",
    "usuairo" : "Fee",
    "Filmes" : ["O procurado", "HP", "Lord"],

}

console.log(json.Filmes[0], json.nome)


let bolsa = {
    objeto : "Caneta",
    guardar : function () {
    console.log("Abrir a Mochila e guardar a : "+this.objeto)
    }
 


}

bolsa.guardar