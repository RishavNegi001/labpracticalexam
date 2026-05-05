const express = require("express");
const router = express.Router();
console.log(require("fs").existsSync("../controllers/studentController.js"));
const studentController = require("../controllers/studentController");
router.post("/students", studentController.addStudent);
router.get("/students", studentController.getStudents);
router.put("/students/:id", studentController.updateStudent);
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;