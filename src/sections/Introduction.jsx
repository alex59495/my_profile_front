import Navbar from "../components/Navbar";
import Contacts from "../components/Contacts";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Introduction() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const maxSteps = 5;

  const stepUp = () => {
    if (step < maxSteps) {
      setStep(step + 1);
    }
  };

  const stepDown = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <blockquote class="speech bubble relative italic">
        <div className="mt-[5%] md:mt-0 px-[13%] sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {t(`introduction_text_${step}`)}
        </div>
        <div className="flex justify-center absolute bottom-[40%] w-full">
          <button
            onClick={stepDown}
            type="button"
            className="mr-2 px-2 py-1 grid mx-auto bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md enabled:hover:bg-gray-700 enabled:hover:shadow-lg enabled:focus:bg-gray-700 enabled:focus:shadow-lg enabled:focus:outline-none focus:ring-0 enabled:active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out disabled:opacity-75"
            disabled={step === 1}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>

          <button
            onClick={stepUp}
            type="button"
            className="px-2 py-1 grid mx-auto bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md enabled:hover:bg-gray-700 enabled:hover:shadow-lg enabled:focus:bg-gray-700 enabled:focus:shadow-lg enabled:focus:outline-none focus:ring-0 enabled:active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out disabled:opacity-75"
            disabled={step === maxSteps}
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </blockquote>
      <img
        src="/profile.png"
        alt="Profile"
        className="image-profile absolute bottom-0 left-0 w-2/4 md:w-4/12 lg:w-1/4 "
      />
      <Contacts showcase={step === maxSteps} />
    </div>
  );
}
