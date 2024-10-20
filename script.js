let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
function PrintDeveloperbyMap() {
    employees.map(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}


function PrintDeveloperbyMap() {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function addData() {
  employees.push({id:4, name:"susan", age:"20", profession:"intern"});
  console.log(employees);
}

function removeAdmin() {
  employees = employees.filter(employee => employee.profession !== "admin");
  console.log(employees);
}

function ConcatenateArray() {
  const newEmployees = [
    {id:5, name:"mark", age:"22", profession:"designer"},
    {id:6, name:"lisa", age:"24", profession:"manager"},
    {id:7, name:"tom", age:"26", profession:"analyst"}
  ];

  employees = employees.concat(newEmployees);
  console.log(employees);
}