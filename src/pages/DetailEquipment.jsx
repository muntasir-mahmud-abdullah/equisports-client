import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetailEquipment = () => {
  const { id } = useParams();
  const loadedEquipments = useLoaderData();
  console.log(loadedEquipments);
  const [equipments, setEquipments] = useState(loadedEquipments);
  const equipment = equipments.find((equipment) => equipment._id === id);

  if (!equipment) {
    return <p>Equipment not found.</p>; // Handle case where ID doesn't exist
  }

  return (
    <div>
      <h1>Equipment Details</h1>
      <div
        style={{ border: "1px solid #ccc", padding: "20px", margin: "20px 0" }}
      >
        <img
          src={equipment.image}
          alt={equipment.name}
          style={{ width: "300px", borderRadius: "10px" }}
        />
        <h2>{equipment.name}</h2>
        <p>
          <strong>Category:</strong> {equipment.category}
        </p>
        <p>
          <strong>Description:</strong> {equipment.description}
        </p>
        <p>
          <strong>Price:</strong> ${equipment.price}
        </p>
        <p>
          <strong>Rating:</strong> {equipment.rating} / 5
        </p>
        <p>
          <strong>Customization:</strong> {equipment.customization}
        </p>
        <p>
          <strong>Processing Time:</strong> {equipment.processingTime}
        </p>
        <p>
          <strong>Stock Status:</strong> {equipment.stockStatus} units available
        </p>
      </div>
    </div>
  );
};

export default DetailEquipment;
