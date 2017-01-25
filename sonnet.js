var element = document.getElementById("sonnet"); 

var sonnet = element.innerHTML;   

console.log("sonnet ", sonnet);

console.log(sonnet.indexOf("orphans"));

console.log(sonnet.length);

var newSonnet = sonnet.replace("winter", "yuletide");

console.log("Replace winter with yuletide" , newSonnet);

newSonnet = newSonnet.replace(/the /gi, "a large ");

console.log("Replace all the with a large", newSonnet);

element.innerHTML = newSonnet;

console.log("Replace div content",element);
