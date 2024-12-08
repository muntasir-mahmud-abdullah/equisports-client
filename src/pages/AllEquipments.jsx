import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllEquipments = () => {
    const loadedEquipments = useLoaderData();
    const [allequipments,setallEquipments] =useState(loadedEquipments); 
    return (
        <div>
            <h2>all equipments:{allequipments.length}</h2>
            
        </div>
    );
};

export default AllEquipments;