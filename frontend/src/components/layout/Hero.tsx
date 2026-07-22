import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-36 pb-28"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">

        <Badge>
          🔒 Enterprise-grade File Integrity Platform
        </Badge>

        <h1
          className="
          mt-8
          text-6xl
          md:text-7xl
          font-bold
          tracking-tight
          leading-tight
          "
        >
          Professional{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            File Integrity
          </span>
          <br />
          Verification
        </h1>

        <p
          className="
          mt-8
          text-xl
          text-zinc-400
          leading-9
          max-w-3xl
          mx-auto
          "
        >
          Generate, verify and compare cryptographic hashes using
          enterprise-grade security tools with a modern user experience.
        </p>

        <div className="mt-12 flex justify-center gap-4">

          <Button
            size="lg"
            className="rounded-xl px-8"
          >
            Launch Dashboard
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-xl px-8"
          >
            View GitHub
          </Button>

        </div>

      </div>
    </motion.section>
  );
}