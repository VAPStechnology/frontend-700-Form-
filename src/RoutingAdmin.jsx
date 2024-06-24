import AdminNav from "./Component/Admin-Dashbord/AdminNav";
import TableComponent from "./Component/Admin-Dashbord/TableComponent";
import { UserProvider } from "./Context/UserContext";

const RoutingAdmin=()=>{
    return(
        <>
        <UserProvider>
        <AdminNav></AdminNav>
        <TableComponent></TableComponent>
        </UserProvider>
        </>
    )
}
export default RoutingAdmin;