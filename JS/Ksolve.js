window.addEventListener('load', init, false);

function init() {
    document.getElementById("left").addEventListener('click', function () {
        copyToClipBoard(left);
    }, false);

    document.getElementById("right").addEventListener('click', function () {
        copyToClipBoard(right);
    }, false);
}


const left = "Name Skewb\n" +
    "Set Corners 8 3\n" +
    "Set Centres 6 1\n" +
    "\n" +
    "Solved\n" +
    "Corners\n" +
    "1 2 3 4 5 6 7 8\n" +
    "Centres\n" +
    "1 2 3 4 5 6\n" +
    "End\n" +
    "\n" +
    "Move F\n" +
    "Corners\n" +
    "1 4 3 5 2 6 7 8\n" +
    "1 2 0 2 2 0 0 0\n" +
    "Centres\n" +
    "2 3 1 4 5 6\n" +
    "End\n" +
    "\n" +
    "Move R\n" +
    "Corners\n" +
    "6 2 1 4 5 3 7 8\n" +
    "2 1 2 0 0 2 0 0\n" +
    "Centres\n" +
    "3 2 5 4 1 6\n" +
    "End\n" +
    "\n" +
    "Move L\n" +
    "Corners\n" +
    "3 2 8 4 5 6 7 1\n" +
    "2 0 2 1 0 0 0 2\n" +
    "Centres\n" +
    "6 1 3 4 5 2\n" +
    "End\n" +
    "\n" +
    "Move B\n" +
    "Corners\n" +
    "1 7 3 2 5 6 4 8\n" +
    "0 2 1 2 0 0 2 0\n" +
    "Centres\n" +
    "5 2 3 4 6 1\n" +
    "End\n" +
    "\n" +
    "Move f\n" +
    "Corners\n" +
    "8 2 3 4 5 1 7 6\n" +
    "2 0 0 0 1 2 0 2\n" +
    "Centres\n" +
    "1 4 2 3 5 6\n" +
    "End\n" +
    "\n" +
    "Move r\n" +
    "Corners\n" +
    "1 5 3 4 7 6 2 8\n" +
    "0 2 0 0 2 1 2 0\n" +
    "Centres\n" +
    "1 2 4 5 3 6\n" +
    "End\n" +
    "\n" +
    "Move l\n" +
    "Corners\n" +
    "1 2 3 7 4 6 5 8\n" +
    "0 0 0 2 2 0 2 1\n" +
    "Centres\n" +
    "1 6 3 2 5 4\n" +
    "End\n" +
    "\n" +
    "Move b\n" +
    "Corners\n" +
    "1 2 6 4 5 8 7 3\n" +
    "0 0 2 0 0 2 1 2\n" +
    "Centres\n" +
    "1 2 3 6 4 5\n" +
    "End\n" +
    "\n" +
    "Move z\n" +
    "Corners\n" +
    "4 3 7 8 1 2 6 5\n" +
    "1 2 1 2 2 1 2 1\n" +
    "Centres\n" +
    "6 2 1 3 5 4\n" +
    "End\n" +
    "\n" +
    "Move y\n" +
    "Corners\n" +
    "2 3 4 1 6 7 8 5\n" +
    "0 0 0 0 0 0 0 0\n" +
    "Centres\n" +
    "1 3 5 4 6 2\n" +
    "End";
    
const right = "Slack " + 1 + "\n" +
"MaxDepth " + 11 + "\n" +
"\n" +
"HTM\n" +
"\n" +
"MoveLimits\n" +
"L* 0\n" +
"l* 0\n" +
"F* 0\n" +
"f* 0\n" +
"z* 0\n" +
"y* 0\n" +
"End\n" +
"\n" +
"ScrambleAlg\n" +
"r' R r R'" + "\n" +
"End\n";