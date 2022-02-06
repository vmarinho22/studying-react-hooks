import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const P = ({ children }) => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    setState,
  } = theContext;
  return <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>;
};
