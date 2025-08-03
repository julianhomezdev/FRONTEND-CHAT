import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./Pages/Auth/RegisterPage";
import './App.css'
import { LoginPage } from "./Pages/Auth/LoginPage";
import { VerificationPage } from "./Pages/Auth/VerificationPage";

export function App () {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/auth/register" element={<RegisterPage/>}/>
                <Route path="/auth/login" element={<LoginPage/>}/>
                <Route path="/auth/verification" element={<VerificationPage/>} />
            </Routes>
        </BrowserRouter>
    )
}