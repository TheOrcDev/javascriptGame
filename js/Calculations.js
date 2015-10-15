var Even = function(val){
    if (val%100 == 0)
        return true;
    else
        return false;
}

var Random = function(nr)
{
	var number = Math.floor((Math.random()*nr)+1);
	return number;
}

var Write = function(text, fontSize, x, y, red, green, blue)
{
	ctx.fillStyle = "rgb("+red+", "+green+", "+blue+")";
	ctx.font = fontSize + "px Helvetica";
	ctx.textAlign = "center";
	ctx.textBaseline = "top";
	ctx.fillText(text, x, y);
}