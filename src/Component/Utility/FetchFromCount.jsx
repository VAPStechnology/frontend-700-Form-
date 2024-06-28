
export const fetchFormCount = async (username) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://aspirecareerconsultancy.online/api/v1/forms/user/${username}/form-submissions/count`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      // Store new token if available
      if (data.data.accessToken) {
        localStorage.setItem('token', data.data.accessToken);
      }
      return data.data.count; // Return the count
    } else {
      console.error("Failed to fetch form count");
      return 0; // Return 0 if fetching fails
    }
  } catch (error) {
    console.error("Error fetching form count:", error);
    return 0; // Return 0 in case of an error
  }
};
