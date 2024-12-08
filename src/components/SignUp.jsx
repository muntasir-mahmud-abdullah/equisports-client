import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import AddEquipment from "../pages/AddEquipment";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, image, email };

    createUser(email, password).then((result) => {
      const user = result.user;
      setUser(user);
      updateUserProfile({ displayName: name, photoURL: image })
        .then(() => {
          navigate("/");
        })
        .catch((error) => console.log(error));

      // <AddEquipment name={name} ></AddEquipment>
      //save new user info to database
      fetch(" https://equisports-server-xi.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log("user created in db");
          }
        });
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up or Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
