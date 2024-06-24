import { IoMdThumbsDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
function CurrentWork() {
  return (
    <>
      <div className=" font-Roboto space-y-4 lg:w-full w-[60rem] h-[100rem] md:w-[70rem]">
        <div className="flex text-2xl bg-[#D9D9D9] text-[#585555] pl-10">
          Work Stop
        </div>
       <div className="flex">
       <IoMdThumbsDown className="mt-1 ml-10"></IoMdThumbsDown>&nbsp;Work Stop
       </div>
       <div className="bg-[#D9D9D9] h-[8rem] w-full flex justify-center items-center">
           <div className=" bg-red-600 lg:w-[100rem] md:w-[60rem] w-[50rem] h-[5rem] bg-opacity-45 text-red-800 pl-2 text-xl">
               <div className=" flex justify-end mr-2 text-xl mt-1"><RxCross1></RxCross1></div>
               <div className="font-semibold">In Processing!</div>
               <div>YOUR QR REPORT IS UNDER REVIEW</div>

           </div>
       </div>
      </div>
    </>
  );
}
export default CurrentWork;
