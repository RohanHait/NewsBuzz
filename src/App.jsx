import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <>
    <div className='w-full h-full fixed bg-mirage-950 text-mirage-50  overflow-hidden'>
        <div className=' w-64 h-28 relative top-10 shadow-xl shadow-mirage-700 bg-gradient-to-r from-mirage-600/40  rounded-t-full blur-xl backdrop-blur-lg skew-x-12 skew-y-12 scale-x-150'>
        </div>
        <div className=' w-72 h-28 relative  z-10 mix-blend-normal shadow-xl shadow-fuchsia-600 bg-gradient-to-r from-fuchsia-600/40  rounded-t-full blur-2xl backdrop-blur-lg skew-x-12 skew-y-12 scale-x-[2]'></div>
    </div>
    <div className=""> 
      <Navbar/>
      <div className=" ">
        <News/>
      </div>
    </div>
    </>
  );
}

export default App;
