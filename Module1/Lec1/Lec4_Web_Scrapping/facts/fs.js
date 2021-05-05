// In DEV_PP11 folder
// npm init -y
// npm install cheerio
const fs=require("fs");
const cheerio=require("cheerio");

let htmlKadata=fs.readFileSync("./index.html","utf-8");
//console.log(htmlKadata); We have stringified html file

// html file is loaded in cheerio
let myDoc=cheerio.load(htmlKadata);

// document.querySelector("h1")

let h1kadata = myDoc("h1").text();
console.log(h1kadata);

// classes- dot
// ids- #
// ul a (gives all a tags under ul)
// ul>a (descendants gives direct child of ul)