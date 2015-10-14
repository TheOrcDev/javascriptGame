//funkcija Frames odredjuje poziciju x, y na slici sa sprite-om, broj frejmova, visinu, sirinu, i parametar "flow" koji za sada odredjuje koji je tip sprite-a, da li se ponavlja ili se samo jednom odradi

var xpos; 
var ypos; 
var indexMain = 0;
var index;
var numFrames; 
var frameSizeH;
var frameSizeW;
var monsterframeSizeH;
var monsterframeSizeW;
var monsterxpos;
var monsterypos;
var type;

var Frames = function(XPosition, YPosition, numberOfFrames, frameSizeHeight, frameSizeWidth, flow)
{
	var o = this;
	this.XPosition = XPosition;
	this.YPosition = YPosition;
	this.numberOfFrames = numberOfFrames;
	this.frameSizeHeight = frameSizeHeight;
	this.frameSizeWidth = frameSizeWidth;
	this.flow = flow;

	if(flow=="monster")
	{
		++indexMain;
		monsterframeSizeH = frameSizeHeight;
		monsterframeSizeW = frameSizeWidth;
		//if(Even(indexMain))
		monsterxpos += monsterframeSizeW;
		monsterypos = YPosition;
		numFrames = numberOfFrames;
		if(indexMain>=numFrames/**2 da bude sporije */)
		{
			monsterxpos = XPosition;
			monsterypos = YPosition;
			indexMain = 0;                
		}
		else if(monsterxpos + monsterframeSizeW > shipImage.width)
		{
			monsterxpos = 0;
			monsterypos += monsterframeSizeW;
		}
	}
	if(flow=="continue")
	{
		++indexMain;
		frameSizeH = frameSizeHeight;
		frameSizeW = frameSizeWidth;
		//if(Even(indexMain))
		xpos += frameSizeW;
		ypos = YPosition;
		numFrames = numberOfFrames;
		if(indexMain>=numFrames/**2 da bude sporije */)
		{
			xpos = XPosition;
			ypos = YPosition;
			indexMain = 0;                
		}
		else if(xpos + frameSizeW > shipImage.width)
		{
			xpos = 0;
			ypos += frameSizeW;
		}
	}
	if(flow=="once")
	{
		++indexMain;
		frameSizeH = frameSizeHeight;
		frameSizeW = frameSizeWidth;
		//if(Even(indexMain))
		xpos += frameSizeW;
		ypos = YPosition;
		numFrames = numberOfFrames;
		if(indexMain>=numFrames/**2 da bude sporije */)
		{
			xpos = XPosition*numFrames;               
		}
		else if(xpos + frameSizeW > shipImage.width)
		{
			xpos = 0;
			ypos += frameSizeW;
		}
	}
	
}