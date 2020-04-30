/*jshint esversion: 6 */
// Q6
var count = (function () {
    var counter = 0;
    return {
        add: function () {
            return counter += 1;
        },
        reset: function () {
            return counter = 0;
        }
    };
})();

// Q8
var make_adder = function (inc) {
    var counter = 0;
    return function () {
            return counter += inc;
        };
};

var add5 = make_adder(5);
add5();add5();add5();

var add7 = make_adder(7);
add7();add7();add7();

// Q10
const Employee = (function () {
    let name, age, salary;

    const getAge = function () {
        return age || 0;
    };
    const getSalary = function () {
        return salary || 1;
    };

    const getName = function () {
        return name || '';
    };

    return {
        setAge: function (newAge) {
            return age = newAge;
        },
        setSalary: function (newSalary) {
            return salary = newSalary;
        },
        setName: function (newName) {
            return name = newname;
        },
        increaseSalary(percentage) {
            return this.setSalary(getSalary() * (1 + percentage / 100));
        },
        increaseAge() {
            return this.setAge(getAge() + 1);
        }

    };
}());

// Q11
Employee.address = '1030 Main St';
Employee.setAddress = function (newAddress){
    this.address = newAddress;
};

Employee.setAddress('1000 Bulinton');

console.log(Employee.address);
