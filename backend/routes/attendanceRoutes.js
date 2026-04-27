const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  markAttendance,
  getAttendance
} = require("../controllers/attendanceController");

router.post("/", auth, markAttendance);
router.get("/", auth, getAttendance);

module.exports = router;