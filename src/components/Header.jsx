import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addEquipment"}>Add Equipments</NavLink>
      </li>
      <li>
        <NavLink to={"/allEquipments"}>All Equipments</NavLink>
      </li>
      <li>
        <NavLink to={"/myEquipments"}>My Equipments</NavLink>
      </li>
      <li>
        <NavLink to={"/signIn"}>Sign In</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">EquiSports</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2">
            <img
              className="w-10 rounded-full"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              src={user.photoURL}
            />
            <ReactTooltip id="my-tooltip" />
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/signIn">
            <button className="btn">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
