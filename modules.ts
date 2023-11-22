// import path from "path";
// you can use the import method or the require method
const path = require("path");

const filepath = path.join("foo", "bar", "image.png");
const filename = path.basename(filepath);

console.log(filename);
