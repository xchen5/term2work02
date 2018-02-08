c = document.getElementById("can");
startButton = document.getElementById("start");
stopButton = document.getElementById("stop");
var width = c.width;
var height = c.height;
var requestID;
var ctx = c.getContext('2d');
var x = 0;
var toEnlarge = true;
var draw = function(){
  window.cancelAnimationFrame(requestID);
  ctx.clearRect(0,0,500,500);
  ctx.beginPath();
  ctx.arc(width/2,height/2,x,0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  if (toEnlarge){
    x+=1;
    if (x >= 250){
      toEnlarge = false;
    };
  }
  else{
    x-=1;
    if( x <= 1 ){
      toEnlarge = true;
    };
  };
  requestID = window.requestAnimationFrame(toDraw);
  console.log(requestID);
};

var toDraw = function(){
  window.requestAnimationFrame(draw);
}

var toStop = function(){
  window.cancelAnimationFrame(requestID);
}

stopButton.addEventListener("click", toStop);
startButton.addEventListener("click", draw);
