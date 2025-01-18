/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(employee => {
    if (employee.profession === "developer") {
        console.log(employee);
    }
    });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee=>{
    if(employee.profession==="developer"){
      console.log(employee);
    }
  } );
}

function addData() {
  console.log("hiiiiii......");
  //Write your code here, just console.log
  const newEmp={id: 7, name: "himmu", age: "26", profession: "developer"}
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let cArr=arr.filter((employee)=>
  employee.profession!=="admin");
  console.log(cArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    ...arr,
    { id: 4, name: "lucas", age: "22", profession: "developer" },
    { id: 5, name: "anna", age: "24", profession: "admin" }
  ];

  console.log(newArray);

}
