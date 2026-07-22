import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

interface Props {
  loading: boolean;
  onGenerate: () => void;
}

export default function GenerateButton({
  loading,
  onGenerate,
}: Props) {
  return (
    <div className="mt-10 flex justify-center">
      <Button
        size="lg"
        onClick={onGenerate}
        disabled={loading}
        className="
          h-14
          min-w-[280px]
          rounded-2xl
          px-10
          text-lg
          font-semibold
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-indigo-500/20
          active:scale-95
        "
      >
        <ShieldCheck className="mr-2 h-5 w-5" />

        {loading ? "Generating Hashes..." : "Generate Hashes"}
      </Button>
    </div>
  );
}