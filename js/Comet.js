var Comet = function(spd)
{
	this.cometImage 			= new Image();
	this.cometImage.src 		= "images/comet.png";

	this.explosionImage 		= new Image();
	this.explosionImage.src 	= "images/explosion.png";

	this.x 						= 0;
	this.y 						= Random(500);
	this.speed 					= Random(spd);
	this.interval 				= 0;
	this.Update = function()
	{
		var comment 	= document.getElementById("comment");
		this.interval	+= 1;
		ctx.drawImage(this.cometImage, this.x, this.y);
		this.x			+= this.speed;

		//kontakt izmedju dva objekta
		if(ship.x <= (this.x + (this.cometImage.width - 7))
		&& this.x <= (ship.x + (ship.shipImage.width - 7))
		&& ship.y <= (this.y + (this.cometImage.height - 7))
		&& this.y <= (ship.y + (ship.shipImage.height - 7)))
		{
			g.Stop();
			//score
			ctx.fillStyle 		= "rgb(250, 250, 250)";
			ctx.font 			= "22px Helvetica";
			ctx.textAlign 		= "left";
			ctx.textBaseline 	= "top";
			ctx.fillText("Oh Shit!", ship.x, ship.y-30);

			ctx.drawImage(this.explosionImage, ship.x - 30, ship.y - 40);

			document.getElementById("tryAgain").disabled = false;
			Write("He is dead boss! I love my job ;)", 24, 500, 350);
		}

	}
}