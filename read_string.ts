import { BufReader } from "https://deno.land/std/io/bufio.ts";

export async function readString(filename: string) {
  const file = await Deno.open(filename);
  const bufReader = new BufReader(file);
  console.log("Reading data...");
  let line: string | any;
  let lineCount: number = 0;
  while (await bufReader.readString("\n") != Deno.EOF) {
    lineCount++;  
  }
  file.close();
  console.log(`${lineCount} lines read.`);
}