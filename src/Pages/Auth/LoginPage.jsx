import { useNavigate } from "react-router";
import { LoginForm } from "../../Components/Auth/LoginForm";
import Alert from "../../Components/Alerts/Alert";

export function LoginPage() {

  
  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/3 h-2/3 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
        <span className="mb-4">Log in to continue</span>
        <LoginForm />
      </div>
    </div>
  );
}
