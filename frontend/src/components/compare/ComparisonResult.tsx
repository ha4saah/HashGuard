import GlassCard from "@/components/ui/GlassCard";
import {
  CheckCircle,
  XCircle
} from "lucide-react";


interface Props {

  identical:boolean;

  fileOneHash:string;

  fileTwoHash:string;

}


export default function ComparisonResult({

identical,

fileOneHash,

fileTwoHash

}:Props){


return (

<GlassCard className="mt-12 p-8">


<div className="text-center">


{
identical ?

<CheckCircle
className="
mx-auto
h-20
w-20
text-green-400
"
/>

:

<XCircle
className="
mx-auto
h-20
w-20
text-red-400
"
/>

}



<h2 className="mt-5 text-3xl font-bold">

{
identical
?
"Files Are Identical"
:
"Files Are Different"
}

</h2>



<p className="mt-3 text-zinc-400">

{
identical
?
"Both files produced the same SHA-256 hash."
:
"The hashes do not match."
}

</p>


</div>




<div className="mt-10">


<h3 className="font-semibold">
File One Hash
</h3>


<code
className="
mt-3
block
break-all
rounded-xl
bg-black/20
p-5
font-mono
text-sm
"
>

{fileOneHash}

</code>


</div>



<div className="mt-8">


<h3 className="font-semibold">
File Two Hash
</h3>


<code
className="
mt-3
block
break-all
rounded-xl
bg-black/20
p-5
font-mono
text-sm
"
>

{fileTwoHash}

</code>


</div>



</GlassCard>

)

}