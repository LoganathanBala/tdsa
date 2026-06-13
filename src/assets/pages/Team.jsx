import Header from "../inc/Header";
import Footer from "../inc/Footer";
// import clubpeople from "../pages/Club/ClubDetails";
// import getImageUrl from "../pages/Club/ClubLogo";
import userImg from "../images/user.png";

function Team() {
  return (
    <>
      <Header />

       <div className="relative bg-blue-900 mt-24 bg-contain h-48 sm:h-105 sm:mt-28 sm:bg-cover">  
        <div className="about-banner team-banner w-full">
          <img 
            // src={getImageUrl(person)}
            // alt={person.name}
         />
        </div>
            <div className="relative min-h-50 flex justify-center align-middle md:min-h-100 md:items-center">
              <h1 className="text-white text-center leading-16 text-2xl font-extrabold uppercase lg:text-5xl md:text-4xl text-shadow-lg/30">
                Agathiyar silamba koodam 
              </h1>
            </div>
      </div>

      <div className="bg-gray-200 p-10">
        <div className="realtive flex items-center w-full gap-2 justify-center pb-8">
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
              <h4 className="text-2xl font-semibold">J.Manikandan <sub className="text-sm absolute top-2.5 pl-1">DME</sub></h4>
              <h6 className="text-blue-900">Founder & Master</h6>
            </div>
          </div>
          <div className="rounded-2xl w-1/3 flex items-center gap-5 bg-white p-5">
            <div className="rounded-full w-[30%]">
              <img src={userImg} alt="" />
            </div>
            <div className="relative flex flex-col">
              <h4 className="text-2xl font-semibold">J.Manikandan <sub className="text-sm absolute top-2.5 pl-1">DME</sub></h4>
              <h6 className="text-blue-900">Female Coach</h6>
            </div>
          </div>
          <div className="rounded-2xl w-1/3 flex items-center gap-5 bg-white p-5">
            <div className="rounded-full w-[30%]">
              <img src={userImg} alt="" />
            </div>
            <div className="relative flex flex-col">
              <h4 className="text-2xl font-semibold">J.Manikandan <sub className="text-sm absolute top-2.5 pl-1">DME</sub></h4>
              <h6 className="text-blue-900">Male Coach</h6>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-10 w-full mt-10 mb-5 md:flex-row lg:flex-row">
          <div className="w-full bg-linear-to-tl from-white-500 to-blue-900 h-96 md:w-1/2">            
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h3 className="text-4xl font-bold text-blue-950 pb-4 capitalize">
              About Agathiyar silamba koodam
            </h3>
            <p className=" font-medium text-blue-950">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
        </div>
      </div>
      
      <div className="ml-9 p-10 rounded-lg flex bg-blue-950 w-[95%] m-10 flex-wrap justify-center md:flex-row">
        <div className="flex justify-center items-center w-1/4 flex-col">
          <h4 className="text-5xl font-bold text-white">30+</h4>
          <h6 className="text-md font-semibold text-white">Total Players</h6>
        </div>
        <div className="flex justify-center items-center w-1/4 flex-col">
          <h4 className="text-5xl font-bold text-white">10+</h4>
          <h6 className="text-md font-semibold text-white">Experience</h6>
        </div>
        <div className="flex justify-center items-center w-1/4 flex-col">
         <h4 className="text-5xl font-bold text-white">80+</h4>
          <h6 className="text-md font-semibold text-white">Students Trained</h6>
        </div>
        <div className="flex justify-center items-center w-1/4 flex-col">
         <h4 className="text-5xl font-bold text-white">10+</h4>
          <h6 className="text-md font-semibold text-white">Awards Recevied</h6>
        </div>
      </div>
      
      

      <Footer />
    </>
  );
}

export default Team;


// export default function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}</b>
//           {' ' + person.profession + ' '}
//           known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }