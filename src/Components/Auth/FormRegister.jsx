// src/Pages/Auth/RegisterPage.jsx
import { useState } from "react";
import { RegisterService } from "../../services/Auth/RegisterService";
import Alert from "../../Components/Alerts/Alert";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export function FormRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", isSuccess: false });

  const showAlert = (isSuccess, message) => {
    setAlert({ show: true, message, isSuccess });
    setTimeout(() => setAlert(prev => ({ ...prev, show: false })), 2500);
  };

  const handleSubmit = async () => {
    const { firstname, lastname, email, phone, password } = form;
    if (!firstname.trim() || !lastname.trim() || !email.trim() || !phone.trim() || !password) {
      return showAlert(false, "All fields are required");
    }

    setLoading(true);

    try {
      await RegisterService({
        FirstName: firstname.trim(),
        LastName: lastname.trim(),
        Email: email.trim(),
        Phone: phone.trim(),
        Password: password,
      });

      showAlert(true, "Account created successfully!");
      localStorage.setItem("verificationEmail", email.trim());

      setTimeout(() => navigate("/auth/verification"), 2500);

      setForm({ firstname: "", lastname: "", email: "", phone: "", password: "" });
    } catch (error) {
      showAlert(false, `Registration failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/3 h-2/3 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
        <span className="mb-4">Join us and start chatting instantly</span>

        <div className="w-5/6 flex flex-col gap-3">
          {[
            { label: "First name", id: "firstname", type: "text" },
            { label: "Last name", id: "lastname", type: "text" },
            { label: "Email", id: "email", type: "email" },
            { label: "Phone", id: "phone", type: "tel" },
            { label: "Password", id: "password", type: "password" },
          ].map(({ label, id, type }) => (
            <input
              key={id}
              type={type}
              placeholder={label}
              value={form[id]}
              onChange={(e) => setForm({ ...form, [id]: e.target.value })}
              disabled={loading}
              className="h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-5/6 mt-4 bg-black text-white py-2 rounded-2xl cursor-pointer"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

       <span className="mt-2">
          Already have an account?
          <span>
            <Link to="http://localhost:5173/auth/Login" className="ml-1 text-blue-600 hover:underline">Login</Link>
          </span>
        </span>

        {alert.show && (
          <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-right duration-300">
            <Alert message={alert.message} isSuccess={alert.isSuccess} />
          </div>
        )}
      </div>
    </div>
  );
}
