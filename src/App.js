import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      {/* <Home /> */}
    </div>
  );
}

export default App;
