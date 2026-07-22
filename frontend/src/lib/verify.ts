import {
  generateHashes,
  type HashResult,
} from "./hash";


export async function verifyHash(
  file: File,
  expectedHash: string,
  algorithm: string
) {

  const results: HashResult[] =
    await generateHashes(
      file,
      [algorithm]
    );


  const generated =
    results[0].value;


  return {
    matched:
      generated.toLowerCase() ===
      expectedHash.trim().toLowerCase(),

    generated,
    expected:
      expectedHash.trim(),
    algorithm,
  };

}