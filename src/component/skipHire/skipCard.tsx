import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Skip } from "@/interfaces/skip";
import { useSkipStore } from "@/store/skipStore";

interface SkipCardProps {
  skip: Skip;
}

export function SkipCard({ skip }: SkipCardProps) {
  const { selectSkip, selectedSkip } = useSkipStore();
  const isSelected = selectedSkip?.id === skip.id;
  return (
    <div
      className={`bg-card rounded-lg overflow-hidden border-2 p-6 transition-all
      ${
        !skip.allows_heavy_waste
          ? `hover:border-accent-foreground cursor-pointer ${
              isSelected
                ? "border-accent-foreground ring-2 ring-accent-foreground/30"
                : "border-border"
            }`
          : "border-border opacity-60 cursor-not-allowed"
      }`}
      onClick={() => {
        if (!skip.allows_heavy_waste) {
          selectSkip(skip);
        }
      }}
    >
      <div className="relative">
        {isSelected && (
          <span className="absolute w-[10px] h-[2px] top-0 z-0 -right-[8px] rotate-[-40deg] bg-accent-foreground rounded-full"></span>
        )}
        <Image
          src="/skipImage.jpeg"
          width={200}
          height={200}
          alt={`${skip.size} Yard Skip`}
          className=" w-full h-48 object-cover rounded-sm z-10"
        />
        <Badge className="absolute  top-2 right-2 bg-accent-foreground text-primary-foreground px-2 text-[14px]  rounded-full font-semibold">
          {skip.size} Yards
        </Badge>
        <div className="absolute bottom-4 left-4 flex flex-col">
          {skip.allowed_on_road && (
            <Badge className=" bg-black mb-2  text- px-3 py-[5px] shadow-md rounded-md items-center text-xs font-medium text-yellow-500">
              <AlertTriangle size={16} className="mr-1" />
              Private Property Only
            </Badge>
          )}

          {skip.allows_heavy_waste && (
            <Badge className=" bg-black  text- px-3 py-[5px] shadow-md rounded-md items-center text-xs font-medium text-red-500">
              <AlertTriangle size={16} className="mr-1" />
              Not Suitable for heavy Waste
            </Badge>
          )}
        </div>
      </div>
      <div className="relative pt-3">
        <h2 className="text-xl font-bold mb-1">{skip.size} Yard Skip</h2>
        <p className="text-secondary-foreground mb-6">
          {skip.hire_period_days} day hire period
        </p>
        <div className="flex items-baseline mb-5">
          <span className="text-accent-foreground text-2xl font-bold">
            £{skip.price_before_vat}
          </span>
          <span className="text-secondary-foreground ml-2">per week</span>
        </div>
        <Button
          className={`w-full ${
            isSelected
              ? "bg-blue-800 hover:bg-accent-foreground "
              : "bg-button-background/30 hover:bg-button-background"
          } text-primary-foreground py-2.5 text-md md:py-[25px] rounded flex items-center justify-center transition-colors`}
        >
          <span className="mr-2 text-wrap">
            {isSelected ? (
              <span>Selected</span>
            ) : (
              <span className="flex items-center justify-center">
                <span className="mr-2">Select This Skip</span>{" "}
                <ArrowRight size={18} />
              </span>
            )}
          </span>
        </Button>
      </div>
    </div>
  );
}
