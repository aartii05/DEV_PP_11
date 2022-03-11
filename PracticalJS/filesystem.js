let fs=require("fs");
// let buffer=fs.readFileSync("abc.js");
// console.log("bin data "+buffer);

// // file-create,delete,update,read
// //fs.openSync("sample.txt","w");
// // no file then creates file,if file exist then replaces the content
// //fs.writeFileSync("sample.txt","Hello World");
// // Update
// fs.appendFileSync("sample.txt"," Heyyaa Pune");

//fs.mkdirSync("myfolder");
//fs.writeFileSync("myfolder/myfile.txt","My content");

// let content=fs.readdirSync("myfolder");
// console.log(content);
// for(let i=0;i<content.length;i++){
//     console.log("file",content[i],"is removed");
//     fs.unlinkSync("myfolder/"+content[i]); // to remove file

// }
// fs.rmdirSync("myfolder"); // to remove folder
// fs.existsSync() - If a file exist at a path -> true/false
// fs.lstatSync() - to check path is of file/folder

// let doesPathExist=fs.existsSync("sample.txt");
// console.log(doesPathExist);
let detailsObj=fs.lstatSync(__dirname+ "\\filesystem.js");
let ans=detailsObj.isFile();
ans=detailsObj.isDirectory();
console.log(ans);