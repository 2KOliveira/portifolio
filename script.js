class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.cargo}.`);
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, departamento) {
    super(nome, idade, "Gerente");
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, linguagem) {
    super(nome, idade, "Desenvolvedor");
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}.`);
  }
}

// Criar instâncias de um gerente e de um desenvolvedor
const gerente1 = new Gerente("Kauã", 22, "TI");
const dev1 = new Desenvolvedor("Andrade", 30, "JavaScript");

// Chamar os métodos apropriados para cada funcionário
gerente1.seApresentar();
gerente1.gerenciar();

dev1.seApresentar();
dev1.programar();