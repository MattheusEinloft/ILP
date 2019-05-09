function readUserInput(questionText) {
  const readlineSync = require('readline-sync');

  // wait for user's response
  return readlineSync.question(questionText);
}

// asks the user an question
function askTheUser(question) {
  return readUserInput(question);
}

class Aluno {
  constructor(serie, quantidadeLivrosPorMes, gostaRedacao) {
    this.serie = Number(serie);
    this.quantidadeLivrosPorMes = Number(quantidadeLivrosPorMes);
    this.gostaRedacao = gostaRedacao;
  }

  mostrarDados() {
    console.log(`Serie: ${this.serie}; Livros por mes: ${this.quantidadeLivrosPorMes}; Gosta de redacao: ${this.gostaRedacao}`);
  }
}

// loops while the user inputs grades differents than zero
function getInputArray() {
  let alunos = [];
  let serie = askTheUser('Informe a serie do aluno: ');

  while(serie != 0) {
    let quantidadeLivrosPorMes = askTheUser('Informe a quantidade de livros lidos por mes: ');
    let gostaRedacao = askTheUser('O aluno gosta de fazer redacao? (Informe Sim ou Nao) ');
    alunos.push(new Aluno(serie, quantidadeLivrosPorMes, gostaRedacao));

    serie = askTheUser('Informe a serie do aluno: ');
  }

  return alunos;
}


let alunos = getInputArray();
alunos.map(aluno => aluno.mostrarDados());

console.log('\n');

// ---------------------------------------------------------------

let alunos3Serie = alunos.filter(aluno => aluno.serie === 3);

// console.log('--- Alunos Terceira Serie ---');
// alunos3Serie.map(aluno => aluno.mostrarDados());

console.log(`Quantidade de alunos da terceira serie: ${alunos3Serie.length}`);

// ---------------------------------------------------------------

let alunos4Serie = alunos.filter(aluno => aluno.serie === 4);

let maiorQuantLivros4Serie;
if (Array.isArray(alunos4Serie) && alunos4Serie.length) {
    // array exists and is not empty
    maiorQuantLivros4Serie = Math.max(...(alunos4Serie.map(aluno => aluno.quantidadeLivrosPorMes)));
}
else {
  maiorQuantLivros4Serie = 0;
}

// console.log('--- Alunos Quarta Serie ---');
// alunos4Serie.map(aluno => aluno.mostrarDados());

console.log(`Maior quantidade de livros lidos por um aluno da quarta serie: ${maiorQuantLivros4Serie}`);

// ---------------------------------------------------------------

let naoGostamRedacao3Serie = alunos.filter(aluno => aluno.gostaRedacao === 'Nao' && aluno.serie === 3);
let totalAlunos = alunos.length;

// console.log('--- Alunos Terceira Serie que nao gostam de redacao ---');
// naoGostamRedacao3Serie.map(aluno => aluno.mostrarDados());

let percentualNaoGostamRedacao3Serie = (naoGostamRedacao3Serie.length * 100) / totalAlunos;
console.log(`Porcentagem de alunos que nao gostam de redacao e que estao na terceira serie: ${percentualNaoGostamRedacao3Serie}`);