import './App.css';
import CakeClassComp from './components/cake/CakeClassComp';
import Icecreamhookcomp from './components/ice_cream/IceCreamHookComp';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is App Comp
      </header>
      <hr/>

<Provider store={store}>
<CakeClassComp /> 
      <hr/>
<Icecreamhookcomp />
</Provider>
     
    </div>
  );
}

export default App;
