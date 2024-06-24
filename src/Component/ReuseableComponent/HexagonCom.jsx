const HexagonCom = ({ item1 }) => {
  return (
    <div className="relative lg:w-[13rem] lg:h-[13.5rem] md:w-[10rem] md:h-[10.5rem] w-[7rem] h-[7.5rem] overflow-hidden ">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      >
        <div className="w-full h-full bg-white hover:bg-red-700 text-red-700 hover:text-white">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className=" lg:text-8xl text-6xl">{item1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexagonCom;





