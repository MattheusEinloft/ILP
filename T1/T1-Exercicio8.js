function readUserInput(questionText) {
  const readlineSync = require('readline-sync');

  // wait for user's response
  return readlineSync.question(questionText);
}

// asks the user an question
function askTheUser(question) {
  return readUserInput(question);
}

class Produto {
  constructor(id, valor, percentualAumento) {
    this.id = Number(id);
    this.valor = Number(valor);
    this.percentualAumento = Number(percentualAumento);
  }

  novoValor() {
    return this.valor + ((this.valor * this.percentualAumento) / 100);
  }

  mostrarDados() {
    console.log(`[${this.id}] Valor: ${this.valor}; Percentual de aumento: ${this.percentualAumento}; Novo valor: ${this.novoValor()}`);
  }
}

// loops while the user inputs ids differents than zero
function getInputArray() {
  let produtos = [];
  let id = askTheUser('Informe o id do produto: ');

  while(id != 0) {
    let valor = askTheUser('Informe o valor do produto: ');
    let percentualAumento = askTheUser('Informe o percentual de aumento do produto: ');
    produtos.push(new Produto(id, valor, percentualAumento));

    id = askTheUser('Informe o id do produto: ');
  }

  return produtos;
}

let produtos = getInputArray();
produtos.map(produto => produto.mostrarDados());

// ---------------------------------------------------------------

console.log(`\nQuantidade de produtos mais caros que 100 e que tiveram aumento superior a 5%: ${produtos.filter(produto => produto.novoValor() > 100 && produto.percentualAumento > 5).length}`);

// ---------------------------------------------------------------

let naoAumento = produtos.filter(produto => produto.percentualAumento === 0);
let mediaNaoAumento = (naoAumento.reduce((sum, produto) => sum + produto.valor, 0) / naoAumento.length, 0);

console.log(`Media de valor dos produtos que nao sofreram aumento: ${mediaNaoAumento}`);

// ---------------------------------------------------------------

let maisCaro = Math.max(...(produtos.map(produto => produto.novoValor())));

console.log(`O valor do produto mais caro: ${maisCaro}`);