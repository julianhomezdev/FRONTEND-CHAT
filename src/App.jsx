import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./Pages/Auth/RegisterPage";
import './App.css'
import { LoginPage } from "./Pages/Auth/LoginPage";
import { VerificationPage } from "./Pages/Auth/VerificationPage";
import { HomePage } from "./Pages/common/HomePage";
import SetProfile from "./Pages/common/SetProfile";

export function App () {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/auth/register" element={<RegisterPage/>}/>
                <Route path="/auth/login" element={<LoginPage/>}/>
                <Route path="/auth/verification" element={<VerificationPage/>} />
                <Route path="/" element={<HomePage/>}/>
                <Route path="/set" element={<SetProfile/>} />
            </Routes>
        </BrowserRouter>
    )
}