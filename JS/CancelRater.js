"use strict";
window.addEventListener("load", init, false);

function init (){
    document.getElementById("rate").addEventListener("click",
    function() {
        document.getElementById("output").innerHTML = "";
        document.getElementById("r").innerHTML = "";
        document.getElementById("Rm").innerHTML = "";
        document.getElementById("b").innerHTML = "";
        document.getElementById("Bm").innerHTML = "";

        let input = document.getElementById('input').value;
        //Normal output
        rate(input, "").forEach(alg => {
            document.getElementById("output").innerHTML += alg +"\n"
        });

        //r cancel algs
        rate(input, "r").forEach(alg => {
            document.getElementById("r").innerHTML += alg +"\n"
        });
        
        //R cancel algs
        rate(input, "R").forEach(alg => {
            document.getElementById("Rm").innerHTML += alg +"\n"
        });
        
        //b cancel algs
        rate(input, "b").forEach(alg => {
            document.getElementById("b").innerHTML += alg +"\n"
        });
        
        //B cancel algs
        rate(input, "B").forEach(alg => {
            document.getElementById("Bm").innerHTML += alg +"\n"
        });

    }, false);
}