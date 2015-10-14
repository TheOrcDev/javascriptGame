//kontrole
var keysDown = {};
var keysUp = {};

addEventListener("keydown", function(e){
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e){
	keysUp[e.keyCode] = true;
	delete keysDown[e.keyCode];
}, false);