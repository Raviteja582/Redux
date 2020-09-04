import React from 'react';
import Main from '../src/components/mainComponent';
import store from '../src/redux/configureStore';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
