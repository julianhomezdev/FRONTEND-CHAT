import { use } from "react";
import { VerificationCode } from "../../services/Auth/VerificationCode";
import { useState, useRef } from "react";


export function VerificationPage() {

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({

    show: false,
    message: "",
    isSuccess: false

  })

  const [form, setForm] = useState({

    firstdigit: "",
    seconddigit: "",
    thirddigit: "",
    fourthdigit: ""
  });

  const firstdigit = useRef();
  const seconddigit = useRef();
  const thirddigit = useRef();
  const fourthdigit = useRef();

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
    setAlert(prev => ({ ...prev, show: false }));
  };


  const getVerificationCode = () => {

      const code = firstdigit.current.value + seconddigit.current.value + thirddigit.current.value + fourthdigit.current.value
      return parseInt(code);
    };


  const handleSubmit = async () => {

    const digit1 = firstdigit.current?.value;
    const digit2 = seconddigit.current?.value;
    const digit3 = thirddigit.current?.value;
    const digit4 = fourthdigit.current?.value;



    if (!digit1 || !digit2 || !digit3 || !digit4) {

      showAlert(false, "The code must be 4 digits");
      return;
    }




    

    setLoading(true);
    hideAlert();

    try {

      const response = await VerificationCode(getVerificationCode());

      showAlert(true, "The code is correct");

      firstdigit.current.value = "";
      seconddigit.current.value = "";
      thirddigit.current.value = "";
      fourthdigit.current.value = "";

      setForm({
        firstdigit: "",
        seconddigit: "",
        thirddigit: "",
        fourthdigit: ""
      })

    } catch (error) {

      showAlert(false, `Verification failed: ${error.message}`);

    } finally {

      setLoading(false);
    }



  };



  return (
    <>

      <div className="w-full h-screen flex justify-center items-center">

        <div className=" w-1/3 h-2/3 flex flex-col justify-center items-center">

          <h1 className="text-3xl font-bold text-center">Enter the verification code</h1>

          <span>We sent you a verification code to your email</span>

          <div className=" w-5/6 h-1/3 flex justify-center items-center gap-2.5">

            <input type="number" min="0" max="9" maxlength="1" class="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" ref={firstdigit} />
            <input type="number" min="0" max="9" maxlength="1" class="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" ref={seconddigit} />
            <input type="number" min="0" max="9" maxlength="1" class="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" ref={thirddigit} />
            <input type="number" min="0" max="9" maxlength="1" class="w-14 h-14 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" ref={fourthdigit} />

          </div>


          <button onClick={handleSubmit} disabled={loading} className="w-1/3 h-1/14 bg-black text-white rounded-2xl"> {loading ? 'Verifying...' : 'Verify Code'}</button>
        </div>


      </div>


    </>
  )
}