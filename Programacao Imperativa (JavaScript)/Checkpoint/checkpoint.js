//1
function loopDePares(num) {
    for (let i = 0; i <= 100; i++) {
        let novoNumero = i + num;
        if  ((novoNumero)  % 2 == 0) {
            console.log("O número "+ novoNumero + " é par");
            
        }
        else {
            console.log(i);
        }
        
    }    
}
 (loopDePares(5));

 //2
 console.log("-----------");


    function loopDeImpares(num, palavra) {
        for (let i = 0; i <= 100; i++) {
            let novoNumero = i + num;
            if  ((novoNumero)  % 2 == 1) {
                console.log(palavra);
                
            }
            else {
                console.log(i);
            }
            
        }    
    }

loopDeImpares(3, "imprime")



//3
function soma(num) {
    let array = []
    for (let i = 0; i <= num; i++) {
        array.push(i);
        
    }

    let soma = array.reduce((acc, el) => acc + el);
    console.log(soma);
} 

soma(8)

//4
function newArray(num) {
    let array = []
    for (let i = 0; i <= num; i++) {
        array.push(i);
        
    }
    console.log(array);
    
    
}
newArray(5)


//5
function split(texto) {
    let arrayTexto = [];
    for (let i = 0; i < texto.length; i++) {
        arrayTexto.push(texto[i]);
        
    }
    console.log(arrayTexto);
}
console.log(split("tchau"));

//6
function moverZero(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0) {
            arr.push(arr.splice(i, 1)[0]);
        }
    }
    console.log(arr);
}
let arr = [0, 3, "hello", true, 0, 5, 4];
moverZero(arr)

//7

function arrayHandler(arrayA, arrayB) {
    for (i in arrayA) {
      console.log("Eu sou " + arrayA[i] + ", vocalista da Banda " + arrayB[i]);
    }
  }
  
  let arrayX = ["Freedie Mercury", "Bono", "David Coverdale", "Robert Plant"];
  let arrayY = ["Queen", "U2", "Whitesnake", "Led Zeppelin"];
  
  arrayHandler(arrayX, arrayY);

  //8

  function arrayObjects(number) {
    let array = [];
    for (let i = 1; i <= number; i++) {
      array.push({ valor: i });
    }
    console.log(array);
  }
  
  arrayObjects(5);

  //9

  function arrayObjectsTwo(numero, palavra) {
    let array = [];
    for (let i = 1; i <= numero; i++) {
      array.push({ [palavra]: i });
    }
    console.log(array);
  }
  
  arrayObjectsTwo(5, "Teste");
  