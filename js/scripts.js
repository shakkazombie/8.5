// scripts.js 

function pole() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var h = document.getElementById("h").value;
    var wzor = a * b / h;

    var napis = document.getElementById("wynik").innerHTML = wzor;

}