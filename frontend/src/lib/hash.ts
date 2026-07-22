import CryptoJS from "crypto-js";

export interface HashResult {
  algorithm: string;
  value: string;
}

async function digest(
  file: File,
  algorithm: AlgorithmIdentifier
) {
  const buffer = await file.arrayBuffer();

  const hash = await crypto.subtle.digest(
    algorithm,
    buffer
  );

  return [...new Uint8Array(hash)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
}

export async function generateHashes(
  file: File,
  algorithms: string[]
): Promise<HashResult[]> {

  const results: HashResult[] = [];

  const arrayBuffer = await file.arrayBuffer();

  const wordArray =
    CryptoJS.lib.WordArray.create(arrayBuffer);

  for (const algorithm of algorithms) {

    switch (algorithm) {

      case "SHA-256":

        results.push({
          algorithm,
          value: await digest(file, "SHA-256"),
        });

        break;

      case "SHA-384":

        results.push({
          algorithm,
          value: await digest(file, "SHA-384"),
        });

        break;

      case "SHA-512":

        results.push({
          algorithm,
          value: await digest(file, "SHA-512"),
        });

        break;

      case "SHA-1":

        results.push({
          algorithm,
          value: CryptoJS.SHA1(wordArray).toString(),
        });

        break;

      case "MD5":

        results.push({
          algorithm,
          value: CryptoJS.MD5(wordArray).toString(),
        });

        break;

    }

  }

  return results;

}