import DotGrid from "../../components/DotGrid"
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import userImg from "../images/user.png";
import { Link } from "react-router-dom"; 
import GlareHover from '../../components/GlareHover'

function Members() {
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
              <h1 className="text-white text-center leading-16 text-2xl font-extrabold uppercase lg:text-5xl md:text-4xl text-shadow-lg/30">Trichirappalli District Silambatta <br/>Kazhgam Mememers</h1>
            </div>
      </div>

      <div className="relative w-full flex gap-5 flex-col justify-start flex-wrap my-10 pl-14 md:flex-row">
          <Link to="/team" className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
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
                  <h4 className="text-2xl font-extrabold capitalize">J MANIKANDAN</h4>
                  <h6 className="font-medium capitalize">Agathiyar Silamba Koodam</h6>
                </div>
            </GlareHover>
          </Link>
          
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-2xl font-extrabold capitalize">D Vinodh Kumar</h4>
              <h6 className="font-medium capitalize">Ayngaran Kalai Koodam</h6>
            </div>
          </div>
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">R Janakiraman</h4>
              <h6 className="font-medium capitalize">Bailvan Ramamurthi Silamba Koodam</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-2xl font-extrabold capitalize">P SETHUPATHI</h4>
              <h6 className="font-medium capitalize">Bharathi Silamba Koodam</h6>
            </div>
          </div>
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-2xl font-extrabold capitalize">P Umarani</h4>
              <h6 className="font-medium capitalize">Dynamic Street fight Silambam Academy</h6>
            </div>
          </div>
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">K KIRTHIKA </h4>
              <h6 className="font-medium capitalize">Guru Karna Silamba Koodam</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">S Gopalakrishnan</h4>
              <h6 className="font-medium capitalize">Jothivel Silamba Koodam</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">K Sathya</h4>
              <h6 className="font-medium capitalize">Karthick Silambam Pasarai</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">N LOGESHWARAN</h4>
              <h6 className="font-medium capitalize">L Veerappan Silambatta Kazhagam</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">M VAIRAVEL</h4>
              <h6 className="font-medium capitalize">Minnal Silambam Academy</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">B Saravanan</h4>
              <h6 className="font-medium capitalize">Muthamizh Silamba Koodam</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">S Saravanakumar</h4>
              <h6 className="font-medium capitalize">Nallukuthiyar Silamba Koodam</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">G.N Shanmuga Sundaram</h4>
              <h6 className="font-medium capitalize">Nanbargal Silamba Koodam</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">Vignesh</h4>
              <h6 className="font-medium capitalize">Porkalai Silamba Kooadam</h6>
            </div>
          </div>   
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">Vijayakumar</h4>
              <h6 className="font-medium capitalize">Sev Vel yazhi Silamba kalaikoodam</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">B Manikandan</h4>
              <h6 className="font-medium capitalize">South Indian Martial Arts Sports Association</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">N Muthukrishnan</h4>
              <h6 className="font-medium capitalize">Sri Amman Silamba Koodam</h6>
            </div>
          </div>  
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">K Gurusamy</h4>
              <h6 className="font-medium capitalize">Sri maruthi silambu koodam</h6>
            </div>
          </div> 
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">B Loganathan</h4>
              <h6 className="font-medium capitalize">Tamilvel Silamba Koodam</h6>
            </div>
          </div> 
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">P SUBRAMANI</h4>
              <h6 className="font-medium capitalize">Thaikalai Silamba Koodam</h6>
            </div>
          </div> 
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">S Parthiban</h4>
              <h6 className="font-medium capitalize">Uthamarkovil Cultural Arts And Sports Academy</h6>
            </div>
          </div> 
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">Name</h4>
              <h6 className="font-medium capitalize">Veeraguru Sillamba Koodam</h6>
            </div>
          </div> 
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">R Chinthanai selvan</h4>
              <h6 className="font-medium capitalize">Velan Silamba Koodam</h6>
            </div>
          </div> 
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">T LOGANATHAN</h4>
              <h6 className="font-medium capitalize">Velavan Silamba Kalai Koodam</h6>
            </div>
          </div> 
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">K Ramachandran</h4>
              <h6 className="font-medium capitalize">Vivekanantha Silamba Kooadam</h6>
            </div>
          </div>             
          <div className="w-full flex flex-col items-center p-2 border-2 border-blue-900 rounded-md md:w-[23%]">
            <div className="w-3/4 pt-5">
              <img src={userImg} alt="" />
            </div>
            <div className="text-center text-blue-900 my-5">
              <h4 className="text-3xl font-extrabold capitalize">R Boobesh kumar</h4>
              <h6 className="font-medium capitalize">Yuthakavi Silambatt Koodam</h6>
            </div>
          </div>                   
      </div>      

      <Footer />
    </>
  );
}

export default Members;
