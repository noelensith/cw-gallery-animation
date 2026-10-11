"use strict";

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image7");

// pause

image1.onmouseover = function() {
    image1.style.animationPlayState = "paused";
};

image2.onmouseover = function() {
    image2.style.animationPlayState = "paused";
};

// resume

image1.onmouseout = function() {
    image1.style.animationPlayState = "running";
};

image2.onmouseout = function() {
    image2.style.animationPlayState = "running";
};