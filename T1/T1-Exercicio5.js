// npm install readline-sync
function readUserInput(questionText) {
    const readlineSync = require('readline-sync');

    // Wait for user's response.
    return readlineSync.question(questionText);
}

class Entrevistado {
  constructor(sexo, idade, quantidadeLivros) {
    this.sexo = sexo;
    this.idade = idade;
    this.quantidadeLivros = quantidadeLivros;
  }

  mostrarDados() {
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Quantidade de Livros Lidos: ${this.quantiadeLivros}`);
  }

}

let entrevistados = [];

for(let i = 1; i <= 3; i++) {
  let sexo = readUserInput('Informe o sexo do entrevistado: ');
  let idade = Number(readUserInput('Informe a idade do entrevistado: '));
  let quantLivros = Number(readUserInput('Informe a quantidade de livros lidos: '));

  console.log('\n');

  entrevistados.push(new Entrevistado(sexo, idade, quantLivros));
}

let menores10Anos = entrevistados.filter(entrevistado => entrevistado.idade < 10);

let quantLivrosMenores10Anos = menores10Anos.reduce(function(prev, next) {
  return prev.quantidadeLivros + next.quantidadeLivros;
});

console.log(menores10Anos);
console.log(`Quantidade de livros lidos por menores de 10 anos: ${quantLivrosMenores10Anos}\n`);

// -------------------------------------------------------------

let mulheres = entrevistados.filter(entrevistado => entrevistado.sexo === 'F');

let mulheresMin5Livros = mulheres.filter(entrevistado => entrevistado.quantidadeLivros >= 5);
let quantMulheresMin5Livros = mulheresMin5Livros.length;

console.log(mulheres);
console.log(mulheresMin5Livros);
console.log(`Quantidade de mulheres que leram pelo menos 5 livros: ${quantMulheresMin5Livros}\n`);

// ---------------------------------------------------------------

let homens = entrevistados.filter(entrevistado => entrevistado.sexo === 'M');

let homensMenos5Livros = homens.filter(entrevistado => entrevistado.quantidadeLivros < 5);

console.log(homens);
console.log(homensMenos5Livros);
