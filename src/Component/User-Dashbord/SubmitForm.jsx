import { TiHomeOutline } from "react-icons/ti";
import { PiListDashesBold } from "react-icons/pi";
import UserTable from "../ReuseableComponent/UserTable";
import UserFormNav from "../ReuseableComponent/UserFormNav";
import UserCom from "../ReuseableComponent/UserCom";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

function SubmitForm({}) {
  const { formCount } = useAuth();
  return (
    <>
      <div className="font-Roboto lg:w-full w-[60rem] h-[100rem] md:w-[70rem]">
        <Link to={"/user"}>
          <UserFormNav item1={" Home > Submit Form"} />
        </Link>

        <div className="text-3xl ml-10 m-10 text-[#666363]">
          All Submit Form
        </div>

        <UserCom item1={"Submit Form List"} />

        {/* Table */}
        <table className="border-collapse border border-gray-300 w-full mt-10">
          <thead>
            <tr className="bg-[#b4b1b1] text-center font-bold text-2xl">
              <td className="border border-gray-300 px-4 py-2 w-1/3">
                Form Submitted Count
              </td>
              <td className="border border-gray-300 px-4 py-2 w-1/3">Status</td>
              <td className="border border-gray-300 px-4 py-2 w-1/3">Action</td>
            </tr>
          </thead>
          <tbody>
            <UserTable
              item1={formCount}
              item2={"Submit"}
              item3={"View Forms"}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SubmitForm;
