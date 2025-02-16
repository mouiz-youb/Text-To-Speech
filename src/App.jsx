import React from "react";
import "./App.css";
import TextToSpeech from "./components/TextToSpeech";
import Test from "./components/Test";
import SliderOne from "./components/SliderOne";
function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-5 overflow-hidden ">
      <h1 className="text-3xl">hello world</h1>
      {/* <TextToSpeech /> */}
      {/* <Test /> */}
      <SliderOne />
    </div>
  );
}

export default App;
