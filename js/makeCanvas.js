//makeCanvas kreira canvas, i odredjuju se sirina i visina sa parametrima
var canvas;
var ctx;
var makeCanvas = function(width, height)
{
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	div = document.getElementById("div");
	div.appendChild(canvas);
}