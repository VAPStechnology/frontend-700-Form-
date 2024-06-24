import { TiHomeOutline } from "react-icons/ti";
const UserFormNav = ({item1}) => {
  return (
    <>
      <div className="flex text-xl bg-[#D9D9D9] text-[#585555] pl-10 lg:w-full w-[60rem] md:w-[70rem]">
        <TiHomeOutline className="mt-1" />
       {item1}
      </div>
    </>
  );
};
export default UserFormNav;
