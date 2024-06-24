import { Link } from "react-router-dom";
import UserCom from "../ReuseableComponent/UserCom";
import UserFormNav from "../ReuseableComponent/UserFormNav";
import Formss from "./Formss";

function ViewForm() {
  return (
    <>
      <div className="lg:w-full w-[60rem] h-[100rem] md:w-[70rem]">
        {/* <Link to={"/user"}> <UserFormNav item1={"Home > Submit Form List > Form Details"} /></Link> */}

        {/* <div className="text-3xl ml-10 m-10 text-[#666363]">View Form</div> */}

        {/* box */}
       <Formss></Formss>
      </div>
    </>
  );
}

export default ViewForm;
