import { CheckCircle, XCircle } from "lucide-react";

export default function Alert({ message = "Mensaje de alerta", isSuccess = true }) {
  
  // Alert to show notifications in the app 
  const baseClasses = "flex items-center p-4 rounded-lg border shadow-sm";
  const successClasses = "bg-green-50 border-green-200 text-green-800";
  const errorClasses = "bg-red-50 border-red-200 text-red-800";
  
  const alertClasses = `${baseClasses} ${isSuccess ? successClasses : errorClasses}`;
  
  return (
    <div className={alertClasses}>
      <div className="flex-shrink-0 mr-3">
        {isSuccess ? (
          <CheckCircle className="w-5 h-5 text-green-600" />
        ) : (
          <XCircle className="w-5 h-5 text-red-600" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">
          {message}
        </p>
      </div>
    </div>
  );
}
