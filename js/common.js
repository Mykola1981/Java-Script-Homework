console.log("Works");

var ClientDB = ["ClientInfo"];

function GetData() {
    var name = document.querySelector(".name").value;
    var surname = document.querySelector(".surname").value;
    var amount = parseInt (document.querySelector(".amount").value);
    var period = parseInt (document.querySelector(".period").value);
    var id = document.querySelector(".id").value;
    Validate(name, surname, amount, period, id);
    
}

function Validate(name, surname, amount, period, id) {
       
    if (name.length <3 || name.length >16){
        var error = document.querySelector(".error");
        error.innerHTML = "Invalid name";
    }
    else if (surname.length <3 || surname.length >16){
        var error = document.querySelector(".error");
        error.innerHTML = "Invalid surname";
    }
    else if (amount > 100000 || amount < 1000){
        var error = document.querySelector(".error");
        error.innerHTML = "You can't give this amount!";
    }
    else if (period > 24 || period < 6){
        var error = document.querySelector(".error");
        error.innerHTML = "Wrong period!";
    }
    else if (id.length !== 10){
        var error = document.querySelector(".error");
        error.innerHTML = "Invalid id!";
    }
    else {
        Aftervalidate(name, surname, amount, period, id);
        SaveData(name, surname, amount, period);
    }
   
}

function Aftervalidate(name, surname, amount, period, id) {
    console.log("name = ", name);
    console.log("surname = ", surname);
    console.log("amount = ", amount);
    console.log("period = ", period);
    console.log("id = ", id);

   
    var name1 = document.querySelector(".name1");    
    name1.innerHTML = name;
    var surname1 = document.querySelector(".surname1");    
    surname1.innerHTML = surname;
    var amount1 = document.querySelector(".amount1");    
    amount1.innerHTML =  amount;
    var period1 = document.querySelector(".period1");    
    period1.innerHTML = period;
    
}


function Persent(rand) {
    var rand = Math.floor(Math.random() * 6)+10;
    return function () {
        var rand2 = document.querySelector(".rand2");
        rand2.innerHTML = rand;
    }
    
}
var rand1 = Persent();
rand1();

function SaveData(name, surname, amount, period) {
    ClientDB.push(name);
    ClientDB.push(surname);
    ClientDB.push(amount);
    ClientDB.push(period);
    ClientDB.push("|");
}

function ShowPersonInfo() {
    ClientDB.forEach(function (item, key) {
        console.log(item, " ", key);
    })
    console.log("ClinetDB length", ClientDB.length);
    console.log("==============================>>>>>");
    console.log("New Client Added");
}
