import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Plants from './Plants';
import Buyers from './Buyers';

function App() {

  const [plants, setPlants] = useState([])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/plants" element={<Plants handleSetPlants={(plants) => {setPlants(plants)}} plants={plants}/>}/>
        <Route path="/buyers" element={<Buyers/>}/>
      </Routes>
    </div>
  );
}

export default App;
