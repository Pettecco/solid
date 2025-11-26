interface PayableContract {
  title: string;
  compensation(): number;
}

class CltContract implements PayableContract {
  private HOURLY_RATE_CLT = 24;
  private DAILY_HOURS_CLT = 8;
  title: string = 'CLT';

  compensation(): number {
    return this.HOURLY_RATE_CLT * this.DAILY_HOURS_CLT;
  }
}

class PjContract implements PayableContract {
  private HOURLY_RATE_PJ = 36;
  private DAILY_HOURS_PJ = 8;
  title: string = 'PJ';

  compensation(): number {
    return this.HOURLY_RATE_PJ * this.DAILY_HOURS_PJ;
  }
}

class Internship implements PayableContract {
  private HOURLY_RATE_INTERN = 14;
  private DAILY_HOURS_INTERN = 4;
  title: string = 'Internship';

  compensation(): number {
    return this.HOURLY_RATE_INTERN * this.DAILY_HOURS_INTERN;
  }
}

class Payroll {
  static readonly COMMERCIAL_MONTH_DAYS = 20;

  static calculateMonthlyNetSalary(employee: PayableContract): number {
    return employee.compensation() * this.COMMERCIAL_MONTH_DAYS;
  }
}

const cltEmployee = new CltContract();
const pjEmployee = new PjContract();
const internEmployee = new Internship();

console.log(`Sou ${cltEmployee.title} e meu salário líquido mensal é R$ ${Payroll.calculateMonthlyNetSalary(cltEmployee)}`)
console.log(`Sou ${pjEmployee.title} e meu salário líquido mensal é R$ ${Payroll.calculateMonthlyNetSalary(pjEmployee)}`)
console.log(`Sou ${internEmployee.title} e meu salário líquido mensal é R$ ${Payroll.calculateMonthlyNetSalary(internEmployee)}`)
