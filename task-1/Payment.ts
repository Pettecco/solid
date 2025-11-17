import SalaryCalculator from './SalaryCalculator';
import Employee from './Employee';

export default class Payment {
  constructor(private salaryCalculatorService: SalaryCalculator) {}

  pay(employee: Employee) {
    const employeeSalary = this.salaryCalculatorService.calculate(
      employee.role
    );
    employee.balance = employeeSalary;
  }
}
