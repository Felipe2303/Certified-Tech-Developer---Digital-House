let Estudante = require('./estudante');

let curso = {
    nome: "Programação Web",
    notaMin: 7,
    faltaMax: 5,
    lista: [
        new Estudante('Niara', 0, [9.5, 8, 9, 10]),
        new Estudante('Everton', 1, [8.5, 7, 8.5, 6]),
        new Estudante('Felipe', 2, [7.5, 10, 7, 8]),
        new Estudante('Gessyka', 3, [10, 9, 8, 9]),
        new Estudante('Andrey', 4, [7, 10, 9, 7])
    ],
    adicionaAluno: function (aluno) {
        this.lista.push(aluno);
    }
}

let newAluno = new Estudante('Marcos', 2, [10, 8, 9, 7]);
curso.adicionaAluno(newAluno);

console.log(curso.lista);
