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
    console.log(`Sexo: ${this.sexo}]`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Quantidade de Livros Lidos: ${this.quantiadeLivros}`);
  }

}

let entrevistados = [];

for(let i = 1; i <= 5; i++) {
  let sexo = readUserInput('Informe o sexo do entrevistado: ');
  let idade = readUserInput('Informe a idade do entrevistado: ');
  let quantLivros = readUserInput('Informe a quantidade de livros lidos: ');

  console.log('\n');

  entrevistados.push(new Entrevistado(sexo, idade, quantLivros));
}

let menores10Anos = entrevistados.filter(entrevistado => entrevistado.idade < 10);

console.log(menores10Anos);
