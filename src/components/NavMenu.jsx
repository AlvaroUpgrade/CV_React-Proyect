import React, { useContext } from "react";
import { Context } from "../shared/Contexts/Context";
import "./NavMenu.scss";

const NavMenu = ({ personalData }) => {
  const { setArticle } = useContext(Context);

  return (
    <div className="data">
      <div className="imageAndname">
        <img src={personalData.image} alt="Foto de Perfil" />
        <h2>
          {personalData.name} {personalData.lastName}
        </h2>
      </div>
      <div className="options">
        <button onClick={() => setArticle("About")}>About Me</button>
        <button onClick={() => setArticle("Education")}>Education</button>
        <button onClick={() => setArticle("Experience")}>Experience</button>
        <button onClick={() => setArticle("HabilitiesAndLanguages")}>
          Habilities & Languages
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
