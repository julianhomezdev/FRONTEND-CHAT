import { useNavigate } from "react-router";

export async function LoginService(email, password) {



    try {

        const response = await fetch("https://localhost:7125/api/Login", {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",

            },

            body: JSON.stringify({Email: email, Password: password}),

        });

        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error logging in");
        }

        return await response.json();




    } catch (error) {
        console.error("💥 Login Service error:", error);
        throw error;


    }
}