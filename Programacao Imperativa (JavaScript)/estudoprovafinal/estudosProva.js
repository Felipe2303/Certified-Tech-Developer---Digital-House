function Estudantes (nome, faltas, notas) {
    this.nome = nome;
    this.faltasMax = faltas;
    this.notas = notas;
    this.calcularMedia = function(){
        let media = ( this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3] ) / 4;
        return media ;
    }

    this.ausente = function(){
        this.faltas++;
    }
}


module.exports = Estudantes


