const gif_button = document.getElementById('gif_enter');
const gif_container = document.getElementById('gif_container');
const puppies_selector = document.getElementById('puppies');
const kittens_selector = document.getElementById('kittens');

gif_button.addEventListener("click", fetchGif);

function fetchGif() {
let category = "";
if (puppies_selector.checked) {
    category = "puppies";
} else {
    category = "kittens";
}

fetch('http://api.giphy.com/v1/gifs/random?tag='+category+'&api_key=JMPx7E7lxgpLIC2gUx6Wd7L40VnUHJIj&rating=g').then(response => response.json())
.then((result) => {
    console.log(result["data"]["images"]["downsized"]["url"]);
    let new_image = document.createElement('img');
    new_image.setAttribute('src', result["data"]["images"]["downsized"]["url"]);
    gif_container.innerHTML = '';
    gif_container.appendChild(new_image);
});
}