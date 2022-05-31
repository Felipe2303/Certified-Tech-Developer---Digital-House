let array = [5, 6, 8];

let dobro = array.map(function(num) {
    return num*2
    
})

// console.log(dobro);

let maiores = [25, 26, 18, 15, 32]

let dezoitao = maiores.filter(function (idade) {
    return idade >= 18
    
})

// console.log(dezoitao);


let pares = [2, 4, 6, 8]

let impares = pares.map(function (num) {
    return num+1
    
})

console.log(impares);

let nomes = ['Maria', 'Maria', 'Joao', 'Isabela']

let maria = nomes.filter(function name(ela) {
    return ela == 'Maria'
    
})

console.log(maria);

let redu = [2, 4, 6, 8]

let grudado = redu.reduce((acumulador, num) => {
    return acumulador + " - " + num}

    console.log(grudado);

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”


// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.