const employees = [
  { id: 1, name: 'moe'},
  { id: 2, name: 'larry', managerId: 1},
  { id: 4, name: 'shep', managerId: 2},
  { id: 3, name: 'curly', managerId: 1},
  { id: 5, name: 'groucho', managerId: 3},
  { id: 6, name: 'harpo', managerId: 5},
  { id: 8, name: 'shep Jr.', managerId: 4},
  { id: 99, name: 'lucy', managerId: 1}
];

const spacer = (text)=> {
  if(!text){
    return console.log('');
  }
  const stars = new Array(5).fill('*').join('');
  console.log(`${stars} ${text} ${stars}`);
}


/spacer('findEmployeeByName Moe')
// given a name and array of employees, return employee


function empName(employee, array){
  for (let i = 0; i < array.length; i++){
    if (array[i].name === employee)
    return array[i];
  }
}

empName('curly', employees);

/* solve it another way
function emplName(employee, array){
  return array.filter((arg) => arg.name === employee)[0]
}

emplName("harpo", employees); */


/* Third way to solve it
function threeTimes(employee, array){
  return array.find((arg) => arg.name === employee)

}
threeTimes("harpo", employees);
empName('moe', employees);*/

console.log(findEmployeeByName('moe', employees));//{ id: 1, name: 'moe' }
spacer('')








spacer('findManagerFor Shep')
//given an employee and a list of employees, return the employee who is the manager


function managerOf(employee, array){
  let manId = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i].name === employee)
   manId = array[i].managerId;

    //need to take this answer, loop it through again and return id if it equals manager id.....
  }
  for(let i = 0; i < array.length; i++){
    if(manId === array[i].id)
    return array[i].name;
  }
}


//another way to solve it


/*function managerOf(employee, array){
  for (let i = 0; i < array.length; i++){
    if (array[i].name === employee)
   return bossMan(array[i].managerId, array)
  }
}

function bossMan(empId, array){
for(let i = 0; i < array.length; i++){
    if(empId === array[i].id)
    return array[i].name;
  }

}



managerOf('harpo', employees);*/



//third way to solve it
/*function whosTheManager(employee, empArray){
  let emp = empArray.find(function(empObj){
    return empObj.name === employee;
  }
  );
let manager= empArray.find(function(managerObj){
  return managerObj.id === emp.managerId;
})
return manager.name;
}*/

whosTheManager('curly', employees)


//console.log(findManagerFor(findEmployeeByName('shep Jr.', employees), employees));//{ id: 4, name: 'shep', managerId: 2 }
spacer('')








spacer('findCoworkersFor Larry')
//given an employee and a list of employees, return the employees who report to the same manager

function whoAreCoworkers(employee, empArray){

  //this should be finding the object that matches input name
  let emp = empArray.find(function(empObj){
    return empObj.name === employee;
  }
  );
  //this should be finding the manager id of inputed name
 let manager = empArray.find(function(managerObj){
  return managerObj.id === emp.managerId;
 });

 //this should be filtering all objects that contain that managerId
 let coWorkers = empArray.filter(function(coObj){
  return coObj.managerId === manager.id;
 });
 return coWorkers;
 }

 whoAreCoworkers('lucy', employees);

console.log(findCoworkersFor(findEmployeeByName('larry', employees), employees));/*
[ { id: 3, name: 'curly', managerId: 1 },
  { id: 99, name: 'lucy', managerId: 1 } ]
*/

spacer('');









spacer('findManagementChain for moe')
//given an employee and a list of employees, return a the management chain for that employee. The management chain starts from the employee with no manager with the passed in employees manager
console.log(findManagementChainForEmployee(findEmployeeByName('moe', employees), employees));//[  ]
spacer('');

spacer('findManagementChain for shep Jr.')
console.log(findManagementChainForEmployee(findEmployeeByName('shep Jr.', employees), employees));/*
[ { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 4, name: 'shep', managerId: 2 }]
*/
spacer('');


spacer('generateManagementTree')
//given a list of employees, generate a tree like structure for the employees, starting with the employee who has no manager. Each employee will have a reports property which is an array of the employees who report directly to them.
console.log(JSON.stringify(generateManagementTree(employees), null, 2));
/*
{
  "id": 1,
  "name": "moe",
  "reports": [
    {
      "id": 2,
      "name": "larry",
      "managerId": 1,
      "reports": [
        {
          "id": 4,
          "name": "shep",
          "managerId": 2,
          "reports": [
            {
              "id": 8,
              "name": "shep Jr.",
              "managerId": 4,
              "reports": []
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "curly",
      "managerId": 1,
      "reports": [
        {
          "id": 5,
          "name": "groucho",
          "managerId": 3,
          "reports": [
            {
              "id": 6,
              "name": "harpo",
              "managerId": 5,
              "reports": []
            }
          ]
        }
      ]
    },
    {
      "id": 99,
      "name": "lucy",
      "managerId": 1,
      "reports": []
    }
  ]
}
*/
spacer('');

spacer('displayManagementTree')
//given a tree of employees, generate a display which displays the hierarchy
displayManagementTree(generateManagementTree(employees));/*
moe
-larry
--shep
---shep Jr.
-curly
--groucho
---harpo
-lucy
*/
