window.addEventListener("load", init, false);

function init() {
    show();
    const inputFields = document.getElementsByTagName('input');
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener("change", function() {
            show();
        });
        
    }
    document.getElementById("download").addEventListener("click", function() {
        canvasToImage(document.getElementById("image"), document.getElementById("filename").value)
    }, false)

    document.getElementById("enable-settings").addEventListener("change", function() {
        const settings = document.getElementById("settings")
        if (settings.style.display === "none") {
            settings.style.display = "block";
        }
        else {
            settings.style.display = "none";
        }
    })
    window.addEventListener('resize', show);
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
        document.getElementById("showFirstLayer").checked,
        getCanvasSize()
    );
        
    console.log(imageColors);
    showScramble(document.getElementById("image"), document.getElementById("alg").value, imageColors, imageSettings);
    
}

function getCanvasSize(){
    const screenWidth = window.innerWidth;
    if (screenWidth > 1700) {
        return 1.5;
    }
    else if (screenWidth > 1000) {
        return 1.2;
    }
    else if (screenWidth > 770) {
        return 1;
    }
    else if (screenWidth > 550) {
        return 0.9
    }
    return 0.8;
}
