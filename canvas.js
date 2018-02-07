c = document.getElementById("can");
var width = c.width;
var height = c.height;
var requestID;
var x = 0;
var ctx = c.getContext('2d');
var toDraw = function(){
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    ctx.arc(width/2,height/2,x,0, 2 * Math.PI);
    ctx.fill();
    toShrink = 0;
    if (toShrink === 0){
	x+=1;
	if (x === 250){
	    toShrink = 1;
	};
    }
    else if(toShrink === 1){
	x-=1;
	if( x === 1 ){
	    toShrink = 0;
	};
    };
    requestID = window.requestAnimationFrame(toDraw);
    console.log(requestID);
};

window.requestAnimationFrame(toDraw);

