import React, { useEffect, useState } from "react";
import "../index.css";
import { useSpeechSynthesis } from "react-speech-kit";
function Test() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [hasSpoken, setHasSpoken] = useState(false); // Flag to ensure we speak only once.
  const { speak, voices } = useSpeechSynthesis();

  useEffect(() => {
    // Only call speak if voices are loaded and we haven't spoken already.
    if (!hasSpoken && voices.length > 0) {
      speak({
        text: "hello world form estin ",
        rate: 1, // normal speaking rate
        pitch: 1, // normal pitch
        lang: "en-US",
        onEnd: () => {
          console.log("Speech finished");
          setIsAnimated(true);
        },
      });
      setHasSpoken(true);
    }
  }, [voices, hasSpoken, speak]);

  return (
    <div className="flex justify-center items-center flex-row gap-2 ">
      <p className={` text-3xl ${!isAnimated ? `text` : ``}`}>
        hello world form estin
      </p>
      <span className={` text-3xl ${!isAnimated ? `corsor ` : ``}`}>|</span>
    </div>
  );
}

export default Test;
