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