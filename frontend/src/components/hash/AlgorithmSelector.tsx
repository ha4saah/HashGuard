import GlassCard from "@/components/ui/GlassCard";

interface AlgorithmSelectorProps {
  selectedAlgorithms: string[];
  onToggle: (algorithm: string) => void;
}

const algorithms = [
  "SHA-256",
  "SHA-384",
  "SHA-512",
  "SHA-1",
  "MD5",
];

export default function AlgorithmSelector({
  selectedAlgorithms,
  onToggle,
}: AlgorithmSelectorProps) {
  return (
    <GlassCard className="mt-8 p-6">
      <h2 className="text-xl font-semibold">
        Select Algorithms
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {algorithms.map((algorithm) => {
          const selected =
            selectedAlgorithms.includes(algorithm);

          return (
            <button
              key={algorithm}
              onClick={() => onToggle(algorithm)}
              className={`
                rounded-xl
                px-5
                py-3
                transition-all
                duration-200
                border

                ${
                  selected
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "bg-white/5 border-white/10 hover:border-indigo-400"
                }
              `}
            >
              {algorithm}
            </button>
          );
        })}
      </div>
    </GlassCard>
  );
}