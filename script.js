let id = null;
let pos = 1;
var i = 0;
let direction = window.innerWidth / 750;
function frame() 
{
	var slides = document.getElementById("slide").childNodes;   
	if (pos >= (window.innerWidth*.3)) 
	{
		direction *= -1;
		pos -= 5;
	} 
	else if (pos <= 0)
	{
		direction *= -1;
		pos = 5;
	}
	slides.forEach(slide => {
		var l = (window.innerWidth*i) + pos;
		slide.style.left = l + "px";
		i++;
	});
	i %= 3;
	pos += direction;
}
function myMove() 
{
	clearInterval(id);
//	id = setInterval(frame, 100);

}
myMove();
						
function init()
{
	var slide = document.getElementById("slide");
	var images = ['one.jpg', 'two.jpg', 'three.jpg'];
	for (let i = 0; i < images.length; i++)
	{
		var div = document.createElement("div");
		slide.appendChild(div);
		div.style.backgroundImage = `url("resources/${images[i]}")`;
	}
}
