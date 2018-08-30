var Background = function()
{
	bgReady = false;
	this.bgImage = new Image();
	this.x = 0;
	this.bgImage.src = "./images/background.jpg";
	this.Update = function(){
		this.repeat = this.x - this.bgImage.width;
		ctx.drawImage(this.bgImage, this.x, 0);
		this.x += 4;

		if(this.repeat>=0){
		this.x = 0;
		this.background=0;
		}
		if(this.x>0){
			ctx.drawImage(this.bgImage, this.repeat, 0);
		}
	}
}

var Loading = function()
{
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = "26px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Loading", 450, 50);
}