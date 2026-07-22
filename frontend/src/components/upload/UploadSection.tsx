import { useState } from "react";
import HashStatistics from "@/components/hash/HashStatistics";
import Container from "@/components/common/Container";
import UploadDropzone from "./UploadDropzone";
import FileInfo from "./FileInfo";

import AlgorithmSelector from "@/components/hash/AlgorithmSelector";
import GenerateButton from "@/components/hash/GenerateButton";
import HashResults from "@/components/hash/HashResults";

import {
  generateHashes,
  type HashResult,
} from "@/lib/hash";
import { saveHistory } from "@/store/history";

export default function UploadSection() {
  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [selectedAlgorithms, setSelectedAlgorithms] =
    useState<string[]>(["SHA-256"]);

  const [loading, setLoading] =
    useState(false);

  const [results, setResults] =
    useState<HashResult[]>([]);

const [timeTaken, setTimeTaken] =
    useState(0);

  const toggleAlgorithm = (
    algorithm: string
  ) => {
    setSelectedAlgorithms((previous) =>
      previous.includes(algorithm)
        ? previous.filter(
            (item) => item !== algorithm
          )
        : [...previous, algorithm]
    );
  };

async function handleGenerate() {

  if (!selectedFile) return;


  setLoading(true);


  const start = performance.now();


  const hashes =
    await generateHashes(
      selectedFile,
      selectedAlgorithms
    );


  const end = performance.now();


  setTimeTaken(
    end - start
  );


  setResults(hashes);



  hashes.forEach((item)=>{


    saveHistory({

      id: crypto.randomUUID(),

      fileName: selectedFile.name,

      fileSize: selectedFile.size,

      algorithm: item.algorithm,

      hash: item.value,

      createdAt:
        new Date().toLocaleString(),

    });


  });



  setLoading(false);

}

  return (
    <section className="py-32">

      <Container>

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Upload Your File
          </h2>

          <p className="mt-4 text-zinc-400">
            Upload any file and generate secure cryptographic hashes instantly.
          </p>

        </div>

        <div className="mt-14">

          <UploadDropzone
            onFileSelected={setSelectedFile}
          />

          {selectedFile && (
            <>
              <FileInfo file={selectedFile} />

              <AlgorithmSelector
                selectedAlgorithms={
                  selectedAlgorithms
                }
                onToggle={toggleAlgorithm}
              />

              <GenerateButton
                loading={loading}
                onGenerate={handleGenerate}
              />

             {results.length > 0 && (

  <div className="mt-5">

    <HashStatistics
      totalHashes={results.length}
      selectedAlgorithms={selectedAlgorithms.length}
      timeTaken={timeTaken}
    />

    <HashResults
      results={results}
    />

  </div>

)}

            </>
          )}

        </div>

      </Container>

    </section>
  );
}