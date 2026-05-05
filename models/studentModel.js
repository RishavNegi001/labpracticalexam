let students = [];
let currentId = 1;

exports.createStudent = (name, marks) => {
  const student = { id: currentId++, name, marks };
  students.push(student);
  return student;
};

exports.getAllStudents = () => students;

exports.updateStudent = (id, data) => {
  const student = students.find(s => s.id === id);
  if (!student) return null;

  if (data.name !== undefined) student.name = data.name;
  if (data.marks !== undefined) student.marks = data.marks;

  return student;
};

exports.deleteStudent = (id) => {
  const index = students.findIndex(s => s.id === id);
  if (index === -1) return false;

  students.splice(index, 1);
  return true;
};