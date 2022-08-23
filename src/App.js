import "./App.css";
import TimerContainer from "./components/TimerContainer/TimerContainer.tsx";
import Nav from "./components/Nav/Nav.tsx";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <TimerContainer />
      </div>
    </>
  );
}

export default App;
