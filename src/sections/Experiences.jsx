import Navbar from "../components/Navbar";
import Stepper from "../components/Stepper";
import Contacts from "../components/Contacts";
import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Stepper
        steps={[
          {
            role: "Le Wagon bootcamp",
            description: t("experienceDescriptionLW"),
            icon: "LeWagon.png",
            date: t("dateLeWagon"),
            link: "https://www.lewagon.com/fr",
          },
          {
            role: "Freelance Web Developper",
            description: t("experienceDescriptionFreelance"),
            icon: "person-workspace.svg",
            date: t("dateFreelance"),
          },
          {
            role: "Fullstack Web Developer - Sightcall",
            description: t("experienceDescriptionSightcall"),
            icon: "Sightcall.svg",
            date: t("dateSightcall"),
            link: "https://sightcall.com/fr/technology/visual-assistance-platform",
          },
        ]}
      />
      <Contacts />
    </div>
  );
}
