import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";


interface Props {
  title:string;
  onFileSelected:(file:File)=>void;
}


export default function CompareUpload({
  title,
  onFileSelected
}:Props){


const onDrop = useCallback(
(files:File[])=>{

if(files.length>0){
onFileSelected(files[0]);
}

},
[onFileSelected]
);



const {
getRootProps,
getInputProps,
isDragActive
}=useDropzone({
onDrop,
multiple:false
});



return (

<GlassCard
className="
p-10
cursor-pointer
text-center
"
>


<div {...getRootProps()}>

<input {...getInputProps()}/>


<UploadCloud
className="
mx-auto
h-14
w-14
text-indigo-400
"
/>


<h3 className="mt-5 text-xl font-semibold">

{isDragActive
?
"Drop file here"
:
title
}

</h3>


<p className="mt-2 text-zinc-400">
Drag & drop or browse
</p>


</div>


</GlassCard>

);


}