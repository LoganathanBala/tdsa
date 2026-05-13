import DotGrid from "../../components/DotGrid"
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import userImg from "../images/user.png";

function Board() {
  return (
    <>
      <Header />
      
      <div className="bg-blue-900 opacity-90 relative mt-24 bg-contain h-48 sm:h-[420px] sm:mt-28 sm:bg-cover">  
        <div className="relative w-full flex justify-center items-center flex-col pt-[12%]">
              <h1 className="text-white text-2xl font-extrabold uppercase lg:text-5xl md:text-3xl  pb-4 text-shadow-lg/30">
                Trichirappalli District Board of Mememers
              </h1>
              {/* <h2 className="worksans text-3xl font-extrabold">
                Where <span className="gold_text">Champions</span> are made
              </h2> */}
        </div>
      </div>    

      <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-center p-2 border-2 rounded-md">
            <div className="">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-950">
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
          </div>
          <div className="flex flex-col items-center p-2 border-2 rounded-md">
            <div className="">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-950">
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
          </div>
          <div className="flex flex-col items-center p-2 border-2 rounded-md">
            <div className="">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-950">
              <h4>Name</h4>
              <h6>Position</h6>
            </div>
          </div>
      </div>

      <Footer />
    </>
  );
}

export default Board;
