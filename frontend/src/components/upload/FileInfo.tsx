import GlassCard from "@/components/ui/GlassCard";

interface FileInfoProps {
  file: File;
}

export default function FileInfo({
  file,
}: FileInfoProps) {
  return (
    <GlassCard className="mt-8 p-6">

      <h3 className="text-xl font-semibold">
        Selected File
      </h3>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span className="text-zinc-400">
            Name
          </span>

          <span>{file.name}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">
            Size
          </span>

          <span>
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">
            Type
          </span>

          <span>
            {file.type || "Unknown"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">
            Last Modified
          </span>

          <span>
            {new Date(file.lastModified).toLocaleString()}
          </span>
        </div>

      </div>

    </GlassCard>
  );
}