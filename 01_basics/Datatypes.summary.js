// Primitive

// 7 types : String,Number,Boolean, Null, Undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 32090043152312n

// Reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["IronMan", "BatMan", "MoonKnight"]
let myObj = {
    name: "Akshaansh",
    age: 19,
} 

const myFunction = function(){
    console.log("Hello");   
}

//Console.log(typeof myFunction);

//+++++++++++++++++++++++++++++++++++++++++++++++++++
 
 
// Stack (primitive), Heap (non-primitive)
 
let myYoutubename = "akshtheman"


let anothername = myYoutubename
anothername = "singhakshaansh"

console.log(myYoutubename);
console.log(anothername);