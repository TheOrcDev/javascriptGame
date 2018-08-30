//klasa za pravljenje main player-a
var MainPlayer = function()
{
//image za main player-a
	this.shipImage = new Image();
	this.shipImage.src = "./images/ship.png";
//pravljenje niza za rakete
	this.Rockets = new Array();
	this.obj;
//brzina
	this.speed = 2.5;
//pocetna pozicija
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
//increment
	this.interval = 0;

//update
	this.Update = function(){
	    	
		ctx.drawImage(this.shipImage, this.x, this.y);
	//KONTROLE

		var shotsFired = 0;

		//gore--------------------------
		if (38 in keysDown) 
			this.y -= this.speed;
		//dole--------------------------
		if (40 in keysDown) 
			this.y += this.speed;
		//levo--------------------------
		if (37 in keysDown) 
			this.x -= this.speed;
		//desno--------------------------
		if (39 in keysDown) 
			this.x += this.speed;
		//space--------------------------
		if (32 in keysDown)
		{

			//na space se ispaljuje raketa, pravi se novi objekat i dodaje se u loop, i objekat se stavlja u niz Rockets
				var rocket = new Rocket();
				g.AddObject(rocket);
				this.Rockets.push(rocket);
		}

	}
}