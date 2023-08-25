import React from "react";
import "./UserProfile.css";

const UserProfileImpl = ({ closeProfile, exitProfile }) => {
  return (
    <div className="user-profile">
      <button className="close-button" onClick={closeProfile}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 0 352 512"
        >
          <path
            d="M240.971 256L347.515 149.455c4.686-4.686 4.686-12.284 0-16.971l-8.485-8.485c-4.686-4.686-12.284-4.686-16.971 0L216 230.029 109.455 123.484c-4.686-4.686-12.284-4.686-16.971 0l-8.485 8.485c-4.686 4.686-4.686 12.284 0 16.971L127.029 256 20.485 362.545c-4.686 4.686-4.686 12.284 0 16.971l8.485 8.485c4.686 4.686 12.284 4.686 16.971 0L216 281.971l106.545 106.545c4.686 4.686 12.284 4.686 16.971 0l8.485-8.485c4.686-4.686 4.686-12.284 0-16.971L240.971 256z"
            fill="currentColor"
          />
        </svg>
      </button>
      <h3>Имя пользователя</h3>
      <button className="exit-button" onClick={exitProfile}>
        Выйти
      </button>
    </div>
  );
};

export const UserProfile = React.memo(UserProfileImpl);
