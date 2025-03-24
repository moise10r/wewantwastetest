import { SkipGrid } from "@/component/skipHire/skipGrid";
import SkipSelectedFooter from "@/component/skipHire/skipSelectedFooter";

export default function SkipHire() {
  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-center mb-4">
          Select the skip size that best suits your needs
        </p>
      </div>
      <SkipGrid />
      <SkipSelectedFooter />
    </div>
  );
}
