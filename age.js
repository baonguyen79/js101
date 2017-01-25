
// 1. How many hours are in a year
// 2. How many minutes are in a decade
// 3. How many seconds old they are
// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young" (edited)

var secondsInMinute = 60
var minutesInHour = 60
var hourADay = 24
var dayInYear = 365

var hourInYear = hourADay * dayInYear
console.log("hours in year: " , hourInYear)

var minutesInDecade = minutesInHour * hourInYear * 10
console.log("minutes in decade" , minutesInDecade)

var secondOld = secondsInMinute * dayInYear * hourADay * minutesInHour
console.log("second old" , secondOld)

var age = 39
if (age > 40)
	console.log("I'm old")
else
	console.log("I'm young")


