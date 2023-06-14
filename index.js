const employee = {
    name: 'Sam'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee }; // Creating a clone of the original employee object
    updatedEmployee[key] = value; // Updating the clone with the new key-value pair
    return updatedEmployee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modifying the original employee object
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = { ...employee }; // Creating a clone of the original employee object
    delete clonedEmployee[key]; // Deleting the specified key from the clone
    return clonedEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Modifying the original employee object
    return employee;
  }
  