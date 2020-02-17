const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
  console.log(Date());
  const fileStream = fs.createReadStream("./enwik9");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let counter = 0;
  for await (const line of rl) {
    counter++;
  }
  console.log(Date());
  return counter;
}

processLineByLine()
  .then(e => console.log(`File: node.js,`, `Line: 21 => `, e))
  .catch(e => console.log(`File: node.js,`, `Line: 22 => `, e));
