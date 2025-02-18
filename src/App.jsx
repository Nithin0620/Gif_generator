import "./App.css";
import Random from "./components/Random";
import Tagged from "./components/Tagged";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background  overflow-x-hidden items-center  ">
      
      <div className=" bg-white fixed top-0  rounded-lg w-11/12 text-center mt-[3px]
       px-10 py-2 text-4xl font-bold ">Random GIF'S</div>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[70px] mb-[70px]">
        <Random/>
        <Tagged/>
      </div>
    </div>
  );
}

export default App;
