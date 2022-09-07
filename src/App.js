import "./App.css";
import TimerContainer from "./components/TimerContainer/TimerContainer.tsx";

function App() {
  return (
    <>
      <div className="App">
        <TimerContainer />
      </div>
      <div className="App-message">This is a desktop app only</div>
    </>
  );
}

export default App;
