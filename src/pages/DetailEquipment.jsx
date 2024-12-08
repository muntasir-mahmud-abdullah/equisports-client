import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetailEquipment = () => {
  const { id } = useParams();
  const loadedEquipments = useLoaderData();
  const [equipments, setEquipments] = useState(loadedEquipments);
  const equipment = equipments.find((equipment) => equipment._id === id);

  if (!equipment) {
    return (
      <p className="text-center text-lg text-red-500">Equipment not found.</p>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Equipment Details</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl p-4">
        <figure className="flex justify-center items-center">
          <img
            src={equipment.image}
            alt={equipment.name}
            className="w-80 h-80 object-cover rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold">
            {equipment.name}
          </h2>
          <p>
            <strong className="text-gray-700">Category:</strong>{" "}
            {equipment.category}
          </p>
          <p>
            <strong className="text-gray-700">Description:</strong>{" "}
            {equipment.description}
          </p>
          <p>
            <strong className="text-gray-700">Price:</strong> ${equipment.price}
          </p>
          <p>
            <strong className="text-gray-700">Rating:</strong>{" "}
            {equipment.rating} / 5
          </p>
          <p>
            <strong className="text-gray-700">Customization:</strong>{" "}
            {equipment.customization}
          </p>
          <p>
            <strong className="text-gray-700">Processing Time:</strong>{" "}
            {equipment.processingTime}
          </p>
          <p>
            <strong className="text-gray-700">Stock Status:</strong>{" "}
            {equipment.stockStatus} units available
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailEquipment;
