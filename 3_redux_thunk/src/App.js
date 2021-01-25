import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import Usercomp from './components/UserComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is App Comp
      </header>
      <hr/>

<Provider store={store}>
  <Usercomp />
</Provider>
     
    </div>
  );
}

export default App;
