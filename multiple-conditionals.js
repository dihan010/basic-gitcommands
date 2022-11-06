var isGraduated=true;
var salary=75000;
var cars=1;

if (isGraduated==true && salary>50000 && cars>=1) {
    console.log("Selected")
}
else {
    console.log("Not selected")
}

var isGraduated=false;
var salary=75000;
var cars=1;

if (isGraduated==true || salary>50000 || cars>=1) {
    console.log("Okay")
}
else {
    console.log("Not okay")
}