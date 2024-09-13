
import './App.css';
import Header from './Components/Header/Header';
import Items from './Components/Items/Items';
import Slider from './Components/Slider/Slider'
import Card from './Components/Card/Card';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
import Email from './Components/Email/Email';
function App() {
  return (
    <div className="App">
      <Header/>
      <Items/>
      <Slider/> 
      <Card/>
      <Value/>
      <Contact/>
      <Email/>
    </div>
  );
}

export default App;
