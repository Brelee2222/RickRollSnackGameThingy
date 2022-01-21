var snakeBod = document.getElementsByClassName("zsInrf")[0];
again = false;
function runTrickWall() {
    if(snakeBod.style.opacity == 1 && !again) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        again = true;
    }
    if(snakeBod.style.opacity != 1)
        again  = false;
    setTimeout(runTrickWall, 500);
}
if(snakeBod) runTrickWall(); 