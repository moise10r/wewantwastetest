"use client";
import { useProgressStepperStore } from "@/store/progressStepperStore";
import SkipHire from "./skipHire/skipeHire";

export default function Onboarding() {
  const { steps, currentStep } = useProgressStepperStore();

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return "Postcode";
      case 2:
        return "WasteType";
      case 3:
        return <SkipHire />;
      case 4:
        return "PermitCheck";
      case 5:
        return "ChooseDate";
      case 6:
        return "Payment";
      default:
        return "Postcode";
    }
  };

  return (
    <div className="w-full">
      <div className="mt-6">{renderStepComponent()}</div>
    </div>
  );
}
