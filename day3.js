console.log("day3");

//*** Object ***//
//Key : value paired 
var myCat = {
	tail: "long",
	age: 29,
	color: "blue",
	friends: ["zoe", "callan", "laurent"]
}

console.log ("Age: ", myCat.age);
console.log ("Color: ", myCat["color"]);

for(var myKey in myCat){
	console.log("myKey", myCat);
	console.log("values", myCat[myKey]);
}

//add to object
myCat.owner = "zoe";
console.log("after:", myCat);