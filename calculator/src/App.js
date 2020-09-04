import React from 'react';
import store from '../src/redux/configureStore';
import { Provider } from 'react-redux';
import './App.css';
import Hook from './components/hooksComponent';
import Linear from './components/linearComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
		<Hook />
		<Linear />
      </div>
    </Provider>
  );
}

export default App;
