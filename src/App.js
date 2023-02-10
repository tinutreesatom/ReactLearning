import Emotion from "./Emotion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Here you can set your emotion! </h2>
      <i>Click the button to set your emotion sad</i>
      <Emotion />
    </div>
  );
}
