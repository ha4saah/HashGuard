import { useState } from "react";
import { Copy, Check, ShieldCheck } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";

interface Props {
  algorithm: string;
  value: string;
}

export default function HashCard({
  algorithm,
  value,
}: Props) {
  const [copied, setCopied] = useState(false);

  async function copyHash() {
    await navigator.clipboard.writeText(value);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <GlassCard className="p-6">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <ShieldCheck
            className="text-indigo-400"
            size={22}
          />

          <h3 className="text-xl font-semibold">
            {algorithm}
          </h3>

        </div>

        <Button
  variant="outline"
  onClick={copyHash}
  className="
    text-black
    hover:bg-white/10
    hover:text-white
  "
>
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </>
          )}
        </Button>

      </div>

   <div
  className="
    mt-6
    rounded-2xl
    border
    border-white/10
    bg-black/20
    p-5
  "
>
  <code
    className="
      break-all
      font-mono
      text-sm
      leading-7
      text-zinc-200
    "
  >
    {value}
  </code>
</div>

<div className="mt-4 flex items-center gap-2">

<span
className="
rounded-full
bg-indigo-500/20
px-3
py-1
text-xs
text-indigo-300
"
>

Length: {value.length}

</span>

<span
className="
rounded-full
bg-green-500/20
px-3
py-1
text-xs
text-green-300
"
>

Generated Locally

</span>

</div>

    </GlassCard>
  );
}