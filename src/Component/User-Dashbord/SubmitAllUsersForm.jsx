import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";

function SubmitAllUsersForm() {
  const { username, formCount, totalForm } = useAuth(); // Assuming useAuth provides username, formCount, and totalForm
  const [formsData, setFormsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://aspirecareerconsultancy.online/api/v1/forms/user/forms`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });        
        setFormsData(response.data.data); 
      } catch (error) {
        console.error('Error fetching forms:');
       
      }
    };

    fetchData();
  }, [username]); 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // Handle input changes if needed
  };

  return (
    <>
      {formsData.map((formDataItem, index) => (
        <div key={index} className="border-black border-spacing-3 flex justify-center lg:w-full w-[60rem] md:w-[70rem]">
          <div className="border border-black mt-4 lg:h-[60rem] lg:w-[60rem] md:w-[60rem] md:h-[60rem] h-[60rem] md:p-0 ">
            <div className="bg-[#817d7d] lg:w-[60rem] md:w-[60rem] w-[50rem] h-28 pl-12 md:mt-0 ">
              <div className=" text-xl font-semibold">Form number:{index}</div>  
              <div className=" text-xl font-semibold">1.Username: {username}</div>
              <div className=" text-xl font-semibold">2.TotalForm Pending Count: {totalForm}</div>
              <div className=" text-xl font-semibold">3.Form Submit Count: {formCount}</div>
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
                      value={formDataItem[field]} // Bind input value to corresponding field in formDataItem
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
                      value={formDataItem[field]} // Bind input value to corresponding field in formDataItem
                      onChange={handleInputChange}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default SubmitAllUsersForm;
