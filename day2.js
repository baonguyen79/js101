// var day = "Friday";
// switch (day)
// {
// 	case "Monday": 
// 		console.log("Booooo");
// 		break;
// 	case "Friday":
// 		console.log("Party");
// 		break;
// 	default:
// 		console.log("not Monday");
// }

//Array

var fruit = ["cherries", "apples", "bananas"];
var fruitString = fruit.join(" cats ");
console.log("fruitString", fruitString);


var catColors = 'green,red,yellow,black';
var catColorsArray = catColors.split(",");
console.log("catColorsArray", catColorsArray);


var reverseFruit = fruit.reverse();
console.log("reverseFruit", reverseFruit);

var alphaFruit = fruit.sort();
console.log("alphaFruit", alphaFruit);

var nums = [9,6,8,2,4,11,66];  //2,4,6,8,9,11,66
var numSort = nums.sort(
	function(a,b){
		return a-b;
	}
);
console.log("numSort", numSort);

var mixedCrap = ["r", "m", 33,9, 3];
console.log("????",mixedCrap.sort());

var animals = ["cats", "turtles", "fish", "bears", "tigers"];
console.log("fish index", animals.indexOf("fish"));

var animals2 = animals.slice(2,4);
console.log("animals2", animals2);

animals.splice(1, 1);
console.log("no turtles", animals);


var colors = ["red", "blue", "gold", "pink", "orange"];

//sort, reverse, make a string
var finalAnswer = colors.sort().reverse().join(" cat ");

console.log("finalAnswer", finalAnswer);
//red cat pink cat orange cat gold cat blue







