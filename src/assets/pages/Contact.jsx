import Header from "../inc/Header";
import Footer from "../inc/Footer";

function Contact() {
  return (
    <>
      <Header />
      
      <div className="relative bg-blue-900 mt-24 bg-contain h-48 sm:h-[420px] sm:mt-28 sm:bg-cover">  
        <div className="about-banner w-full "></div>
            <div className="relative min-h-[200px] flex justify-center items-center align-middle md:min-h-[400px]">
              <h1 className="text-white text-2xl font-extrabold uppercase lg:text-5xl md:text-4xl text-shadow-lg/30">Get in Touch with TDSK</h1>
            </div>
      </div> 

      <div className="relative flex w-full justify-between items-center gap-10">
        <div className="w-full md:w-1/2">

        </div>
        <div className="form w-full md:w-1/2"></div>
      </div>

           

      <Footer />
    </>
  );
}

export default Contact;
