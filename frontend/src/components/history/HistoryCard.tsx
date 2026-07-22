import GlassCard from "@/components/ui/GlassCard";


interface Props{

fileName:string;

algorithm:string;

hash:string;

date:string;

}



export default function HistoryCard({

fileName,

algorithm,

hash,

date

}:Props){


return (

<GlassCard className="p-6">


<div className="flex justify-between">


<div>

<h3 className="font-semibold">
{fileName}
</h3>


<p className="text-sm text-zinc-400 mt-2">
{algorithm}
</p>


</div>


<p className="text-sm text-zinc-400">
{date}
</p>


</div>



<code
className="
mt-5
block
break-all
rounded-xl
bg-black/20
p-4
text-sm
font-mono
"
>

{hash}

</code>



</GlassCard>

);

}