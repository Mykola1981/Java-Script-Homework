console.log("Works");

function GetAge() {
    var age = document.querySelector(".age").value;
    age = parseInt (age);

    if (age <=0 || age >125) {
        console.log("Invalid Child Age!");
    }
    else if (age >0 && age <2){
        console.log("You like a little angel!");
    }
    else if (age ==2 || age <6){
        console.log("You are going to kindergarten!");
    }
    else if (age ==6 || age <18){
        console.log("You are going to school!");
    }
    else if (age == 18 || age < 25) {
        console.log("You are going to university!");
    }
    else if (age == 25 || age < 60) {
        console.log("You are going to work!");
    }
    else if (age == 60 || age < 100) {
        console.log("You are retired!");
    }
    else if (age == 100 || age < 125) {
        console.log("You are centenarian!");
    }
    else {
        console.log("Congratulation! You are most old person in the world!");
    }
}
