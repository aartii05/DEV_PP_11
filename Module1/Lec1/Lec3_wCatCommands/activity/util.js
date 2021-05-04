let fs= require('fs');

function getFilesData(files){

    let filesData="";
    for(let i=0;i<files.length;i++){
        if(!fs.existsSync(files[i])){
            console.log("One or more files doesnt exist");
            return;
        }
        if(i==files.length-1){
                filesData += fs.readFileSync(files[i]);
        }else{
            filesData += fs.readFileSync(files[i]) + "\r\n";
        }
    }
    return filesData;

}

function applySFlag(f1KaData) {
    // Hey I am F1
    // space
    // space
    // space
    // space
    // space
    // Bye I am F1
    let emptyIncluded = false;
    let removedSpaces = [];
    let splittedData = f1KaData.split("\r\n");
    //   [ 'Hey I am F1', '', '', '', '',  '','Bye I am F1', '' , "Hey m also f1"];
    //   splittedData.length = 9
    // i=6;
  
    for (let i = 0; i < splittedData.length; i++) {
      if (splittedData[i] == "" && emptyIncluded == false) {
        removedSpaces.push(splittedData[i]);
        emptyIncluded = true;
      } else if (splittedData[i] != "") {
        removedSpaces.push(splittedData[i]);
        if (i < splittedData.length - 2) emptyIncluded = false;
      }
    }
    let removedSpacesString = removedSpaces.join("\r\n");
    return removedSpacesString;
    // Hey I am F1
    // space
    // Bye I am F1
  }

function applyBFlag(f1KaData) {
    let count = 1;
    let splittedData = f1KaData.split("\r\n");
    for (let i = 0; i < splittedData.length; i++) {
      if (splittedData[i] != "") {
        splittedData[i] = `${count}. ${splittedData[i]}`;
        // splittedData[i] = count+". "+splittedData[i];
        count++;
      }
    }
    // console.log(splittedData);
    let bFlaggedString = splittedData.join("\n");
    return bFlaggedString;
  }

function applyNFlag(f1KaData){
    let count =1;
    let splittedData = f1KaData.split("\r\n");
    for(let i=0;i<splittedData.length;i++){
      
        splittedData[i]=`${count} . ${splittedData[i]}`;
        count++;
      
    }
    let NflaggedString = splittedData.join('\n');
    return NflaggedString;
  
  }

module.exports.getFilesData = getFilesData;
module.exports.applySFlag = applySFlag;
module.exports.applyBFlag = applyBFlag;
module.exports.applyNFlag = applyNFlag;

