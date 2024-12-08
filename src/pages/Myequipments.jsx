import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Myequipments = () => {
    const equipments  =useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(user)
    const myEquipments = equipments.filter(equipment=> equipment.email === user?.email);
    
    return (
        <div>
            <h1>{myEquipments.length}</h1>
        </div>
    );
};

export default Myequipments;