import React from "react";
import "./NavMenu.scss";

const NavMenu = ({ personalData }) => {
  return (
    <div className="data">
      <div className="imageAndname">
        <img src={personalData.image} alt="Foto de Perfil" />
        <h2>
          {personalData.name} {personalData.lastName}
        </h2>
      </div>
      <div className="options">
        <button>Personal Data</button>
        <button>Education</button>
        <button>Experience</button>
        <button>Habilities</button>
        <button>Languages</button>
      </div>
    </div>
  );
};

export default NavMenu;
