const person = {
    firstName : 'Onick',
    lastName : 'Ahmed',
    Salary : 20000,
    getFullName : function(){
        console.log(this.firstName, this.lastName)
    },
    getPayment : function(charge, chanda, tax){
        return this.Salary = (this.Salary - (charge + chanda + tax))
    }
}

const person2 = {
    firstName : 'Nilima',
    lastName : 'Akther',
    Salary : 30000
}

// person.getPayment(300);
// person.getPayment(500);
// console.log(person.getFullName);
// console.log(person.Salary);

// // // // // // BIND // // // // // //
// const beton = person.getPayment.bind(person2);
// beton(2000);
// beton(3000);
// console.log(person2)

// // // // // CALL // // // // // //
// person.getPayment.call(person2, 3000, 750, 250);
// console.log(person2);

// // // // // // APPLY // // // // // //
person.getPayment.apply(person2, [2000, 750, 250]);
person.getPayment.apply(person2, [2000, 750, 250]);
console.log(person2);