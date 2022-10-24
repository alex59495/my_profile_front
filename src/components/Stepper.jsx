import { useState } from "react";
import i18n from "../i18n";

export default function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div>
      <div className="flex justify-between mt-4">
        {steps.map((step, i) => {
          return (
            <div className="step-container" key={i}>
              <div
                className={`step-item ${currentStep === i + 1 && "active"} ${
                  currentStep > i + 1 && "complete"
                }`}
                onClick={() => setCurrentStep(i + 1)}
              >
                <div className="step">
                  <img src={`/${step.icon}`} alt="" />
                </div>
              </div>
              <h2 className="text-center">{step.date}</h2>
              <div
                className={`step-text text-center ${
                  currentStep === i + 1 && "active"
                } ${currentStep > i + 1 && "complete"}`}
              >
                {step.role}
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setShowDescription(!showDescription)}
        type="button"
        className="px-6 py-2.5 grid mx-auto mt-4 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        {showDescription
          ? i18n.t("experiencesButtonLess")
          : i18n.t("experiencesButtonMore")}
      </button>

      <div
        className={`step-description mt-3 text-center transition-opacity ease-in duration-700 opacity-100 ${
          showDescription ? "" : "hidden"
        }`}
      >
        {steps[currentStep - 1].description}
      </div>
    </div>
  );
}
