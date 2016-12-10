var Rocket = function()
{
	this.rocketImage = new Image();
	this.rocketImage.src = "images/rocket.png";
	this.rocketLaunched = false;
	var o = this;
	this.x = ship.x-30;
	this.y = ship.y+20;
	this.speed = 30;
	// this.sound = new Audio("sound/rocket.wav");
	this.Update = function()
	{	
		// this.sound.play();
		ctx.drawImage(this.rocketImage, this.x, this.y);
		this.x -= this.speed;

		if(this.x<-5){
			g.RemoveObject(this);
		}

	}	
}