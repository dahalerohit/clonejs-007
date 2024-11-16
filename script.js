/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.map(employee =>{
    if(employee.profession === "developer");
    return employee;
  }).filter(Boolean);

  console.log(developers);
    
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(empl =>{
    if(empl.profession ==="developer"){
      console.log(empl);
    }
  });
 
}

function addData() {
  //Write your code here, just console.log
  const addEmpl = { id:4,name:"vikas",age:27,profession:"backend Develop"};

  arr.push(addEmpl);
  console.log(arr);
}

function removeAdmin() {
    const removeAd =arr.filter(arr => arr.profession !== "admin")
    console.log(removeAd);
  //Write your code here, just console.log

}

function concatenateArray() {
  //Write your code here, just console.log
  const newEmp =[
    {id:4, name:"abhi", age:21, profession:"developer"},
    {id:4, name:"vishal", age:21, profession:"developer"},
    {id:4, name:"bipin", age:25, profession:"intern"}
  ];

  const allemployee =arr.concat(newEmp);
  console.log(allemployee);
}
