import { PiListDashesBold } from "react-icons/pi";
const HomeButton = ({ item1, item2, item1Classes, item2Classes }) => {
    return (
        <>
            <div>
                <div className={`w-6 h-6 absolute ml-56 text-center font-Roboto ${item1Classes}`}>{item1}</div>
                <div className={`w-[15rem] h-14 mt-4 rounded-[0.3rem] text-center text-white font-Roboto flex justify-center pt-4 text-xl ${item2Classes}`}><PiListDashesBold className="mt-[0.2rem]"></PiListDashesBold>{item2}</div>
            </div>
        </>
    );
};

export default HomeButton;
