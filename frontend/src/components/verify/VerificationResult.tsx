import GlassCard from "@/components/ui/GlassCard";
import {
  CheckCircle,
  XCircle,
  ShieldCheck,
} from "lucide-react";


interface Props {
  matched: boolean;
  generated: string;
  expected: string;
  algorithm: string;
}


export default function VerificationResult({
  matched,
  generated,
  expected,
  algorithm,
}: Props) {


  return (

    <GlassCard className="mt-12 p-8">


      <div className="text-center">


        {
          matched ? (

            <CheckCircle
              className="
              mx-auto
              h-20
              w-20
              text-green-400
              "
            />

          ) : (

            <XCircle
              className="
              mx-auto
              h-20
              w-20
              text-red-400
              "
            />

          )
        }



        <h2
          className="
          mt-6
          text-3xl
          font-bold
          "
        >

          {
            matched
              ? "File Verified"
              : "Verification Failed"
          }


        </h2>



        <p className="mt-3 text-zinc-400">

          {
            matched
              ? "The file integrity check passed successfully."
              : "The file hash does not match the expected value."
          }

        </p>


      </div>




      <div className="
        mt-10
        grid
        grid-cols-3
        gap-5
      ">


        <div
          className="
          rounded-xl
          bg-white/5
          p-5
          "
        >

          <p className="text-sm text-zinc-400">
            Algorithm
          </p>

          <p className="mt-2 font-semibold">
            {algorithm}
          </p>

        </div>



        <div
          className="
          rounded-xl
          bg-white/5
          p-5
          "
        >

          <p className="text-sm text-zinc-400">
            Status
          </p>


          <p
            className={
              matched
              ? "mt-2 font-semibold text-green-400"
              : "mt-2 font-semibold text-red-400"
            }
          >

            {
              matched
                ? "MATCH"
                : "MISMATCH"
            }

          </p>

        </div>



        <div
          className="
          rounded-xl
          bg-white/5
          p-5
          "
        >

          <p className="text-sm text-zinc-400">
            Hash Length
          </p>


          <p className="mt-2 font-semibold">

            {generated.length}

            {" "}
            chars

          </p>


        </div>



      </div>





      <div className="mt-10">


        <div className="flex items-center gap-3">

          <ShieldCheck
            className="text-indigo-400"
          />

          <h3 className="text-xl font-semibold">
            Generated Hash
          </h3>

        </div>



        <code
          className="
          mt-4
          block
          break-all
          rounded-xl
          bg-black/20
          p-5
          font-mono
          text-sm
          "
        >

          {generated}

        </code>


      </div>






      <div className="mt-8">


        <h3 className="text-xl font-semibold">
          Expected Hash
        </h3>



        <code
          className="
          mt-4
          block
          break-all
          rounded-xl
          bg-black/20
          p-5
          font-mono
          text-sm
          "
        >

          {expected}

        </code>


      </div>



    </GlassCard>

  );

}