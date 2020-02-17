import { BufReader } from "https://deno.land/std@v0.33.0/io/mod.ts";
import { TextProtoReader } from "https://deno.land/std@v0.33.0/textproto/mod.ts";

export async function textProtoReader(filename:string) {
  const r: Deno.Reader = await Deno.open(filename)
  const reader = new TextProtoReader(BufReader.create(r));
  console.log("Reading data...");

  let lineCount = 0;
  while (true) {
    let line = await reader.readLine();
    if (line === Deno.EOF) break;
    // do something with `line`
    lineCount += 1;
  }

  console.log(`${lineCount} lines read.`);
}
