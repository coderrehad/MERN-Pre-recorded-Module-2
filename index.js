// Hello JavaScript
console.log("Hello JavaScript")

// Single Line Comment
/*
Double Line Comment
Double Line Comment
*/

// JS Variable
let Foods = "Rice"
var Tools = "Pen"
const About = "Rehad"

// If Else Statement
let age = 18;
if(age >= 18){
    console.log("You are adult")
}else if(age < 18){
    console.log("You are child")
}else{
    console.log("You are robot")
}


// Switch case statement
let marks = 70;
switch (true) {
    case(marks >= 80 && marks <=100):
        console.log("A+")
        break;
    case (marks >= 70 && marks < 80):
        console.log("A")
        break;
    default:
        console.log("Pass")
}

// Basic for loop
var i;
for (i=0; i<10; i=i+1){
    //console.log(`Loop Here ${i}`)
}

// Loop Break & Continue
var a;
for(a=1; a<10; a=a+1){
    if (a === 5){
        //continue;
        break;
    }
    //console.log(`Continue & Break Here ${a}`)
}

// While Loop
let b = 1;
while (b <= 5){
    //console.log("While loop here")
    b=b+1;
}


// Do while loop
let c=1;
do {
    //console.log("Do while loop")
    c=c+1;
}while (c<5)

// JavaScript function
function NewFunc() {
    
}

//Function Parameter & return
function PeraFunc(a) {
    return console.log(a)
}

PeraFunc(5)

//Function Object
let Person = {
    name:"Rehad",
    Age:20,
    City:"Dhaka"
}

console.log(Person.name)

//JavaScript Array
let NewArray = ["Pabna","Rajshahi","Dhaka","Sylhet"];

// For Loop Over Array
let I;
for(I=1;I<6;I=I+1){
    //console.log("For Loop")
}

//For In Loop over Array
for(let item in NewArray){
    //console.log(Array[item])
}

//For In loop over object
let person={
    name:"Rehad",
    city:"pabna",
    age:"20"
}

for(let item in person){
    console.log(person[item])
}

//Array Concat and Array From
let Array1 = ["A","B","C"];
let Array2= ["D","E","F"];

//console.log(Array1.concat(Array2))

let ArrayFrom = "Rehad Hasan"
console.log(Array.from(ArrayFrom[6]))

//Array Filter
let NumArray = [90,20,70,10,30,60,80,40,90]

NumArray.filter(function (item) {
    return item<50
})

//Array Find & FindIndex
NumArray.findIndex(function (item){
    return item<40
})

console.log()

//Array ForEach
NumArray.forEach(function (item) {
    //console.log(item)
})

//Array Includes Method
let result = NumArray.includes(80)
//console.log(result)


//Array indexOf Method
let res = NumArray.indexOf(80)
//console.log(res)

//Array pop, push, reverse
//let result2 = NumArray.reverse()
NumArray.push(100)
NumArray.pop()
NumArray.pop()
NumArray.pop()

//console.log(NumArray)

// Array slice & sort
NumArray.sort().reverse()
NumArray.slice(0,3)


// Array splice
//NumArray.splice(index, deleteCount, item)
NumArray.splice(0, 0, 100)
console.log(NumArray)


// String => charAt, concat, indexOf, lastIndexOf, replace, substr, substring, trim
let country = "Bangladesh";
let country2 = " India"
console.log(
    //country.charAt(5)
    //country.concat(country2)
    //country.indexOf("w")
    //country.lastIndexOf("a")
    //country.replace("desh","deshi")
    //country.substr(0,4)
    //country.substring(6,10)
    //country2.trim().length
)

// JavaScript Date Object
let date = new Date();
//console.log("getSeconds "+date.getSeconds())


// JavaScript Math Object
let Num = 7.5;
//console.log(Math.round(Num))


// JavaScript Number Object
let number = 49.793838;
console.log(
    //Number.parseInt(number)
    number.toString()
)







