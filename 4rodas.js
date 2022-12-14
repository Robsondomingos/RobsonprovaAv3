class veiculo{
    constructor(rodas,combustivel,cor){
        this.rodas = rodas;
        this.combustivel = combustivel;
        this.cor = cor;
    }
    cor() {
        console.log('amarelo');
    }
    frear () {
        console.log('frear o veiculo');
    }
}
class Caminhao extends veiculo{
    constructor(rodas,combustivel,cor,comprimento){
        super(rodas,combustivel,cor);
        this.comprimento = comprimento;
    }
    frear (){
        console.log('frear');
    }
    acelarar (){
        console.log('Camihao acelerou com ' + this.rodas + ' rodas');
    }
}
const Mercedes = new Caminhao (4,'combustivel','cor',true);
console.log(Caminhao);
const BMW = new veiculo (4);
console.log(veiculo);