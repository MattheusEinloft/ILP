// npm install readline-sync
function readUserInput(questionText) {
    const readlineSync = require('readline-sync');

    // Wait for user's response.
    return readlineSync.question(questionText);
}

class Entrevistado {
  constructor(codigo, sexo, idade, quantidadeLivros) {
    this.codigo = codigo;
    this.sexo = sexo;
    this.idade = idade;
    this.quantidadeLivros = quantidadeLivros;
  }

  mostrarDados() {
    console.log(`[${this.codigo}] Sexo: ${this.sexo}, Idade: ${this.idade}, Quantidade de Livros Lidos: ${this.quantidadeLivros}`);
  }
}

function mostrarTodosArray(array) {
  for(let pessoa of array) {
    pessoa.mostrarDados();
  }
}

let entrevistados = [];

for(let i = 1; i <= 3; i++) {
  let codigo = i;
  let sexo = readUserInput('Informe o sexo do entrevistado: ');
  let idade = Number(readUserInput('Informe a idade do entrevistado: '));
  let quantLivros = Number(readUserInput('Informe a quantidade de livros lidos: '));

  console.log('\n');

  entrevistados.push(new Entrevistado(codigo, sexo, idade, quantLivros));
}

console.log('--- Todos entrevistados ---');
mostrarTodosArray(entrevistados);

let menores10Anos = entrevistados.filter(entrevistado => entrevistado.idade < 10);

// Consertar isso aqui (nao funciona com somente 1 menor de 10 anos)
let quantLivrosMenores10Anos = menores10Anos.reduce(function(prev, next) {
  return prev.quantidadeLivros + next.quantidadeLivros;
});

console.log('--- Menores de 10 anos ---');
mostrarTodosArray(menores10Anos);

console.log(`Quantidade de livros lidos por menores de 10 anos: ${quantLivrosMenores10Anos}\n`);

// -------------------------------------------------------------

let mulheres = entrevistados.filter(entrevistado => entrevistado.sexo === 'F');

let mulheresMin5Livros = mulheres.filter(entrevistado => entrevistado.quantidadeLivros >= 5);
let quantMulheresMin5Livros = mulheresMin5Livros.length;

console.log('--- Mulheres que leram 5 livros ou mais ---');
mostrarTodosArray(mulheresMin5Livros);

console.log(`Quantidade de mulheres que leram pelo menos 5 livros: ${quantMulheresMin5Livros}\n`);

// ---------------------------------------------------------------

let homens = entrevistados.filter(entrevistado => entrevistado.sexo === 'M');

let homensMenos5Livros = homens.filter(entrevistado => entrevistado.quantidadeLivros < 5);

console.log('--- Homens que leram menos que 5 livros ---');
mostrarTodosArray(homensMenos5Livros);
