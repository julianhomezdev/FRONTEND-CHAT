import { BrowserRouter, Routes, Route } from "react-router";
import { RegisterPage } from "./Pages/Auth/RegisterPage";
import './App.css'

export function App () {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/auth/register" element={<RegisterPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}