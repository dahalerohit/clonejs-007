/** @format */
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(employee){
    if(employee.profession === "developer"){
        console.log(employee);
    }
    });
}
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((employee)=>{
        if(employee.profession === "developer"){
            console.log(employee);
        }
        });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newobj = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newobj);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter(function(employee){
        if(employee.profession !== "admin"){
            console.log(employee);
        }
    });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 1, name: "praveen", age: "19", profession: "front-end-developer" },
        { id: 2, name: "pratik", age: "22", profession: "back-end-developer" },
        { id: 3, name: "adi", age: "21", profession: "full-stack-developer" },
      ];
      let result=arr.concat(arr2);
      console.log(result);
  }
