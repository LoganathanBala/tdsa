import DotGrid from "../../components/DotGrid"
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import userImg from "../images/user.png";
import ShinyText from '../../components/ShinyText';

function Board() {
  return (
    <>
      <Header />
      
      {/* <div className="bg-blue-900 opacity-90 relative mt-24 bg-contain h-48 sm:h-[420px] sm:mt-28 sm:bg-cover">  
        <div className="relative w-full flex justify-center items-center flex-col pt-[12%]">
              <h1 className="text-white text-2xl font-extrabold uppercase lg:text-5xl md:text-3xl  pb-4 text-shadow-lg/30">
                Trichirappalli District Board of Mememers
              </h1>             
        </div>
      </div>    */}
      <div className="relative bg-blue-900 mt-24 bg-contain h-48 sm:h-105 sm:mt-28 sm:bg-cover">  
        <div className="about-banner w-full "></div>
            <div className="relative min-h-50 flex justify-center align-middle md:min-h-100 md:items-center">
              <h1 className="text-white text-center leading-16 text-2xl font-extrabold uppercase lg:text-5xl md:text-4xl text-shadow-lg/30">Trichirappalli District Silambatta Kazhgam <br/> Board of Mememers</h1>
            </div>
      </div>    

        <ShinyText
          text="LEAD TEAM"
          speed={1.8}
          delay={0.5}
          color="#1c398e"
          shineColor="#000000"
          spread={90}
          direction="left"
          yoyo={false}
          pauseOnHover
          disabled={false}
          className="font-extrabold text-5xl flex justify-center my-10 uppercase"
        />

       <div className="relative w-full flex justify-center items-center">
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%] md:justify-center md:items-center">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-2xl font-extrabold">Name</h4>
              <h6 className="font-bold">President</h6>
            </div>
          </div>
        </div>

      <div className="container relative w-full flex gap-10 flex-col justify-center flex-wrap my-10 md:flex-row">
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-2xl font-extrabold">P Sakthivel <sub className="font-bold text-xs top-0 pl-1">Rtd. RPF</sub></h4>
              <h6 className="font-medium">Vice President</h6>
            </div>
          </div>
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-2xl font-extrabold">G.N Shanmuga Sundaram</h4>
              <h6 className="font-medium">Vice President</h6>
            </div>
          </div>
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold">Siva Kumar</h4>
              <h6 className="font-medium">Vice President</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-2xl font-extrabold">S Senthil Kuamr<sub className="font-bold text-xs top-0 pl-1">M.Com</sub></h4>
              <h6 className="font-medium">Secretary</h6>
            </div>
          </div>
           <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold">V Hari Kumar<sub className="font-bold text-xs top-0 pl-1">B.Com</sub></h4>
              <h6 className="font-medium">Treasurer</h6>
            </div>
          </div>   
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-2xl font-extrabold">B Manikandan</h4>
              <h6 className="font-medium">Join Secretary</h6>
            </div>
          </div>
                         
      </div>

      <div className="container relative w-full flex gap-10 flex-col justify-center flex-wrap my-10 md:flex-row">
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-2xl font-extrabold">S Gopalakirshnan<sub className="font-bold text-xs top-0 pl-1">DME</sub></h4>
              <h6 className="font-medium">Tournament Director - Head</h6>
            </div>
          </div>
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-2xl font-extrabold">R Boobesh Kumar<sub className="font-bold text-xs top-0 pl-1">M.Sc., B.Ed.</sub></h4>
              <h6 className="font-medium">IT Wing Secretary</h6>
            </div>
          </div>
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5 relative">
              <h4 className="realtive text-3xl font-extrabold">B Loganathan<sub className="font-bold text-xs top-0 pl-1">B.Sc., MCA</sub></h4>
              <h6 className="font-medium">Tournament Organizer</h6>
            </div>
          </div>                   
      </div>

      <Footer />
    </>
  );
}

export default Board;
