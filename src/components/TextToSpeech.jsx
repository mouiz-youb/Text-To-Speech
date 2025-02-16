import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function TextToSpeech() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div>
      <textarea
        className="border-2 "
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value })}>Speak</button>
    </div>
  );
}

export default TextToSpeech;
