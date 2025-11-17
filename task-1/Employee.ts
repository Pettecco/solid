import { Roles } from './enum/roles';

export default class Employee {
  public readonly name: string;
  private _role: Roles;
  private _balance: number;

  constructor(name: string, role: Roles) {
    this.name = name;
    this._role = role;
    this._balance = 0;
  }

  get role() {
    return this._role;
  }

  set role(role: Roles) {
    this._role = role;
  }

  get balance() {
    return this._balance;
  }

  set balance(salary: number) {
    this._balance += salary;
  }
}
