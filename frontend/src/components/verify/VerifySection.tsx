import { useState } from "react";

import Container from "@/components/common/Container";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";

import VerifyUpload from "./VerifyUpload";
import VerificationResult from "./VerificationResult";

import AlgorithmSelector from "@/components/hash/AlgorithmSelector";

import { verifyHash } from "@/lib/verify";


export default function VerifySection() {

  const [file, setFile] =
    useState<File | null>(null);


  const [algorithm, setAlgorithm] =
    useState<string[]>([
      "SHA-256"
    ]);


  const [expectedHash, setExpectedHash] =
    useState("");


  const [result, setResult] =
    useState<{
      matched: boolean;
      generated: string;
      expected: string;
      algorithm: string;
    } | null>(null);


  const [loading, setLoading] =
    useState(false);



  const toggleAlgorithm = (
    value: string
  ) => {

    setAlgorithm([value]);

  };



  async function handleVerify() {

    if (!file || !expectedHash) {
      return;
    }


    setLoading(true);


    const verification =
      await verifyHash(
        file,
        expectedHash,
        algorithm[0]
      );


    setResult(
      verification
    );


    setLoading(false);

  }



  return (

    <section className="py-32">

      <Container>


        <div className="text-center">


          <h1 className="text-4xl font-bold">
            Verify File Integrity
          </h1>


          <p className="mt-4 text-zinc-400">
            Compare your file hash against an expected value.
          </p>


        </div>



        <VerifyUpload
          onFileSelected={setFile}
        />



        <GlassCard className="mt-8 p-6">


          <h2 className="text-xl font-semibold">
            Expected Hash
          </h2>



          <input

            value={expectedHash}

            onChange={(e) =>
              setExpectedHash(
                e.target.value
              )
            }

            placeholder="Paste expected hash..."

            className="
              mt-5
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-4
              outline-none
              focus:border-indigo-400
            "

          />


        </GlassCard>




        <AlgorithmSelector

          selectedAlgorithms={
            algorithm
          }

          onToggle={
            toggleAlgorithm
          }

        />




        <Button

          onClick={handleVerify}

          disabled={loading}

          className="
            mt-10
            h-14
            w-full
            rounded-2xl
            text-lg
          "

        >

          {
            loading
              ? "Verifying..."
              : "Verify File"
          }


        </Button>




        {
          result && (

            <VerificationResult

              matched={
                result.matched
              }

              generated={
                result.generated
              }

              expected={
                result.expected
              }

              algorithm={
                result.algorithm
              }

            />

          )
        }



      </Container>


    </section>

  );

}