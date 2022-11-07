// import { useState } from "react";
import "./App.scss";

import NavMenu from "./components/NavMenu";
import PersonalData from "./components/PersonalData";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";

import { CV } from "./CV/CV";

const {
  personalData,
  education,
  experience,
  languages,
  habilities,
  volunteer,
} = CV;

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <NavMenu personalData={personalData} />
        </nav>
      </header>
      <main>
        <aside>
          <PersonalData personalData={personalData} />
        </aside>
        <article>
          <Education />
        </article>
      </main>
      <footer>footer</footer>

      {/* <PersonalData personalData={personalData} />
      <About about={personalData.aboutMe} />
      <Education education={education} />
      <Experience experience={experience} />
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      /> */}
    </div>
  );
}

export default App;
