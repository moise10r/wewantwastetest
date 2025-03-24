import { useQuery } from "@tanstack/react-query";
import { Skip } from "@/interfaces/skip";

export async function getSkips(): Promise<Skip[]> {
  const response = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch skips data");
  }

  return response.json();
}

export function useGetSkips() {
  return useQuery<Skip[], Error>({
    queryKey: ["skips"],
    queryFn: getSkips,
    staleTime: 3600000,
    retry: 3,
  });
}
