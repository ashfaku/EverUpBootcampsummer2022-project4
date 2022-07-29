let id = null;
let pos = 1;
var i = 0;
let direction = window.innerWidth / 750;
var slideList = [];
function frame() 
{
	if (pos >= (window.innerWidth*2)) 
	{
		direction *= -1;
		pos -= 5;
	} 
	else if (pos <= 0)
	{
		direction *= -1;
		pos = 5;
	}
	slideList.forEach(slide => {
		slide.style.left = (window.innerWidth*i - pos) + "px";
	});
	i %= 3;
	pos += direction;
}
function myMove() 
{
	clearInterval(id);
	id = setInterval(frame, 5);

}					
function forward()
{
	console.log(1);
	if (pos < window.innerWidth*1)
		pos += window.innerWidth;
}	
function back()
{
	console.log(1);
	if (pos > window.innerWidth)
		pos -= window.innerWidth;
}
function init()
{
	var slides = document.getElementById("slides");
	var images = ['two.jpg', 'one.jpg', 'three.jpg'];
	for (let i = 0; i < images.length; i++)
	{
		var div = document.createElement("div");
		slides.appendChild(div);
		slideList.push(div);
		div.style.backgroundImage = `url("resources/slides/${images[i]}")`;
		div.classList.add("slide");
	}
	
	myMove();
}
