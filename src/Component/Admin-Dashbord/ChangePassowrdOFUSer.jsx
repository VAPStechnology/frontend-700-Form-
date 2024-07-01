import React, { useState } from "react";
import axios from "axios";

const ChangePasswordOFUSer = () => {
  const [usernameToDelete, setUsernameToDelete] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginThenShow, setIsLoginThenShow] = useState(false);

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

      console.log('Response:', response.data); // Log the response

      if (response.data.success) {
        alert('Login success');
        const accessToken = response.data.data.accessToken;
        const username = response.data.data.user.username;
        localStorage.setItem('token', accessToken);
        setIsLoginThenShow(true);

        if (response.data.callback_url) {
          window.location.href = response.data.callback_url;
        }
      } else {
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error:', error); // Log the error
      if (error.response) {
        console.error('Response error data:', error.response.data); // Log response error data
      }
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
        alert(`Password changed successfully for user`);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert('Failed to change password. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error); // Log the error
      alert('Failed to change password. Please try again later.');
    }
  };

  return (
    <>
      {!isLoginThenShow ? (
        <div className={`space-y-3 flex flex-col items-center `}>
          <input
            type="email"
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
        </div>
      ) : (
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
    </>
  );
};

export default ChangePasswordOFUSer;
