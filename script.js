/** @format */

let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = employees.map((employee) => {
    if (employee.profession === "developer") {
      return employee;
    }
  }).filter(Boolean);

  console.log("Developers using .map():", developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const developers = [];
  employees.forEach((employee) => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });

  console.log("Developers using .forEach():", developers);
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);

  console.log("Updated array after adding new employee:", employees);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredEmployees = employees.filter((employee) => employee.profession !== "admin");
  console.log("Array after removing admin:", filteredEmployees);
}

function concatinateArray() {
  //Write your code here, just console.log
  const newEmployees = [
    { id: 5, name: "priya", age: "25", profession: "designer" },
    { id: 6, name: "mahesh", age: "28", profession: "manager" },
    { id: 7, name: "mivaan", age: "22", profession: "tester" },
  ];

  const combinedEmployees = employees.concat(newEmployees);
  console.log("Combined employee array:", combinedEmployees);
}


PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatinateArray();