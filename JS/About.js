window.addEventListener('load', init, false);

function init() {
        
    const brithday = new Date(1999, 2, 21)
    document.getElementById("age").innerText = Math.abs(new Date(Date.now() - brithday.getTime()).getUTCFullYear() - 1970)
}
