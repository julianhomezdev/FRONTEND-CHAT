import { LoginForm } from "../../Components/Auth/LoginForm";
import Alert from "../../Components/Alerts/Alert";
import { Link } from "react-router-dom";


export function LoginPage() {

  
  
  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/3 h-2/3 flex flex-col justify-center items-center gap-2.5">
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
        <span className="mb-4">Log in to continue</span>
        <LoginForm />
        <span>
          Don´t have an account ?
          <span>
            <Link to="http://localhost:5173/auth/Register" className="ml-1 text-blue-600 hover:underline">Register</Link>
          </span>
        </span>
      </div>
    </div>
  );
}
