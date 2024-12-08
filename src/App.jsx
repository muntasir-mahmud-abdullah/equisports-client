
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
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold text-primary mb-4">Our Equipments</h1>
      <div className="w-24 mx-auto h-1 bg-primary mb-4 rounded-full"></div>
      <p className="text-lg text-gray-600">Your equipment collection at a glance.</p>
    </div>
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
