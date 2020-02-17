export async function readWholeFile(filePath: string) {
  const decoder = new TextDecoder("utf-8");

  const fileBinaryData = await Deno.readFile(filePath);

  const fileText = decoder.decode(fileBinaryData);

  return fileText;
}
