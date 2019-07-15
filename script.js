let number;
let urls = [ "0_conways_game/index.html", 
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
"9_square/index.html"]

number = 0;
slideAnew(-1);
setInterval(function(){ slideAnew(number); }, 5000)


function slideAnew(num) {
    let length = urls.length;
    number = (num + 1) % length;
    let iframe = document.getElementsByClassName("myFrame")[0];
    iframe.style.opacity = "0";
    iframe.src = urls[number]
    iframe.style.opacity = "1";
    let nav = document.getElementsByClassName("nr")[0];
    let nnum = number + 1
    nav.innerHTML = nnum + "/" + length;
}

