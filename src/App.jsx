
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Equipcard from './components/Equipcard';
import { useState } from 'react';

function App() {
  const loadedEquipments = useLoaderData();
  const [equipments,setEquipments] = useState(loadedEquipments);
  return (
    <>
    <div className="m-20">
    <h1 className='text-6xl text-purple-500'>equipments : {equipments.length}</h1>
    <div className=" grid md:grid-cols-2 gap-4">
            {
        equipments.map(equipment => <Equipcard key={equipment._id} equipments={equipments}  setEquipments={setEquipments} equipment={equipment} ></Equipcard> )
      }
    </div>

    </div>


    </>
  )
}

export default App
