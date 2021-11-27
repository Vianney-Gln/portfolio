import React from "react";
import avatar from "../images/avatar-vianney-200.png";

const Header = () => {
  return (
    <header>
      <div className="avatar">
        <img src={avatar} alt="avatar-vianney" />
      </div>
    </header>
  );
};

export default Header;