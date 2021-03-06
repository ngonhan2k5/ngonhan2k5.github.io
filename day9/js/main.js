/* jshint esversion: 6 */
// Q1
(function(){
    "use strict";
    const person = {
        name: '',
        dateOfBirth: '',
        getName: function (){ return this.name; },
        setName: function (name){ this.name = name; },
        setDateOfBirth: function (date){ this.dateOfBirth = date; }
    };

    console.log(111, person);

    const john = Object.create(person);
    john.setName('John');
    john.setDateOfBirth(new Date("12/10/1998"));
    john.print = function(){
        console.log(`The person’s name is ${this.name}`);
        //console.log(`John was born on ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}`);
        console.log(`John was born on ${Intl.DateTimeFormat().format(this.dateOfBirth)}`);
    };

    john.print();

    // Q2
    const employee = Object.create(person);
    employee.Salary = '$0';
    employee.hireDate = new Date();

    employee.doJob = function (jobTitle){
        console.log(`${this.name} is a ${jobTitle} who earns ${this.Salary}`);
    };

    function Employee(name, salary){
        this.name = name;
        this.Salary = salary;
    }

    Employee.prototype = employee;

    const anna = new Employee('Ana', '$249,995.50');
    anna.doJob('Programmer');

    //Q3
    function Person(name, dob){
        this.name = name;
        this.dateOfBirth = dob;
        this.toString = function(){
            return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}}`;
        };
    }

    // Person.prototype.toString = function(){
    //     return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}}`;
    // };

    const peter = new Person('Peter', new Date("11/10/1985"));
    console.log(111,peter.toString());
    console.log(peter);

    // class Person {
        
    //     constructor(name){
    //         this.name = '';
    //         this.dateOfBirth = '';
    //     }

    //     getName(){
    //         return this.name;
    //     }

    //     setName(name){
    //         this.name = name;
    //     }


    // }

    // class Student extends Person {

    // }

})();