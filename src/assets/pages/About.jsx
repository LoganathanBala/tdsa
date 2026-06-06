import DotGrid from "../../components/DotGrid"
import Header from "../inc/Header";
import Footer from "../inc/Footer";

function About() {
  return (
    <>
      <Header />
      
      <div className="relative bg-blue-900 mt-24 bg-contain h-48 sm:h-[420px] sm:mt-28 sm:bg-cover">  
        <div className="about-banner w-full "></div>
            <div className="relative min-h-[200px] flex justify-center items-center md:min-h-[400px] ">
              <h1 className="text-white text-2xl font-extrabold uppercase lg:text-5xl md:text-4xl text-shadow-lg/30">About TDSK</h1>
            </div>
      </div>     

      <div className="container flex gap-10 my-10 flex-col md:flex-row">
           <div className="w-full bg-linear-to-tl from-white-500 to-blue-900 h-96 md:w-3/4"></div>           
            <p className=" w-full md:w-1/2 font-medium flex items-center text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>   
      </div>      

      <div className="container px-80"> 
        <h4 className="text-center font-bold text-3xl mt-10 mb-2"> Heading 4</h4>
        <p className="text-center font-medium mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>   
     </div> 

     <div className="container px-80 mb-10">
      <h5 className="text-2xl text-center py-8">Image Silder</h5>
      <div className="flex gap-5 flex-row items-center">
        <div className="border-2 border-blue-900 rounded-2xl w-90 h-40"></div>
        <div className="border-2 border-blue-900 rounded-2xl w-90 h-40"></div>
        <div className="border-2 border-blue-900 rounded-2xl w-90 h-40"></div>
        <div className="border-2 border-blue-900 rounded-2xl w-90 h-40"></div>
      </div>
     </div>

      <Footer />
    </>
  );
}

export default About;
