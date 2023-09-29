import Navbar from "../components/Navbar";
import Stepper from "../components/Stepper";
import Contacts from "../components/Contacts";
import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <div className="min-h-full">
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
            videoIframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/A5ib0dNhCSI?si=dfLpTtq8poLUgNPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
          },
        ]}
      />
      <Contacts />
    </div>
  );
}
