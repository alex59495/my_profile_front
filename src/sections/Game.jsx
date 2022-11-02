import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";
import { snakeGame } from "../../snakeGame";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

export default function Game() {
  const { t } = useTranslation();

  useEffect(() => {
    if (!isMobile) {
      snakeGame();
    }
  });

  const renderContent = () => {
    if (isMobile) {
      return (
        <div className="flex text-center justify-center items-center h-full m-4">
          {t("gameCannotPlay")}
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="text-center">{t("gameTitle")}</h2>
          <div className="text-center score d-flex">
            <div className="mr-2">
              {t("gameAlexisHighscore")} :<span className="ml-2">95</span>
            </div>
          </div>
          <div className="text-center score d-flex">
            <div className="mr-2">
              {t("gameCurrentScore")} :
              <span id="score" className="ml-2">
                0
              </span>
            </div>
          </div>
          <div className="text-center highscore d-flex">
            <div className="mr-2">
              {t("gameHighScore")} :
              <span id="highscore" className="ml-2">
                0
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <canvas
              id="gameCanvas"
              width="400"
              height="400"
              className="mt-4 border"
            ></canvas>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar />
      {renderContent()}
      <Contacts />
    </div>
  );
}
