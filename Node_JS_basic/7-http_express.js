const express = require('express');
const fs = require('fs');

const app = express();
const db = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(db, 'utf8', (err, data) => {
    const response = ['This is the list of our students'];

    if (err) {
      response.push('Cannot load the database');
      res.send(response.join('\n'));
      return;
    }
    const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    response.push(`Number of students: ${students.length}`);

    const fields = {};
    for (const line of students) {
      const student = line.split(',');
      const field = student[3];
      const firstname = student[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        response.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }

    res.send(response.join('\n'));
  });
});

app.listen(1245);

module.exports = app;
