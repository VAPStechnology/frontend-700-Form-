import { PiListDashesBold } from "react-icons/pi";
const UserCom=({item1})=>{
    return(
        <>
         <div className="bg-[#b4b1b1] text-[#585555] text-2xl flex h-[3rem] items-center">
          <div className="">
            <PiListDashesBold className="mt-1 mr-6 text-black ml-6" />
          </div>
          <div>{item1}</div>
        </div>
        </>
    )
}
export default UserCom;