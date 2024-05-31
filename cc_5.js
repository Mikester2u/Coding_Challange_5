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

class Manager extends Employee { //class Manager extending class Employee
    constructor (name, salary, department) {
        super(name, salary);
        this.department = department;
    }

   annualSalary() { //calculating annual salary and displaying log
    const baseAnnualSalary = super.annualSalary();
    const bonus = baseAnnualSalary * 0.15;
    const totalAnnualSalary = baseAnnualSalary + bonus;

    console.log("Bonus for " + this.name + ", " + bonus );
    console.log("Total Annual Salary for " + this.name + " including bonus, " + totalAnnualSalary);
    return totalAnnualSalary;
   } 
}

// Instantiate Manager Objects 
const manager1 = new Manager("Bob Ross", 6600.00, "Digital Marketing");
const manager2 = new Manager("Debbie Little", 7205.00, "Finance");

manager1.annualSalary();
manager2.annualSalary();