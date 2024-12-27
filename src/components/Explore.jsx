

const Explore = () => {
  return (
    <div className=" flex flex-wrap items-center justify-center  gap-12 bg-gray-100 p-6 py-10 rounded-lg shadow-lg  ">
      
      <div className=" exploreleft relative my-52  mx-20 w-[100%] lg:m-0 lg:my-0  lg:w-[30%]  bg-transparent">
       <div className=" absolute  w-[100%] top-[-10rem] grid items-start gap-9">
       <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business
        </h2>
        <p className="text-gray-600">
          The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
        </p>
        <button className=" me-[128px] rounded-full py-3 bg-black text-white shadow hover:bg-gray-800">
          Explore MyFeedback business
        </button> 
       </div>
      </div>

      {/* Image Section */}
      <div className=" mt-6 md:mt-0 bg-transparent rounded-full">
        <img
          src="/Explore/Rectangle 27.png" // Replace with your image URL
          alt="Outdoor dining"
          className=" bg-transparent rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default Explore;
