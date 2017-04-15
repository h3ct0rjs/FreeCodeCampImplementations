//This will get the all the canvas tags, and set it like
//inner Height and width, 
//NOTE:if I have multple canvas, I just need to use elements by id!.
var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
//we need to say what context we are going to write. in this case 
//I want all the 2d properties, like in linear algebra.2d context is 
// a browser API
var c=canvas.getContext('2d');
//Using the methods of c object.
//Rectangle
//Change Color of rectangle
//c.fillStyle='blue';        
//c.fillRect(100,100,100,100);
//c.fillStyle='yellow';       
//c.fillRect(0,0,100,100);
//c.fillStyle='red';       

//Line 
//c.beginPath();
//c.moveTo(X,Y);
//c.lineTo(X,Y);
//c.lineTo(300,200);
//change the line colors
//c.strokeStyle="blue";
//c.lineTo(600,200);
//c.strokeStyle="red";
//c.lineTo(600,100);
//c.stroke();
//Arcs ==Circles
for (var i=0;i<200;++i){
    var x=Math.random()*window.innerWidth;
    var y=Math.random()*window.innerHeight;
    c.beginPath();
    c.arc(x,y,300,Math.PI*2,false);
    c.strokeStyle="red";
    c.stroke();
}