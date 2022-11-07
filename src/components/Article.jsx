import React, { useContext } from "react";
import { Context } from "../shared/Contexts/Context";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Habilities from "./Habilities";
import Languages from "./Languages";

const Article = () => {
  const { article } = useContext(Context);
  return (
    <div>
      {article === "About" && <About />}
      {article === "Education" && <Education />}
      {article === "Experience" && <Experience />}
      {article === "Habilities" && <Habilities />}
      {article === "Languages" && <Languages />}
    </div>
  );
};

export default Article;
