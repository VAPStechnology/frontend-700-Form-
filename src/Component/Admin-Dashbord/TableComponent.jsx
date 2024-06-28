import React, { useContext, useEffect, useState } from "react";
import AdminTable from "../ReuseableComponent/AdminTable";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
import SearchForm from "./SortBy";

const TableComponent = () => {
  const { users, setUsers, username, setUsername } = useContext(UserContext);
  const [searchResults, setSearchResults] = useState([]);
  const [searchUsername, setSearchUsername] = useState('');

  const fetchUsers = async () => {
    const token = localStorage.getItem("adminToken");

    try {
      const response = await axios.get(
        "https://aspirecareerconsultancy.online/api/v1/admins/all-users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(response.data.data); // Assuming users are in response.data.data
    } catch (error) {
      console.error(
        "Failed to fetch users:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDelete = async (usernameToDelete) => {
    const token = localStorage.getItem("adminToken");

    try {
      const response = await axios.delete(
        `https://aspirecareerconsultancy.online/api/v1/admins/delete-user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { username: usernameToDelete }
        }
      );
      alert("User deleted successfully!");
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error("Failed to delete user:", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = async (username) => {
    setSearchUsername(username);
    setUsername(username);
    const token = localStorage.getItem("adminToken");

    try {
      const response = await axios.get(
        "https://aspirecareerconsultancy.online/api/v1/admins/all-users",
        {
          params: { username },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSearchResults(response.data.data);
    } catch (error) {
      console.error("Failed to search users:", error.message);
    }
  };

  return (
    <div className="lg:w-full w-[60rem] md:w-[70rem] h-[100rem]">
      <div className="flex justify-center mt-2">
        <button
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchUsers}
        >
          Refresh
        </button>
      </div>
      <SearchForm handleSearch={handleSearch} />
      <table className="lg:w-full w-[60rem] md:w-[70rem]">
        <thead>
          <tr className="bg-gray-200 h-24">
            <th className="border border-gray-400 px-2 py-2 w-24">Sr.no</th>
            <th className="border border-gray-400 px-4 py-2 w-60">Name</th>
            <th className="border border-gray-400 px-4 py-2 w-96">Email</th>
            <th className="border border-gray-400 px-4 py-2 w-60">Username</th>
            <th className="border border-gray-400 px-4 py-2 w-60">Function</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.length > 0
            ? searchResults.map((user, index) => (
                <AdminTable
                  key={index + 1}
                  index={index + 1}
                  fullname={user.fullname}
                  email={user.email}
                  username={user.username}
                  handleDelete={handleDelete}
                  searchUsername={searchUsername}
                />
              ))
            : users.map((user, index) => (
                <AdminTable
                  key={index + 1}
                  index={index + 1}
                  fullname={user.fullname}
                  email={user.email}
                  username={user.username}
                  handleDelete={handleDelete}
                  searchUsername={searchUsername}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
