import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'Teste',
  body: 'teste',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('muda');
      return { ...state, title: action.payload };
    case 'inverter':
      console.log('inverter');
      // eslint-disable-next-line no-case-declarations
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleDateString('pt-BR') })}>Muda</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverte</button>
    </div>
  );
}

export default App;
