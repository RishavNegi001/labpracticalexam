let students = [];
let currentId = 1;

const createStudent = (name, marks) => {
  const student = {
    id: currentId++,
    name,
    marks,
  };
  students.push(student);
  return student;
};

const getAllStudents = () => students;

const getStudentById = (id) =>
  students.find((s) => s.id === id);

const updateStudent = (id, data) => {
  const student = students.find((s) => s.id === id);
  if (!student) return null;

  if (data.name !== undefined) student.name = data.name;
  if (data.marks !== undefined) student.marks = data.marks;

  return student;
};

const deleteStudent = (id) => {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return false;

  students.splice(index, 1);
  return true;
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};