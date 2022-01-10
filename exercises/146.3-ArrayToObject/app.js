let employeeData = [
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]

function transformEmployeeData(array) {
  // your code here
  let employees = [];
  array.forEach((employee) => {
    let empObj = {};
    employee.forEach((pair) => {
      empObj[pair[0]] = pair[1];
    })
    employees.push(empObj);
  })
  return employees;
}

console.log(transformEmployeeData(employeeData));