interface Employee {
    name: string;
    workload: number;
}

interface FullTimeEmployee extends Employee {
    salary: number;
    calculateSalary(): number;
    calculateProfitSharing(profit: number): number;
}

interface VolunteerEmployee extends Employee {
    writeReport(): void;
}

class FullTimeEmployee implements FullTimeEmployee {
    constructor(name: string, workload: number, salary: number) {
        this.name = name;
        this.workload = workload;
        this.salary = salary;
    }

    work(): void {
        console.log(`Me chamo ${this.name} e eu trabalho ${this.workload} horas por semana`);
    }

    calculateNetSalary(): number {
        const DISCOUNT_RATE = 0.2;
        const discount = this.salary * DISCOUNT_RATE;
        return this.salary - discount;
    }

    calculateProfitSharing(profit: number): number {
        return profit * this.salary;
    }
}

class VolunteerEmployee implements VolunteerEmployee {
    advisor: Employee;

    constructor(name: string, extensionWorkload: number, fullTimeEmployee: Employee) {
        this.name = name;
        this.workload = extensionWorkload;
        this.advisor = fullTimeEmployee;
    }

    writeReport(): void {
        console.log(`Me chamo ${this.name} e eu escrevo relatórios para o meu orientador ${this.advisor.name}`);
    }

    work(): void {
        console.log(`Me chamo ${this.name} e eu pesquiso ${this.workload} horas por semana para cumprir na minha graduação`);
    }
}

const fullTimeEmployee = new FullTimeEmployee("João", 40, 2400);
const volunteerEmployee = new VolunteerEmployee("Enzo", 20, fullTimeEmployee);

console.log("nome:", fullTimeEmployee.name);
console.log("salário bruto:", fullTimeEmployee.salary);
console.log("salário líquido:", fullTimeEmployee.calculateNetSalary());
console.log("salário com PL:", fullTimeEmployee.calculateProfitSharing(2.5), "\n");

console.log("nome:", volunteerEmployee.name);
volunteerEmployee.writeReport();
