import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "../index.css";
function TextToSpeech() {
  const [value, setValue] = useState("");
  const [text, settext] = useState("hello from mouiz hello from mouiz");
  const [isAniamted, setIsAniamted] = useState(false);
  const { speak } = useSpeechSynthesis();
  //   const hendleSpeak = () => {
  //     setIsAniamted(true);
  //     speak({
  //       text: value,
  //       voice: "en-US-Standard-A",
  //       rate: 1.0,
  //       onend: () => {
  //         setIsAniamted(false);
  //       },
  //     });
  //   };
  useEffect(() => {
    if (isAniamted) {
      speak({
        text: text,
        onend: () => {
          // When speech ends, stop the animation and hide the cursor.
          setIsAniamted(false);
        },
      });
    }
    // The dependency array ensures this runs when `isAnimating` is true.
  }, [isAniamted, speak, text]);
  console.log(text);
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      {/* <textarea
        className="border-2 "
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="border-2" onClick={() => speak({ text: value })}>
        Speak
      </button> */}
      {/* <p className="text-2xl typing  ">hello from mouiz hello from mouiz</p> */}
      <div className="flex justify-center items-center flex-col gap-5">
        <div className="flex justify-center items-center flex-row gap-2">
          {/* Apply the 'typing' class only when animating */}
          <p className={`text-2xl ${isAniamted ? "typing2" : ""}`}>{text}</p>
          {/* Show the blinking cursor only while animating */}
          <span className={`text-3xl ${isAniamted ? "blinking" : "hidden"}`}>
            |
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextToSpeech;
