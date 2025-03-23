import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type Step = {
  id: number;
  name: string;
  icon: LucideIcon;
};

type ProgressStepperProps = {
  steps: Step[];
  currentStep: number;
};

export default function ProgressStepper({
  steps,
  currentStep,
}: ProgressStepperProps) {
  return (
    <div className="w-full  mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center w-full">
            <div className="flex flex-row items-center">
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 transition-colors",
                  step.id <= currentStep
                    ? "text-accent-foreground"
                    : "text-secondary-foreground"
                )}
              >
                <step.icon className="h-6 w-6" />
              </div>
              <span
                className={cn(
                  "mr-2 text-dm font-medium",
                  step.id <= currentStep
                    ? "text-primary-foreground"
                    : "text-secondary-foreground"
                )}
              >
                {step.name}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={cn(
                  "hidden md:block h-[0.1px] flex-grow mx-2 w-[40px]",
                  step.id < currentStep
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
