const HexaContent = ({ item1, item2 }) => {
    return (
      <>
        <div>
          <h1 className="lg:text-[1.7rem] md:text-[1.3rem] text-[1rem] font-bold text-cenetr text-[#101D30] mt-10">{item1}</h1>
          <p
            className="lg:text-base md:text-sm text-xs whitespace-normal"
            dangerouslySetInnerHTML={{ __html: item2 }} // Render item2 as HTML
          />
        </div>
      </>
    );
  };
  export default HexaContent;