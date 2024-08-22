const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

//To create a file
// fs.writeFileSync(filePath, "Hello world zeuz!");

//To read a file
// fs.readFile(filePath, "utf8", (err, items) => {
//   console.log(items);
// });

//To update/append the file
// fs.appendFile(filePath, " and we live under the blessings of Sun", (err) => {
//   if (!err) console.log("File has been updated successfully");
// });

//To rename a file
// fs.rename(filePath, `${dirPath}/fal.txt`, (err) => {
//   if (!err) console.log("File has been renamed succesfully");
// });

//To delete a file
// fs.unlinkSync(`${dirPath}/fal.txt`);
