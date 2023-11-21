
function makeBadge(str) {
    if (str !== "None")
    return `[![License: ${str}](https://img.shields.io/badge/License-${str}-brightgreen.svg)](https://opensource.org/licenses/${str}`
}

function makeUsuageBullets(arr) {
 console.log("making bullets");
 let str = "";
 arr.forEach((s)=> {
    str = str.concat(`\n *`,s);

 });
 console.log("made bullets:", str);
 return str;
}
