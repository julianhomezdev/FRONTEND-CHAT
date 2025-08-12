export async function LoginService(email, password) {

    try {

        const response = await fetch("https://localhost:7125/api/Login", {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",

            },

            body: JSON.stringify({Email: email, Password: password}),

        });
        
        const data = await response.json();
        localStorage.setItem("Name", data.firstName)


        if(!response.ok) {
            throw new Error(data.message || "Error logging in");
        }
        
        console.log(data);
        return data;




    } catch (error) {
        console.error("💥 Login Service error:", error);
        throw error;


    }
}