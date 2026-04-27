import { useEffect, useState } from "react";
import API from "../api/api";

export default function Records() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const res = await API.get("/attendance", {
        headers: { Authorization: token }
      });

      setRecords(res.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Attendance Records</h3>
      {records.map((r, i) => (
        <p key={i}>
          {new Date(r.date).toLocaleDateString()} - {r.status}
        </p>
      ))}
    </div>
  );
}