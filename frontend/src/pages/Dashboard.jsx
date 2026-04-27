import MarkAttendance from "./MarkAttendance";
import Records from "./Records";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <MarkAttendance />
      <Records />
    </div>
  );
}