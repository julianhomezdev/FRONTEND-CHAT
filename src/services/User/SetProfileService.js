export async function SetProfileService(formData)  {


    const response = await fetch("https://localhost:7125/api/UpdateProfile", {

        method: 'POST',
        body: formData,


    });


    const data = await response.json();


    if(!response.ok) {
        throw new Error(data.message || "Error setting profile");
    }
        
    console.log(data);
    return data;
}