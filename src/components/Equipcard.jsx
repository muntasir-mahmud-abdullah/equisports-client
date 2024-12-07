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
  console.log(equipment);
  console.log(name);
  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/equipments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="equipment image" />
      </figure>
      <div className="flex w-full pr-4 justify-between">
        <div className="p-5">
          <h2 className="card-title">Item Name :{name}</h2>
          <p>Category : {category}</p>
          <p> Description : {description}</p>
          <p> Price : {price}</p>
          <p>Rating : {rating}</p>
          <p>Customization : {customization}</p>
          <p>Processing Time : {processingTime}</p>
          <p>Stock Status : {stockStatus}</p>
        </div>

        <div className="join join-vertical space-y-4">
          <button className="btn join-item">View details</button>
          <Link to={`updateEquipment/${_id}`}>
            <button className="btn join-item">Update</button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Equipcard;
