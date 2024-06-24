// DashbordOption.jsx
import React from "react";
import HomeButton from "../ReuseableComponent/HomeButton";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

function DashbordOption({}) {
  const {formCount,totalForm} =useAuth();
  const item1Classes1 = "bg-[#EA5455]";
  const item2Classes2 = "bg-[#0088cc]";

  const item1Classes3 = "bg-[#9747FF]";
  const item2Classes4 = "bg-[#83DA65]";

  const item1Classes5 = "bg-[#83DA65] ";
  const item2Classes6 = "bg-[#FDD819]";

  return (
    <>
      <div className="lg:w-full w-[50rem] md:w-[70rem] h-[90rem]">
        <Link to={"/user"}>
          <div className="bg-[#D9D9D9] lg:w-full w-[60rem] md:w-[70rem] h-[3rem] font-Roboto flex text-black text-lg pt-2">
            &nbsp;&nbsp;
            <TiHomeOutline className=" mt-[0.2rem] "></TiHomeOutline>
            &nbsp;Home
          </div>
        </Link>
        <div className="flex justify-around mt-20">
          <Link to={'/totalform'}>
            <HomeButton
              item1={totalForm}
              item2="Total Form"
              item1Classes={item1Classes1}
              item2Classes={item2Classes2}
            />
          </Link>
          <Link to={"/SubmitAllUsersForm"}>
          <HomeButton
            item1={formCount} // Display formCount from useAuth
            item2="Submit Form"
            item1Classes={item1Classes3}
            item2Classes={item2Classes4}
          />
          </Link>
         
        </div>
      </div>
    </>
  );
}

export default DashbordOption;
