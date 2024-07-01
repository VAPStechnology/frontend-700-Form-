import Button from '../ReuseableComponent/Button';
import { IoIosLogOut } from "react-icons/io";
import Logo from '/Images/Logo.jpeg'
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <>

<div className="absolute lg:w-full w-[60rem] md:w-[70rem] h-full mt-10 z-20">
           <div className='flex justify-between'>
           <div>
               <img 
               src={Logo}
               className=' w-28 h-16 md:ml-20'
               alt="Logo"
               />
           </div>
             
            
           
           <div className='flex'>
            <Link to={"https://docs.google.com/forms/d/e/1FAIpQLSe7JGhQgwiS2j18BYpA0lOK7vV7Xvw9VA7Ys0WT-IzuC7wnSQ/viewform?embedded=true"}>
           <Button
                 item2="Sign in"
                 tailwindClasses="lg:pl-10 md:pl-8 pl-6"
               />
           </Link>
           <Link to={"/login"}>
              <Button
                 item2="Login"
                 tailwindClasses="lg:pl-10 md:pl-8 pl-6"
               />
            </Link>
            <Link to={"/loginadmin"}>
              <Button
                 item2="Admin"
                 tailwindClasses="lg:pl-10 md:pl-8 pl-6"
               />
            </Link>
               
           </div>
            
           
           </div>
           <div>
              <hr className='border-black mt-5'></hr>
           </div>
       </div>

     
      
        </>
    )
}
export default Nav;