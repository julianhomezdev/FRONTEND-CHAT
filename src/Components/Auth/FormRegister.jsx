import { useState } from "react";
import { RegisterService } from "../../services/Auth/RegisterService";
import Alert from "../Alerts/Alert";
import { useNavigate  } from "react-router";

export function FormRegister() {

  // Navigation
  const navigate = useNavigate();

  // Initialize the data
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "", 
    password: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    isSuccess: false  
  });

  // Function to show alert
  const showAlert = (isSuccess = false, message) => {
    setAlert({
      show: true,
      message: message,
      isSuccess: isSuccess
    });

    // Auto-hide 5 sec
    setTimeout(() => {
      setAlert(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  // Function to hide the alert
  const hideAlert = () => {
    setAlert(prev => ({ ...prev, show: false}));
  };

  const [loading, setLoading] = useState(false);

  // Data validations
  const handleSubmit = async () => {
    const { firstname, lastname, email, phone, password } = form;

    const trimmedFirstname = firstname.trim();
    const trimmedLastname = lastname.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.toString().trim();
    
    if (!trimmedFirstname || !trimmedLastname || !trimmedEmail || !trimmedPhone || !password) {
      showAlert(false, "All fields are required");
      return;
    }

    setLoading(true);
    hideAlert(); 

    try {
      const requestData = {
        FirstName: trimmedFirstname,    
        LastName: trimmedLastname,      
        Email: trimmedEmail,            
        Phone: trimmedPhone, 
        Password: password             
      };

      const response = await RegisterService(requestData);

      //console.log("Registration successful:", response);
      showAlert(true, "Account created successfully!");

      setTimeout(() => {

        navigate("/auth/verification");

      }, 3500);
      
      // Reset form
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
      });

    } catch (error) {

      //console.error("Registration error:", error.message);
      showAlert(false, `Registration failed: ${error.message}`);
      //console.log("Current form state:", form);

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      {/* Container principal centrado */}
      <div className="w-full h-screen flex items-center justify-center relative">
        
        {/* Formulario centrado */}
        <div className="w-1/4 h-5/6 bg-black/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-start border border-gray-700 shadow-[0_0_8px_1px_rgba(255,255,255,0.15)] p-6 space-y-4 text-white">
          {/* Title */}
          <div className="w-full text-center">
            <h1 className="text-2xl font-bold tracking-wide">Create Account</h1>
          </div>

          {/* Inputs section */}
          <div className="w-full flex flex-col space-y-3">
            {/* Input group */}
            {[
              { label: "First name", type: "text", id: "firstname" },
              { label: "Last name", type: "text", id: "lastname" },
              { label: "Email", type: "email", id: "email" },
              { label: "Phone number", type: "tel", id: "phone" }, 
              { label: "Password", type: "password", id: "password" },
            ].map(({ label, type, id }) => (
              <div key={id} className="flex flex-col gap-1">
                <label htmlFor={id} className="text-sm font-light">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  value={form[id]}
                  className="h-8 rounded-md bg-white text-black px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  onChange={(e) => {
                    let value = e.target.value;
                    setForm({ ...form, [id]: value });
                  }}
                  disabled={loading}
                />
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="w-full pt-2">
            <button 
              className="w-full h-10 bg-blue-950 cursor-pointer text-white font-semibold rounded-md shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-900 transition"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create"}
            </button>
          </div>
        </div>

        {alert.show && (
          <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-right duration-300">
            <Alert 
              message={alert.message} 
              isSuccess={alert.isSuccess}
            />
          </div>
        )}
      </div>
    </>
  );
}