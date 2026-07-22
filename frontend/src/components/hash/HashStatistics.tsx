import GlassCard from "@/components/ui/GlassCard";

interface Props {
  totalHashes: number;
  selectedAlgorithms: number;
  timeTaken: number;
}

export default function HashStatistics({
  totalHashes,
  selectedAlgorithms,
  timeTaken,
}: Props) {
  return (
    <GlassCard className="mb-8 p-6">

      <h2 className="mb-6 text-2xl font-semibold">
        Generation Summary
      </h2>

      <div className="grid grid-cols-3 gap-6">

        <div>
          <p className="text-sm text-zinc-400">
            Hashes Generated
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {totalHashes}
          </h3>
        </div>

        <div>
          <p className="text-sm text-zinc-400">
            Algorithms Selected
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {selectedAlgorithms}
          </h3>
        </div>

        <div>
          <p className="text-sm text-zinc-400">
            Time
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {timeTaken.toFixed(2)} ms
          </h3>
        </div>

      </div>

    </GlassCard>
  );
}