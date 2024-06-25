import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import CurrentWork from './Component/User-Dashbord/CurrentWork.jsx';
import SubmitForm from './Component/User-Dashbord/SubmitForm.jsx';
import Dashbord from './Component/User-Dashbord/Dashbord.jsx';
import DashbordOption from './Component/User-Dashbord/DashbordOption.jsx';
import TotalForm from './Component/User-Dashbord/TotalForm.jsx';
import LoginPageUser from './Component/Home-Compo/LoginPageUser.jsx';
import LoginPageAdmin from './Component/Home-Compo/LoginPageAdmin.jsx';
import RoutingAdmin from './RoutingAdmin.jsx';
import App from './App.jsx';
import User from './User.jsx';
import { AuthProvider, useAuth } from './Context/AuthContext';
import TableComponent from './Component/Admin-Dashbord/TableComponent.jsx';
import SubmitAllUsersForm from './Component/User-Dashbord/SubmitAllUsersForm.jsx';
import Agreement from './Component/User-Dashbord/Agreement.jsx';

const Root = () => {
  const { isLoggedIn } = useAuth();
  const { username, formCount, totalForm } = useAuth();
  const { usernames, email, password, fullname } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPageUser />} />
        <Route path="/user" element={isLoggedIn ? <User /> : <Navigate to="/login" replace />} />
        <Route path='/admin' element={isLoggedIn ? <RoutingAdmin /> : <Navigate to="/loginadmin" replace />} />
        <Route path="/CurrentWork" element={isLoggedIn ? <CurrentWork /> : <Navigate to="/login" replace />} />
        <Route path="/SubmitForm" element={isLoggedIn ? <SubmitForm formCount={formCount} /> : <Navigate to="/login" replace />} />
        <Route path="/dashbord" element={isLoggedIn ? <Dashbord /> : <Navigate to="/login" replace />} />
        <Route path="/DashbordOption" element={isLoggedIn ? <DashbordOption formCount={formCount} totalForm={totalForm} /> : <Navigate to="/login" replace />} />
        <Route path="/totalform" element={isLoggedIn ? <TotalForm username={username} /> : <Navigate to="/login" replace />} />
        <Route path="/loginadmin" element={<LoginPageAdmin />} />
        <Route path='/SubmitAllUsersForm' element={isLoggedIn ? <SubmitAllUsersForm username={username} formCount={formCount} totalForm={totalForm} /> : <Navigate to="/login" replace />} />
        <Route path="/TableComponent" element={isLoggedIn ? <TableComponent usernames={usernames} email={email} password={password} fullname={fullname} /> : <Navigate to="/loginadmin" replace />} />
        <Route path='/Agreement' element={isLoggedIn ? <Agreement usernames={usernames} email={email} password={password} fullname={fullname} /> : <Navigate to="/loginadmin" replace />} />
      </Routes>
    </Router>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Root />
    </AuthProvider>
  </React.StrictMode>
);
