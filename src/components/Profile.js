import React from "react";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div>
        <h1 className="text-center p-5">Profile</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Profile;
