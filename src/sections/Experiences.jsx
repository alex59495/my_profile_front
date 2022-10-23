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
            description: "",
            icon: "LeWagon.png",
            date: i18n.t("dateLeWagon"),
          },
          {
            role: "Freelance Web Developper",
            description: "baj",
            icon: "person-workspace.svg",
            date: i18n.t("dateFreelance"),
          },
          {
            role: "Fullstack Web Developer",
            description: "blab",
            icon: "Sightcall.svg",
            date: i18n.t("dateSightcall"),
          },
        ]}
      />
    </div>
  );
}
