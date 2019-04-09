class Pessoa {
  constructor(identificador, idade, notaPeca) {
    this.identificador = Number(identificador);
    this.idade = Number(idade);
    this.notaPeca = Number(notaPeca);
  }

  mostrarDados() {
    console.log(`[${this.identificador}] Idade: ${this.idade}; Nota da Peca: ${this.notaPeca}`);
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function mostrarTudoArray(array) {
  for(let pessoa of array) {
    pessoa.mostrarDados();
  }
}

function criarArrayPessoas(quantidade) {
  let pessoas = [];

  for(let i = 1; i <= quantidade; i++) {
    let identificador = i;
    // let idade = readUserInput('Informe a idade: ');
    let idade = generateRandomNumber(15, 50);
    // let notaPeca = readUserInput('Informe a nota da peca: ');
    let notaPeca = generateRandomNumber(0, 10);

    pessoas.push(new Pessoa(identificador, idade, notaPeca));

  }

  return pessoas;
}

let pessoas = criarArrayPessoas(10);

let quantidadeRespostas10 = pessoas.filter(pessoa => pessoa.notaPeca === 10).length;

console.log(`Quantidade de respostas 10: ${quantidadeRespostas10}`);
