import React from "react";
import "./PersonalData.scss";

const PersonalData = ({ personalData }) => {
  return (
    <div className="asideData">
      <div className="asideCard">
        <p>πΊοΈ{personalData.city}</p>
        <p>ποΈ{personalData.birthDate}</p>
        <p>π±{personalData.phone}</p>
        <p>
          π§
          <a href={"Email: " + personalData.email}>alvaro@gmail.com</a>
        </p>
        <p>
          πΎ<a href={personalData.gitHub}>Github</a>
        </p>
      </div>
    </div>
  );
};

export default PersonalData;
