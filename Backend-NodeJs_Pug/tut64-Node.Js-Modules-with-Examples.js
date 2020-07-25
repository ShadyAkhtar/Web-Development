const fs = require("fs");
let text = fs.readFileSync("demo.txt","utf-8");
text = text.replace("example","tutorial");

console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("replace.txt", text);