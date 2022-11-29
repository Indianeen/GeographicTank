import { F } from "chart.js/dist/chunks/helpers.core";

var rusmodal = document.getElementById("russiaModal");
var rusbtn = document.getElementById("Russia");
var russpan = document.getElementsByClassName("close")[0];
rusbtn.onclick = function() {
    rusmodal.style.display = "block";
}
russpan.onclick = function() {
    rusmodal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == rusmodal) {
        rusmodal.style.display = "none";
    }
}