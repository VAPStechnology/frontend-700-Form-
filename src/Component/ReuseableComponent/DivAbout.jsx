const DivAbout=({item1,item2})=>{
    return(
        <>
        <div className=" w-[30rem] lg:h-[10rem] h-[13rem] bg-white text-wrap rounded-lg shadow-2xl p-4 font-Roboto">
            <div className="text-xl font-semibold text-[#FEB692] text-left ml-4">{item1}</div>
           <div className="text-[1.1rem]"> {item2}</div>
        </div>
        </>
    )
}
export default DivAbout;