import Employee from './Employee';

export default class EmployeeRegistry {
  private _employees: Employee[];
  protected baseSalary: number;

  constructor(baseSalary: number = 1000) {
    this._employees = [];
    this.baseSalary = baseSalary;
  }

  hireEmployee(employee: Employee) {
    this._employees.push(employee);
  }

  fireEmployee(employeeToRemove: Employee) {
    this._employees = this._employees.filter(
      employee => employee !== employeeToRemove
    );
  }

  get employees() {
    return this._employees;
  }
}
