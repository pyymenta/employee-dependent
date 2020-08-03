const db = require('../../src/db');

const Query = {
  employees: db.getAllEmployees
}

module.exports = {
  Query
}
