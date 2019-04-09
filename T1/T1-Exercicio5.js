class Entrevistado {
  constructor(codigo, sexo, idade, quantidadeLivros) {
    this.codigo = codigo;
    this.sexo = sexo;
    this.idade = idade;
    this.quantidadeLivros = quantidadeLivros;
  }

  mostrarDados() {
    console.log(`[${this.codigo}] Sexo: ${this.sexo}; Idade: ${this.idade}; Quantidade de Livros Lidos: ${this.quantidadeLivros}`);
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function gerarSexo() {
  return generateRandomNumber(0, 1) === 0 ? 'M' : 'F';
}

function mostrarTudoArray(array) {
  for(let pessoa of array) {
    pessoa.mostrarDados();
  }
}

function criarArrayEntrevistados(quantidade) {
  let entrevistados = [];

  for(let i = 1; i <= quantidade; i++) {
    let codigo = i;
    let sexo = gerarSexo();
    let idade = generateRandomNumber(5, 50);
    let quantLivros = generateRandomNumber(0, 10);

    entrevistados.push(new Entrevistado(codigo, sexo, idade, quantLivros));

  }

  return entrevistados;
}

let entrevistados = criarArrayEntrevistados(10);
mostrarTudoArray(entrevistados);

console.log('\n');

// -------------------------------------------------------------

let menores10Anos = entrevistados.filter(entrevistado => entrevistado.idade < 10);

let quantLivrosMenores10Anos = menores10Anos.reduce((accumulator, currentValue) => accumulator + currentValue.quantidadeLivros, 0);

console.log('--- Menores de 10 anos ---');
mostrarTudoArray(menores10Anos);

console.log(`Quantidade de livros lidos por menores de 10 anos: ${quantLivrosMenores10Anos}\n`);

// -------------------------------------------------------------

let mulheres = entrevistados.filter(entrevistado => entrevistado.sexo === 'F');

let mulheresMin5Livros = mulheres.filter(entrevistado => entrevistado.quantidadeLivros >= 5);
let quantMulheresMin5Livros = mulheresMin5Livros.length;

console.log('--- Mulheres que leram 5 livros ou mais ---');
mostrarTudoArray(mulheresMin5Livros);

console.log(`Quantidade de mulheres que leram 5 livros ou mais: ${quantMulheresMin5Livros}\n`);

// --------------------------------------------------------------

let homens = entrevistados.filter(entrevistado => entrevistado.sexo === 'M');

let homensMenos5Livros = homens.filter(entrevistado => entrevistado.quantidadeLivros < 5);

function average(array) {
    return array.reduce(function(sum, value) {
        return sum + value.idade;
    }, 0) / array.length;
}

let mediaIdadeHomensMenos5Livros = average(homensMenos5Livros);

console.log('--- Homens que leram menos que 5 livros ---');
mostrarTudoArray(homensMenos5Livros);

console.log(`Media de idade de homens que leram menos que 5 livros: ${mediaIdadeHomensMenos5Livros}\n`);

// -------------------------------------------------------------

let pessoasNaoLeram = entrevistados.filter(entrevistado => entrevistado.quantidadeLivros === 0);

let numPessoasNaoLeram = pessoasNaoLeram.length;
let totalEntrevistados = entrevistados.length;

let percentualPessoasNaoLeram = (numPessoasNaoLeram * 100) / totalEntrevistados;

console.log('--- Pessoas que nao leram livros ---');
mostrarTudoArray(pessoasNaoLeram);

console.log(`Percentual de pessoas que nao leram livros: ${percentualPessoasNaoLeram}`);
