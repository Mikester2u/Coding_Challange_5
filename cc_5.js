//U22562170

class Employee { //Employee class with constructor console logging the name and salary
    constructor (name, salary) {
        this.name = name;
        this.salary = salary;
        console.log("Employee Name: " + name + ", Monthly Salary: " + salary);

    }

    annualSalary() { //method to return annual salary 
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor (name, salary, department) {
        super(name, salary);
        this.department = department;
    }

   annualSalary() {
    const baseAnnualSalary = super.annualSalary();
    const bonus = baseAnnualSalary * 0.15;
    const totalAnnualSalary = baseAnnualSalary + bonus;

    console.log("Bonus for " + name + ", " + bonus );
    console.log("Total Annual Salary for " + name + "including bonus, " + totalAnnualSalary);
    return totalAnnualSalary;
   } 
}
