import SalaryCalculator from './SalaryCalculator';
import Employee from './Employee';

export default class ReportGenerator {
  constructor(
    private _employees: Employee[],
    private salaryCalculatorService: SalaryCalculator
  ) {}

  generateJSON() {
    const report = this._employees.map(employee => {
      return {
        name: employee.name,
        role: employee.role,
        salary: this.salaryCalculatorService.calculate(employee.role),
      };
    });

    return JSON.stringify(report);
  }
}
