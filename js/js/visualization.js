let surface = document.getElementById('svg');
let s = Snap(surface);

let img = s.image('https://upload.wikimedia.org/wikipedia/commons/7/77/Nuages.gif', 0, 0, 400, 530);
img.transform('r90 s2');

const textbox = document.getElementById("textbox");
const speed_slider = document.getElementById("speed");

function animateText() {
    txt = textbox.value;
    speed = (21-speed_slider.value)*1000;
    console.log(speed);
    let txt_object = s.text(20,265,txt);
    console.log("made txt object");
    txt_object.transform('s2');
    console.log("scaled");
    txt_object.animate({x:800},speed);
    console.log("animated");
}

const viz_enter = document.getElementById("visualization_enter");
viz_enter.addEventListener("click", animateText);