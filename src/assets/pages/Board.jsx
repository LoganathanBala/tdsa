import DotGrid from "../../components/DotGrid"
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import userImg from "../images/user.png";
import ShinyText from '../../components/ShinyText';
import President from "../images/Poorna_Pushkala.png"

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
      <div className="bg-gray-200">
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
            className="font-extrabold text-5xl flex justify-center py-10 uppercase"
          />

        <div className="relative w-full flex justify-center items-center">
            <div className="group w-full flex flex-col items-center shadow-2xl rounded-lg md:w-[28%] md:p-4 md:justify-center md:items-center hover:bg-blue-900">
              <div className="w-fit">
                <img className="rounded-4xl" src={President} alt="Poorna Pushkala" />
              </div>
              <div className="text-center text-blue-900 my-3 group-hover:text-white">
                <h4 className="text-2xl font-extrabold"><sub className="font-bold text-xs top-0 pr-1">Nadanamamani</sub>A.Poorna Pushkala</h4>
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
                <h4 className="text-2xl font-extrabold">P.Sakthivel<sub className="font-bold text-xs top-0 pl-1">Rtd. RPF</sub></h4>
                <h6 className="font-medium">Vice President</h6>
              </div>
            </div>
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5">
                <h4 className="text-2xl font-extrabold">G.N.Shanmuga Sundaram</h4>
                <h6 className="font-medium">Vice President</h6>
              </div>
            </div>
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5">
                <h4 className="text-3xl font-extrabold">Mr.Siva Kumar</h4>
                <h6 className="font-medium">Vice President</h6>
              </div>
            </div>  
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5">
                <h4 className="text-2xl font-extrabold">S.Senthil Kuamr<sub className="font-bold text-xs top-0 pl-1">M.Com</sub></h4>
                <h6 className="font-medium">Secretary</h6>
              </div>
            </div>
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5">
                <h4 className="text-3xl font-extrabold">V.Hari Kumar<sub className="font-bold text-xs top-0 pl-1">B.Com</sub></h4>
                <h6 className="font-medium">Treasurer</h6>
              </div>
            </div>   
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5">
                <h4 className="text-2xl font-extrabold">B.Manikandan</h4>
                <h6 className="font-medium">Join Secretary</h6>
              </div>
            </div>
                          
        </div>

        <div className="container relative w-full flex gap-10 flex-col justify-center flex-wrap my-10 md:flex-row">
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">B.Saravanan</h4>
                <h6 className="font-medium">Group Event Secretary</h6>
              </div>
            </div>   
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5">
                <h4 className="text-2xl font-extrabold">S.Gopalakirshnan<sub className="font-bold text-xs top-0 pl-1">B.E., DME</sub></h4>
                <h6 className="font-medium">Chief Tournament Director</h6>
              </div>
            </div>
            
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">N.Lokeshwaran<sub className="font-bold text-xs top-0 pl-1">B.A., M.Ped.,</sub></h4>
                <h6 className="font-medium">Assistant Secretary</h6>
              </div>
            </div>  
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">B.Loganathan<sub className="font-bold text-xs top-0 pl-1">B.Sc., MCA,</sub></h4>
                <h6 className="font-medium">Organizer</h6>
              </div>
            </div>  
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5">
                <h4 className="text-2xl font-extrabold">R.Boobesh Kumar<sub className="font-bold text-xs top-0 pl-1">M.Sc., B.Ed.,</sub></h4>
                <h6 className="font-medium">IT Wing Secretary</h6>
              </div>
            </div>           
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">G.Akash<sub className="font-bold text-xs top-0 pl-1">BCA.,</sub></h4>
                <h6 className="font-medium">Student Union Secretary</h6>
              </div>
            </div> 
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">P.Umarani<sub className="font-bold text-xs top-0 pl-1">B.Com</sub></h4>
                <h6 className="font-medium">Women's Team Secretary</h6>
              </div>
            </div> 
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">S.Saravanan<sub className="font-bold text-xs top-0 pl-1">MCA.,</sub></h4>
                <h6 className="font-medium">Deputy Secretary IT Wing</h6>
              </div>
            </div> 
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">Mr.Vijay<sub className="font-bold text-xs top-0 pl-1">BABL</sub></h4>
                <h6 className="font-medium">Legal Division Secretary</h6>
              </div>
            </div> 
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">M.Ramachandran</h4>
                <h6 className="font-medium">Welfare Government Schemes</h6>
              </div>
            </div> 
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">M.Vairavel</h4>
                <h6 className="font-medium">Welfare Government Schemes</h6>
              </div>
            </div> 
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">R.Janakiraman</h4>
                <h6 className="font-medium">Arts and Culture Department Committee</h6>
              </div>
            </div> 
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">G.Moulin</h4>
                <h6 className="font-medium">Arts and Culture Department Committee</h6>
              </div>
            </div>           
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">E.Gopiraj<sub className="font-bold text-xs top-0 pl-1">B.E.,</sub></h4>
                <h6 className="font-medium">Tournament Director</h6>
              </div>
            </div> 
            <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[28%]">
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5 relative">
                <h4 className="realtive text-3xl font-extrabold">S.S.Tamilselvi</h4>
                <h6 className="font-medium">Tournament Director</h6>
              </div>
            </div>           
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Board;
