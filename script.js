/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let employeeNames = (arrayObject) => {
    if(arrayObject.profession == "developer")
    {
      console.log(arrayObject.name);
    }
  }

  arr.map(employeeNames);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  function printEmployee(employee)
  {
    // employee variable is an object here
    if(employee.profession === "developer")
    {
      console.log(employee.name);
    }
  }
  arr.forEach(printEmployee);
}

function addData() {
  //Write your code here, just console.log
  let newEmployeeObject = { id: 4, name: "susan", age: "20", profession: "intern"};
  arr.push(newEmployeeObject);   //Appends new elements to the end of an array, and returns the new length of the array.
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i=0; i<arr.length; i++)
  {
    let currObject = arr[i];
    if(currObject.profession == "admin")
    {
      arr.splice(i, 1);      // From current index, remove only one element
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "Tarun", age: "23", profession: "developer" },
    { id: 6, name: "Arjun", age: "22", profession: "intern" },
    { id: 7, name: "Sumit", age: "22", profession: "dataAnalyst" },
  ];

  for(let i=0; i<newArr.length; i++)
  {
    arr.push(newArr[i]);
  }

  console.log(arr);
}
