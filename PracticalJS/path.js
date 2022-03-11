let path=require("path");
// for(let i=0;i<=10;i++){
//     let dirpathToMake=`Lecture- ${i}`;
//     fs.mkdirSync(dirpathToMake);
//     fs.writeFileSync(dirpathToMake + "\\"+"readme.md",`# readme for ${dirpathToMake}`);
    
// }
let extensioname=path.extname(path.join(__dirname,"abc.js"));
console.log(extensioname);
let name=path.basename(__dirname);
console.log(name);
name=path.basename(path.join(__dirname,"abc.js"));
console.log(name);
