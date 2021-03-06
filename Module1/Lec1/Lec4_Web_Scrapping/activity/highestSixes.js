let matchlink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");

request(matchlink , function(error,response,data){
    getHighestSixes(data);
})

function getHighestSixes(data){

    let highestSixes;
    let batsmanname;
    let strikeRate;
    let myDocument = cheerio.load(data);
    let bothBatsmanTable = myDocument(".table.batsman");
   // console.log(bothBatsmanTable); 

   for(let i=0;i<bothBatsmanTable.length;i++){
       let oneBatsmanTable = myDocument(bothBatsmanTable[i]);
       let allTrs = oneBatsmanTable.find("tbody tr");

       for(let j=0;j<oneBatsmanTable.length;j++){

        let allTds = myDocument(allTrs[j]).find("td");

        if (allTds.length>1){
            // inside valid Tr
            if(i==0 && j==0){
                highestSixes=myDocument(allTds[6]).text();
                strikeRate=myDocument(allTds[7]).text();
                batsmanName = myDocument(allTds[0]).text();
            

            }

            else{

                let currentSixes = myDocument(allTds[6]).text();
                let currentStrikeRate = myDocument(allTds[7]).text();
                if(currentSixes>highestSixes || (currentSixes==highestSixes && currentStrikeRate>strikeRate ) ){
                    batsmanname=myDocument(allTds[0]).text();
                    highestSixes=currentSixes;
                    strikeRate=currentStrikeRate;
                }

            }
        }

       }
   }
   console.log("Batsman Name="+batsmanname);
   console.log("Strikerate="+strikeRate);
   console.log("Sixes="+highestSixes);
}