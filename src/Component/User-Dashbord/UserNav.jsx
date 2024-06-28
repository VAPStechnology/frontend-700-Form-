import { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import Logo from "/Images/Logo.jpg";
import { FaSearch } from "react-icons/fa";
import Button from "../ReuseableComponent/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserNav() {
  const [isWelcomeDropdownOpen, setIsWelcomeDropdownOpen] = useState(false);
  const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useState(false);
  const [isSettingDropdownOpen, setIsSettingDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Function to toggle welcome dropdown
  const toggleWelcomeDropdown = () => {
    setIsWelcomeDropdownOpen(!isWelcomeDropdownOpen);
    setIsMessageDropdownOpen(false);
    setIsSettingDropdownOpen(false);
  };

  // Function to toggle message dropdown
  const toggleMessageDropdown = () => {
    setIsMessageDropdownOpen(!isMessageDropdownOpen);
    setIsWelcomeDropdownOpen(false);
    setIsSettingDropdownOpen(false);
  };

  // Function to toggle setting dropdown
  const toggleSettingDropdown = () => {
    setIsSettingDropdownOpen(!isSettingDropdownOpen);
    setIsWelcomeDropdownOpen(false);
    setIsMessageDropdownOpen(false);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token'); // Fetch token from localStorage
      const response = await axios.post(
        'https://aspirecareerconsultancy.online/api/v1/users/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        }
      );

      // Assuming the response contains a new token
      const newToken = response.data.data.accessToken;
      localStorage.setItem('token', newToken); // Update token in localStorage

      navigate("/");
    } catch (error) {
      alert("Logout failed:");
    }
  }

  return (
    <>
      <div className="bg-[#101D30] lg:w-full w-[60rem] md:w-[70rem] h-[6rem] flex justify-between">
        <div className="ml-9">
          <img src={Logo} className="md:w-28 w-20 pt-3" alt="Logo" />
        </div>

        <div className="text-white flex md:space-x-10 pt-16 md:text-lg text-[1rem] space-x-4">
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleWelcomeDropdown}
            >
              <IoIosContact />
              <p className="mt-[-0.2rem] ml-1">Welcome</p>
            </div>
            {isWelcomeDropdownOpen && (
              <div className="absolute bg-white top-full left-0 mt-1 py-2 px-4 rounded-lg shadow">
                {/* Dropdown content here */}
              </div>
            )}
          </div>

          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleMessageDropdown}
            >
              <MdOutlineEmail />
              <p className="mt-[-0.2rem] ml-1">Message</p>
            </div>
            {isMessageDropdownOpen && (
              <div className="absolute bg-white top-full left-0 mt-1 py-2 px-4 rounded-lg shadow">
                {/* Dropdown content here */}
              </div>
            )}
          </div>

          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleSettingDropdown}
            >
              <IoSettingsOutline />
              <p className="mt-[-0.2rem] ml-1">Setting</p>
            </div>
            {isSettingDropdownOpen && (
              <div className="absolute bg-white top-full left-0 mt-1 py-2 px-4 rounded-lg shadow">
                {/* Dropdown content here */}
              </div>
            )}
          </div>
        </div>

        <div className="flex md:pt-4 pt-8">
          <div className="text-white lg:text-3xl md:text-2xl text-xl md:mt-4 mt-3 mr-6">
            <FaSearch />
          </div>
          
          <Button
            onClick={handleLogout}
            item1={
              <IoIosLogOut className="lg:text-3xl md:text-2xl text-xl md:ml-3 ml-2 mt-3" />
            }
            item2={"Logout"}
          />
        </div>
      </div>
    </>
  );
}

export default UserNav;
