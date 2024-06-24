import { useState } from 'react'
import React from 'react';
import Header_text from './Component/Home-Compo/Header_text.jsx'
import Nav from './Component/Home-Compo/Nav.jsx'
import Header from './Component/Home-Compo/Header.jsx'
import Hexagon from './Component/Home-Compo/Hexagon.jsx'
import About from './Component/Home-Compo/About.jsx'
import Footer from './Component/Home-Compo/Footer.jsx'
import UserNav from './Component/User-Dashbord/UserNav.jsx'
import Dashbord from './Component/User-Dashbord/Dashbord.jsx'
import DashbordOption from './Component/User-Dashbord/DashbordOption.jsx'
import AdminNav from './Component/Admin-Dashbord/AdminNav.jsx'
import TableComponent from './Component/Admin-Dashbord/TableComponent.jsx'
import SubmitForm from './Component/User-Dashbord/SubmitForm.jsx';
import CurrentWork from './Component/User-Dashbord/CurrentWork.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* home page */}
      <Header_text></Header_text>
      <Nav></Nav>
      <Header></Header>
       <Hexagon></Hexagon>
       <About></About>
       <Footer></Footer>    
        {/*admin  */}
       {/* <AdminNav />
       <TableComponent></TableComponent> */}
       {/* user */}
       {/* <UserNav></UserNav>
       <Dashbord></Dashbord>
       <SubmitForm></SubmitForm>
       <DashbordOption />
       <SaveForm></SaveForm>
       <CurrentWork></CurrentWork>
       <ViewForm></ViewForm> */}
    </>
  )
}

export default App;
