import HexaContent from "../ReuseableComponent/HexaContent";
import HexagonCom from "../ReuseableComponent/HexagonCom";
import { PiWechatLogoFill } from "react-icons/pi";
import { BsActivity } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

function Hexagon() {
  return (
    <div>
      <div className="absolute z-20 md:mt-[-6rem] mt-[-3rem]  lg:w-full w-[60rem] md:w-[70rem]  lg:h-[45rem] md:h-[50rem] h-[35rem]">
        <div className="flex justify-center lg:ml-0 md:ml-16 ml-10 space-x-12">
          {/* 1st */}
          <div className=" w-[25rem] font-Roboto">
            <HexagonCom 
            item1={<FaFileAlt></FaFileAlt>}
            ></HexagonCom>
            <HexaContent
            item1={"Quick and Easy Registration"}
            item2={"In the quiet of solitude, the whispers of our souls find their voice.Amongst the stars, dreams find their canvas, painting the night sky with hopes untold."} // Include <br /> tag in item2
            ></HexaContent>
          </div>
          {/* 2nd */}
          <div className="w-[25rem] font-Roboto">
            <HexagonCom 
            item1={<BsActivity></BsActivity>}
            ></HexagonCom>
            <HexaContent
            item1={"Job Posting"}
            item2={"Employers need a straightforward way to create and manage job listings. An intuitive interface allows them to input job details, requirements, and company information efficiently."} // Include <br /> tag in item2       
            ></HexaContent>
          </div>
          {/* 3rd */}
          <div className="w-[25rem] font-Roboto">
            <HexagonCom 
            item1={<PiWechatLogoFill></PiWechatLogoFill>}
            ></HexagonCom>
            <HexaContent
            item1={"Application Tracking System"}
            item2={"Employers can track candidate applications, review  and communicate.This ensures efficient hiring workflows."} // Include <br /> tag in item2       

            ></HexaContent>
          </div>
          {/* 4th */}
          <div className="w-[25rem] font-Roboto">
            <HexagonCom 
            item1={<FaFileAlt></FaFileAlt>}
            ></HexagonCom>
            <HexaContent
            item1={"Instant Response"}
            item2={"Real-time communication between employers and job seekers enhances engagement."} // Include <br /> tag in item2       
            ></HexaContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hexagon;
