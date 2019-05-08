function readUserInput(questionText) {
    const readlineSync = require('readline-sync');

    // Wait for user's response.
    return readlineSync.question(questionText);
}

class Funcionario {
  constructor(codigo, horasTrabalhadas, numDependentes) {
    this.codigo = codigo;
    this.horasTrabalhadas = horasTrabalhadas;
    this.numDependentes = numDependentes;

    this.mostrarDados();
  }

  valorPorHoras() {
    return this.horasTrabalhadas * 12;
  }

  valorPorDependentes() {
    return this.numDependentes * 40;
  }

  salarioBruto() {
    return this.valorPorHoras() + this.valorPorDependentes();
  }

  descontoINSS() {
    return (this.salarioBruto() * 8.5) / 100;
  }

  descontoIR() {
    return (this.salarioBruto() * 5) / 100;
  }
  
  salarioLiquido() {
    return this.salarioBruto() - this.descontoINSS() - this.descontoIR();
  }

  mostrarDados() {
    console.log(`[Funcionario codigo ${this.codigo}]`);
    console.log(`Desconto INSS: ${this.descontoINSS()}`);
    console.log(`Desconto IR: ${this.descontoIR()}`);
    console.log(`Salario Liquido: ${this.salarioLiquido()}\n`);
  }

}

let funcionarios = [];

for(let i = 1; i <= 10; i++) {
  let codigo = readUserInput('Informe o codigo do funcionario');
  let horas = readUserInput('Informe o numero de horas trabalhadas');
  let depend = readUserInput('Informe o numero de dependentes');

  console.log('\n');

  funcionarios.push(new Funcionario(codigo, horas, depend));
}
