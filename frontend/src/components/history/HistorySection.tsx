import Container from "@/components/common/Container";
import { getHistory } from "@/store/history";

import HistoryCard from "./HistoryCard";


export default function HistorySection(){


const history =
getHistory();



return (

<section className="py-32">


<Container>


<div className="text-center">


<h1 className="text-4xl font-bold">
Hash History
</h1>


<p className="mt-4 text-zinc-400">
Previously generated hashes.
</p>


</div>




<div className="mt-12 space-y-6">


{
history.length === 0 ? (

<p className="text-center text-zinc-400">
No history available.
</p>

)

:

history.map(item=>(


<HistoryCard

key={item.id}

fileName={item.fileName}

algorithm={item.algorithm}

hash={item.hash}

date={item.createdAt}

/>


))

}


</div>



</Container>


</section>

);

}