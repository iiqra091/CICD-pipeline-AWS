import { useState } from "react";
import API from "../api/api";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [popup, setPopup] = useState("");

  const handleSubmit = async () => {
    // Validation
    if (!form.email || !form.password || (isRegister && !form.name)) {
      setPopup("⚠️ Please fill all fields");
      setTimeout(() => setPopup(""), 2000);
      return;
    }

    try {
      const url = isRegister ? "/auth/register" : "/auth/login";
      const res = await API.post(url, form);

      if (!isRegister) {
        localStorage.setItem("token", res.data.token);
        window.location.reload();
      } else {
        setPopup("✅ Registered successfully!");
        setIsRegister(false);
      }
    } catch (err) {
      setPopup("❌ Error: " + (err.response?.data?.message || "Something went wrong"));
      setTimeout(() => setPopup(""), 2000);
    }
  };

  return (
    <div className="container">
      {popup && <div className="popup">{popup}</div>}

      <div className="card">
        <h2>{isRegister ? "Register" : "Login"}</h2>

        {isRegister && (
          <input
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        )}

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {error && <p className="error">{error}</p>}

        <button onClick={handleSubmit}>
          {isRegister ? "Register" : "Login"}
        </button>

        <p className="toggle" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Already have account? Login" : "Create Account"}
        </p>
      </div>
    </div>
  );
}