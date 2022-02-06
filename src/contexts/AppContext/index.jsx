import { createContext, useState } from 'react';

export const GlobalContext = createContext();

import { globalState } from './data';

// eslint-disable-next-line
export const AppContext = (props) => {
  const [contextState, setState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setState }}>
      {/* eslint-disable-next-line */}
    {props.children}
    </GlobalContext.Provider>
  );
};
