import { create } from "zustand";
import {
  Truck,
  Shield,
  CreditCard,
  Trash2,
  Calendar,
  MapPin,
} from "lucide-react";
import { Step } from "@/interfaces/step";

interface ProgressStepper {
  steps: Step[];
  currentStep: number;
  setCurrentStep: (currentStep: number) => void;
}

export const useProgressStepperStore = create<ProgressStepper>((set) => ({
  steps: [
    { id: 1, name: "Postcode", icon: MapPin },
    { id: 2, name: "Waste Type", icon: Trash2 },
    { id: 3, name: "Select Skip", icon: Truck },
    { id: 4, name: "Permit Check", icon: Shield },
    { id: 5, name: "Choose Date", icon: Calendar },
    { id: 6, name: "Payment", icon: CreditCard },
  ],
  currentStep: 3,
  setCurrentStep: (currentStep) => set({ currentStep }),
}));
