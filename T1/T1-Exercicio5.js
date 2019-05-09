function readUserInput(questionText) {
  const readlineSync = require('readline-sync');

  // wait for user's response
  return readlineSync.question(questionText);
}

// asks the user an question
function askTheUser(question) {
  return readUserInput(question);
}

class Entrevistado {
  constructor(sexo, idade, quantidadeLivros) {
    this.sexo = sexo;
    this.idade = Number(idade);
    this.quantidadeLivros = Number(quantidadeLivros);
  }

  mostrarDados() {
    console.log(`Sexo: ${this.sexo}; Idade: ${this.idade}; Quantidade de Livros Lidos: ${this.quantidadeLivros}`);
  }
}

// loops while the user inputs ages greater than zero
function getInputArray() {
  let entrevistados = [];
  let idade = askTheUser('Informe a idade do entrevistado: ');

  while(idade > 0) {
    let sexo = askTheUser('Informe o sexo do entrevistado (Informe M ou F) ');
    let quantLivros = askTheUser('Informe a quantidade de livros lidos por mes: ');
    entrevistados.push(new Entrevistado(sexo, idade, quantLivros));

    idade = askTheUser('Informe a idade do entrevistado: ');
  }

  return entrevistados;
}

let entrevistados = getInputArray();
entrevistados.map(entrevistado => entrevistado.mostrarDados());

console.log('\n');

// -------------------------------------------------------------

let menores10Anos = entrevistados.filter(entrevistado => entrevistado.idade < 10);
let quantLivrosMenores10Anos = menores10Anos.reduce((accumulator, currentValue) => accumulator + currentValue.quantidadeLivros, 0);

// console.log('--- Menores de 10 anos ---');
// menores10Anos.map(entrevistado => entrevistado.mostrarDados());

console.log(`Quantidade de livros lidos por menores de 10 anos: ${quantLivrosMenores10Anos}`);

// -------------------------------------------------------------

let mulheresMin5Livros = entrevistados.filter(entrevistado => entrevistado.sexo === 'F' && entrevistado.quantidadeLivros >= 5);

// console.log('--- Mulheres que leram 5 livros ou mais ---');
// mulheresMin5Livros.map(entrevistado => entrevistado.mostrarDados());

console.log(`Quantidade de mulheres que leram 5 livros ou mais: ${mulheresMin5Livros.length}`);

// --------------------------------------------------------------

let homensMenos5Livros = entrevistados.filter(entrevistado => entrevistado.sexo === 'M' && entrevistado.quantidadeLivros < 5);
let mediaIdadeHomensMenos5Livros = homensMenos5Livros.reduce((sum, value) => sum + value.idade, 0) / homensMenos5Livros.length;

// console.log('--- Homens que leram menos que 5 livros ---');
// homensMenos5Livros.map(entrevistado => entrevistado.mostrarDados());

console.log(`Media de idade de homens que leram menos que 5 livros: ${mediaIdadeHomensMenos5Livros}`);

// -------------------------------------------------------------

let pessoasNaoLeram = entrevistados.filter(entrevistado => entrevistado.quantidadeLivros === 0);
let percentualPessoasNaoLeram = (pessoasNaoLeram.length * 100) / entrevistados.length;

// console.log('--- Pessoas que nao leram livros ---');
// pessoasNaoLeram.map(entrevistado => entrevistado.mostrarDados());

console.log(`Percentual de pessoas que nao leram livros: ${percentualPessoasNaoLeram}`);