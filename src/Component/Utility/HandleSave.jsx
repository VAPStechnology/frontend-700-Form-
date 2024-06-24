

export const handleSave = async (formData, setFormData, setTotalform, setRefreshFormss, setFormSave,setCurrentImageIndex) => {
    try {
      // API call to submit form data
      // const response = await axios.post('', formData);
  
      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        AcNo: "",
        Address: "",
        State: "",
        DateOfBirth: "",
        LicenseState: "",
        SSN: "",
        BankName: "",
        LoanAmount: "",
        City: "",
        Zip: "",
        LicenseNumber: "",
        IPAddress: "",
      });
  
      // Update form count and total form count
      // const countResponse = await axios.get(`/api/formCount/${userId}`);
      // setFormSave(countResponse.data.count);
      // setTotalForm((prevTotal) => prevTotal - countResponse.data.count);
      setFormSave((prevCount) => prevCount + 1);
      setTotalform((prevTotal) => prevTotal - 1);
    //   setCurrentImageIndex((prevTotal)=>prevTotal+1)
      // Refresh form component
      setRefreshFormss((prevState) => !prevState);
    } catch (error) {
        console.log("eror")
    }
  };
  