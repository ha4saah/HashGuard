import { useState } from "react";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

import CompareUpload from "./CompareUpload";
import ComparisonResult from "./ComparisonResult";

import { compareFiles } from "@/lib/compare";


export default function CompareSection(){


const [fileOne,setFileOne]
=
useState<File|null>(null);


const [fileTwo,setFileTwo]
=
useState<File|null>(null);


const [result,setResult]
=
useState<any>(null);



async function handleCompare(){

if(!fileOne || !fileTwo)
return;


const comparison =
await compareFiles(
fileOne,
fileTwo
);


setResult(comparison);

}



return (

<section className="py-32">

<Container>


<div className="text-center">

<h1 className="text-4xl font-bold">
Compare Files
</h1>


<p className="mt-4 text-zinc-400">
Check whether two files are exactly identical.
</p>


</div>




<div
className="
mt-12
grid
grid-cols-2
gap-8
"
>


<CompareUpload

title="Upload File One"

onFileSelected={setFileOne}

/>


<CompareUpload

title="Upload File Two"

onFileSelected={setFileTwo}

/>


</div>




<Button

onClick={handleCompare}

className="
mt-12
h-14
w-full
rounded-2xl
text-lg
"

>

Compare Files

</Button>





{
result && (

<ComparisonResult

identical={
result.identical
}

fileOneHash={
result.fileOneHash
}

fileTwoHash={
result.fileTwoHash
}

/>

)

}




</Container>


</section>

)

}