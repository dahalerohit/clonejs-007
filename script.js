/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map (empolyee => {//map iterate on each element of object and if profession become developer trueit executes
    if (empolyee.profession === "developer"){
       console.log(empolyee.name);
    }
  });
  }
PrintDeveloperbyMap();

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(empolyee=>{//it is same as map
    if(empolyee.profession === "developer"){
      console.log(empolyee.name);
    }
  });
}
PrintDeveloperbyForEach();

function addData() {
  //Write your code here, just console.log
  arr.id = "4", arr.name = "praveen", arr.age = "19", arr.profession = "developer";//it is the way add new object in the array
    console.log(arr);
  
}
addData();

function removeAdmin() {
  //Write your code here, just console.log
  let newarr = arr.filter(empolyee => empolyee.profession !=="admin");//filter it iterate on each element of object and gives the element whose profession is not admin
    console.log(newarr);
}
 removeAdmin();

 let Newarr = [
    {id:4,name:"rahul",age:"20",profession:"java developer"},
    {id:5,name:"prakash",age:"25",profession:"frontend developer"},
    {id:6,name:"ram",age:"20",profession:"backend developer"},
    {id:7,name:"rakesh",age:"20",profession:"fullstack developer"}
  ]

function concatenateArray() {
  //Write your code here, just console.log
  let temp = arr.concat(Newarr);
  console.log(temp);
}
  concatenateArray();
