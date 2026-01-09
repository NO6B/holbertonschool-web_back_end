const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    for (const line of students) {
      const [firstname, , , field] = line.split(',');

      if (field) {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
    }

    for (const [field, list] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }

    resolve();
  });
});

module.exports = countStudents;
