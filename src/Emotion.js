import { useState, useEffect } from "react";
export default function Emotion() {
  const [emotion, setEmotion] = useState("Happy");
  useEffect(() => {
    console.log
  })
  return (
    <div className="emotion">
      <h1>Your current emotion is {emotion} </h1>
      <button onClick={() => setEmotion("Sad")}>Sad</button>
      {/* <button onClick={() => setEmotion("Excited")}>Excited</button> */}
    </div>
  );
}
