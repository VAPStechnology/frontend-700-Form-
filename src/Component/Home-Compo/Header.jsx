import Img from '/Images/main2.jpeg'
function Header(){
    return(
        <>
     <div className="relative  lg:w-full w-[60rem] md:w-[70rem]">
      <img src={Img} className="lg:h-[45rem] md:h-[50rem] md:w-[150rem] w-[60rem] h-[30rem] " alt="Header Image" />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Increase z-index */}
    </div>
    
        </>
    )
}
export default Header;