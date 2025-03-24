import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Skip } from "@/interfaces/skip";

interface SkipCardProps {
  skip: Skip;
  onSkipSelected: (skip: Skip) => void;
}

export function SkipCard({ skip, onSkipSelected }: SkipCardProps) {

  return (
    <div
      className=" bg-card rounded-lg overflow-hidden  border-border  border-2 p-6 transition-all
    hover:border-accent-foreground cursor-pointer"
      onClick={() => onSkipSelected(skip)}
    >
      <div className="relative">
        <Image
          src="/skipImage.jpeg"
          width={200}
          height={200}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-accent-foreground text-primary-foreground px-2 text-[14px]  rounded-full font-semibold">
          {skip.size} Yards
        </Badge>
        <div className="absolute bottom-4 left-4 flex flex-col">
          {skip.privateOnly && (
            <Badge className=" bg-black mb-2  text- px-3 py-[5px] shadow-md rounded-md items-center text-xs font-medium text-yellow-500">
              <AlertTriangle size={16} className="mr-1" />
              Private Property Only
            </Badge>
          )}

          {skip.privateOnly && (
            <Badge className=" bg-black  text- px-3 py-[5px] shadow-md rounded-md items-center text-xs font-medium text-red-500">
              <AlertTriangle size={16} className="mr-1" />
              Not Suitable for heavy Waste
            </Badge>
          )}
        </div>
      </div>
      <div className="relative pt-3">
        <h2 className="text-xl font-bold mb-1">{skip.title}</h2>
        <p className="text-secondary-foreground mb-6">14 day hire period</p>
        <div className="flex items-baseline mb-5">
          <span className="text-accent-foreground text-2xl font-bold">
            {skip.price}
          </span>
          <span className="text-secondary-foreground ml-2">per week</span>
        </div>
        <Button className="w-full bg-button-background/30 hover:bg-button-background text-primary-foreground py-2.5  md:py-[25px]  rounded flex items-center justify-center transition-colors">
          <span className="mr-2">Select This Skip</span>
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}
