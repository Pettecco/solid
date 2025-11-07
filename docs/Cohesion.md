# Coesão em Desenvolvimento de Software

A **coesão** refere-se à forma como as responsabilidades são atribuídas aos diferentes componentes de um sistema.

- **Alta coesão:** componentes com responsabilidades bem definidas e relacionadas.
- **Baixa coesão:** componentes com responsabilidades divergentes ou pouco relacionadas.

A coesão influencia diretamente a **modularidade**, **manutenibilidade** e **escalabilidade** do software.

---

## Tipos de Coesão

### 1. Coesão Funcional

- Elementos de um módulo executam uma **única função específica**.
- Cada componente contribui diretamente para o objetivo principal.

**Exemplo:**

```typescript
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    return a / b;
  }
}
```

### 2. Coesão Sequencial

Operações são organizadas em uma sequência, onde a saída de uma é a entrada da próxima.

**Exemplo:**

```typescript
class OrderProcess {
  processOrder(order: Order): void {
    this.validateOrder(order);
    this.updateStock(order);
    this.sendConfirmation(order);
  }

  private validateOrder(order: Order): void {}
  private updateStock(order: Order): void {}
  private sendConfirmation(order: Order): void {}
}
```

### 3. Coesão Temporal

Operações estão relacionadas pelo tempo de execução. Elementos do módulo devem ser executados juntos devido a uma dependência temporal.

**Exemplo:**

```typescript
class TaskScheduler {
  scheduleTask(task: Task, time: string): void {}
  cancelTask(task: Task): void {}
  executeTask(task: Task): void {}
}
```

### 4. Coesão Lógica

Elementos estão relacionados por uma lógica específica ou manipulação de dados comuns.

**Exemplo:**

```typescript
class FormValidator {
  validateRequiredField(value: string): boolean {
    return value.trim() !== '';
  }

  validateEmailField(value: string): boolean {
    return /\S+@\S+\.\S+/.test(value);
  }

  validateForm(form: Form): boolean {
    return (
      this.validateRequiredField(form.name) &&
      this.validateEmailField(form.email)
    );
  }
}
```

### 5. Coesão Coincidental

Elementos agrupados sem relação significativa, geralmente por conveniência — este é o tipo de coesão menos desejável.

**Exemplo:**

```typescript
class Utility {
  generateReport(data: any): void {}
  sendEmail(recipient: string, message: string): void {}
  calculateTaxes(data: any): void {}
}
```
