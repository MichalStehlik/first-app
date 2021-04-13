import './App.css';
import {useState} from "react";
import Counter, {NumberDisplay} from "./components/Counter";

function App() {
  const [numberA, setNumberA] = useState(1);
  const [numberB, setNumberB] = useState(1);
  return (
    <div className="App">
      <Counter value={numberA} setValue={setNumberA} />
      <Counter value={numberB} setValue={setNumberB} />
      <Counter value={numberB} setValue={setNumberB} />
      <NumberDisplay number={numberA + numberB} />
    </div>
  );
}

export default App;
