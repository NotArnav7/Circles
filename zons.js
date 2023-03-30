var omgcanvas= document.getElementById("abc");
var omg= omgcanvas.getContext("2d");




omgcanvas.addEventListener("mousedown" , my_mousedown)

function my_mousedown (e)
{ 
  MouseEvent="mousedown";
}

omgcanvas.addEventListener("mouseup" , my_mouseup)

function my_mouseup (e)
{
    MouseEvent="mouseup";
}

omgcanvas.addEventListener("mouseleave" , my_mouseleave)

function my_mouseleave (e)
{
    MouseEvent="mouseleave";
}

omgcanvas.addEventListener("mousemove" , my_mousemove)

function my_mousemove (e)
{
    mx=e.clientX-omgcanvas.offsetLeft;
    my=e.clientY-omgcanvas.offsetTop;
    if(MouseEvent=="mousedown"){
        var radius2= document.getElementById("radius2").value;
        var color2= document.getElementById("color2").value;
        var width2= document.getElementById("width2").value;
        
        
        omg.beginPath();
        omg.strokeStyle=color2;
        omg.lineWidth=width2;
        omg.arc(mx,my,radius2,0,360);
        omg.stroke();}
}

function ClearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
}


