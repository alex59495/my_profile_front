import { useState } from "react";
import i18n from "../i18n";

export default function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(1);

  const renderButton = () => {
    if (steps[currentStep - 1].link) {
      return (
        <button
          type="button"
          className="m-auto px-2 py-1 grid bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md enabled:hover:bg-gray-700 enabled:hover:shadow-lg enabled:focus:bg-gray-700 enabled:focus:shadow-lg enabled:focus:outline-none focus:ring-0 enabled:active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out disabled:opacity-75"
        >
          <a
            href={`${steps[currentStep - 1].link}`}
            target="_blank"
            rel="noreferrer"
          >
            {i18n.t("experiencesButtonMore")}
          </a>
        </button>
      );
    }
  };

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
                  <img src={`/${step.icon}`} alt="icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="step-description mt-3 text-center transition-opacity ease-in duration-700 opacity-100">
        <h2 className="text-center">{steps[currentStep - 1].date}</h2>
        <div className="step-text text-center">
          {steps[currentStep - 1].role}
        </div>
        <img
          src={`/${steps[currentStep - 1].icon}`}
          alt="icon"
          width="200"
          className="mx-auto my-4"
        />

        {renderButton()}

        <div
          dangerouslySetInnerHTML={{
            __html: steps[currentStep - 1].description,
          }}
          className="text-left m-4"
        ></div>
      </div>
    </div>
  );
}
