// Boas Práticas de Engenharia de Software
// Inclui princípios SOLID, KISS, DRY e YAGNI

// ===================
// 1. KISS (Keep It Simple, Stupid)
// ===================

// Exemplo complexo
function calcularIdade(dataNascimento: Date): number {
  const agora = new Date();
  const diferenca = agora.getTime() - dataNascimento.getTime();
  const idade = Math.floor(diferenca / (1000 * 3600 * 24 * 365));
  return idade;
}

// Exemplo simplificado (KISS)
function calcularIdadeSimples(dataNascimento: Date): number {
  return new Date().getFullYear() - dataNascimento.getFullYear();
}

// ===================
// 2. DRY (Don't Repeat Yourself)
// ===================

// Funções reutilizáveis para evitar repetição de código
function calcularAreaRetangulo(altura: number, largura: number): number {
  return altura * largura;
}

function calcularPerimetroRetangulo(altura: number, largura: number): number {
  return 2 * (altura + largura);
}

const altura = 5;
const largura = 10;

console.log(`Área: ${calcularAreaRetangulo(altura, largura)}`);
console.log(`Perímetro: ${calcularPerimetroRetangulo(altura, largura)}`);

// ===================
// 3. YAGNI (You Aren't Gonna Need It)
// ===================

class Usuario {
  constructor(private nome: string, private email: string) {}

  setNome(nome: string): void {
    this.nome = nome;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  enviarEmail(destinatario: string, assunto: string, corpo: string): void {
    console.log(`Enviando email de ${this.email} para ${destinatario}`);
    console.log(`Assunto: ${assunto}`);
    console.log(`Corpo: ${corpo}`);
  }

  // Método adicional que pode violar YAGNI
  adicionarContato(email: string): void {
    console.log(`Adicionando ${email} aos contatos de ${this.nome}`);
  }
}

const usuario = new Usuario('João', 'joao@email.com');
usuario.enviarEmail('amigo@email.com', 'Saudações!', 'Olá, tudo bem?');
usuario.adicionarContato('outro@email.com'); // Exemplo de funcionalidade possivelmente desnecessária
