function canvasToImage(canvas, filename) {
    var link = document.createElement('a');
    link.download = filename + '.png';
    link.href = canvas.toDataURL()
    link.click();
}