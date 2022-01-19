
function change(pumpkinon) {
    let pumpkinon = "true";
    if (pumpkinon == "true") {
    const pumpkin = document.getElementById("halloweenpumpkin");
    pumpkin.style.display="none";
    pumpkinon == "false";
    const itimg = document.getElementById("it");
    itimg.style.display="block";
    }
    else if (pumpkinon == "false") {
    const pumpkin = document.getElementById("halloweenpumpkin");
    pumpkin.style.display="block";
    pumpkinon == "true";
    const itimg = document.getElementById("it");
    itimg.style.display="none";
    }
}