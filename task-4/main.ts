interface Payment {
  value: number;
  pay(): void;
}

class CheckPayment implements Payment {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  pay(): void {
    console.log(`O pagamento de ${this.value} será feito por cheque.`);
  }
}

class CashPayment implements Payment {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  pay(): void {
    console.log(`O pagamento de ${this.value} será feito por dinheiro.`);
  }
}

class PixPayment implements Payment {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  pay(): void {
    console.log(`O pagamento de ${this.value} será feito por pix.`);
  }
}

const checkPayment = new CheckPayment(100);
checkPayment.pay();

const cashPayment = new CashPayment(200);
cashPayment.pay();

const pixPayment = new PixPayment(300);
pixPayment.pay();
