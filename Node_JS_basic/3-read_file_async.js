const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().split('\n');
      let students = lines.filter((item) => item);

      students = students.slice(1);

      console.log(`Number of students: ${students.length}`);

      const fields = {};

      for (const idx in students) {
        const student = students[idx].split(',');
        const firstname = student[0];
        const field = student[3];

        if (firstname && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }

      for (const key in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          console.log(`Number of students in ${key}: ${element.length}. List: ${element.join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
