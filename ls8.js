function admit() {
    var war = document.getElementById('war').value;
    var battle = document.getElementById('battle').value;
    var location = document.getElementById('location').value;
    var starts = document.getElementById('starts').value;
    var ends = document.getElementById('ends').value;
    var winner = document.getElementById('winner').value;
    var loser = document.getElementById('loser').value;
    alert("The information you've written down: \nname of war:" + war + "\nname of battle:" + battle + "\nbattle location:" + location + "\nbattle starts:" + starts + "\nbattle ends:" + ends + "\nwinner:" + winner + "\nloser:" + loser + "\nthanks for the suggestion");
}
function invisible(id) {
    document.getElementById(id).style.display = "none";
}
function visible(id) {
    document.getElementById(id).style.display = "flex";
}