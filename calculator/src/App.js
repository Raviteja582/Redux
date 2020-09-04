import React from 'react';
import Main from './components/mainComponent';
import store from '../src/redux/configureStore';
import { Provider } from 'react-redux';
import './App.css';
import Hook from './components/hooksComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
		<Hook />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
