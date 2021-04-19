const surface = document.getElementById('svg');
const s = Snap(surface);
const breathCircle = s.circle(200, 200, 50);
breathCircle.attr({fill: "l(0, 0, 1, 1)#000-#92dae7-#fff"});

const in_selection = document.getElementById("in");
const hold1_selection = document.getElementById("hold1");
const out_selection = document.getElementById("out");
const hold2_selection = document.getElementById("hold2");

let flow = setInterval(1000);


function resetFlow() {
    clearInterval(flow);
    breathCircle.attr("r",50);
    breath_enter.innerHTML = "Start";
}

function breathFlow(breathe_in, hold1, breathe_out, hold2) {
    resetFlow();
    console.log("breathFlow called with", breathe_in, hold1, breathe_out, hold2);
    total_length = breathe_in + hold1 + breathe_out + hold2;
    getBigger(breathe_in, breathe_out, hold1);
    flow = setInterval(getBigger, total_length, breathe_in, breathe_out, hold1);
}

function getSmaller(speed) {
    breathCircle.animate({r:50},speed)
}

function getBigger(breathe_in, breathe_out, hold1) {
    breathCircle.animate({r:100},breathe_in);
    setTimeout(getSmaller, breathe_in + hold1, breathe_out);
}

function setFlow() {
    var in_value = in_selection.value*1000;
    var hold1_value = hold1_selection.value*1000;
    var out_value = out_selection.value*1000;
    var hold2_value = hold2_selection.value*1000;
    console.log("got values");
    breathFlow(in_value, hold1_value, out_value, hold2_value);
    console.log("called breathFlow");
}

function enterButton() {
    if (breath_enter.innerHTML === "Start") {
        setFlow();
        breath_enter.innerHTML = "Stop";
    } else {
        resetFlow();
        breath_enter.innerHTML = "Start";
    }
}

function boxButton() {
    in_selection.value = 4;
    hold1_selection.value = 4;
    out_selection.value = 4;
    hold2_selection.value = 4;
    resetFlow();
}

function relaxingButton() {
    in_selection.value = 4;
    hold1_selection.value = 7;
    out_selection.value = 8;
    hold2_selection.value = 0;
    resetFlow();
}
function evenButton() {
    in_selection.value = 6;
    hold1_selection.value = 0;
    out_selection.value = 6;
    hold2_selection.value = 0;
    resetFlow();
}


const breath_enter = document.getElementById("breath_enter");
breath_enter.addEventListener("click", enterButton);

const box_button = document.getElementById("box");
box_button.addEventListener("click", boxButton);

const relaxing_button = document.getElementById("relaxing");
relaxing_button.addEventListener("click", relaxingButton);

const even_button = document.getElementById("even");
even_button.addEventListener("click", evenButton);