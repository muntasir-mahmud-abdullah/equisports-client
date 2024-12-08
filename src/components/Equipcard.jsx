import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Equipcard = ({ equipment, equipments, setEquipments }) => {
  const {
    _id,
    name,
    category,
    image,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = equipment;

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
              const rest = equipments.filter(
                (equipment) => equipment._id !== _id
              );
              setEquipments(rest);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl p-4 rounded-lg">
      <figure className="w-1/2">
        <img
          src={image}
          alt="equipment image"
          className="w-full h-48 object-cover rounded-lg"
        />
      </figure>
      <div className="flex flex-col w-full sm:w-1/2 pl-4">
        <h2 className="card-title text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">Category: {category}</p>
        <p className="text-sm text-gray-600">Description: {description}</p>
        <p className="text-sm text-gray-600">Price: ${price}</p>
        <p className="text-sm text-gray-600">Rating: {rating}</p>
        <p className="text-sm text-gray-600">Customization: {customization}</p>
        <p className="text-sm text-gray-600">
          Processing Time: {processingTime}
        </p>
        <p className="text-sm text-gray-600">Stock Status: {stockStatus}</p>

        <div className="card-actions mt-4 space-x-2">
          <Link to={`/detailEquipment/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Equipcard;
