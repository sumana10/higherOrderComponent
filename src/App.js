import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import './App.css';
import Uncontrolled from './components/Uncontrolled';
import Controlled from './components/Controlled';
import UseOfRef from './components/UseOfRef';




const App = () =>{
  return (
    <div className="App">
      <ClickCounter/>
      <HoverCounter/>
      <Uncontrolled/>
      <Controlled/>
      <UseOfRef/>

    </div>
  );
}

export default App;
