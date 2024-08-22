// const app = require("./app");

// const fs = require("fs").writeFileSync("helloworld.txt", "visca el barca!");
// fs.writeFileSync("file1.txt", "hello world!");

// const arr = [1, 3, 5, 6, 7, 9, 48];
// const filterarr = arr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(filterarr);
// console.log(arr[5]);
// for (let i = 0; i <= arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(app.z());

// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("Hello Delhi!");
//     res.end();
//   })
//   .listen(4500);

// const fs = require("fs");

// const input = process.argv;

// fs.writeFileSync(input[2], input[3]);
// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid response");
// }

const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "files");
// console.log(dirPath);
// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(dirName + `/hola${i}.txt`, `Its a Demo page`);
// }
const readDirCallback = (err, files) => {
  //   console.log(files);
  //   console.log("Error", err);
  if (err) {
    console.log("files doesn't exist");
    return "files doesn't exist";
  }
  files.forEach((items) => {
    console.log("File name is", items);
  });
};
fs.readdir(dirPath, readDirCallback);
