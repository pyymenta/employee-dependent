const mongoose = require('mongoose');

const DependentSchema = new mongoose.Schema({
  employeeId: {
    type: String,
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
