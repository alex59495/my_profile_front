import Navbar from "../components/Navbar";
import i18n from "../i18n";

export default function Introduction() {
  return (
    <div>
      <Navbar />
      <h1 className="mt-2">{i18n.t("introduction")}</h1>
      <img
        src="/profile.png"
        alt="Profile"
        className="absolute bottom-0 right-0 w-2/4"
      />
    </div>
  );
}
