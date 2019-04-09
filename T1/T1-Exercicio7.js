class Aluno {
  constructor(identificador, serie, quantidadeLivrosPorMes, gostaRedacao) {
    this.identificador = Number(identificador);
    this.serie = Number(serie);
    this.quantidadeLivrosPorMes = Number(quantidadeLivrosPorMes);
    this.gostaRedacao = gostaRedacao;
  }

  mostrarDados() {
    console.log(`[${this.identificador}] Serie: ${this.serie}; Livros por mes: ${this.quantidadeLivrosPorMes}; Gosta de redacao: ${this.gostaRedacao}`);
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

function gerarGostoRedacao() {
  return generateRandomNumber(0, 1) === 0 ? 'Nao' : 'Sim';
}

function criarArrayAlunos(quantidade) {
  let alunos = [];

  for(let i = 1; i <= quantidade; i++) {
    let identificador = i;
    let serie = generateRandomNumber(1, 4);
    let quantidadeLivrosPorMes = generateRandomNumber(0, 10);
    let gostaRedacao = gerarGostoRedacao();

    alunos.push(new Aluno(identificador, serie, quantidadeLivrosPorMes, gostaRedacao));

  }

  return alunos;
}

let alunos = criarArrayAlunos(5);
mostrarTudoArray(alunos);

console.log('\n');

// ---------------------------------------------------------------

let alunos3Serie = alunos.filter(aluno => aluno.serie === 3);

console.log('--- Alunos Terceira Serie ---');
mostrarTudoArray(alunos3Serie);

console.log(`Quantidade de alunos da terceira serie: ${alunos3Serie.length}`);

// ---------------------------------------------------------------

let alunos4Serie = alunos.filter(aluno => aluno.serie === 4);


