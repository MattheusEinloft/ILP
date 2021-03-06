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

let pessoas = criarArrayPessoas(200);
pessoas.map(pessoa => pessoa.mostrarDados());

console.log('\n');

// --------------------------------------------------

let quantidadeRespostas10 = pessoas.filter(pessoa => pessoa.notaPeca === 10).length;

console.log(`Quantidade de respostas 10: ${quantidadeRespostas10}`);

// --------------------------------------------------

let mediaIdades = pessoas.reduce((sum, value) => sum + value.idade, 0) / pessoas.length;

console.log(`Media de idade das pessoas: ${mediaIdades}`);

// --------------------------------------------------

let pessoasResponderam5OuMenos = pessoas.filter(pessoa => pessoa.notaPeca <= 5);
let percentualRespostas5OuMenos = (pessoasResponderam5OuMenos.length * 100) / pessoas.length;

console.log(`Percentual de respostas 5 ou menos: ${percentualRespostas5OuMenos}`);

// --------------------------------------------------

let idadeMaior = Math.max(...(pessoas.map(pessoa => pessoa.idade)));
let pessoaMaisVelha = pessoas.find(pessoa => pessoa.idade === idadeMaior);

console.log(`Identificador da pessoa mais velha: ${pessoaMaisVelha.identificador}`);