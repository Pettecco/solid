import SalaryCalculator from './SalaryCalculator';
import Employee from './Employee';
import ReportGenerator from './ReportGenerator';
import EmployeeRegistry from './EmployeeRegistry';
import { Roles } from './enum/roles';

const employeeRegistry = new EmployeeRegistry();
const salaryCalculator = new SalaryCalculator();
const reportGenerator = new ReportGenerator(
  employeeRegistry.employees,
  salaryCalculator
);

const employee1 = new Employee('José', Roles.Intern);
const employee2 = new Employee('Maria', Roles.Junior);
const employee3 = new Employee('João', Roles.MidLevel);

employeeRegistry.hireEmployee(employee1);
employeeRegistry.hireEmployee(employee2);
employeeRegistry.hireEmployee(employee3);

console.log(reportGenerator.generateJSON());

console.log(employee1);
salaryCalculator.calculate(employee1.role);
console.log(employee1);
