window.addEventListener("load", init, false);

function init() {
    show();
    document.getElementById("gen").addEventListener("click", show, false);
}

function show() {
    const imageColors = new ImageColors(
        document.getElementById("c5").value,
        document.getElementById("c6").value,
        document.getElementById("c3").value,
        document.getElementById("c2").value,
        document.getElementById("c4").value, 
        document.getElementById("c1").value,
        document.getElementById("backgroundColor").value, 
        document.getElementById("lineColor").value
    );

    const imageSettings = new ImageSettings(
        document.getElementById("lineWidth").value,
        document.getElementById("showFirstLayer").checked
    );

    showScramble(document.getElementById("image"), document.getElementById("alg").value, imageColors, imageSettings);
}
