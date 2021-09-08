let cp = require("child_process");
//console.log("tryiyng to open the calculator");
console.log("tryiyng to open the pepcoding");
//cp.execSync("code");
//cp.execSync("calc");
//cp.execSync("start chrome https:\\www.pepcoding.com");
//console.log("opened pepcoding");
let output = cp.execSync("node abc.js");
console.log("output fire"+output);
