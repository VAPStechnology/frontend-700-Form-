import AgreementPage1 from '/Images/AgreementPage1.jpg'
import AgreementPage2 from '/Images/AgreementPage2.jpeg'
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useAuth } from '../../Context/AuthContext';

function Agreement() {
    const { username } = useAuth();
    return (
        <>
            <div className="lg:w-full w-[50rem] md:w-[70rem] h-[90rem]">
                <Link to={"/user"}>
                    <div className="bg-[#D9D9D9] lg:w-full w-[60rem] md:w-[70rem] h-[3rem] font-Roboto flex text-black text-lg pt-2">
                        &nbsp;&nbsp;
                        <TiHomeOutline className="mt-[0.2rem]" />
                        &nbsp;Home
                    </div>
                </Link>
                <div className="flex flex-col items-center relative">
                    <img src={AgreementPage1} className="w-full max-w-[50rem] md:max-w-[70rem]" />
                    <img src={AgreementPage2} className="w-full max-w-[50rem] md:max-w-[70rem]" />
                    <div className="absolute top-[82%]  right-[20%] lg:right-[27%]  text-black w-[90%] max-w-[20rem] h-[9rem] flex items-center justify-center text-center text-3xl">
                        {username}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Agreement;
