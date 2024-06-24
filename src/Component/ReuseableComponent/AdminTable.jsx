import React, { useState } from "react";

const AdminTable = ({ index, fullname, email, username, handleDelete, searchUsername }) => {
  const [usernameToDelete, setUsernameToDelete] = useState("");

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
      <td className="border border-gray-400 px-4 py-2 flex">
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
