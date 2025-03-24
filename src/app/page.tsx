"use client";
import ProgressStepper from "@/component/stepper";
import { useEffect } from "react";
import {
  Truck,
  Shield,
  CreditCard,
  Trash2,
  Calendar,
  MapPin,
} from "lucide-react";

import { SkipGrid } from "@/component/skipGrid";

const steps = [
  { id: 1, name: "Postcode", icon: MapPin },
  { id: 2, name: "Waste Type", icon: Trash2 },
  { id: 3, name: "Select Skip", icon: Truck },
  { id: 4, name: "Permit Check", icon: Shield },
  { id: 5, name: "Choose Date", icon: Calendar },
  { id: 6, name: "Payment", icon: CreditCard },
];
export default function Home() {

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  return (
    <div className="w-full">
      <div className="w-[70%] mx-auto">
        <ProgressStepper steps={steps} currentStep={3} />
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
