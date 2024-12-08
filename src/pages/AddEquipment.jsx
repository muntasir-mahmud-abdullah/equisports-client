import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  // console.log(newUser);
  // const { name: , email:   } = newUser;
  const handleAddEquip = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const email = form.email.value;
    const newEquipment = {
      name,
      category,
      image,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      email,
    };
    form.reset();
    console.log(newEquipment);
    // send data to the server
    fetch(" https://equisports-server-xi.vercel.app/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Equipment Added Successfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="bg-gray-400 p-24">
      <h1 className="text-3xl mb-8 font-extrabold">Add Equipments</h1>
      <form onSubmit={handleAddEquip}>
        {/* form row */}
        <div className="md:flex">
          <div className="form-control w-full md:w-1/2 mb-8 ">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full md:ml-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category Name"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* form row */}
        <div className="">
          <div className="form-control w-full md:mb-8 ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Photo URL"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        {/* form row */}
        <div className="md:flex">
          <div className="form-control w-full md:w-1/2 md:mb-8 ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="description"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full md:ml-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* form row */}
        <div className="md:flex">
          <div className="form-control w-full md:w-1/2 md:mb-8 ">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="rating"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full md:ml-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <input
              type="text"
              name="customization"
              placeholder="customization"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* form row */}
        <div className="md:flex">
          <div className="form-control w-full md:w-1/2 md:mb-8 ">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              name="processingTime"
              placeholder="processing time"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full md:ml-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <input
              type="text"
              name="stockStatus"
              placeholder="stock status"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* form row */}
        <div className="md:flex">
          <div className="form-control w-full md:w-1/2 md:mb-8 ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              readOnly
              defaultValue={user?.email}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full md:ml-5 md:w-1/2 ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="user-name"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Equipment"
          className="btn btn-block mt-4"
        />
      </form>
    </div>
  );
};

export default AddEquipment;
