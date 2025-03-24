import { SkipCard } from "./skipCard";

export function SkipGrid() {
  const skips = [
    {
      id: 1,
      size: "4",
      title: "4 Yard Skip",
      price: "£287",
      privateOnly: false,
    },
    {
      id: 2,
      size: "6",
      title: "6 Yard Skip",
      price: "£347",
      privateOnly: false,
    },
    {
      id: 3,
      size: "8",
      title: "8 Yard Skip",
      price: "£384",
      privateOnly: false,
    },
    {
      id: 4,
      size: "10",
      title: "10 Yard Skip",
      price: "£441",
      privateOnly: true,
    },
    {
      id: 5,
      size: "12",
      title: "12 Yard Skip",
      price: "£471",
      privateOnly: true,
    },
    {
      id: 6,
      size: "14",
      title: "14 Yard Skip",
      price: "£507",
      privateOnly: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-primary-foreground p-6">
      <div className="max-w-[72%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              onSkipSelected={(skip) => {
                console.log(skip);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
