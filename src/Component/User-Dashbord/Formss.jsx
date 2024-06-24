import React from "react";
import FormInput from "../ReuseableComponent/FormInput";

function Formss({ formData, placeholders, handleChange ,count }) {
  return (
    <>
      <div className="border-black border-spacing-3 flex justify-center lg:w-full w-[60rem] md:w-[70rem]">
        <div className="border border-black mt-4 lg:h-[60rem] lg:w-[60rem] md:w-[60rem] md:h-[60rem] h-[60rem] md:p-0 ">
        <div className="bg-[#817d7d] lg:w-[60rem] md:w-[60rem] w-[50rem] h-11 pl-12 md:mt-0 ">
          View Form [{count}]
        </div>
          <div className="flex justify-center mt-10 space-x-20 ">
            <div className="w-[20rem] h-[7rem] flex flex-col justify-between mr-4 ">
                    phone 
                    <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    acNo
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    address
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    state
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    dataOfBirth
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    licenseState
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    ssn
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    BankName
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
            </div>
            <div className="w-[20rem] h-[7rem] flex flex-col justify-between ">
            loanAmount
            <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    
                    city
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>

                    zip
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>

                     licenseNumber
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>

ipAddress
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    firstname
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    lastname
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 mb-5 rounded-md"
                    ></input>
                    email
                     <input
                    type="text"
                    id="firstName"
                    className="border border-black p-2 rounded-md"
                    ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formss;
