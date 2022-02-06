import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import P from 'prop-types';

const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  // useCallBack
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter}>cont 1 = +</Button>;
  }, [incrementCounter]);

  return (
    <div className="App">
      <h1>Contador 1: {counter}</h1>
      {btn}
    </div>
  );
}

export default App;
