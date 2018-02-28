// console.log('Hello!');

//Challenge #1
var numOfSandwitches = 4 * 2;
console.log(numOfSandwitches);

//Challenge #2
var name = "Jeffrey";
var string = "Hello, " + name + " !";
console.log("string:",string);

//Challenge #3

var DNA = "GCAT";
var RNA = DNA.replace("T","U");
console.log("RNA:", RNA);

//Challenge #4
var animal = "alligator";
// var animal = prompt();
var animal = "Dog";
// var animal = "dog";
if(animal.toLowerCase() === "alligator"){
    // console.log("Big");
    // debugger;
}
else{
    console.log("Small");
}

var yarn = "the better string";
var domString = "<h4>" + yarn + "</h4>";

var myDiv = document.getElementById('yarn-holder');

myDiv.innerHTML = domString;


