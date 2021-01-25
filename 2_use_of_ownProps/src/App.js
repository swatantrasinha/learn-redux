import './App.css';
import CakeClassComp from './components/cake/CakeClassComp';
import IceCreamClassComp from './components/ice_cream/IceCreamClassComp';
import {Provider} from 'react-redux';
import store from './redux/store';
import ItemContainerComp from './components/Items/ItemContainerComp';

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
<IceCreamClassComp />
<hr/>

<div className="itemContainer">
    <ItemContainerComp cake />
    <ItemContainerComp  />
</div>
<hr/>
</Provider>
     
    </div>
  );
}

export default App;
