import { Roles } from './enum/roles';

export default class SalaryCalculator {
  protected baseSalary: number;

  constructor(baseSalary: number = 1000) {
    this.baseSalary = baseSalary;
  }

  calculate(role: Roles) {
    if (role === Roles.Intern) {
      return this.baseSalary * 1.2;
    } else if (role === Roles.Junior) {
      return this.baseSalary * 3;
    } else if (role === Roles.MidLevel) {
      return this.baseSalary * 5;
    } else if (role === Roles.Senior) {
      return this.baseSalary * 7;
    }
    return 0;
  }
}
