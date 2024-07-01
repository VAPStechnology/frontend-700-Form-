import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AdminTable = ({ index, fullname, username, email, handleDelete, searchUsername }) => {
  const [usernameToDelete, setUsernameToDelete] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[isLoginthenShow,setIsLoginthenShow]=useState(false);
  const navigate = useNavigate();



  //login
  const handleLogin = async (event) => {
    event.preventDefault();

    if (!password || !Email) {
      console.log('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('https://aspirecareerconsultancy.online/api/v1/users/login', {
        email: Email,
        password: password,
      });

      if (response.data.success) {
        alert('Login success');
        const accessToken = response.data.data.accessToken;
        const username = response.data.data.user.username;
        localStorage.setItem('token', accessToken);
        setIsLoginthenShow(true);

        if (response.data.callback_url) {
          window.location.href = response.data.callback_url;
        }
      } else {
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      alert("Failed to login. Please try again later.");
    }
  };

  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
      }

      const response = await axios.post(
        'https://aspirecareerconsultancy.online/api/v1/users/change-password',
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
          confPassword: confirmPassword // Ensure this matches your backend
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert(`Password changed successfully for user ${username}`);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert('Failed to change password. Please try again.');
      }
    } catch (error) {
      alert('Failed to change password. Please try again later.');
    }
  };

  const handleDeleteClick = () => {
    handleDelete(usernameToDelete);
    setUsernameToDelete(""); // Reset the input field after delete
  };

  const isHighlighted = searchUsername && username.toLowerCase() === searchUsername.toLowerCase();

  return (
    <tr>
      <td className={`border border-gray-400 px-2 py-2" ${isHighlighted ? 'text-red-600 font-bold text-xl' : ''}`} >{index}</td>
      <td className={`border border-gray-400 px-4 py-2 ${isHighlighted ? 'text-red-600 font-bold text-xl' : ''}`}>{fullname}</td>
      <td className={`border border-gray-400 px-2 py-2" ${isHighlighted ? 'text-red-600 font-bold text-xl' : ''}`}>{email}</td>
      <td className={`border border-gray-400 px-2 py-2" ${isHighlighted ? 'text-red-600 font-bold text-xl' : ''}`}>{username}</td>
      <td className={`border border-gray-400 px-2 py-2" ${isHighlighted ? 'text-red-600 font-bold text-xl' : ''}`}>
      {!isLoginthenShow ? (
        <div className={`space-y-3 flex flex-col items-center `}>
          <input
            type="text"
            placeholder="Enter Email"
            className="w-60 h-12 border border-black rounded-lg"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="w-60 h-12 border border-black rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="ml-2 mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>):(
          <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Old Password"
            className="w-60 h-12 border border-black rounded-lg"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Password"
            className="w-60 h-12 border border-black rounded-lg"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-60 h-12 border border-black rounded-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="ml-2 mb-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleChangePassword}
          >
            Change
          </button>
        </div>
        )}

      </td>
      
      <td className="border border-gray-400  px-2 py-2 flex">
        <input
          type="text"
          placeholder="Enter Username to Delete"
          className="w-60 h-12 border border-black rounded-lg"
          value={usernameToDelete}
          onChange={(e) => setUsernameToDelete(e.target.value)}
        />
        <button
          className="ml-2 mb-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminTable;
