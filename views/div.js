var rnd = Math.floor(Math.random() * (256 - 0));
var rnd1 = Math.floor(Math.random() * (256 - 0));
var rnd2 = Math.floor(Math.random() * (256 - 0));

$("#start").wrap("<div id='clrDiv'></div>");
$("#clrDiv").css("background-color", "rgb(" + rnd + "," + rnd1 + "," + rnd2 + ")");
$("#clrDiv").css("padding", "" + Math.floor(Math.random() * 30) + "px");

