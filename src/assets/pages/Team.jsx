import Header from "../inc/Header.jsx";
import Footer from "../inc/Footer.jsx";
import userImg from "../images/user.png";
import { useParams } from "react-router-dom";
import { clubpeople } from "./Club/ClubDetails.js";


function Team() {
  const { id } = useParams();
  const clubList = clubpeople.find((item) => item.id === Number(id));
  if (!clubList) {
    return <h2>Data not found</h2>;
  }
 
  // const clubItems = clubpeople.map(club =>        
    // <div key={clubList.id}>
    //   <div className="relative bg-blue-900 mt-24 bg-contain h-48 sm:h-105 sm:mt-28 sm:bg-cover">  
    //       <div className="about-banner team-banner w-full">
    //       <img 
    //         // src={getImageUrl(club)}
    //         // alt={club.name}
    //     />
    //       </div>
    //       <div className="relative min-h-50 flex justify-center align-middle md:min-h-100 md:items-center">
    //           <h1 className="text-white text-center leading-16 text-2xl font-extrabold uppercase lg:text-5xl md:text-4xl text-shadow-lg/30">
    //             {clubList.clubname}
    //           </h1>
    //       </div>
    //   </div>
    //   <div className="bg-gray-200 p-10">
    //     <div className="realtive flex items-center w-full gap-2 justify-center pb-10">
    //       <div className="border-t-3 w-15 border-blue-600"></div>
    //       <h2 className="text-3xl font-bold text-blue-800">Leading Team</h2>
    //       <div className="border-t-3 w-15 border-blue-600"></div>
    //     </div>

    //     <div className="relative flex flex-col justify-between w-full align-middle items-center gap-10 md:flex-row">
    //       <div className="rounded-2xl w-1/3 flex items-center gap-5 bg-white p-5">
    //         <div className="rounded-full w-[30%]">
    //           <img src={userImg} alt="" />
    //         </div>
    //         <div className="relative flex flex-col">
    //           <h4 className="text-2xl font-semibold">{clubList.mastername} <sub className="text-sm absolute top-2.5 pl-1">{clubList.masterQulification}</sub></h4>
    //           <h6 className="text-blue-900">Founder & Master</h6>
    //         </div>
    //       </div>
    //       <div className="rounded-2xl w-1/3 flex items-center gap-5 bg-white p-5">
    //         <div className="rounded-full w-[30%]">
    //           <img src={userImg} alt="" />
    //         </div>
    //         <div className="relative flex flex-col">
    //           <h4 className="text-2xl font-semibold">Female Coach Name <sub className="text-sm absolute top-2.5 pl-1">Test</sub></h4>
    //           <h6 className="text-blue-900">Female Coach</h6>
    //         </div>
    //       </div>
    //       <div className="rounded-2xl w-1/3 flex items-center gap-5 bg-white p-5">
    //         <div className="rounded-full w-[30%]">
    //           <img src={userImg} alt="" />
    //         </div>
    //         <div className="relative flex flex-col">
    //           <h4 className="text-2xl font-semibold">Male Coach Name <sub className="text-sm absolute top-2.5 pl-1">Test</sub></h4>
    //           <h6 className="text-blue-900">Male Coach</h6>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex flex-col items-center justify-between gap-10 w-full mt-15 mb-5 md:flex-row lg:flex-row">
    //       <div className="w-full bg-linear-to-tl from-white-500 to-blue-900 h-96 md:w-1/2">            
    //       </div>
    //       <div className="w-full text-center md:w-1/2 md:text-left">
    //         <h3 className="text-4xl font-bold text-blue-950 pb-4 capitalize">
    //           About {clubList.clubname}
    //         </h3>
    //         <p className=" font-medium text-blue-950">
    //           {clubList.aboutContent}
    //         </p>
    //       </div>
    //     </div>

    //     <div className="p-10 rounded-lg flex bg-blue-950 w-full mt-15 flex-wrap justify-center md:flex-row">
    //       <div className="flex justify-center items-center w-1/4 flex-col">
    //         <h4 className="text-5xl font-bold text-white">10+</h4>
    //         <h6 className="text-md font-semibold text-white">Total Players</h6>
    //       </div>
    //       <div className="flex justify-center items-center w-1/4 flex-col">
    //         <h4 className="text-5xl font-bold text-white">8+</h4>
    //         <h6 className="text-md font-semibold text-white">Experience</h6>
    //       </div>
    //       <div className="flex justify-center items-center w-1/4 flex-col">
    //       <h4 className="text-5xl font-bold text-white">20+</h4>
    //         <h6 className="text-md font-semibold text-white">Students Trained</h6>
    //       </div>
    //       <div className="flex justify-center items-center w-1/4 flex-col">
    //       <h4 className="text-5xl font-bold text-white">5+</h4>
    //         <h6 className="text-md font-semibold text-white">Awards Recevied</h6>
    //       </div>
    //     </div>

    //     <div className="realtive flex items-center w-full gap-2 justify-center py-20">
    //       <div className="border-t-3 w-15 border-blue-600"></div>
    //       <h2 className="text-3xl font-bold text-blue-800">Contact Deatils</h2>
    //       <div className="border-t-3 w-15 border-blue-600"></div>
    //     </div>


    //     <div className="w-full flex justify-between items-center flex-col md:flex-row md:mx-4 mb-10">
    //     <div className="address flex items-center justify-center w-3/4 align-middle">
    //       <p>dcjklbdslkcjbd sljbclkjds , dhcb ljksdbclkj sdbclkjdb,<br/>
    //       licbdsclib</p>
    //     </div>
    //     <div className="social-media flex flex-col gap-2 w-3/4 items-center align-middle">          
    //         <p>Facebook:<a href="#"></a></p>
    //         <p>Instagram:<a href="#"></a></p>
    //         <p>Youtube:<a href="#"></a></p>
    //     </div>
    //     <div className="branches flex gap-2 w-3/4 align-middle items-center justify-center">
    //       <ul>
    //         <li>Branche 1</li>
    //         <li>Branche 2</li>
    //         <li>Branche 3</li>
    //       </ul>
    //     </div>
    //     </div>
    //   </div>  
    // </div> 
  // );
  return (
    <>
      <Header />
        <div key={clubList.id}>
          <div className="relative bg-blue-900 mt-24 bg-contain h-48 sm:h-105 sm:mt-28 sm:bg-cover">  
              <div className="about-banner team-banner w-full">
              <img 
                // src={getImageUrl(club)}
                // alt={club.name}
            />
              </div>
              <div className="relative min-h-50 flex justify-center align-middle md:min-h-100 md:items-center">
                  <h1 className="text-white text-center leading-10 md:leading-16 text-2xl font-extrabold uppercase lg:text-5xl md:text-4xl text-shadow-lg/30">
                    {clubList.clubname}
                  </h1>
              </div>
          </div>
          <div className="bg-gray-200 p-10">
            <div className="realtive flex items-center w-full gap-2 justify-center pb-10">
              <div className="border-t-3 w-15 border-blue-600"></div>
              <h2 className="text-3xl font-bold text-blue-800">Leading Team</h2>
              <div className="border-t-3 w-15 border-blue-600"></div>
            </div>

            <div className="relative flex flex-col justify-between w-full align-middle items-center gap-10 md:flex-row">
              <div className="rounded-2xl w-1/3 flex items-center gap-5 bg-white p-5">
                <div className="rounded-full w-[30%]">
                  <img src={userImg} alt="" />
                </div>
                <div className="relative flex flex-col">
                  <h4 className="text-2xl font-semibold">{clubList.mastername} <sub className="text-sm absolute top-2.5 pl-1">{clubList.masterQulification}</sub></h4>
                  <h6 className="text-blue-900">Founder & Master</h6>
                </div>
              </div>
              <div className="rounded-2xl w-1/3 flex items-center gap-5 bg-white p-5">
                <div className="rounded-full w-[30%]">
                  <img src={userImg} alt="" />
                </div>
                <div className="relative flex flex-col">
                  <h4 className="text-2xl font-semibold">Female Coach Name <sub className="text-sm absolute top-2.5 pl-1">Test</sub></h4>
                  <h6 className="text-blue-900">Female Coach</h6>
                </div>
              </div>
              <div className="rounded-2xl w-1/3 flex items-center gap-5 bg-white p-5">
                <div className="rounded-full w-[30%]">
                  <img src={userImg} alt="" />
                </div>
                <div className="relative flex flex-col">
                  <h4 className="text-2xl font-semibold">Male Coach Name <sub className="text-sm absolute top-2.5 pl-1">Test</sub></h4>
                  <h6 className="text-blue-900">Male Coach</h6>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-10 w-full mt-15 mb-5 md:flex-row lg:flex-row">
              <div className="w-full bg-linear-to-tl from-white-500 to-blue-900 h-96 md:w-1/2">            
              </div>
              <div className="w-full text-center md:w-1/2 md:text-left">
                <h3 className="text-4xl font-bold text-blue-950 pb-4 capitalize">
                  About {clubList.clubname}
                </h3>
                <p className=" font-medium text-blue-950">
                  {clubList.aboutContent}
                </p>
              </div>
            </div>

            <div className="p-10 rounded-lg flex bg-blue-950 w-full mt-15 flex-wrap justify-center md:flex-row">
              <div className="flex justify-center items-center w-1/4 flex-col">
                <h4 className="text-5xl font-bold text-white">10+</h4>
                <h6 className="text-md font-semibold text-white">Total Players</h6>
              </div>
              <div className="flex justify-center items-center w-1/4 flex-col">
                <h4 className="text-5xl font-bold text-white">8+</h4>
                <h6 className="text-md font-semibold text-white">Experience</h6>
              </div>
              <div className="flex justify-center items-center w-1/4 flex-col">
              <h4 className="text-5xl font-bold text-white">20+</h4>
                <h6 className="text-md font-semibold text-white">Students Trained</h6>
              </div>
              <div className="flex justify-center items-center w-1/4 flex-col">
              <h4 className="text-5xl font-bold text-white">5+</h4>
                <h6 className="text-md font-semibold text-white">Awards Recevied</h6>
              </div>
            </div>

            <div className="realtive flex items-center w-full gap-2 justify-center py-20">
              <div className="border-t-3 w-15 border-blue-600"></div>
              <h2 className="text-3xl font-bold text-blue-800">Contact Deatils</h2>
              <div className="border-t-3 w-15 border-blue-600"></div>
            </div>


            <div className="w-full flex justify-between items-center flex-col md:flex-row md:mx-4 mb-10">
            <div className="address flex items-center justify-center w-3/4 align-middle">
              <p>dcjklbdslkcjbd sljbclkjds , dhcb ljksdbclkj sdbclkjdb,<br/>
              licbdsclib</p>
            </div>
            <div className="social-media flex flex-col gap-2 w-3/4 items-center align-middle">          
                <p>Facebook:<a href="#"></a></p>
                <p>Instagram:<a href="#"></a></p>
                <p>Youtube:<a href="#"></a></p>
            </div>
            <div className="branches flex gap-2 w-3/4 align-middle items-center justify-center">
              <ul>
                <li>Branche 1</li>
                <li>Branche 2</li>
                <li>Branche 3</li>
              </ul>
            </div>
            </div>
          </div>  
        </div> 
      <Footer />       
    </>  
  );
}

export default Team;