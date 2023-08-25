import React from "react";
import "./UserProfile.css";

const UserProfileImpl = ({ closeProfile, exitProfile }) => {
  return (
    <div className="user-profile">
      <button className="close-button" onClick={closeProfile}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 0 384 512"
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="rgb(73, 73, 73)"
          />
        </svg>
      </button>
      <div className="profile-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          viewBox="0 0 448 512"
        >
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            fill="rgb(73, 73, 73)"
          />
        </svg>
      </div>

      <h3>Имя пользователя</h3>
      <button className="exit-button" onClick={exitProfile}>
        Выйти
      </button>
    </div>
  );
};

export const UserProfile = React.memo(UserProfileImpl);
