//************************************************************
//How to use new store by context and useReducer
/*
//************************************************************
import React, {createContext, useReducer} from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'action description':
        const newState = // do something with the action
        return newState;
      default:
        throw new Error();
    };
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }


// root index.js file
//************************************************************
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './store.js';

const app = (
  <StateProvider>
    <App />
  </StateProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// exampleComponent.js
//************************************************************
import React, { useContext } from 'react';
import { store } from './store.js';

const ExampleComponent = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  dispatch({ type: 'action description' })
};
*/