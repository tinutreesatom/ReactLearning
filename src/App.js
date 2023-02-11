import Emotion from "./Emotion";
import "./styles.css";
import UseffectEg from "./UseffectEg";

export default function App() {
  return (
    <div className="App">
      <h2>Here you can set your emotion! </h2>
      <i>Click the button to set your emotion sad</i>
      <Emotion />
      <UseffectEg />
    </div>
  );
}
