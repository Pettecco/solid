# Tipos de Acoplamento

No desenvolvimento de software, a busca por um baixo acoplamento é essencial para criar sistemas flexíveis e de fácil manutenção, uma medida de qualidade do software.

O acoplamento, que representa a dependência entre os diversos módulos ou componentes de um sistema, pode tornar o código complexo e difícil de modificar quando não é adequadamente gerenciado.

Acoplamento, no contexto da engenharia de software, refere-se ao grau de dependência entre diferentes partes de um sistema. Quanto maior o acoplamento entre componentes, mais forte é a interdependência entre eles.

**Principais tipos de acoplamento:**

1 - Data Coupling (Acoplamento de dados)

Ocorre quando um módulo depende apenas das estruturas de dados específicas de outro.
Isso significa que os módulos são independentes uns dos outros e só há uma dependência nos tipos de dados sendo passados entre os módulos.

```typescript
class User {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }
}

class UserManager {
  constructor(private user: User) {}

  showUserName(): void {
    console.log(this.user.getName());
  }
}

// Utilização dos Módulos A e B
const user = new User('Ana');
const userManager = new UserManager(user);
userManager.showUserName();
```

2 - Stamp Coupling (Acoplamento por Carimbo):

Refere-se a uma forma de acoplamento de dados na qual os módulos compartilham muitos campos em uma estrutura de dados complexa, mas cada módulo usa apenas um subconjunto desses campos.

```typescript
// Módulo A
class Order {
  constructor(
    private id: number,
    private description: string,
    private value: number
  ) {}

  getId(): number {
    return this.id;
  }
}

// Módulo B
class OrderManager {
  constructor(private order: Order) {}

  showOrderId(): void {
    console.log(this.order.getId());
  }
}

// Utilização dos Módulos A e B
const order = new Order(1, 'Product A', 100);
const orderManager = new OrderManager(order);
orderManager.showOrderId();
```

Neste exemplo, o `OrderManager` depende de um objeto `Order` que possui uma estrutura de dados complexa, mas apenas usa um subconjunto específico de campos desse objeto (`id`). Isso demonstra um acoplamento por carimbo.

3 - Control Coupling (Acoplamento de Controle):

Envolve a dependência entre módulos devido ao compartilhamento de informações de controle, como valores de flags ou indicadores que afetam o fluxo de execução do programa.

Quando os módulos se relacionam ou se comunicam de forma organizada, compartilhando dados de maneira coordenada, isso é conhecido como acoplamento de controle. Esse tipo de acoplamento implica que um módulo exerce controle sobre o fluxo de dados ou informações entre os demais, direcionando as instruções sobre como proceder.

```typescript
// Módulo A
class PaymentProcessor {
  processPayment(status: boolean): void {
    if (status) {
      console.log('Payment processed successfully.');
    } else {
      console.log('Failed to process payment.');
    }
  }
}

// Módulo B
class ShoppingCart {
  constructor(private processor: PaymentProcessor) {}

  completePurchase(status: boolean): void {
    this.processor.processPayment(status);
  }
}

// Utilização dos Módulos A e B
const processor = new PaymentProcessor();
const cart = new ShoppingCart(processor);
cart.completePurchase(true);
```

Neste exemplo, o `ShoppingCart` depende do `PaymentProcessor` para determinar se a compra deve ser finalizada com sucesso ou não, com base no status do pagamento. Isso demonstra um acoplamento de controle.

4 - Common Coupling (Acoplamento Comum):

Ocorre quando dois ou mais módulos dependem de um terceiro módulo comum para realizar suas funções. Isso cria uma forte interdependência entre os módulos, tornando o sistema mais difícil de ser modularizado e mantido.

```typescript
// Módulo A
class Log {
  registrarMensagem(mensagem: string): void {
    console.log(`[LOG] ${mensagem}`);
  }
}

// Módulo B
class ServicoAutenticacao {
  constructor(private log: Log) {}

  autenticarUsuario(): void {
    // Lógica de autenticação
    this.log.registrarMensagem('Usuário autenticado com sucesso.');
  }
}

// Utilização dos Módulos A e B
const log = new Log();
const servicoAutenticacao = new ServicoAutenticacao(log);
servicoAutenticacao.autenticarUsuario();
```

Neste exemplo, o `ServicoAutenticacao` depende do `Log` para registrar mensagens de log durante o processo de autenticação. Ambos os módulos compartilham a mesma dependência do `Log`, demonstrando um acoplamento comum.

5 - Content Coupling (Acoplamento de Conteúdo):

É o tipo mais forte de acoplamento, onde um módulo depende diretamente da implementação interna de outro módulo, acessando e manipulando suas variáveis internas.

```typescript
// Módulo A
class Calculator {
  private result: number = 0;

  add(a: number, b: number): void {
    this.result = a + b;
  }

  getResult(): number {
    return this.result;
  }
}

// Módulo B
class Logger {
  private calculator: Calculator;

  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  logResult(): void {
    console.log(`Operation result: ${this.calculator.getResult()}`);
  }
}

// Utilização dos Módulos A e B
const calculator = new Calculator();
calculator.add(2, 3);
const logger = new Logger(calculator);
logger.logResult();
```

Neste exemplo, o `Logger` depende diretamente da implementação interna da classe `Calculator`, usando e manipulando sua variável interna `result`. Isso demonstra um acoplamento de conteúdo, considerado o tipo mais forte.
