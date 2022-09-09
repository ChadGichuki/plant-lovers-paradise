import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Plants from './Plants';

function App() {

  const [plants, setPlants] = useState([])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/plants" element={<Plants handleSetPlants={(plants) => setPlants(plants)} plants={plants}/>}/>
        {/* <Route path="/buyers" element={<Results/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
