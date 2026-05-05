const studentModel = require("../models/studentModel");


exports.addStudent = (req, res) => {
  const { name, marks } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Name is required" });
  }

  if (marks == null || typeof marks !== "number" || marks < 0) {
    return res.status(400).json({ error: "Marks must be ≥ 0" });
  }

  const student = studentModel.createStudent(name, marks);
  res.status(201).json(student);
};

exports.getStudents = (req, res) => {
  const students = studentModel.getAllStudents();
  res.status(200).json(students);
};

exports.updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, marks } = req.body;

  if (name !== undefined && (typeof name !== "string" || !name.trim())) {
    return res.status(400).json({ error: "Invalid name" });
  }

  if (marks !== undefined && (typeof marks !== "number" || marks < 0)) {
    return res.status(400).json({ error: "Marks must be ≥ 0" });
  }

  const updated = studentModel.updateStudent(id, { name, marks });

  if (!updated) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.status(200).json(updated);
};


exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);

  const deleted = studentModel.deleteStudent(id);

  if (!deleted) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.status(204).send();
};