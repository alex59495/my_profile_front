import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";
import SearchBar from "../components/SearchBar";
import Stars from "../components/Stars";
import i18n from "../i18n";
import { useState, useEffect } from "react";
import { defaultSkills } from "../constants";

export default function Skills() {
  const [skills, setSkills] = useState(defaultSkills);
  const [selectedLevels, setSelectedLevels] = useState([
    "basic",
    "medium",
    "good",
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    searchElements();
  }, [selectedLevels, searchQuery]);

  const searchElements = (e) => {
    if (e?.target?.value === "") {
      return setSkills(defaultSkills);
    }

    if (e?.target?.value) {
      setSearchQuery(e.target.value);
    }

    const skillsSearched = defaultSkills.filter((skill) => {
      return (
        skill.title
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase()) &&
        selectedLevels.includes(skill.level)
      );
    });

    return setSkills(skillsSearched);
  };

  const clickOnLevel = (e) => {
    if (e.target.checked) {
      setSelectedLevels([...selectedLevels, e.target.value]);
    } else {
      setSelectedLevels(
        selectedLevels.filter((value) => value !== e.target.value)
      );
    }
  };

  return (
    <div>
      <Navbar />
      <SearchBar
        searchElements={searchElements}
        placeholder={i18n.t("searchPlaceholder")}
      />

      {/* CHECKBOXES */}
      <div className="flex w-72 mx-auto my-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <div className="w-fdivl rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="good-checkbox"
              type="checkbox"
              value="good"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={clickOnLevel}
              defaultChecked={true}
            />
            <label
              htmlFor="good-checkbox"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <Stars level="good" />
            </label>
          </div>
        </div>
        <div className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="medium-checkbox"
              type="checkbox"
              value="medium"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={clickOnLevel}
              defaultChecked={true}
            />
            <label
              htmlFor="medium-checkbox"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <Stars level="medium" />
            </label>
          </div>
        </div>
        <div className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="basic-checkbox"
              type="checkbox"
              value="basic"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              onChange={clickOnLevel}
              defaultChecked={true}
            />
            <label
              htmlFor="basic-checkbox"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <Stars level="basic" />
            </label>
          </div>
        </div>
      </div>
      {/* CHECKBOXES */}

      <div className="grid py-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto skills">
        {skills.map((skill) => {
          return (
            <div key={skill.title}>
              <div className="flex items-center shadow-md rounded-md p-1 max-w-xs mx-auto">
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
            </div>
          );
        })}
      </div>
      <Contacts />
    </div>
  );
}
