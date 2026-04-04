import DotGrid from "../../components/DotGrid"
import Header from "../inc/Header";
import Footer from "../inc/Footer";

function Board() {
  return (
    <>
      <Header />
      
      <div className="banner relative block mt-24 bg-contain h-48 sm:h-[720px] sm:mt-28 sm:bg-cover">
          <div className="relative justify-between items-center h-full flex-col hidden sm:flex sm:flex-row">
            <div className="w-1/2 hidden md:block"></div>
            <div className="flex flex-col md:w-1/2">
              <h1 className="text-white text-2xl font-extrabold uppercase lg:text-5xl md:text-3xl  pb-4 text-shadow-lg/30">
                Trichirappalli District Silambatta Kazhgam
              </h1>
              <h2 className="worksans text-3xl font-extrabold">
                Where <span className="gold_text">Champions</span> are made
              </h2>
            </div>
          </div>
      </div>           

      <Footer />
    </>
  );
}

export default Board;
