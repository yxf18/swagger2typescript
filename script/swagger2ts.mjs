import { generate } from "@axetroy/swagger2ts";
import { writeFile } from "fs/promises";
const output = await generate("./src/swagger.json");
// const output = await generate("https://example.com/swagger.json");

console.log(output);
writeFile("./src/api.ts", output);