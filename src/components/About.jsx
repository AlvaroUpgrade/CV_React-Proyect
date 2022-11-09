import React, { useContext } from "react";
import { Context } from "../shared/Contexts/Context";
import "./About.scss";

const About = () => {
  const { personalData } = useContext(Context);

  return (
    <div className="aboutCard">
        <h2>About Me</h2>
        <p> {personalData.aboutMe} </p>
      </div>
  );
};

export default About;
