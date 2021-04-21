let hidePieces = false;

function showScramble(canvas, scramble, imageColors = new ImageColors(), imageSettings = new ImageSettings()) {
    const stickercol = ["o", "o", "o", "o", "o", "g", "g", "g", "g", "g", "y", "y", "y", "y", "y",
        "w", "w", "w", "w", "w", "r", "r", "r", "r", "r", "b", "b", "b", "b", "b"];
        

    var scrsplit = scramble.split(" ");
    for (var i = 0; i < scrsplit.length; i++) {
        if (scrsplit[i] === "x") {
            fourswap(stickercol, 15, 25, 10, 5);
            fourswap(stickercol, 24, 21, 22, 23);
            fourswap(stickercol, 2, 1, 4, 3);
            fourswap(stickercol, 17, 29, 12, 7);
            fourswap(stickercol, 6, 16, 28, 11);
            fourswap(stickercol, 9, 19, 27, 14);
            fourswap(stickercol, 18, 26, 13, 8);
        } else if (scrsplit[i] === "x'") {
            fourswap(stickercol, 5, 10, 25, 15);
            fourswap(stickercol, 23, 22, 21, 24);
            fourswap(stickercol, 3, 4, 1, 2);
            fourswap(stickercol, 7, 12, 29, 17);
            fourswap(stickercol, 11, 28, 16, 6);
            fourswap(stickercol, 14, 27, 19, 9);
            fourswap(stickercol, 8, 13, 26, 18);
        } else if (scrsplit[i] === "x2") {
            fourswap(stickercol, 5, 10, 25, 15);
            fourswap(stickercol, 23, 22, 21, 24);
            fourswap(stickercol, 3, 4, 1, 2);
            fourswap(stickercol, 7, 12, 29, 17);
            fourswap(stickercol, 11, 28, 16, 6);
            fourswap(stickercol, 14, 27, 19, 9);
            fourswap(stickercol, 8, 13, 26, 18);
            fourswap(stickercol, 5, 10, 25, 15);
            fourswap(stickercol, 23, 22, 21, 24);
            fourswap(stickercol, 3, 4, 1, 2);
            fourswap(stickercol, 7, 12, 29, 17);
            fourswap(stickercol, 11, 28, 16, 6);
            fourswap(stickercol, 14, 27, 19, 9);
            fourswap(stickercol, 8, 13, 26, 18);
        } else if (scrsplit[i] === "y") {
            fourswap(stickercol, 19, 16, 17, 18);
            fourswap(stickercol, 14, 13, 12, 11);
            fourswap(stickercol, 25, 20, 5, 0);
            fourswap(stickercol, 21, 6, 1, 26);
            fourswap(stickercol, 29, 24, 9, 4);
            fourswap(stickercol, 23, 8, 3, 28);
            fourswap(stickercol, 27, 22, 7, 2);
        } else if (scrsplit[i] === "y'") {
            fourswap(stickercol, 18, 17, 16, 19);
            fourswap(stickercol, 11, 12, 13, 14);
            fourswap(stickercol, 0, 5, 20, 25);
            fourswap(stickercol, 26, 1, 6, 21);
            fourswap(stickercol, 4, 9, 24, 29);
            fourswap(stickercol, 28, 3, 8, 23);
            fourswap(stickercol, 2, 7, 22, 27);
        } else if (scrsplit[i] === "y'") {
            fourswap(stickercol, 18, 17, 16, 19);
            fourswap(stickercol, 11, 12, 13, 14);
            fourswap(stickercol, 0, 5, 20, 25);
            fourswap(stickercol, 26, 1, 6, 21);
            fourswap(stickercol, 4, 9, 24, 29);
            fourswap(stickercol, 28, 3, 8, 23);
            fourswap(stickercol, 2, 7, 22, 27);
            fourswap(stickercol, 18, 17, 16, 19);
            fourswap(stickercol, 11, 12, 13, 14);
            fourswap(stickercol, 0, 5, 20, 25);
            fourswap(stickercol, 26, 1, 6, 21);
            fourswap(stickercol, 4, 9, 24, 29);
            fourswap(stickercol, 28, 3, 8, 23);
            fourswap(stickercol, 2, 7, 22, 27);
        } else if (scrsplit[i] === "z") {
            fourswap(stickercol, 15, 20, 10, 0);
            fourswap(stickercol, 9, 6, 7, 8);
            fourswap(stickercol, 29, 28, 27, 26);
            fourswap(stickercol, 18, 24, 11, 2);
            fourswap(stickercol, 17, 23, 14, 1);
            fourswap(stickercol, 19, 21, 12, 3);
            fourswap(stickercol, 16, 22, 13, 4);
        } else if (scrsplit[i] === "z'") {
            fourswap(stickercol, 0, 10, 20, 15);
            fourswap(stickercol, 8, 7, 6, 9);
            fourswap(stickercol, 26, 27, 28, 29);
            fourswap(stickercol, 2, 11, 24, 18);
            fourswap(stickercol, 1, 14, 23, 17);
            fourswap(stickercol, 3, 12, 21, 19);
            fourswap(stickercol, 4, 13, 22, 16);
        } else if (scrsplit[i] === "z2") {
            fourswap(stickercol, 0, 10, 20, 15);
            fourswap(stickercol, 8, 7, 6, 9);
            fourswap(stickercol, 26, 27, 28, 29);
            fourswap(stickercol, 2, 11, 24, 18);
            fourswap(stickercol, 1, 14, 23, 17);
            fourswap(stickercol, 3, 12, 21, 19);
            fourswap(stickercol, 4, 13, 22, 16);
            fourswap(stickercol, 0, 10, 20, 15);
            fourswap(stickercol, 8, 7, 6, 9);
            fourswap(stickercol, 26, 27, 28, 29);
            fourswap(stickercol, 2, 11, 24, 18);
            fourswap(stickercol, 1, 14, 23, 17);
            fourswap(stickercol, 3, 12, 21, 19);
            fourswap(stickercol, 4, 13, 22, 16);
        } else if (scrsplit[i] === "r" || scrsplit[i] === "r'2") {
            threeswap(stickercol, 3, 7, 16);
            threeswap(stickercol, 10, 20, 25);
            threeswap(stickercol, 11, 21, 27);
            threeswap(stickercol, 12, 22, 28);
            threeswap(stickercol, 13, 23, 29);
        } else if (scrsplit[i] === "r'" || scrsplit[i] === "r2") {
            threeswap(stickercol, 16, 7, 3);
            threeswap(stickercol, 25, 20, 10);
            threeswap(stickercol, 27, 21, 11);
            threeswap(stickercol, 28, 22, 12);
            threeswap(stickercol, 29, 23, 13);
        } else if (scrsplit[i] === "R" || scrsplit[i] === "R'2") {
            threeswap(stickercol, 15, 25, 20);
            threeswap(stickercol, 16, 29, 21);
            threeswap(stickercol, 17, 26, 22);
            threeswap(stickercol, 24, 19, 28);
            threeswap(stickercol, 6, 4, 12);
        } else if (scrsplit[i] === "R'" || scrsplit[i] === "R2") {
            threeswap(stickercol, 20, 25, 15);
            threeswap(stickercol, 21, 29, 16);
            threeswap(stickercol, 22, 26, 17);
            threeswap(stickercol, 28, 19, 24);
            threeswap(stickercol, 12, 4, 6);
        } else if (scrsplit[i] === "l" || scrsplit[i] === "L" || scrsplit[i] === "l'2" || scrsplit[i] === "L'2") {
            threeswap(stickercol, 0, 5, 10);
            threeswap(stickercol, 1, 7, 13);
            threeswap(stickercol, 2, 8, 14);
            threeswap(stickercol, 3, 9, 11);
            threeswap(stickercol, 18, 23, 27);
        } else if (scrsplit[i] === "l'" || scrsplit[i] === "L'" || scrsplit[i] === "l2" || scrsplit[i] === "L2") {
            threeswap(stickercol, 10, 5, 0);
            threeswap(stickercol, 13, 7, 1);
            threeswap(stickercol, 14, 8, 2);
            threeswap(stickercol, 11, 9, 3);
            threeswap(stickercol, 27, 23, 18);
        } else if (scrsplit[i] === "f" || scrsplit[i] === "f'2") {
            threeswap(stickercol, 5, 20, 10);
            threeswap(stickercol, 7, 23, 11);
            threeswap(stickercol, 17, 28, 2);
            threeswap(stickercol, 24, 12, 8);
            threeswap(stickercol, 6, 22, 14);
        } else if (scrsplit[i] === "f'" || scrsplit[i] === "f2") {
            threeswap(stickercol, 10, 20, 5);
            threeswap(stickercol, 11, 23, 7);
            threeswap(stickercol, 2, 28, 17);
            threeswap(stickercol, 8, 12, 24);
            threeswap(stickercol, 14, 22, 6);
        } else if (scrsplit[i] === "B" || scrsplit[i] === "U" || scrsplit[i] === "B'2" || scrsplit[i] === "U'2") {
            threeswap(stickercol, 0, 25, 15);
            threeswap(stickercol, 1, 27, 16);
            threeswap(stickercol, 3, 29, 18);
            threeswap(stickercol, 4, 26, 19);
            threeswap(stickercol, 9, 13, 21);
        } else if (scrsplit[i] === "B'" || scrsplit[i] === "U'" || scrsplit[i] === "B2" || scrsplit[i] === "U2") {
            threeswap(stickercol, 15, 25, 0);
            threeswap(stickercol, 16, 27, 1);
            threeswap(stickercol, 18, 29, 3);
            threeswap(stickercol, 19, 26, 4);
            threeswap(stickercol, 21, 13, 9);
        } else if (scrsplit[i] === "b" || scrsplit[i] === "b'2") {
            threeswap(stickercol, 0, 10, 25);
            threeswap(stickercol, 2, 12, 26);
            threeswap(stickercol, 3, 13, 27);
            threeswap(stickercol, 4, 14, 28);
            threeswap(stickercol, 8, 22, 19);
        } else if (scrsplit[i] === "b'" || scrsplit[i] === "b2"){
            threeswap(stickercol, 25, 10, 0);
            threeswap(stickercol, 26, 12, 2);
            threeswap(stickercol, 27, 13, 3);
            threeswap(stickercol, 28, 14, 4);
            threeswap(stickercol, 19, 22, 8);
        }
    }

    if(!imageSettings.showBottomLayer) {
        canvas.height = 300 * imageSettings.canvasSize;
        canvas.width = 509 *  imageSettings.canvasSize;
    }
    else {
        canvas.height = 451 * imageSettings.canvasSize;
        canvas.width = 509 *  imageSettings.canvasSize;
    }

    let ctx = canvas.getContext('2d');
    ctx.translate(10, 10);
    ctx.strokeStyle = imageColors.lineColor;
    ctx.lineWidth = imageSettings.lineWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.fillStyle = imageColors.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (imageSettings.showBLLayer) {
        if (imageSettings.hideBLCenter) {
            hidePieces =  true;
        }
        ctx.fillStyle = corrcol(stickercol, 0, imageColors);
        ctx.beginPath();
        ctx.moveTo(10 * imageSettings.canvasSize, 55 * imageSettings.canvasSize);
        ctx.lineTo(70 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(70 * imageSettings.canvasSize, 190 * imageSettings.canvasSize);
        ctx.lineTo(10 * imageSettings.canvasSize, 85 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        if (imageSettings.hideBLCenter) {
            hidePieces =  false;
        }
        ctx.fillStyle = corrcol(stickercol, 1, imageColors);
        ctx.beginPath();
        ctx.moveTo(70 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 70 * imageSettings.canvasSize);
        ctx.lineTo(70 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 2, imageColors);
        ctx.beginPath();
        ctx.moveTo(130 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 220 * imageSettings.canvasSize);
        ctx.lineTo(70 * imageSettings.canvasSize, 190 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 3, imageColors);
        ctx.beginPath();
        ctx.moveTo(10 * imageSettings.canvasSize, 85 * imageSettings.canvasSize);
        ctx.lineTo(70 * imageSettings.canvasSize, 190 * imageSettings.canvasSize);
        ctx.lineTo(10 * imageSettings.canvasSize, 160 * imageSettings.canvasSize);
        ctx.lineTo(10 * imageSettings.canvasSize, 85 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 4, imageColors);
        ctx.beginPath();
        ctx.moveTo(10 * imageSettings.canvasSize, 10 * imageSettings.canvasSize);
        ctx.lineTo(70 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(10 * imageSettings.canvasSize, 85 * imageSettings.canvasSize);
        ctx.lineTo(10 * imageSettings.canvasSize, 10 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    if(imageSettings.showFLLayer) {
        if (imageSettings.hideFLCenter) {
            hidePieces =  true;
        }
        ctx.fillStyle = corrcol(stickercol, 5, imageColors);
        ctx.beginPath();
        ctx.moveTo(130 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 205 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        if (imageSettings.hideFLCenter) {
            hidePieces =  false;
        }
        ctx.fillStyle = corrcol(stickercol, 6, imageColors);
        ctx.beginPath();
        ctx.moveTo(190 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 130 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 205 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 7, imageColors);
        ctx.beginPath();
        ctx.moveTo(250 * imageSettings.canvasSize, 205 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 280 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 205 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 8, imageColors);
        ctx.beginPath();
        ctx.moveTo(130 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 220 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 9, imageColors);
        ctx.beginPath();
        ctx.moveTo(130 * imageSettings.canvasSize, 70 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 70 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    if (imageSettings.showBottomLayer) {
        ctx.fillStyle = corrcol(stickercol, 10, imageColors);
        ctx.beginPath();
        ctx.moveTo(190 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 355 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 400 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 295 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 11, imageColors);
        ctx.beginPath();
        ctx.moveTo(190 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 280 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 355 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 12, imageColors);
        ctx.beginPath();
        ctx.moveTo(250 * imageSettings.canvasSize, 355 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 430 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 400 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 355 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 13, imageColors);
        ctx.beginPath();
        ctx.moveTo(130 * imageSettings.canvasSize, 295 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 400 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 370 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 295 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 14, imageColors);
        ctx.beginPath();
        ctx.moveTo(130 * imageSettings.canvasSize, 220 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 295 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 220 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    if (imageSettings.showTopLayer) {
        if (imageSettings.hideUCenter) {
            hidePieces =  true;
        }
        ctx.fillStyle = corrcol(stickercol, 15, imageColors);
        ctx.beginPath();
        ctx.moveTo(190 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        if (imageSettings.hideUCenter) {
            hidePieces =  false;
        }
        ctx.fillStyle = corrcol(stickercol, 16, imageColors);
        ctx.beginPath();
        ctx.moveTo(310 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 70 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 17, imageColors);
        ctx.beginPath();
        ctx.moveTo(190 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 130 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 18, imageColors);
        ctx.beginPath();
        ctx.moveTo(130 * imageSettings.canvasSize, 70 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(130 * imageSettings.canvasSize, 70 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 19, imageColors);
        ctx.beginPath();
        ctx.moveTo(190 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 10 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(190 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    if (imageSettings.showFRLayer) {
        if (imageSettings.hideFRCenter) {
            hidePieces =  true;
        }
        ctx.fillStyle = corrcol(stickercol, 20, imageColors);
        ctx.beginPath();
        ctx.moveTo(250 * imageSettings.canvasSize, 205 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 205 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        if (imageSettings.hideFRCenter) {
            hidePieces =  false;
        }
        ctx.fillStyle = corrcol(stickercol, 21, imageColors);
        ctx.beginPath();
        ctx.moveTo(310 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 70 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 22, imageColors);
        ctx.beginPath();
        ctx.moveTo(310 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 220 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 23, imageColors);
        ctx.beginPath();
        ctx.moveTo(250 * imageSettings.canvasSize, 205 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 250 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 280 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 205 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 24, imageColors);
        ctx.beginPath();
        ctx.moveTo(250 * imageSettings.canvasSize, 130 * imageSettings.canvasSize);
        ctx.lineTo(310 * imageSettings.canvasSize, 100 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 205 * imageSettings.canvasSize);
        ctx.lineTo(250 * imageSettings.canvasSize, 130 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    if (imageSettings.showBRLayer) {
        if (imageSettings.hideBRCenter) {
            hidePieces =  true;
        }
        ctx.fillStyle = corrcol(stickercol, 25, imageColors);
        ctx.beginPath();
        ctx.moveTo(370 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(430 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(490 * imageSettings.canvasSize, 85 * imageSettings.canvasSize);
        ctx.lineTo(430 * imageSettings.canvasSize, 190 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        if (imageSettings.hideBRCenter) {
            hidePieces =  false;
        }
        ctx.fillStyle = corrcol(stickercol, 26, imageColors);
        ctx.beginPath();
        ctx.moveTo(430 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(490 * imageSettings.canvasSize, 10 * imageSettings.canvasSize);
        ctx.lineTo(490 * imageSettings.canvasSize, 85 * imageSettings.canvasSize);
        ctx.lineTo(430 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 27, imageColors);
        ctx.beginPath();
        ctx.moveTo(430 * imageSettings.canvasSize, 190 * imageSettings.canvasSize);
        ctx.lineTo(490 * imageSettings.canvasSize, 85 * imageSettings.canvasSize);
        ctx.lineTo(490 * imageSettings.canvasSize, 160 * imageSettings.canvasSize);
        ctx.lineTo(430 * imageSettings.canvasSize, 190 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 28, imageColors);
        ctx.beginPath();
        ctx.moveTo(370 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(430 * imageSettings.canvasSize, 190 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 220 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = corrcol(stickercol, 29, imageColors);
        ctx.beginPath();
        ctx.moveTo(370 * imageSettings.canvasSize, 70 * imageSettings.canvasSize);
        ctx.lineTo(430 * imageSettings.canvasSize, 40 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 145 * imageSettings.canvasSize);
        ctx.lineTo(370 * imageSettings.canvasSize, 70 * imageSettings.canvasSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    ctx.translate(-10, -10);
}

function threeswap(listname,i,j,k) {
    [listname[j], listname[k]] = [listname[k], listname[j]];
    [listname[i], listname[j]] = [listname[j], listname[i]];
}
function fourswap(listname,i,j,k,l) {
    [listname[k], listname[l]] = [listname[l], listname[k]];
    [listname[j], listname[k]] = [listname[k], listname[j]];
    [listname[i], listname[j]] = [listname[j], listname[i]];
}

function corrcol(list, i, imageColors) {
    if (hidePieces) {
        return imageColors.hiddenPiece
    } else if (list[i] === "o") {
        return imageColors.BL;
    } else if (list[i] === "g") {
        return imageColors.FL;
    } else if (list[i] === "r") {
        return imageColors.FR;
    } else if (list[i] === "b") {
        return imageColors.BR;
    } else if (list[i] === "w") {
        return imageColors.U;
    } else {
        return imageColors.D;
    }
}