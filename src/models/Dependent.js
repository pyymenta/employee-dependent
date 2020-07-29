const mongoose = require('mongoose');

const DependentSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  },
  name: {
    type: String,
  },
  kinship: {
    type: String,
  },
});

const Dependent = mongoose.model('Dependent', DependentSchema);

module.exports = Dependent;
