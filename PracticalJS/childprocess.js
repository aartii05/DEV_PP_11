let cp=require("child_process");
//console.log("trying to open pepcoding")
//cp.execSync("calc")
// cp.execSync("start chrome https:\\www.pepcoding.com");
// console.log("Opened Pep");
let output=cp.execSync("node abc.js");
console.log("Output"+ output);
