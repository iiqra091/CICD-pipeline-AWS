import { useState } from "react";
import API from "../api/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [popup, setPopup] = useState("");

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      setPopup("⚠️ Please fill all fields");
      setTimeout(() => setPopup(""), 2000);
      return;
    }

    try {
      const res = await API.post("/auth/login", form);

      // ✅ simple success (no token dependency)
      setPopup("✅ Login successful!");
      
      // optional redirect
      window.location.href = "/dashboard";

    } catch (err) {
      setPopup("❌ " + (err.response?.data?.message || "Login failed"));
      setTimeout(() => setPopup(""), 2000);
    }
  };

  return (
    <div className="container">
      {popup && <div className="popup">{popup}</div>}

      <div className="card">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}