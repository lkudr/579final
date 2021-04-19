// Scrambler({
//     target: '#test',
//     random: [1000, 12000],
//     speed: 100,
//     text: 'test',
//     beforeEach: function(element) {
//       console.log(`${element} about to scramble`);
//     },
//     afterAll: function(elements) {
//       console.log('all done!');
//     }
//   });

const textinput = document.getElementById("textbox");
const textarea = document.getElementById("text_area");
const italics = document.getElementById("italics");
const bold = document.getElementById("bold");
const size_slider = document.getElementById("size");
const standard = document.getElementById("standard");
const comic = document.getElementById("comic");
const papyrus = document.getElementById("papyrus");

function generateText() {
    let txt = textinput.value;
    let font_size = size_slider.value+'px';
    textarea.innerHTML = txt;
    console.log(txt);
    textarea.setAttribute("id", "txt");
    textarea.style.color = color_well.value;
    textarea.style.fontSize = font_size;
    if (italics.checked) {
        textarea.style.fontStyle = "italic";
    } else {
        textarea.style.fontStyle = "normal";
    }
    if (bold.checked) {
        textarea.style.fontWeight = "bold";
    } else {
        textarea.style.fontWeight = "normal";
    }
    if (standard.checked) {
        textarea.style.fontFamily = "Avenir, sans-serif";
    } else if (comic.checked) {
        textarea.style.fontFamily = "'Comic Sans MS', 'Comic Sans', cursive";
    } else {
        textarea.style.fontFamily = "'Papyrus', fantasy";
    }
}

function scrambleText() {
Scrambler({
    target: '#txt',
    random: [1000, 6000],
    speed: 100,
    text: textarea.innerHTML
  });
}

function stopAnimation() {
    textarea.setAttribute("class","");
}

function scrambleText() {
    Scrambler({
        target: '#txt',
        random: [1000, 6000],
        speed: 100,
        text: textarea.innerHTML
      });
    }

function wowzorsText() {
    textarea.setAttribute("class","woah wowzors infinite");
}

function shakeText() {
    textarea.setAttribute("class","woah shaker infinite");
}

const defusion_enter = document.getElementById("defusion_enter");
defusion_enter.addEventListener("click", generateText);

const scramble_button = document.getElementById("scramble");
scramble_button.addEventListener("click", scrambleText);

const wowzors_button = document.getElementById("wowzors");
wowzors_button.addEventListener("click", wowzorsText);

const shake_button = document.getElementById("shake");
shake_button.addEventListener("click", shakeText);

const stop_button = document.getElementById("stop");
stop_button.addEventListener("click", stopAnimation);

const color_well = document.getElementById("color_well");