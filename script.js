// Create a day of the week translator using **IF..ELSE** statement. <br>
// Your program should read a variable called “dayNumber”, and print (with console.log) the corresponding day of the week<br>
// where **0 is Sunday and 6 is Saturday.**<br>
// For any other values, your program should print “Invalid day number”.<br>
// Test your program for all week days values.
let dayNumber = 8
if(dayNumber===1){
    console.log('Sunday')
}else if(dayNumber===2){
    console.log('Monday')
}else if(dayNumber===3){
    console.log('Tuesday')
}else if(dayNumber===4){
    console.log('Wednesday')
}else if(dayNumber===5){
    console.log('Thursday')
}else if(dayNumber===6){
    console.log('Friday')
}else if(dayNumber===7){
    console.log('Saturday')
}else {
    console.log('Invalid day number')
}