var GameLoop = function()
{
	GameLoop.Instanced = true;
	var ob = this;
	this.State = "stopped";
	this.lasttime = new Date();
	this.Update = function(){}
	this.Updater = function()
	{
		ob.Update();
			
		var currtime = new Date();
		var frametimedifference = currtime - ob.lasttime;
		if(frametimedifference>=(1000/60)) 
		{		
			ob.lasttime = currtime;
		}
		if(ob.State!="request_stop")
		{   
			setTimeout(ob.Updater,1);
		}
	}

this.Start = function(){
        if(ob.State=="stopped")
        this.Updater();
    }
this.Pause = function(){
        this.State = "request_stop";
    }
}
GameLoop.GetInstance = function(){
        if(!GameLoop.Instance) GameLoop.Instance = new GameLoop();
        return GameLoop.Instance;
}

var Game = function(){
var ob = this;
this.Objects = [];
this.Loop = GameLoop.GetInstance();
this.AddObject = function(obj){
        this.Objects[this.Objects.length]=obj;
    }
this.RemoveObject = function(obj){
        this.Objects.splice(this.Objects.indexOf(obj),1);
    }
this.Update = function(){
      for(i=0;i<ob.Objects.length;i++) 
        ob.Objects[i].Update();
    }
this.Start = function(){
        this.Loop.Start();
        this.Loop.Update = ob.Update;
    };
this.Stop = function(){
        this.Loop.Pause();
    };
}