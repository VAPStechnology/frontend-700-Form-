import Nav from './Component/Home-Compo/Nav';
import Dashbord from './Component/User-Dashbord/Dashbord';
import UserNav from './Component/User-Dashbord/UserNav';
function User(){
    return(
        <>
          <UserNav></UserNav>
          <Dashbord />
        </>
    )
}
export default User;