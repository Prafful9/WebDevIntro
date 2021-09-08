//fileSystem
//files->create,read update , delete
//open -w, readfileSync ,appendFile, unlinkSync
// writefileSync

let fs = require("fs");
//let buffer = fs.readFileSync("abc.js");
//console.log("bin data",buffer);
//console.log("bin data "+buffer);
//fs.openSync("abc.txt","w");
//fs.writeFileSync("abc.txt","today i am happy");

//no file -> create file and can replace the content of the file 

//fs.writeFileSync("abc.txt","today i am not happy");
//to update

//fs.appendFileSync("abc.txt","why are you not happy");

//folder(directory)
//create read delete
//mkdirSync readdirSync remdirSync

//fs.mkdirSync("MyDirectory");
//fs.writeFileSync("MyDirectory/MyFile.txt","My content");
//let content = fs.readdirSync("MyDirectory");
//console.log(content);
//for(let i = 0; i< content.length; i++){
   // console.log("file",content[i],"is removed");
    //removefile

   // fs.unlinkSync("MyDirectory/"+ content[i]);
//}

//removefolder

//fs.rmdirSync("MyDirectory");
//fs.existSync- if a file exist at a path -> path->true?false
//let doesPathExist = fs.existsSync("abc.txt");
//console.log(doesPathExist);
//doesPathExist = fs.existsSync("abcd.txt");
//console.log(doesPathExist);
//fs.lstatSync->lstateSync
//let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
//let ans = detailsObj.isFile();
//console.log(ans);
//ans = detailsObj.isDirectory();
//console.log(ans);
for(let i = 1; i <= 10; i++){
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\"+"readme.md",` # readme for ${dirPathToMake}`);
}




