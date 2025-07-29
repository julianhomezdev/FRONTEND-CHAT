import { useState } from "react";
import { RegisterService } from "../../services/Auth/RegisterService";

export function FormRegister() {

  // Initialize the data
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "", 
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Data validations
  const handleSubmit = async () => {
    const { firstname, lastname, email, phone, password } = form;

    const trimmedFirstname = firstname.trim();
    const trimmedLastname = lastname.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.toString().trim();
    
    if (!trimmedFirstname || !trimmedLastname || !trimmedEmail || !trimmedPhone || !password) {
      
      alert("All fields required");
      return;
    }

    // ✅ Validar que phone sea un número válido y no demasiado grande
    const phoneNumber = parseInt(trimmedPhone, 12);
    if (!/^\d+$/.test(trimmedPhone) || isNaN(phoneNumber) || phoneNumber <= 0) {
      
      alert("Please enter a valid phone number (numbers only)");
      return;
    }
    
    // Validar que no sea demasiado grande para int32
    if (phoneNumber > 2147483647) {
      alert("Phone number is too long");
      return;
    }

    setLoading(true);

    try {
      // ✅ CORRECTO: Coincidir exactamente con RegisterRequest del backend
      const requestData = {
        FirstName: trimmedFirstname,    // ← PascalCase como en RegisterRequest
        LastName: trimmedLastname,      // ← PascalCase como en RegisterRequest
        Email: trimmedEmail,            // ← PascalCase como en RegisterRequest
        Phone: parseInt(trimmedPhone, 10), // ← int como en RegisterRequest
        Password: password              // ← PascalCase como en RegisterRequest
      };

      console.log("🚀 Form data before sending:");
      console.log("firstname:", firstname, "TYPE:", typeof firstname);
      console.log("lastname:", lastname, "TYPE:", typeof lastname);
      console.log("email:", email, "TYPE:", typeof email);
      console.log("phone:", phone, "TYPE:", typeof phone, "-> trimmed:", trimmedPhone, "TYPE:", typeof trimmedPhone);
      console.log("password:", password, "TYPE:", typeof password);
      console.log("🚀 Request object:", requestData);
      console.log("🚀 Request JSON:", JSON.stringify(requestData, null, 2));
      
      // ✅ VERIFICACIÓN CRÍTICA: Asegurar que phone sea string
      console.log("🔍 PHONE VERIFICATION:");
      console.log("- Original phone:", phone);
      console.log("- Trimmed phone:", trimmedPhone);
      console.log("- Type of trimmedPhone:", typeof trimmedPhone);
      console.log("- Is string?:", typeof trimmedPhone === 'string');
      console.log("- Final phone value:", requestData.Phone);
      console.log("- Type of final phone:", typeof requestData.Phone);

      const response = await RegisterService(requestData);

      console.log("Registration successful:", response);
      alert("Account created successfully!");
      
      // Reset form
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
      });

    } catch (error) {
      console.error("Registration error:", error.message);
      alert(`Registration failed: ${error.message}`);
      console.log("Current form state:", form);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
            { label: "Phone number", type: "tel", id: "phone" }, // ✅ Usar "tel" para mejor UX
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
                  // ✅ Manejar phone solo permitiendo números
                  let value = e.target.value;
                  if (id === "phone") {
                    // Solo permitir números y eliminar caracteres no numéricos
                    value = value.replace(/\D/g, '');
                  }
                  setForm({ ...form, [id]: value });
                }}
                disabled={loading}
                // ✅ Agregar pattern para validación HTML5 en phone
                {...(id === "phone" && { 
                  pattern: "[0-9]*",
                  inputMode: "numeric",
                  placeholder: "1234567890"
                })}
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="w-full pt-2">
          <button 
            className="w-full h-10 bg-blue-950 cursor-pointer text-white font-semibold rounded-md shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </>
  );
}