"use strict";
window.addEventListener("load", init, false);

function init() {
    document.getElementById("rotate").addEventListener('click', function() {
        let alg = document.getElementById("alg").value;
        let rotation = document.getElementById("rotation").value;
        let output = rotate(alg, rotation);

        document.getElementById("inputAlg").innerHTML = "Input: " + alg;
        document.getElementById("outputAlg").innerHTML = output;

    });
    
    document.getElementById("copy").addEventListener('click', function() {
        copyToClipBoard(document.getElementById("outputAlg").innerText);
    })
}
