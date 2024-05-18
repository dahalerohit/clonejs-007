/** @format */

let arr = [
  {   id: 1, name: "anju", age: "30", profession: "intern" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

const PrintDeveloperbyMap=()=> {
  //Write your code here , just console.log
  arr.map(function(element){
    if(element.profession == "developer"){
      console.log(element);
    }
  });
}
PrintDeveloperByMap();

const PrintDeveloperbyForEach=()=> {
  //Write your code here , just console.log
  arr.forEach(function(element){
    if(element.profession=="developer){
       console.(elemnt);
  }
              });
}
 PrintDeveloperbyForEach() ;

const addData=() =>{
  //Write your code here, just console.log
  let developerobject ={id:4; name:"anju", age:"22",, profession: "intern"};
arr.push(developerobject)
}
addData();
console.log(arr);



const removeAdmin=() =>{
  //Write your code here, just console.log
  let newarr = arr.filter(function(elemnt){
    return elemnt.profession!== "admin";
  })
  console.log(newarr);
}
removeAdmin();

function concatenateArray() {
  //Write your code here, just console.log
  let developer = [
    {
         id: 1,
      name: "anju",
      age: "30",
      profession: "intern" ,
      {
       id: 2, 
      name: "jack", 
      age: "20",
      profession: "developer" ,
    }
    {
    id: 3, 
      name: "karen", 
      age: "19",
      profession: "admin" ,
      },
  ];
  function data = arr.concat(developers);
  console.log(data);
}
