/** @format */

let arr = [{
    id: 1,
    name: "john",
    age: "18",
    profession: "developer"
  },
  {
    id: 2,
    name: "jack",
    age: "20",
    profession: "developer"
  },
  {
    id: 3,
    name: "karen",
    age: "19",
    profession: "admin"
  },
];

function PrintDeveloperbyMap() {
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}


function PrintDeveloperbyForEach() {
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}


function addData() {
  const newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern"
  };
  arr.push(newEmployee);
  console.log(arr);
}


function removeAdmin() {
  const updatedArray = arr.filter(employee => employee.profession !== "admin");
  console.log(updatedArray);
}


function concatenateArray() {
  const newEmployees = [{
      id: 5,
      name: "alice",
      age: "22",
      profession: "designer"
    },
    {
      id: 6,
      name: "bob",
      age: "23",
      profession: "manager"
    },
    {
      id: 7,
      name: "charlie",
      age: "21",
      profession: "developer"
    }
  ];
  const concatenatedArray = arr.concat(newEmployees);
  console.log(concatenatedArray);
}