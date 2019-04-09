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

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function mostrarTudoArray(array) {
  for(let produto of array) {
    produto.mostrarDados();
  }
}

function criarArrayProdutos(quantidade) {
  let produtos = [];

  for(let i = 1; i <= quantidade; i++) {
    let id = i;
    let valor = generateRandomNumber(30, 300);
    let percentualAumento = generateRandomNumber(0, 20);

    produtos.push(new Produto(id, valor, percentualAumento));
  }

  return produtos;
}

let produtos = criarArrayProdutos(5);
mostrarTudoArray(produtos);

// ---------------------------------------------------------------

