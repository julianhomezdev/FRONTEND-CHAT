export async function VerificationCode(data) {

  try {
    const response = await fetch("https://localhost:7125/Verify", {

      method: 'POST',
      headers: {
        "Content-Type": "application/json",

      },

      body: JSON.stringify(data),

    });

    console.log("📥 Response status:", response.status);
    
    const responseText = await response.text();
    console.log("📥 Raw response:", responseText);

    if (!response.ok) {
      let errorData;
      try {
        errorData = JSON.parse(responseText);
      } catch {
        throw new Error(`HTTP ${response.status}: ${responseText}`);
      }
      
      console.log("❌ Error data:", errorData);
      
      if (errorData.errors) {
        console.log("❌ Validation errors:", errorData.errors);
        throw new Error(`Validation errors: ${errorData.errors.join(", ")}`);
      }
      
      throw new Error(errorData.message || "Verification failed");
    }

    const result = JSON.parse(responseText);

    return result;

  } catch (error) {
    console.error("💥 Code verification error:", error);
    throw error;
  }
}