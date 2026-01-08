const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  
  const data = fs.readFileSync(path, 'utf8');
  const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const fields = {};

  for (const line of students) {
    const student = line.split(',');
    const firstname = student[0];
    const field = student[3];

    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  }

  for (const field in fields) {
    if (fields.hasOwnProperty(field)) {
      const list = fields[field];
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  }
}

module.exports = countStudents;
