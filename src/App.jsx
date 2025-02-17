import React from "react";
import "./App.css";
import TextToSpeech from "./components/TextToSpeech";
import Test from "./components/Test";
import SliderOne from "./components/SliderOne";
import SliderTwo from "./components/SliderTwo";
import Drag from "./components/Drag";
function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-5 overflow-hidden transform-3d ">
      <h1 className="text-3xl">hello world</h1>
      {/* <TextToSpeech /> */}
      {/* <Test /> */}
      {/* <SliderOne /> */}
      <SliderTwo />
      {/* <Drag /> */}
    </div>
  );
}

export default App;
