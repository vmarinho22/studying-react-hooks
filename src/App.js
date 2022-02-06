import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate - executa toda o vez que o componente atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa uma vez
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // componentWillMount - executa quando o componente for desmontado
  useEffect(() => {
    return () => {
      console.log('componentWillMount');
    };
  }, []);

  // Com dependencia - executa toda que a dependencia mudar
  useEffect(() => {
    console.log('counter mudou', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador 1: {counter}</h1>
      <h1>Contador 2: {counter2}</h1>
      <button onClick={() => setCounter(counter + 1)}>cont 1 = +</button>
      <button onClick={() => setCounter2(counter2 + 1)}>cont 2 = +</button>
    </div>
  );
}

export default App;
