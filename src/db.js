const mongoose = require('mongoose');

const Employee = require('../src/models/Employee');
const Dependent = require('../src/models/Dependent');

mongoose.connect('mongodb://pyymenta:admir@localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const getAllEmployees = async function () {
  const employees = await Employee.find().exec();

  return employees.map(employee => {
    employee.registrationId = employee._id.toString();

    return employee;
  });
}

const getDependentsByEmployeeId = async function (employeeId) {
  const dependents = await Dependent.find({ employeeId }).exec();

  return dependents;
}

const getEmployeeById = async function (_id) {
  const employee = await Employee.findById(_id).populate('dependents').exec();

  return employee;
}

module.exports = {
  getAllEmployees,
  getEmployeeById,
  getDependentsByEmployeeId
}
