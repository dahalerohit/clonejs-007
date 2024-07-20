/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr1 = [
  { id: 4, name: "ali", age: "3", profession: "develope" },
  { id: 5, name: "danish", age: "2", profession: "develope" },
  { id: 6, name: "sonu", age: "9", profession: "adminn" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item)=>{
    if(item.profession ==="developer" ){
      console.log(item.name);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item)=>{
    if(item.profession ==="developer" ){
      console.log(item.name);
    }
  })
}
// {id:4,name:"susan",age:"20",profession:"intern"} 
function addData() {
  //Write your code here, just console.log
  let obj =  {id:4,name:"susan",age:"20",profession:"intern"} ;
  arr.push(obj);
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  
  let res = arr.filter(item=>item.profession !== "admin");
  console.log(res);

}

function concatenateArray() {
  //Write your code here, just console.log
  let res = arr.concat(arr1);
  console.log(res);
}
