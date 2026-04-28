const router = require("express").Router();
const { markAttendance, getAttendance } = require("../controllers/attendanceController");
router.get("/", (req, res) => {
  res.json({ message: "Attendance route working" });
});

module.exports = router;