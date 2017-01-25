var element = document.getElementById("sonnet"); 

var sonnet = element.innerHTML;   

console.log(sonnet.indexOf("orphans"));

console.log(sonnet.length);

var newSonnet = sonnet.replace("winter", "yuletide");

newSonnet = newSonnet.replace(/the /gi, "a large ");

element.innerHTML = newSonnet;
