import { textProtoReader } from "./text_proto_reader.ts";
import { readLine } from "./read_line.ts";
import { readString } from "./read_string.ts";
import { readWholeFile } from "./read_file.ts";

const filePath = await Deno.realpath("./enwik9");

try {
  // console.log(Date());
  // await readWholeFile(filePath).finally(() => console.log(Date()));

  // console.log(Date());
  // await readString(filePath).finally(() => console.log(Date()));
  
  // console.log(Date());
  // await textProtoReader(filePath).finally(() => console.log(Date()));

  console.log(Date());
  await readLine(filePath).finally(() => console.log(Date()));

} catch (error) {
  console.log(error);
}
