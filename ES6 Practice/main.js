console.log('Hello World');
"use strict"
function MyName() {
    var name="Muntasir Dihan"
}

let poorCountry=["Bangladesh","Sri Lanka"]
let richCountry=[...poorCountry,"America","Australia","Canada"]
console.log(richCountry);

let subject=["Finance","Marketing","HRM"]
let teacher=["BA","RKS","SD"]
teacher.push(subject);
console.log(teacher);

function calculation(a,b,...numbers) {
    let sum=0;
    for (let i of numbers){
        sum=sum+i
    } 
    console.log(sum)
}
calculation(10,20,1,2,3,4)

var name=function(nameValue){
    return nameValue;
}

console.log(name("Dihan"))

function myFun(){
    var name="Muntasir"
    console.log(name);
}
myFun();