import { useState } from "react";
import "./App.scss";

import NavMenu from "./components/NavMenu";
import PersonalData from "./components/PersonalData";

import { CV } from "./CV/CV";
import { Context } from "./shared/Contexts/Context";
import Article from "./components/Article";

const { personalData, education, experience, languages, habilities } = CV;

function App() {
  const [article, setArticle] = useState("About");

  return (
    <Context.Provider
      value={{
        article,
        setArticle,
        personalData,
        education,
        experience,
        languages,
        habilities,
      }}
    >
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
            <Article />
          </article>
        </main>

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
    </Context.Provider>
  );
}

export default App;
