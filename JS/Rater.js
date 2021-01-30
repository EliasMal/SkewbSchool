"use strict";
window.addEventListener("load", init, false);

function init (){
    document.getElementById("rate").addEventListener("click",
    function() {
        document.getElementById("outputField").innerHTML = "";

        rate(document.getElementById('input').value).forEach( alg => {
            document.getElementById("outputField").innerHTML += alg +"\n"
        });
    }, false);
}