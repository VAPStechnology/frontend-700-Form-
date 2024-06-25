import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ users, setUsers, username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
