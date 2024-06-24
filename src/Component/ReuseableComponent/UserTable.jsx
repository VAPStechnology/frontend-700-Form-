import { Link } from "react-router-dom";

const UserTable = ({item1,item2,item3}) => {
  return (
    <>
      <tr>
        <td className="border border-gray-300 px-4 py-2 w-1/3">{item1}</td>
        <td className="border border-gray-300 px-4 py-2 w-1/3">{item2}</td>
        <td className="border border-gray-300 px-4 py-2 w-1/3"><Link to={"/SubmitAllUsersForm"}>{item3}</Link></td>
      </tr>
    </>
  );
};
export default UserTable;
