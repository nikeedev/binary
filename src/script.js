var thenumber = document.getElementById("result");

var finger1 = document.getElementById("finger1");
var finger2 = document.getElementById("finger2");
var finger4 = document.getElementById("finger4");
var finger8= document.getElementById("finger8");
var finger16 = document.getElementById("finger16");

finger1.style.opacity = 0.3
finger2.style.opacity = 0.3
finger4.style.opacity = 0.3
finger8.style.opacity = 0.3
finger16.style.opacity = 0.3

var total = 0;
thenumber.innerHTML = total;
var clickedplus1 = false;
var clickedplus2 = false;
var clickedplus4 = false;
var clickedplus8 = false;
var clickedplus16 = false;


function plus1() {
    if (!clickedplus1) {
        total += 1;
        clickedplus1 = true;
        finger1.style.opacity = 1
    }
    else if (clickedplus1) {
        total -= 1;
        clickedplus1 = false;
        finger1.style.opacity = 0.3
    }
    thenumber.innerHTML = total;
}

function plus2() {
    if (!clickedplus2) {
        total += 2;
        clickedplus2 = true;
        finger2.style.opacity = 1
    }
    else if (clickedplus2) {
        total -= 2;
        clickedplus2 = false;
        finger2.style.opacity = 0.3
    }
    thenumber.innerHTML = total;
}

function plus4() {
    if (!clickedplus4) {
        total += 4;
        clickedplus4 = true;
        finger4.style.opacity = 1
    }
    else if (clickedplus4) {
        total -= 4;
        clickedplus4 = false;
        finger4.style.opacity = 0.3
    }
    thenumber.innerHTML = total;
}

function plus8() {
    if (!clickedplus8) {
        total += 8;
        clickedplus8 = true;
        finger8.style.opacity = 1
    }
    else if (clickedplus8) {
        total -= 8;
        clickedplus8 = false;
        finger8.style.opacity = 0.3
    }
    thenumber.innerHTML = total;
}

function plus16() {
    if (!clickedplus16) {
        total += 16;
        clickedplus16 = true;
        finger16.style.opacity = 1
    }
    else if (clickedplus16) {
        total -= 16;
        clickedplus16 = false;
        finger16.style.opacity = 0.3
    }
    thenumber.innerHTML = total;
}


thenumber.innerHTML = total;