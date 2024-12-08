import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

    // Password validation: Must contain uppercase, lowercase, and at least 6 characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must contain at least one uppercase, one lowercase letter, and be at least 6 characters long.",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        // Update user profile
        updateUserProfile({ displayName: name, photoURL: image }).then(() => {
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            text: "Welcome to EquiSports!",
          });
          navigate("/");
        });

        // Save new user info to the database
        fetch("https://equisports-server-xi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("User created in the database");
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-6">
            Sign Up Now!
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl rounded-lg p-8">
          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image (Photo URL)</span>
              </label>
              <input
                type="text"
                placeholder="Your image URL"
                name="image"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">
                Sign Up or Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
