import ProgressStepper from "@/component/stepper";
import Onboarding from "@/component/onboarding";

export default function Home() {
  return (
    <div className="w-full relative">
      <div className="w-[70%] mx-auto">
        <ProgressStepper />
      </div>
      <div className="w-full">
        <Onboarding />
      </div>
    </div>
  );
}
