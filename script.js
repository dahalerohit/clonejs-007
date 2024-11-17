/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    arr
    .filter(person => person.profession === 'developer').map(person => console.log(person));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   arr.filter(person => person.profession === 'developer') .forEach(person => console.log(person));
}

function addData() {
  //Write your code here, just console.log
   const newPerson = { id: 4, name: "alice", age: "22", profession: "designer" };
  arr.push(newPerson);  // Add the new person to the array
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(person => person.profession !== 'admin');  // Filter out 'admin'
  console.log(arr); 
}

function concatenateArray() {
  //Write your code here, just console.log
  console.log(arr);
}
