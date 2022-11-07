import React, { useState } from "react";
import "./About.scss";

const About = ({ about }) => {
  const [showAbout, setShowAbout] = useState(true);

  return (
    <div className="aboutData">
      <button onClick={() => setShowAbout(!showAbout)}>
        {showAbout ? "Ocultar" : "Mostrar"} About Section
      </button>
      <div className="card">
        {showAbout ? (
          <>
            <h2>Profile</h2>
            <p> {about} </p>
          </>
        ) : (
          <>
            <p>The About Section is hidden</p>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
