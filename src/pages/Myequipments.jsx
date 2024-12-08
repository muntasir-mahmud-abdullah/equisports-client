import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Myequipments = () => {
  const equipmentsData = useLoaderData(); // Original data from the loader
  const { user } = useContext(AuthContext);

  // Using useState to manage equipments locally
  const [equipments, setEquipments] = useState(
    equipmentsData.filter((equipment) => equipment.email === user?.email)
  );

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://equisports-server-xi.vercel.app/equipments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              // Update local state to immediately reflect the deletion
              const updatedEquipments = equipments.filter(
                (equipment) => equipment._id !== _id
              );
              setEquipments(updatedEquipments);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Equipments ({equipments.length})
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {equipments.map((equipment) => (
          <div key={equipment._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={equipment.image}
                alt={equipment.name}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{equipment.name}</h2>
              <p className="text-gray-500">${equipment.price}</p>
              <p className="text-sm text-gray-400">{equipment.description}</p>
              <div className="card-actions flex justify-between mt-4">
              <Link to={`/updateEquipment/${equipment._id}`}>
            <button className="btn join-item">Update</button>
          </Link>
                <Link to={`/detailEquipment/${equipment._id}`}>
                  <button className="btn join-item">View Details</button>
                </Link>

                <button
                  onClick={() => handleDelete(equipment._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myequipments;
