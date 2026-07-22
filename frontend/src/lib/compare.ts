import { generateHashes } from "./hash";


export async function compareFiles(
  fileOne: File,
  fileTwo: File
) {

  const hashOne =
    await generateHashes(
      fileOne,
      ["SHA-256"]
    );


  const hashTwo =
    await generateHashes(
      fileTwo,
      ["SHA-256"]
    );


  const firstHash =
    hashOne[0].value;


  const secondHash =
    hashTwo[0].value;



  return {

    identical:
      firstHash === secondHash,

    fileOneHash:
      firstHash,

    fileTwoHash:
      secondHash,

  };

}