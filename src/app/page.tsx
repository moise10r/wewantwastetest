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

const steps = [
  { id: 1, name: "PostCode", icon: MapPin },
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
    <div className="">
      <div className="w-[75%] mx-auto">
        <ProgressStepper steps={steps} currentStep={3} />
      </div>
    </div>
  );
}
