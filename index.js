//method 1: creating and assigning values to an array
let games = ["tennis", "badminton" ,"football", "basket ball"];
console.log(games);

//method 2: create an empty array, and then start assigining values to them as per the index position
let games1 = [];

games1[0] = "tennis";
games1[1] = "foot ball";
games1[2] = "cricket";
games1[5] = "basket ball";

console.log(games1);

//method 3: create an array using array constructor

let games2 = new Array("carrom", "coco", "tennis");
console.log(games2);


let data = ["supriya", "may2", 2022, "prepbytes", true];
console.log(data);

//push - adds value at the last position only.

games.push("cricket");
games.push(6);
console.log(games);

//pop help us to remove the value from the last position.

games.pop();
console.log(games);

//shift - removes from the first position and unshift add on the first position 

games1.shift();
console.log(games1);

games1.unshift("volly ball");
console.log(games1);

//indexof
//lastindexof 

let num1 = [1,2,3,4,5,6,6];
let num2 = [7,8,9,10];

console.log(num1.indexOf(5));
console.log(num1.lastIndexOf(6));


//concat/join do not changes the original array
console.log(num1.concat(num2));
console.log(num1.join(" "));

//reverse
console.log(num1.reverse());

//sort
let num3 = [9,6,7,4,5,3,1,2];
// console.log(num3.sort());

//using sort followed by reverse give u values arranged in descending order.

console.log(games.sort().reverse());


//splice 
//first val gives the index and second val gives the num of values to be removed

// num3.splice(3,1,77,65);
// console.log(num3);

//slice - starting index is inclusive and the last index is exclusive(not included).

console.log(num3.slice(1,7));