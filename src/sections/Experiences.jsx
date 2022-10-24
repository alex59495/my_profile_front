import Navbar from "../components/Navbar";
import Stepper from "../components/Stepper";
import i18n from "../i18n";

export default function Experiences() {
  return (
    <div>
      <Navbar />
      <Stepper
        steps={[
          {
            role: "Le Wagon bootcamp",
            description: i18n.t("experienceDescriptionLW"),
            icon: "LeWagon.png",
            date: i18n.t("dateLeWagon"),
          },
          {
            role: "Freelance Web Developper",
            description: i18n.t("experienceDescriptionFreelance"),
            icon: "person-workspace.svg",
            date: i18n.t("dateFreelance"),
          },
          {
            role: "Fullstack Web Developer",
            description: i18n.t("experienceDescriptionSightcall"),
            icon: "Sightcall.svg",
            date: i18n.t("dateSightcall"),
          },
        ]}
      />
    </div>
  );
}
