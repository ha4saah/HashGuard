import type { HashResult } from "@/lib/hash";

import HashCard from "./HashCard";

interface Props {
  results: HashResult[];
}

export default function HashResults({
  results,
}: Props) {
  if (results.length === 0) return null;

  return (
    <section className="mt-12">

      <h2 className="mb-8 text-3xl font-bold">
        Generated Hashes
      </h2>

      <div className="space-y-6">

        {results.map((hash) => (
          <HashCard
            key={hash.algorithm}
            algorithm={hash.algorithm}
            value={hash.value}
          />
        ))}

      </div>

    </section>
  );
}