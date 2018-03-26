// scripts.js 

function pole() {
    var a = document.getElementById("a").value;
    var h = document.getElementById("h").value;
    var x = 2;
    var wzor = a * h / x;

    var napis = document.getElementById("wynik").innerHTML = wzor;

}