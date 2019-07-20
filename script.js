let number;
let timer;
let urls = [
    "0_conways_game/index.html",
    "1_particles/index.html",
    "2_voronoi/index.html",
    "3_collatz_conjecture/index.html",
    "4_wave_clock/index.html",
    "5_spiral_rose/index.html",
    "6_l_system/index.html",
    "7.0_spinning_sculpture/index.html",
    "7.1_spinning_sculpture/index.html",
    "7.2_spinning_sculpture/index.html",
    "8_phillotaxis/index.html",
    "9_square/index.html"
]

number = 0;
slideAnew(-1);
timer = setInterval(function () {
    slideAnew(number);
    console.log("New interval!")
}, 25000)

document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            number = number + (urls.length - 2) % urls.length;
            slideAnew(number);
            console.log('Left key pressed');
            break;
        case 38:
            console.log('Up key pressed');
            break;
        case 39:
            slideAnew(number);
            console.log('Right key pressed');
            break;
        case 40:
            console.log('Down key pressed');
            break;
    }
};

let nextButton = document.getElementById("next");
nextButton.addEventListener('click', function() { 
    clearInterval(timer);
    slideAnew(number)
    timer = setInterval(function () {
        slideAnew(number);
    }, 25000);
}, false);
    

let backButton = document.getElementById("back");
backButton.addEventListener('click', function() {
    clearInterval(timer);
    number = number + (urls.length - 2) % urls.length;
    console.log("number + (urls.length - 2) % urls.length" + number)
    slideAnew(number); 
    timer = setInterval(function () {
        slideAnew(number);
    }, 25000);
}, false);



function slideAnew(num) {
    let length = urls.length;
    number = (num + 1) % length;
    let iframe = document.getElementsByClassName("myFrame")[0];
    let title = document.getElementById("title");
    let urlTitle = urls[number].split('/')[0];
    title.innerHTML = urlTitle;
    iframe.style.opacity = "0";
    iframe.src = urls[number]
    iframe.style.opacity = "1";
    let nav = document.getElementsByClassName("nr")[0];
    let nnum = number + 1
    nav.innerHTML = nnum + "/" + length;
}