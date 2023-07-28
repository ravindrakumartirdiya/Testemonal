import React from "react";
import Testemoniyal from "./components/Testemoniyal";
import Card from "./components/Card";
import data from "./data";


const App = () => {

  // const [info, setInfo] = useState(data[1]);

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col bg-slate-400">
      <Testemoniyal />
      <Card data = {data}/>
    </div>
  )
};

export default App;
