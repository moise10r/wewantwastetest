"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useSkipStore } from "@/store/skipStore";
import { useProgressStepperStore } from "@/store/progressStepperStore";

export default function SkipSelectedFooter() {
  const { selectedSkip } = useSkipStore();
  const { currentStep, setCurrentStep } = useProgressStepperStore();

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 flex items-center  border-border border-2 justify-between w-full px-6  bg-card  text-white z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: selectedSkip ? 0 : 100,
        opacity: selectedSkip ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <div className="w-[76%] mx-auto flex flex-col my-4 md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm text-secondary-foreground font-medium mr-2">
            {selectedSkip?.size}
          </span>
          <div className="flex items-end">
            <span className="text-blue-500 font-semibold text-2xl mr-1">£</span>
            <span className="text-secondary-foreground">
              {selectedSkip?.hire_period_days} day hire
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="text-primary-foreground text-md hover:bg-button-background "
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </Button>
          <Button
            className="bg-accent-foreground text-md hover:bg-blue-700 text-primary-foreground px-5"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
