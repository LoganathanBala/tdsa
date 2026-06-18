import DotGrid from "../../components/DotGrid"
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import userImg from "../images/user.png";
import GlareHover from '../../components/GlareHover';
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import { clubpeople } from "../pages/Club/ClubDetails.js";

function Members() {
  const navigate = useNavigate();
  return (
    <>

      <Header />
      <div className="relative bg-blue-900 mt-24 bg-contain h-48 sm:h-105 sm:mt-28 sm:bg-cover">  
        <div className="about-banner w-full "></div>
            <div className="relative min-h-50 flex justify-center align-middle md:min-h-100 md:items-center">
              <h1 className="text-white text-center leading-16 text-2xl font-extrabold uppercase lg:text-5xl md:text-4xl text-shadow-lg/30">Trichirappalli District Silambatta <br/>Kazhgam Mememers</h1>
            </div>
      </div>

      <div className="relative w-full flex gap-5 flex-col justify-start flex-wrap my-10 pl-14 md:flex-row">
        
            {clubpeople.map((club) => (
            <div
              key={club.id}              
              onClick={() => window.open(`/members/${club.id}`, "_blank", "noopener,noreferrer")}
              className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]"
            >
              <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                >
                <div className="w-3/4 pt-5">
                    <img src={userImg} alt="" />
                  </div>
                  <div className="text-center text-blue-900 my-5">
                    <h4 className="text-2xl font-extrabold capitalize">{club.mastername}</h4>
                    <h6 className="font-medium capitalize">{club.clubname}</h6>
                  </div>
              </GlareHover>
            </div>
            ))}
             
      </div>      

      <Footer />
      {/* <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
              <div className="w-3/4 pt-5">
                <img src={userImg} alt="" />
              </div>
              <div className="text-center text-blue-900 my-5">
                <h4 className="text-2xl font-extrabold capitalize">D Vinodh Kumar</h4>
                <h6 className="font-medium capitalize">Ayngaran Kalai Koodam</h6>
              </div>
            </GlareHover>
          </div> */}  
    </>
  );
}

export default Members;
