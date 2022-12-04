var rusmodal = document.getElementById("russiaModal");
var rusbtn = document.getElementById("Russia");
var span = document.getElementsByClassName("close")[0];
rusbtn.onclick = function() {
    rusmodal.style.display = "block";
}
span.onclick = function() {
    rusmodal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == rusmodal) {
        rusmodal.style.display = "none";
    }
}