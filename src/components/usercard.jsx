import React from "react";
import "./usercard.css";

const UserCard = () => {
    const profilePhoto = "https://randomuser.me/api/portraits";
    const name = "John Doe";
  const mail = "john.doe@example.com";
  const phone = "123-456-7890";
  const address = "123 Main Street, Anytown, CA 91234";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <div className="user-details">
        <h2 className="user-name">{name}</h2>
        <p className="user-info">
          <strong>Email:</strong> {mail}
        </p>
        <p className="user-info">
          <strong>Phone:</strong> {phone}
        </p>
        <p className="user-info">
          <strong>Address:</strong> {address}
        </p>
      </div>
    </div>
  );
};

export default UserCard;