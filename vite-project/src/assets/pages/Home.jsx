import Header from "../inc/Header";
import Footer from "../inc/Footer";
import CurvedLoop from '../../components/CurvedLoop';
import TextType from '../../components/TextType';

function Home() {
  return (
    <>
      <Header />

        <div className="banner relative block mt-24 bg-contain h-48 sm:h-[720px] sm:mt-28 sm:bg-cover">
          <div className="relative justify-between items-center h-full flex-col hidden sm:flex sm:flex-row">
            <div className="w-1/2 hidden md:block"></div>
            <div className="flex flex-col md:w-1/2">
              <h1 className="text-white text-2xl font-extrabold uppercase lg:text-5xl md:text-3xl ">
                Trichirappalli District Silambatta Kazhgam
              </h1>
              <TextType 
                text={["Learn","Pratice","Grow"]}                
                className="worksans text-white text-4xl font-semibold mt-6 uppercase ml-2"
                typingSpeed={250}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="_"
                loop={true}
              />
              <h2 className="worksans text-3xl font-extrabold mt-4">
                Where <span className="gold_text">Champions</span> are made
              </h2>
            </div>
          </div>
        </div>          

        <div className="mobile flex flex-col w-full p-4 items-center justify-center text-center bg-white sm:hidden">
          <h1 className="text-black text-2xl font-extrabold uppercase sm:text-5xl pb-4">
            Trichirappalli District Silambatta Kazhgam
          </h1>
          <h2 className="worksans text-black text-xl sm:text-3xl font-extrabold">
            Where <span className="gold_text">Champions</span> are made
          </h2>
        </div>

        <CurvedLoop 
            marqueeText="The stick moves, but the spirit leads."
            speed={2}
            curveAmount={75}
            direction="right"
            interactive={true}            
          />

        <div className="flex flex-col items-center justify-center gap-5 w-full px-5 mb-5 md:p-10 md:px-20 md:gap-10 md:flex-row lg:pb-10 lg:pt-0 lg:px-20 lg:gap-10 lg:flex-row">
          <div className="w-full bg-linear-to-tl from-white-500 to-blue-900 h-96 md:w-3/4">
            
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h3 className="text-4xl font-bold text-blue-950 pb-4">
              Our Mission
            </h3>
            <p className="text-base font-medium text-blue-950">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
        </div>

        <div className="w-full bg-gray-100 p-4 py-8 lg:p-4 lg:py-2 md:p-8 ">
          <h3 className="text-4xl font-bold text-blue-950 text-center py-8">            
            Our Achievements
          </h3>
          <h4 className="worksans text-2xl font-bold text-blue-950 text-center pb-2">
            National Success. Proven Results
          </h4>
          <p className="text-base text-blue-950 font-medium w-full text-center mb-8 md:px-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>          
          <div className="w-full flex justify-center flex-col px-2 flex-wrap lg:px-4 lg:mt-10 md:gap-4 md:px-2 md:mt-5 md:flex-row ">
            <div className="bg-linear-to-b from-white-500 to-blue-900 w-full flex items-end h-96 md:w-72 lg:w-[23%]">
              <div className="flex items-center flex-col justify-center p-4">
                <h4 className="text-xl font-bold text">Title</h4>
                <p className="text-bsae font-medium text-center">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
              </div>
            </div>
            <div className="bg-linear-to-b from-white-500 to-blue-900 w-full flex items-end h-96 md:w-72 lg:w-[23%] ">
              <div className="flex items-center flex-col justify-center p-4">
                <h4 className="text-xl font-bold text">Title</h4>
                <p className="text-bsae font-medium text-center">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
              </div>
            </div>
            <div className="bg-linear-to-b from-white-500 to-blue-900 w-full flex items-end h-96 md:w-72 lg:w-[23%]">
              <div className="flex items-center flex-col justify-center p-4">
                <h4 className="text-xl font-bold text">Title</h4>
                <p className="text-bsae font-medium text-center">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
              </div>
            </div>
            <div className="bg-linear-to-b from-white-500 to-blue-900 w-full flex items-end h-96 md:w-72 lg:w-[23%]">
              <div className="flex items-center flex-col justify-center p-4">
                <h4 className="text-xl font-bold text">Title</h4>
                <p className="text-bsae font-medium text-center">
                  Lorem Ipsum is simply dummy text of the printing
                </p>
              </div>
            </div>
          </div>
          <div className="mr-auto ml-auto w-full text-center my-8">
            <button className="bg-sky-500 rounded-md text-white text-base font-medium px-8 py-2 cursor-pointer transition hover:bg-blue-950">
              Join Us
            </button>
          </div>
        </div>

        <div className="realtive h-full w-full bg-linear-to-t from-white-500 to-blue-900 lg:h-96 p-10 mb-8 border-b-2 border-blue-950">
          <h3 className="text-4xl font-bold text-white pb-4 text-center">
            About Us
          </h3>
          <h4 className="worksans text-2xl text-white font-bold text-center pb-2">
            Building Opportunity, Developing Champions
          </h4>
          <p className="text-base text-white font-medium w-full text-center pb-4 sm:px-0 md:px-10 lg:px-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-base text-white font-medium w-full text-center sm:px-0 md:px-10 lg:px-50">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="mr-auto ml-auto w-full text-center mt-8">
            <button className="bg-sky-500 rounded-md text-white text-base font-medium px-8 py-2 cursor-pointer transition hover:bg-blue-950">
              About More
            </button>
          </div>
        </div>

        <div className="realtive flex flex-col items-center gap-10 p-5 md:flex-row lg:p-10 lg:px-20">
          <div className="w-full sm:w-1/2">
            <h3 className="text-4xl font-bold text-blue-950 pb-4 text-center sm:text-left">Media</h3>
            <h4 className="worksans text-2xl text-blue-950 font-bold pb-2 text-center sm:text-left">
              Latest News
            </h4>
            <p className="text-base font-medium text-blue-950 text-center sm:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting
            </p>
          </div>
          <div className="w-full bg-linear-to-tl from-white-500 to-blue-900 h-96 sm:w-1/2">
            
          </div>
        </div>      

      <Footer />
    </>
  );
}

export default Home;
