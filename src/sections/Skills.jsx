import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";
import SearchBar from "../components/SearchBar";
import Stars from "../components/Stars";
import i18n from "../i18n";
import { useState } from "react";
import { defaultSkills } from "../constants";

export default function Skills() {
  const [skills, setSkills] = useState(defaultSkills);

  const searchElements = (e) => {
    if (!e.target.value) {
      return setSkills(defaultSkills);
    }

    const skillsSearched = defaultSkills.filter((skill) => {
      return skill.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });

    return setSkills(skillsSearched);
  };

  return (
    <div>
      <Navbar />
      <SearchBar
        searchElements={searchElements}
        placeholder={i18n.t("searchPlaceholder")}
      />
      <h2 className="text-center">{i18n.t("skills")}</h2>
      <ul className="mx-auto w-max list-none skills">
        {skills.map((skill) => {
          return (
            <li key={skill.title}>
              <div className="flex items-center">
                <svg
                  height="50px"
                  width="50px"
                  viewBox="0 0 128 128"
                  dangerouslySetInnerHTML={{ __html: skill.svgPath }}
                  className="mr-2 my-2"
                ></svg>
                <div className="skill-info">
                  <p className="skill-title">{skill.title}</p>
                  <Stars level={skill.level} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Contacts />
    </div>
  );
}
