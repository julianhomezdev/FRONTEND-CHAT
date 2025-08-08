import { useState, useRef } from "react";
import { VerificationCode } from "../../services/Auth/VerificationCode";
import { useNavigate } from "react-router-dom";
import Alert from "../../Components/Alerts/Alert";

export function VerificationPage() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", isSuccess: false });
  const navigate = useNavigate();

  const firstdigit = useRef();
  const seconddigit = useRef();
  const thirddigit = useRef();
  const fourthdigit = useRef();


  //  Functioj to show alert
  const showAlert = (isSuccess, message) => {
    setAlert({ show: true, message, isSuccess });
    setTimeout(() => setAlert(prev => ({ ...prev, show: false })), 2500);
  };


  // Function to the configure the inputs 
  const handleInput = (e, nextRef) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.value.length === 1 && nextRef?.current) {
      nextRef.current.focus();
    }
  };


  //Collect, verify and send the data to the service 
  const handleSubmit = async () => {
    const code = `${firstdigit.current.value}${seconddigit.current.value}${thirddigit.current.value}${fourthdigit.current.value}`;
    if (code.length < 4) return showAlert(false, "The code must be 4 digits");

    const email = localStorage.getItem("verificationEmail");
    if (!email) return showAlert(false, "No email found for verification");

    setLoading(true);
    
    try {

      await VerificationCode({ Email: email, LastCode: code });
      showAlert(true, "The code is correct");
      [firstdigit, seconddigit, thirddigit, fourthdigit].forEach(ref => ref.current.value = "");
      firstdigit.current.focus();


      // If all is ok navigate to the home
      setTimeout(() => {

        navigate("/")

      }, 2500)

      

    } catch (error) {
      showAlert(false, `Verification failed: ${error.message}`);

    } finally {

      setLoading(false);
      
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/3 h-2/3 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">Enter the verification code</h1>
        <span>We sent you a verification code to your email</span>

        <div className="w-5/6 h-1/3 flex justify-center items-center gap-2.5">
          <input type="text" maxLength={1} onInput={(e) => handleInput(e, seconddigit)} className="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" ref={firstdigit} />
          <input type="text" maxLength={1} onInput={(e) => handleInput(e, thirddigit)} className="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" ref={seconddigit} />
          <input type="text" maxLength={1} onInput={(e) => handleInput(e, fourthdigit)} className="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" ref={thirddigit} />
          <input type="text" maxLength={1} onInput={(e) => handleInput(e, null)} className="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" ref={fourthdigit} />
        </div>

        <button onClick={handleSubmit} disabled={loading} className="w-1/3 mt-4 bg-black text-white py-2 rounded-2xl">
          {loading ? "Verifying..." : "Verify Code"}
        </button>

      {alert.show && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-right duration-300">
          <Alert message={alert.message} isSuccess={alert.isSuccess} />
        </div>
      )}
      </div>
    </div>
  );
}
