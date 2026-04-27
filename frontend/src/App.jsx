import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const token = localStorage.getItem("token");

  return token ? <Dashboard /> : <Login />;
}