console.log("Works");

var ClientDB = ["ClientInfo"];
var clientarr = [];

function GetData() {
    var name = document.querySelector(".name").value;
    var surname = document.querySelector(".surname").value;
    var amount = parseInt (document.querySelector(".amount").value);
    var period = parseInt (document.querySelector(".period").value);
    var id = document.querySelector(".id").value;
    var ShowPersonInfo = Validate();
    ShowPersonInfo(name, surname, amount, period, id);
}

CurrencyRequest();

function Validate() {

    return function (name, surname, amount, period, id) {
       
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
        var client = new Constructer(name, surname, amount, period);
        clientarr.push(client);
        }
    }   
}

function Aftervalidate(name, surname, amount, period, id) {
   
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
    console.log("New Client Added");
}

function Constructer(name, surname, amount, period){
    this.name = name;
    this.surname = surname;
    this.amount = amount;
    this.period = period;
}

function CurrencyRequest() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            var errStatus = xhr.status;
            var errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        }
        else {
            var data = JSON.parse(xhr.responseText);
            ShowCurrency(data);
        }
    }
}

function ShowCurrency(data) {
    for (var i = 0; i < data.length; i++) {

        var result1 = document.querySelector(".result1");
        var ccy = document.createElement("p");
        ccy.className = "ccy";
        ccy.innerHTML = data[i].ccy;
        result1.appendChild(ccy);

        var result2 = document.querySelector(".result2");
        var base_ccy = document.createElement("p");
        base_ccy.className = "ccy";
        base_ccy.innerHTML = data[i].base_ccy;
        result2.appendChild(base_ccy);

        var result3 = document.querySelector(".result3");
        var buy = document.createElement("p");
        buy.className = "buy";
        buy.innerHTML = data[i].buy;
        result3.appendChild(buy);

        var result4 = document.querySelector(".result4");
        var sale = document.createElement("p");
        sale.className = "sale";
        sale.innerHTML = data[i].sale;
        result4.appendChild(sale);
    }
}