import "./App.css";
import TimerContainer from "./components/TimerContainer/TimerContainer.tsx";
import Nav from "./components/Nav/Nav.tsx";
import TimerActions from "./components/TimerActions/TimerActions.tsx";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <TimerContainer />
        <TimerActions />
      </div>
    </>
  );
}

export default App;
