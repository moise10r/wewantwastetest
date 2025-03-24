"use client";

import { LoaderCircle } from "lucide-react";
import { SkipCard } from "./skipCard";
import { useGetSkips } from "@/service/getskips";

export function SkipGrid() {
  const { data: skips, isLoading, isError, error } = useGetSkips();
  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center mt-[100px]">
        <LoaderCircle className="text-accent-foreground animate-spin h-10 w-10" />
      </div>
    );
  }

  if (isError) {
    return <p>Error fetching skips: {error?.message}</p>;
  }

  if (!skips) {
    return <p>No skips found.</p>;
  }
  return (
    <div className="min-h-screen bg-background text-primary-foreground p-6">
      <div className="max-w-[72%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skips.map((skip) => (
            <SkipCard key={skip.id} skip={skip} />
          ))}
        </div>
      </div>
    </div>
  );
}
