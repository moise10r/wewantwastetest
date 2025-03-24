"use client";
import { cn } from "@/lib/utils";
import { useProgressStepperStore } from "@/store/progressStepperStore";

export default function ProgressStepper() {
  const { steps, currentStep, setCurrentStep } = useProgressStepperStore();
  return (
    <div className="w-full  mx-auto  py-[25px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center w-full">
            <button className="flex flex-row items-center cursor-pointer">
              <span
                className={cn(
                  "flex items-center justify-center w-10 h-10 transition-colors",
                  step.id <= currentStep
                    ? "text-accent-foreground"
                    : "text-secondary-foreground"
                )}
              >
                <step.icon className="h-6 w-6" />
              </span>
              <span
                className={cn(
                  "mr-2 text-md font-medium text-nowrap",
                  step.id <= currentStep
                    ? "text-primary-foreground"
                    : "text-secondary-foreground"
                )}
              >
                {step.name}
              </span>
            </button>

            {index < steps.length - 1 && (
              <div
                className={cn(
                  "hidden md:block h-[0.1px] flex-grow mx-2 min-w-[65px] max-w-[65px]",
                  step.id < currentStep - 1
                    ? "bg-accent-foreground"
                    : "bg-secondary-foreground"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
