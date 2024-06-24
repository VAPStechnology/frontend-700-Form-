import axios from 'axios';

// Function to retrieve token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

export const handleSubmit = async (
  formData,
  setFormData,
) => {
  try {
    // Validate form data
    const { firstName, lastName, emailId, phone, acNo, address, state, dateOfBirth, licenseState, ssn, bankName, loanAmount, city, zip, licenseNumber, ipAddress } = formData;

    // Check if any required fields are missing or empty
    if (!firstName || !lastName || !emailId || !phone || !acNo || !address || !state || !dateOfBirth || !licenseState || !ssn || !bankName || !loanAmount || !city || !zip || !licenseNumber || !ipAddress) {
      throw new Error('Please fill out all required fields.');
    }

    const token = getToken();

    if (!token) {
      throw new Error('No token found');
    }

    // API call to submit form data with Authorization header
    const response = await axios.post(
      'http://13.51.38.112/api/api/v1/forms/createForm',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Reset form data on successful submission
    setFormData({
      firstName: '',
      lastName: '',
      emailId: '',
      phone: '',
      acNo: '',
      address: '',
      state: '',
      dateOfBirth: '',
      licenseState: '',
      ssn: '',
      bankName: '',
      loanAmount: '',
      city: '',
      zip: '',
      licenseNumber: '',
      ipAddress: '',
    });

    alert('Form submitted successfully!');
  } catch (error) {
    console.error('Error submitting form:', error.response?.data || error.message);

    // Handle specific error cases
    if (error.message === 'No token found' || error.response?.status === 401) {
      // Clear token from localStorage and force logout or handle accordingly
      localStorage.removeItem('token');
      alert('Session expired. Please login again.');
    } else if (error.message === 'Please fill out all required fields.') {
      alert(error.message);
    } else {
      alert('Failed to submit form. Please try again later.');
    }
  }
};
