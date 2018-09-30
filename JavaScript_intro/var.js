

var firstName = "Connor";
var age = 24;
var isMale = true;
var isFemale = false;
var surname = null;

var person = {
    name: firstName,
    age: age,
    dob: '01/24/1994'
}

console.log(person.age);


let arr = [10, 11, 12];

arr.foo = 'bar';

for (let i in arr) {
    console.log(i); // logs '0', '1', '2', 'foo'
}

for (let i of arr) {
    console.log(i); // logs 10, 11, 12
}

console.log("Printing out the array:")


let arr1 = [10, 11, 12];

arr1.foo = 'bar';
console.log(arr1)
console.log(arr1.foo)

arr1.push('fooo')
console.log(arr1)

for (let i = 0; i < arr1.length; ++i) {
    console.log(i)
    console.log(arr1[i])
}
