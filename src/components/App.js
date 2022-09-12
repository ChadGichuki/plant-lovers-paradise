import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Plants from './Plants';
import Buyers from './Buyers';
import NewPlant from './NewPlant';

function App() {

  const [plants, setPlants] = useState([])
  const [deletedPlants, setDeletedPlants] = useState(0)

  function handleNewPlant(data){
    setPlants([...plants, data])
  }

  function handlePlants(data){
    setPlants(data)
  }

  function handleDeletedPlants(data){
    let updatedPlants = plants.filter(plant => {
      return plant.id !== data.id
    })

    setPlants(updatedPlants)

    setDeletedPlants(deletedPlants + 1)
  }

  function handleUpdatePlant(data){
    let new_stock = data.no_in_stock
    let updatedPlants = plants.map(plant => {
      if (plant.id === data.id) plant.no_in_stock = new_stock
      return plant
      })

    setPlants(updatedPlants)
  }


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/plants" element={<Plants handleSetPlants={handlePlants} handleDeletedPlants={handleDeletedPlants} plants={plants} onUpdatePlant={handleUpdatePlant}/>}/>
        <Route path="/buyers" element={<Buyers deletedPlants={deletedPlants}/>}/>
        <Route path="/nursery" element={<NewPlant onNewPlant={handleNewPlant}/>}/>
      </Routes>
    </div>
  );
}

export default App;
