import { BufReader } from "https://deno.land/std/io/bufio.ts";

export async function readLine(filename: string) {
  const file = await Deno.open(filename);
  const bufReader = new BufReader(file);
  console.log("Reading data...");
  let line: string | any;
  let lineCount: number = 0;
  while ((line = await bufReader.readLine()) != Deno.EOF) {
    lineCount++;
    // do something with `line`.
  }
  file.close();
  console.log(`${lineCount} lines read.`);
}
