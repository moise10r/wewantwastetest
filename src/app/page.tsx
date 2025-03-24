import ProgressStepper from "@/component/stepper";

import { SkipGrid } from "@/component/skipGrid";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-[70%] mx-auto">
        <ProgressStepper />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-center mb-4">
          Select the skip size that best suits your needs
        </p>
      </div>
      <SkipGrid />
    </div>
  );
}
