const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  try {
    const { status } = req.body;

    const record = await Attendance.create({
      userId: req.user.id,
      status
    });

    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const records = await Attendance.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};