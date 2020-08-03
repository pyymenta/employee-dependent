require('../src/models/Dependent');

const mongoose = require('mongoose');
const Employee = require('../src/models/Employee');

mongoose.connect('mongodb://pyymenta:admir@localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

Employee.schema.virtual('dependents', {
  ref: 'Dependent',
  localField: '_id',
  foreignField: 'employeeId',
  justOne: false,
});

const getAllEmployees = async function () {
  const employees = await Employee.find().populate('dependents').exec();

  return employees.map(employee => {
    employee.registrationId = employee._id.toString();

    return employee;
  });
}

const getEmployeeById = async function (_id) {
  const employee = await Employee.findById(_id).populate('dependents').exec();

  return employee;
}

module.exports = {
  getAllEmployees,
  getEmployeeById
}
