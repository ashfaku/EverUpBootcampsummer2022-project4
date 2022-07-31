let id = null;
let pos = 1;
var i = 0;
let direction = window.innerWidth / 750;
var slideList = [];
let speed = 5;
function frame() 
{
	if (pos >= (window.innerWidth*3)) 
	{
		direction *= -1;
		pos -= window.innerWidth / 750;
	} 
	else if (pos <= 0)
	{
		direction *= -1;
		pos = direction;
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
	id = setInterval(frame, speed);

}					
function forward()
{
	if (pos < window.innerWidth*1)
		pos += window.innerWidth;
}	
function back()
{
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
	var mainPageContent = document.getElementById("mainPageContent");
	var saleContent = [
		{
			title: "Vacation Apparel",
			images: [
				'resources/apparel/one.jpg', 
				'resources/apparel/two.jpg', 
				'resources/apparel/three.jpg', 
				'resources/apparel/four.jpg'
			]
		},
		{
			title: "Vacation Apparel",
			images: [
				'resources/apparel/one.jpg',
				'resources/apparel/two.jpg', 
				'resources/apparel/three.jpg', 
				'resources/apparel/four.jpg'
			]
		},
		{
			title: "Vacation Apparel",
			images: [
				'resources/apparel/one.jpg', 
				'resources/apparel/two.jpg', 
				'resources/apparel/three.jpg', 
				'resources/apparel/four.jpg'
			]
		
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		},
		{
			title: "Vacation Apparel",
			images: ['resources/apparel/one.jpg', 'resources/apparel/two.jpg', 'resources/apparel/three.jpg', 'resources/apparel/four.jpg']
		}
	];
	for (let i = 0; i < saleContent.length; i++)
	{
		var container = document.createElement("div");
		
		var header = document.createElement("div");
		header.innerHTML = saleContent[i].title;
		container.appendChild(header);
		
		var grid = document.createElement("div");
		grid.classList.add("grid");
		console.log(saleContent[i]);
		var images = saleContent[i].images;
		for (let j = 0; j < images.length; j++)
		{
			var img = document.createElement("div");
			img.classList.add("square");
			img.style.backgroundImage = `url('${images[j]}')`;	
			grid.appendChild(img);
		}
		container.appendChild(grid);
		mainPageContent.appendChild(container);
	}
	var buttons = [
			'Best Sellers',
			'Amazon Basics',
			'Today\'s Deals',
			'New Releases',
			'Customer Service',
			'Prime',
			'Music',
			'Books',
			'Kindle Books',
			'Amazon Home',
			'Registry',
			'Fashion',
			'Gift Cards',
			'Toys & Games',
			'Handmade',
			'Sell',
			'Amazon Explore',
			'Automotive',
			'Coupons',
			'Pharmacy',
			'Computers',
			'Home Improvement',
			'Beauty & Personal Care',
			'Pet Supplies',
			'Luxury Stores',
			'Video Games',
			'Shopper Toolkit',
			'Health & Household',
			'Smart Home'
	];
	var buttonRow = document.getElementById("buttonRow");
	for (let i = 0; i < buttons.length; i++)
	{
		var button = document.createElement("button");
		button.innerHTML = buttons[i];
		buttonRow.appendChild(button);
	}
}
