var canvas=document.createElement('canvas');
var width=canvas.width = 1920;
var height=canvas.height = 1920;
var centerX=width/2;
var centerY=height/2;
var radius=5;
var size=2000;
var degree=10;
var step=degree/size;
document.body.appendChild(canvas);
var c=canvas.getContext('2d');
c.fillStyle='#fff';
c.fillRect(0,0,width,height);
c.beginPath();
c.moveTo(centerX+(i/2), centerY);
for(var i = 0; i < size; i++)
{
  if(degree > 0)
  {
    degree -= step;
  }
  c.translate(centerX, centerY);
  c.rotate(-degree * (Math.PI / 180));
  c.translate(-centerX, -centerY);
  c.lineTo(centerX+(i/2), centerY); 
}
  c.lineWidth = 8;
  c.strokeStyle="#000";
  c.stroke();