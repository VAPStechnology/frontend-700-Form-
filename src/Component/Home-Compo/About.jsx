import DivAbout from "../ReuseableComponent/DivAbout";

const About = () => {
  return (
    <>
      <div className="mt-96 text-center mb-64  lg:w-full w-[60rem] md:w-[70rem]">
        <div className="text-[#FEB692] text-2xl font-Roboto">About Us</div>
        <div className="text-[#101D30] text-5xl font-bold mt-5">
          We are here to help you grow
        </div>
        <div className=" flex justify-center mt-10">
          <div className="w-[30rem] text-wrap font-Roboto">
           At Aspire Career Consultancy, our mission is to empower individuals on their professional journeys.  Our team of experts provides career advice and connects you with opportunities that align with your aspirations. Let’s unlock your potential together!
          </div>
        </div>
       <div className="flex justify-center mt-10 font-Roboto">
          <div className="bg-[#FEB692] hover:bg-[#FDD819] w-[15rem]  h-[4rem] text-center pt-4 rounded-lg text-white font-semibold font-Roboto">Lets get acquainted</div>
       </div>
       <div className="flex justify-center space-x-7 mt-10">
          <DivAbout
          item1={"Our Misson"}
          item2={"At Aspire Career Consultancy, we believe that everyone deserves a fulfilling career path and to propel careers forward through expert advice, skill development, and networking."}
          ></DivAbout>
          <DivAbout
          item1={"Our Vision"}
          item2={"Empowering individuals to achieve their professional dreams by providing personalized guidance, resources, and opportunities."}
          ></DivAbout>
       </div>
      </div>
    </>
  );
};
export default About;
