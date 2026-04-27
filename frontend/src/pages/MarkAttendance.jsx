import API from "../api/api";

export default function MarkAttendance() {
  const mark = async (status) => {
    const token = localStorage.getItem("token");

    await API.post(
      "/attendance",
      { status },
      { headers: { Authorization: token } }
    );

    alert("Attendance Marked!");
  };

  return (
    <div>
      <button onClick={() => mark("Present")}>Present</button>
      <button onClick={() => mark("Absent")}>Absent</button>
    </div>
  );
}