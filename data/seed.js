const mongoose = require('mongoose');
const Employee = require('../src/models/Employee');
const Dependent = require('../src/models/Dependent');

mongoose.connect('mongodb://pyymenta:admir@localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

const employees = [
  {
    _id: '5f1f9f0dabb8fd6babfefbfa',
    name: 'Nestor Pereira',
    currentPosition: 'Analista de Sistemas Pleno',
    currentSalary: 7500
  },
  {
    _id: '5f1f9f0dabb8fd6babfefbf8',
    name: 'Leonardo Martins',
    currentPosition: 'Analista Desenvolvedor Júnior',
    currentSalary: 3500
  },
  {
    _id: '5f1f9f0dabb8fd6babfefbf9',
    name: 'Amanda Soares',
    currentPosition: 'Analista de Sistemas Sênior',
    currentSalary: 11500
  },
  {
    _id: '5f1f9f0dabb8fd6babfefbfb',
    name: 'Kátia de Souza',
    currentPosition: 'Frontend Developer Pleno',
    currentSalary: 6000
  },
  {
    _id: '5f1f9f0dabb8fd6babfefbfc',
    name: 'Roberto Santos',
    currentPosition: 'Analista de Sistemas Júnior',
    currentSalary: 4000
  }
];

const dependents = [
  {
    employeeId: '5f1f9f0dabb8fd6babfefbfa',
    name: 'Nestor Pereira Junior',
    kinship: 'Filho',
  },
  {
    employeeId: '5f1f9f0dabb8fd6babfefbfa',
    name: 'Maria Pereira de Fátima',
    kinship: 'Conjuge',
  },
  {
    employeeId: '5f1f9f0dabb8fd6babfefbfc',
    name: "Alessandra Souza dos Santos",
    kinship: "Filha",
  }
];

const collectionEmployeesDropCallback = function() {
  Employee.create(employees, function(createError) {
    if (createError) {
      console.log(createError);
    }

    console.log('Employees: Seed data created!');
  });
};

const collectionDepedentsDropCallback = function() {
  Dependent.create(dependents, function(createError) {
    if (createError) {
      console.log(createError);
    }

    console.log('Dependents: Seed data created!');
  });
};

const seed = new Promise(function(resolve) {
  mongoose.connection.collections['employees'].drop(collectionEmployeesDropCallback);
  mongoose.connection.collections['dependents'].drop(collectionDepedentsDropCallback);

  setTimeout(() => {
    resolve();
  }, 3000);
});

seed.then(process.exit);
