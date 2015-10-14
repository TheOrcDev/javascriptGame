var Level = function()
{
	this.Level = 1;
	this.CometWave = 100;
	this.CometSpeed = 5;
	this.Interval = 0;
	this.start = new Date().getTime();
    this.elapsed = '0.0';
	var ob = this;
	this.comment = document.getElementById("comment").innerHTML;

this.Update = function(){
	
	var time = new Date().getTime() - ob.start;
    ob.elapsed = Math.floor(time / 100) / 10;
    if(Math.round(ob.elapsed) == ob.elapsed) { 
		ob.elapsed += '.0'; 
	}
    document.getElementById("time").innerHTML = "Time: " + ob.elapsed;
	
	if(ob.elapsed>1&&ob.elapsed<8){
		Write("Greetings test subject, we made you to test our new ship prototype, just move along... Avoid those balls. Your life will be short.", 16, 500, 50, 250, 250, 250);
	}
	if(ob.elapsed>8&&ob.elapsed<10){
		ob.CometWave = 55;
		ob.CometSpeed = 4;
		Write("Launching in THREE", 16, 500, 50, 250, 250, 250);
	}
	if(ob.elapsed>10&&ob.elapsed<13){
		Write("Jack you released one comet you idiot!", 16, 500, 50, 250, 250, 250);
	}
	if(ob.elapsed>13&&ob.elapsed<15)
		Write("Sry John :(", 16, 500, 50, 0, 150, 150);
	if(ob.elapsed>15&&ob.elapsed<17)
		Write("Nevermind, lets finish this and go home ... TWO", 16, 500, 50, 250, 250, 250);
	if(ob.elapsed>17&&ob.elapsed<18)
		Write("ONE", 16, 500, 50, 250, 250, 250);
	
	if(ob.elapsed>30&&ob.elapsed<35){
		ob.CometWave = 80;
		ob.CometSpeed = 4;
		Write("Hmmmmmmmmm, interesting... I will release more...", 18, 500, 50, 250, 250, 250);
	}
	if(ob.elapsed>38&&ob.elapsed<45){
		ob.CometWave = 60;
		ob.CometSpeed = 6;
		Write("Hey boss, this guy is still alive! I will release more comets!", 22, 500, 50, 250, 250, 250);
	}
	if(ob.elapsed>50&&ob.elapsed<55)
		Write("Let me see that John...", 22, 500, 50, 250, 0, 0);
	if(ob.elapsed>55&&ob.elapsed<60)
		Write("Son you have my permission. Release everything!", 22, 500, 50, 250, 0, 0);
	
	if(ob.elapsed>60&&ob.elapsed<100){
		ob.CometWave = 10;
		ob.CometSpeed = 8;
		Write("HAHAHAHAHAHAHA!", 28, 500, 50, 250, 250, 250);
	}
	if(ob.elapsed>100&&ob.elapsed<105)
		Write("............!!???", 22, 500, 50, 250, 250, 250);
	if(ob.elapsed>105&&ob.elapsed<110)
		Write("Hee, hee, hee, hee", 16, 500, 50, 0, 150, 150);
	if(ob.elapsed>110&&ob.elapsed<115)
		Write("STOP LAUGHING JACK! THIS GUY WON'T DIE!", 22, 500, 50, 250, 250, 250);
	if(ob.elapsed>115&&ob.elapsed<125){
		ob.CometWave = 7;
		ob.CometSpeed = 12;
		Write("DIE!!!!!!", 28, 500, 50, 250, 250, 250);
	}
	
	if(ob.elapsed>18)
	{
		this.Interval+=1;
		if(this.Interval>=ob.CometWave)
		{
			this.Interval=0;
			var releaseComets = new Comet(ob.CometSpeed);
			var releaseAsteroids = new Asteroid(ob.CometSpeed);
			g.AddObject(releaseComets);
			g.AddObject(releaseAsteroids);
		}
	}
}
}