/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   arr.map(function(element)
  {
    if(value.profession === developer)
    {
      console.log(element);
    }
  });

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(element)
  {
    if(value.profession === developer)
    {
      console.log(element);
    }
  });

}

function addData() {
  //Write your code here, just console.log
   arr.push({id:4,name:"susan",age:"20",profession:"intern"});
   console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
   let RemoveAdmin = arr.filter((arr) => arr.profession === admin);
   console.log(RemoveAdmin);

}

function concatenateArray() {
  //Write your code here, just console.log
  let newarray = [{id:4,name:"susan",age:"20",profession:"intern"}]
  let concatArr = arr.concat(newarray);
  console.log(concatArr);

}
