const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  currentPosition: {
    type: String,
  },
  currentSalary: {
    type: Number
  }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
