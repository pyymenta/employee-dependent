const db = require('../../src/db');

const Query = {
  employees: db.getAllEmployees,
}

const Employee = {
  dependents: employeeId => db.getDependentsByEmployeeId(employeeId)
}

module.exports = {
  Query,
  Employee
}
