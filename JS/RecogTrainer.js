window.addEventListener("load", init, false);

let cases = ["z", "h", "u", "u", "u", "t", "c", "c", "o", "o", "s", "s", "x", "x", "w", "w"];
let casesNumPad = ["3", "2", "1", "1", "1", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9"];
let algs = ["r' B r' B' z' r' R' r z B r'", "r' R r R' z2 R r' R' r z2 r' R r R'", "r' R r R' z2 r' R r R' z2", "b' r' R r R' z2 r' R r z2",
    "r' R' r z2 R r' R' r b z2", "r' R r R' r' R r R' r' R r R'", "R r R' B' r' B' r B", "r' R' r b z r B r' z' b'", "b r' R r R' z2 r' R r R",
    "B' r' R r R' z2 r' R r R' r", "B' r' R r R' r B' r' R r R' r", "r B r' R r' R' r B r' R r' R'", "R' r B' r' R r R' r B' r' R r",
    "r B' r' R r R' r z2 r' R r' R' r z2", "r' R r R' b' R r' R r R' b' R", "r B' r' R r R' r B' r' R r R'"];
let rotations =  ["", "y", "y'", "y2", "z", "z'", "z2", "x", "x'", "x2" ];
let corners = ["", "r' R r R' r' R r R' ", "z r' R r R' r' R r R' z' ", "z2 r' R r R' r' R r R' z2 ", "z' r' R r R' r' R r R' z ",
    "r' R r R' r' R r R' z' r' R r R' r' R r R' z ", "z r' R r R' r' R r R' z' r' R r R' r' R r R' z2 ", "z2 r' R r R' r' R r R' z' r' R r R' r' R r R' z' ",
    "z' r' R r R' r' R r R' z' r' R r R' r' R r R' "];
let mode = "O";
let scramble = ""
let index = ""

const settings = new ImageSettings();
const colors = new ImageColors()

function init() {
    oScramble()
    window.addEventListener("keydown", key, false);
}

function key(event) {
    let key = event.key;
    if (key === " "||key === "Enter"){
        fullScramble();
    }
    else if (key === cases[index]||key == casesNumPad[index]||key === "+"){
        if(mode === "O"){
            oScramble();
        }
        else if (mode === "U") {
            uScramble();
        }
        else if (mode ==="T"){
            tScramble();
        }
    }
    else if (key == 0){
        if(mode === "O"){
            mode = "U";
            uScramble()
        }
        else if(mode === "U"){
            mode = "T";
            tScramble();
        }
        else if (mode ==="T"){
            mode = "O";
            oScramble();
        }
    }
}

function generateRandomScramble() {
    index = Math.floor(Math.random() * 16);
    preRotation = Math.floor(Math.random() * 10);
    afterRotation = Math.floor(Math.random() * 4);
    corner = Math.floor(Math.random() * 0);
    scramble = rotations[preRotation] + " x' " + corners[corner] + algs[index] + " x' " + rotations[afterRotation]
    return scramble;
}

function newScramble() {
    showScramble(document.getElementById("image"), generateRandomScramble(), colors, settings)
}

function fullScramble() {
    settings.hideUCenter = false;
    settings.hideBRCenter = false;
    settings.hideBLCenter = false;
    settings.hideFRCenter = false;
    settings.hideFLCenter = false; 
    showScramble(document.getElementById("image"), scramble, colors, settings)
}

function uScramble() {
    settings.hideUCenter = true;
    settings.hideBRCenter = true;
    settings.hideBLCenter = false;
    settings.hideFRCenter = false;
    settings.hideFLCenter = false;
    newScramble()
}

function oScramble() {
    settings.hideUCenter = false;
    settings.hideBRCenter = true;
    settings.hideBLCenter = true;
    settings.hideFRCenter = false;
    settings.hideFLCenter = false;
    newScramble()
}

function tScramble() {
    settings.hideUCenter = false;
    settings.hideBRCenter = false;
    settings.hideBLCenter = true;
    settings.hideFRCenter = true;
    settings.hideFLCenter = false;
    newScramble()
}