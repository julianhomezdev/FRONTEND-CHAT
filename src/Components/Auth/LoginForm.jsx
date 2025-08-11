import { useState } from "react";
import { LoginService } from "../../services/Auth/LoginService";
import Alert from "../Alerts/Alert";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", isSuccess: false });

  const showAlert = (isSuccess, message) => {
    setAlert({ show: true, message, isSuccess });
    setTimeout(() => setAlert(prev => ({ ...prev, show: false })), 2500);
  };

  const handleSubmit = async () => {
    if (!form.email.trim() || !form.password) {
      return showAlert(false, "Email and password are required");
    }

    setLoading(true);

    try {
      await LoginService(form.email.trim(), form.password );
      showAlert(true, "Login successful");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      showAlert(false, `Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-5/6 flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          disabled={loading}
          className="h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          disabled={loading}
          className="h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-5/6 mt-4 bg-black text-white py-2 rounded-2xl cursor-pointer"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {alert.show && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-right duration-300">
          <Alert message={alert.message} isSuccess={alert.isSuccess} />
        </div>
      )}
    </>
  );
}
