import React, { useState } from "react";

const SearchForm = ({ handleSearch }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await handleSearch(username);
    } catch (error) {
      console.error("Failed to perform search:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-2 mb-4">
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <input
          type="text"
          placeholder="Search by Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-2 border rounded-md shadow-xl"
        />
        <button
          type="submit"
          className={`py-2 px-4 rounded-md text-white shadow-xl ${loading ? 'bg-red-500' : 'bg-[#EA5455]'}`}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
