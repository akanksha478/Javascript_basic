console.log("2">1);
console.log("02">1);
// it is generally advicce same type of data type
console.log(null>0)
console.log(null==0);
console.log(null>=0);
// === it check value and datatypes

// objects,array
const heros=["srk","vrk"]
let myObj={
    name:"ai",
    age:22,
}    //object
const myfunction=function()
{

}
console.log(typeof heros)
// stack memory is use in primitive type that mean we get copy of value
// heap memory is use for non-primitive type they store reference

let myName="akan"
let another=myName     //akan
another="priya"

console.log(myName);
console.log(another);

let user={
    email:"user@gmail.com",
    upi:"h133"
}
let usertwo=user  // we are getting referebce of user
usertwo.email="akankash@gmail.com"

console.log(user);
console.log(usertwo);


