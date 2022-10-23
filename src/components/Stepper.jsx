import { useState } from "react";

export default function Stepper({ steps }) {
  const [currentStep, setCurrentStep] = useState(1);

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
      <div className="step-description mt-3 text-center">
        {steps[currentStep - 1].description}
      </div>
    </div>
  );
}
