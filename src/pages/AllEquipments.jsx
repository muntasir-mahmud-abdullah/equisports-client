import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipments = () => {
  const loadedEquipments = useLoaderData();
  const [allequipments, setallEquipments] = useState(loadedEquipments);
  return (
    <div>
      <h2>all equipments:{allequipments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table m-20">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allequipments.map((equipment) => (
              <tr key={equipment._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{equipment.name}</div>
                      <div className="text-sm opacity-50">
                        {equipment.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{equipment.rating}</td>
                <td>{equipment.price}</td>
                <th>
                  <Link to={`/detailEquipment/${equipment._id}`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
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
