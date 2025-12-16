export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.filter((grade) => grade.studentId === student.id);
      let grade;
      if (gradeObj.length > 0) {
        grade = gradeObj[0].grade;
      } else {
        grade = 'N/A';
      }
      return { ...student, grade };
    });
}
