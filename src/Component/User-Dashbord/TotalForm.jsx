import React, { useState, useEffect } from "react";
import { imageUrls } from "../Utility/ImageUtils";
import { handleSubmit } from "../Utility/HandleSubmitUtils";
import { handleSave } from "../Utility/HandleSave";
import { useAuth } from "../../Context/AuthContext";

const TotalForm = () => {
  const { username, login } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phone: "",
    acNo: "",
    address: "",
    state: "",
    dateOfBirth: "",
    licenseState: "",
    ssn: "",
    bankName: "",
    loanAmount: "",
    city: "",
    zip: "",
    licenseNumber: "",
    ipAddress: "",
  });

  const [formCount, setFormCount] = useState(0);
  const [totalForm, setTotalForm] = useState(700);
  const [formSave, setFormSave] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to fetch form count from the backend
  const fetchFormCount = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://aspirecareerconsultancy.online/api/v1/forms/user/${username}/form-submissions/count`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        const fetchedFormCount = data.data.count;
        const calculatedTotalForm = 700 - fetchedFormCount;
        setFormCount(fetchedFormCount);
        setTotalForm(calculatedTotalForm);
        login(username, username, fetchedFormCount, calculatedTotalForm); // Corrected here

        if (data.data.accessToken) {
          localStorage.setItem('token', data.data.accessToken);
        }
      } else {
        console.error("Failed to fetch form count");
      }
    } catch (error) {
      console.error("Error fetching form count:");
    }
  };

 
  useEffect(() => {
    fetchFormCount();
  }, []); 

  // Utility for submit form
  const handleFormSubmit = async () => {
    await handleSubmit(
      formData,
      setFormData,
      setFormCount,
      setTotalForm,
      setFormSave
    );
    setFormCount((prevCount) => {
      const newCount = prevCount + 1;
      setTotalForm((prevTotal) => prevTotal - 1);
      return newCount;
    });
  };



  useEffect(() => {
    const newIndex = formCount % imageUrls.length;
    setCurrentImageIndex(newIndex);
  }, [formCount]);

  // Utility
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <div className="flex justify-center">
        <img src={imageUrls[currentImageIndex]} className=" w-[20rem] h-[10rem]" alt="placeholder" />
      </div>
      <div className="border-black border-spacing-3 flex justify-center lg:w-full w-[60rem] md:w-[70rem]">
        <div className="border border-black mt-4 lg:h-[60rem] lg:w-[60rem] md:w-[60rem] md:h-[60rem] h-[60rem] md:p-0 ">

          <div className="bg-[#817d7d] lg:w-[60rem] md:w-[60rem] w-[50rem] h-20 pl-12 md:mt-0 ">
            <div className=" text-xl font-semibold">TotalForm Pending Count:{totalForm}</div> 
            <div className=" text-xl font-semibold">Form Submit Count: {formCount}</div> 
          </div> 

          <div className="flex justify-center mt-10 space-x-20">
            <div className="w-[20rem] h-[7rem] flex flex-col justify-between mr-4">
              {[
                "phone",
                "acNo",
                "address",
                "state",
                "dateOfBirth",
                "licenseState",
                "ssn",
                "bankName",
              ].map((field) => (
                <React.Fragment key={field}>
                  <label htmlFor={field}>{field}</label>
                  <input
                    type="text"
                    id={field}
                    className="border border-black p-2 mb-5 rounded-md"
                    value={formData[field]}
                    onChange={handleInputChange}
                  />
                </React.Fragment>
              ))}
            </div>
            <div className="w-[20rem] h-[7rem] flex flex-col justify-between">
              {[
                "loanAmount",
                "city",
                "zip",
                "licenseNumber",
                "ipAddress",
                "firstName",
                "lastName",
                "emailId",
              ].map((field) => (
                <React.Fragment key={field}>
                  <label htmlFor={field}>{field}</label>
                  <input
                    type="text"
                    id={field}
                    className="border border-black p-2 mb-5 rounded-md"
                    value={formData[field]}
                    onChange={handleInputChange}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-2xl space-x-10 font-serif">
        <button
          onClick={handleFormSubmit}
          className="bg-slate-500 w-[7rem] hover:bg-slate-400 rounded-lg"
        >
          Submit
        </button>
     
      </div>
    </>
  );
};

export default TotalForm;
