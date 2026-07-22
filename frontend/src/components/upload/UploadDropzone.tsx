import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";

interface UploadDropzoneProps {
  onFileSelected: (file: File) => void;
}

export default function UploadDropzone({
  onFileSelected,
}: UploadDropzoneProps) {

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {

      if (acceptedFiles.length > 0) {
        onFileSelected(acceptedFiles[0]);
      }

    },
    [onFileSelected]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <GlassCard
      className={`
        p-16
        text-center
        cursor-pointer
        transition-all
        duration-300
        ${
          isDragActive
            ? "border-indigo-500 bg-indigo-500/10"
            : ""
        }
      `}
    >
      <div {...getRootProps()}>

        <input {...getInputProps()} />

        <UploadCloud
          className="
            mx-auto
            h-16
            w-16
            text-indigo-400
          "
        />

        <h3 className="mt-6 text-2xl font-semibold">
          {isDragActive
            ? "Drop the file here"
            : "Drag & Drop your file"}
        </h3>

        <p className="mt-3 text-zinc-400">
          or click anywhere to browse
        </p>

      </div>
    </GlassCard>
  );
}