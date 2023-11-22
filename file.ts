// To create and write in a file
// const data = "I love Javascript!";
// await Bun.write("output.txt", data);

// To read file
const file = await Bun.file("output.txt");
console.log(await file.text());
console.log("the size of the file is: " + (await file.size));
console.log(await file.stream());
console.log(await file.arrayBuffer());
