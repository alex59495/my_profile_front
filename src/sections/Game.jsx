import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";
import { snakeGame } from "../../snakeGame";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Game() {
  const { t } = useTranslation();

  useEffect(() => {
    snakeGame();
  }, []);

  const renderContent = () => {
    return (
      <div>
        <h2 className="m-3 text-center border-">{t("gameTitle")}</h2>
        <table className="table-auto m-auto">
          <thead>
            <tr>
              <th class="px-10">{t("gameAlexisHighscore")}</th>
              <th>95</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-10">{t("gameCurrentScore")}</td>
              <td>
                <span id="score" className="ml-2">
                  0
                </span>
              </td>
            </tr>
            <tr>
              <td class="px-10">{t("gameHighScore")}</td>
              <td>
                <span id="highscore" className="ml-2">
                  0
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center">
          <canvas
            id="gameCanvas"
            width="400"
            height="400"
            className="mt-4 border bg-gray-200"
          ></canvas>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      {renderContent()}
      <Contacts />
    </div>
  );
}
