import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipments = () => {
  const loadedEquipments = useLoaderData();
  const [allequipments, setAllEquipments] = useState(loadedEquipments);

  // Sorting function
  const handleSortByPrice = () => {
    const sortedEquipments = [...allequipments].sort(
      (a, b) => a.price - b.price
    );
    setAllEquipments(sortedEquipments);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-center">
          All Equipments: {allequipments.length}
        </h2>
        <button onClick={handleSortByPrice} className="btn btn-primary">
          Sort by Price
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Header */}
          <thead className="bg-primary text-white">
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
            {allequipments.map((equipment) => (
              <tr key={equipment._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold text-lg">{equipment.name}</div>
                      <div className="text-sm text-gray-500">
                        {equipment.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{equipment.rating}</td>
                <td>{equipment.price}</td>
                <th>
                  <Link to={`/detailEquipment/${equipment._id}`}>
                    <button className="btn btn-ghost btn-xs">Details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
          {/* Table Footer */}
          <tfoot className="bg-primary text-white">
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Price</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllEquipments;
