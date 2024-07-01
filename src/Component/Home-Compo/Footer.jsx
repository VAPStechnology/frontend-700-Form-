import Logo from '/Images/Logo.jpeg'

function Footer() {
  return (
    <>
      <div className="  lg:w-full w-[60rem] md:w-[70rem] h-[30rem] bg-[#101D30] font-Roboto">
        <div className="flex ml-40 space-x-16 pt-10">
          <div>
            <img src={Logo}
            className=' w-32'
            ></img>
            <div className='text-white mt-6 md:text-[1.2rem] text-[1rem]'>consultancyaspirecareer@gmail.com
            </div>
         </div>
          <div className="text-[#EA5455] md:text-2xl text-xl">What We Do</div>
          <div className="text-[#EA5455] md:text-2xl text-xl">Our Partner</div>
          <div className="text-[#EA5455] md:text-2xl text-xl">Our Team</div>
        </div>
        <div>
            <hr className='border-white ml-40 mr-40 mt-60'></hr><br />
           <div className='text-md text-white ml-40'>&copy;9G7Q+G58, Saroor Nagar, HUDA Complex Area, District: Hyderabad, Pin: 500035, State: Telangana.</div>
        </div>
      </div>
    </>
  );
}
export default Footer;
