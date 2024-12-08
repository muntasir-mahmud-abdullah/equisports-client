import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateEquipment = () => {
  const equipment = useLoaderData();
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
  const handleUpdateEquip = (e) => {
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
    const updatedEquipment = {
      name,
      category,
      image,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
    };
    // console.log(updatedEquipment);
    // send data to the server
    fetch(` https://equisports-server-xi.vercel.app/equipments/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Equipment Updated Successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="bg-gray-400 p-24">
      <h1 className="text-3xl mb-8 font-extrabold">Update Equipment</h1>

      <form onSubmit={handleUpdateEquip}>
        {/* form row */}
        <div className="md:flex">
          <div className="form-control w-full md:w-1/2 mb-8 ">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
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
              defaultValue={category}
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
              defaultValue={image}
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
              defaultValue={description}
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
              defaultValue={price}
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
              defaultValue={rating}
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
              defaultValue={customization}
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
              defaultValue={processingTime}
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
              defaultValue={stockStatus}
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
              name="user-email"
              placeholder="email"
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
              placeholder="Name"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update Equipment"
          className="btn btn-block mt-4"
        />
      </form>
    </div>
  );
};

export default UpdateEquipment;
