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
/*	var item = {
		"products_and_categories":
		{
			"Bags":[
				{"name":"Backpack","id":174834,"image_url":"//assets.supremenewyork.com/231243/ca/NpORhjC475k.jpg","image_url_hi":"//assets.supremenewyork.com/231243/rc/NpORhjC475k.jpg","price":15800,"sale_price":0,"new_item":false,"position":12,"category_name":"Bags"},
				{"name":"Duffle Bag ","id":174901,"image_url":"//assets.supremenewyork.com/231223/ca/3Un7LoAyksg.jpg","image_url_hi":"//assets.supremenewyork.com/231223/rc/3Un7LoAyksg.jpg","price":14800,"sale_price":0,"new_item":false,"position":13,"category_name":"Bags"},
				{"name":"Small Messenger Bag","id":174874,"image_url":"//assets.supremenewyork.com/231292/ca/0_2Wm0c8qCw.jpg","image_url_hi":"//assets.supremenewyork.com/231292/rc/0_2Wm0c8qCw.jpg","price":9800,"sale_price":0,"new_item":false,"position":14,"category_name":"Bags"},
				{"name":"Harness Waist Bag","id":174897,"image_url":"//assets.supremenewyork.com/231260/ca/wB43yc914ug.jpg","image_url_hi":"//assets.supremenewyork.com/231260/rc/wB43yc914ug.jpg","price":12800,"sale_price":0,"new_item":false,"position":15,"category_name":"Bags"},
				{"name":"Side Bag","id":174900,"image_url":"//assets.supremenewyork.com/231377/ca/Ik5DK4TF0C8.jpg","image_url_hi":"//assets.supremenewyork.com/231377/rc/Ik5DK4TF0C8.jpg","price":7800,"sale_price":0,"new_item":false,"position":16,"category_name":"Bags"},
				{"name":"Sling Bag","id":174879,"image_url":"//assets.supremenewyork.com/231279/ca/Vbft_5FtylY.jpg","image_url_hi":"//assets.supremenewyork.com/231279/rc/Vbft_5FtylY.jpg","price":7800,"sale_price":0,"new_item":false,"position":17,"category_name":"Bags"}
			],
			"Skate":[
				{"name":"Supreme®/Independent® Truck","id":174848,"image_url":"//assets.supremenewyork.com/231466/ca/exmQFgdWkgM.jpg","image_url_hi":"//assets.supremenewyork.com/231466/rc/exmQFgdWkgM.jpg","price":6000,"sale_price":0,"new_item":false,"position":39,"category_name":"Skate"},
				{"name":"Supreme®/Spitfire® Shop Wheels \u003cbr\u003e(Set of 4)","id":174843,"image_url":"//assets.supremenewyork.com/231455/ca/lSjAGZIHXnE.jpg","image_url_hi":"//assets.supremenewyork.com/231455/rc/lSjAGZIHXnE.jpg","price":3600,"sale_price":0,"new_item":false,"position":40,"category_name":"Skate"},
				{"name":"Fat Tip Skateboard","id":174854,"image_url":"//assets.supremenewyork.com/231611/ca/WCc1gAVvt3A.jpg","image_url_hi":"//assets.supremenewyork.com/231611/rc/WCc1gAVvt3A.jpg","price":5800,"sale_price":0,"new_item":false,"position":41,"category_name":"Skate"}
			],
			"Accessories":[
				{"name":"Club Sunglasses","id":175230,"image_url":"//assets.supremenewyork.com/239876/ca/_VqtgWbL1AI.jpg","image_url_hi":"//assets.supremenewyork.com/239876/rc/_VqtgWbL1AI.jpg","price":34800,"sale_price":0,"new_item":false,"position":18,"category_name":"Accessories"},
				{"name":"Club Sunglasses","id":175226,"image_url":"//assets.supremenewyork.com/239691/ca/s3VfkRPtD8k.jpg","image_url_hi":"//assets.supremenewyork.com/239691/rc/s3VfkRPtD8k.jpg","price":19800,"sale_price":0,"new_item":false,"position":19,"category_name":"Accessories"},
				{"name":"Koto Sunglasses","id":175228,"image_url":"//assets.supremenewyork.com/239672/ca/fHdaFrXT1fA.jpg","image_url_hi":"//assets.supremenewyork.com/239672/rc/fHdaFrXT1fA.jpg","price":19800,"sale_price":0,"new_item":false,"position":20,"category_name":"Accessories"},
				{"name":"Levy Sunglasses","id":175216,"image_url":"//assets.supremenewyork.com/239686/ca/EDo3eWEn8ic.jpg","image_url_hi":"//assets.supremenewyork.com/239686/rc/EDo3eWEn8ic.jpg","price":19800,"sale_price":0,"new_item":false,"position":21,"category_name":"Accessories"},
				{"name":"Velo Sunglasses","id":175213,"image_url":"//assets.supremenewyork.com/239677/ca/sJuPeSd2w-Q.jpg","image_url_hi":"//assets.supremenewyork.com/239677/rc/sJuPeSd2w-Q.jpg","price":19800,"sale_price":0,"new_item":false,"position":22,"category_name":"Accessories"},
				{"name":"Supreme®/Helinox® Bench One","id":175254,"image_url":"//assets.supremenewyork.com/231332/ca/hzJr6FJ6ejE.jpg","image_url_hi":"//assets.supremenewyork.com/231332/rc/hzJr6FJ6ejE.jpg","price":37800,"sale_price":0,"new_item":false,"position":23,"category_name":"Accessories"},
				{"name":"Fat Tip Pool Float","id":175170,"image_url":"//assets.supremenewyork.com/232079/ca/0YqICmwfNS0.jpg","image_url_hi":"//assets.supremenewyork.com/232079/rc/0YqICmwfNS0.jpg","price":6800,"sale_price":0,"new_item":false,"position":24,"category_name":"Accessories"},
				{"name":"Supreme®/Bang\u0026Olufsen \u003cbr\u003eExplore Portable Speaker","id":175241,"image_url":"//assets.supremenewyork.com/228990/ca/uftbDTY3bXI.jpg","image_url_hi":"//assets.supremenewyork.com/228990/rc/uftbDTY3bXI.jpg","price":25800,"sale_price":0,"new_item":false,"position":25,"category_name":"Accessories"},
				{"name":"Fuck Towel","id":175244,"image_url":"//assets.supremenewyork.com/228976/ca/WVHUAzELTkk.jpg","image_url_hi":"//assets.supremenewyork.com/228976/rc/WVHUAzELTkk.jpg","price":7800,"sale_price":0,"new_item":false,"position":26,"category_name":"Accessories"},
				{"name":"Clip Keychain","id":175211,"image_url":"//assets.supremenewyork.com/239765/ca/9p7bZ0r6uHA.jpg","image_url_hi":"//assets.supremenewyork.com/239765/rc/9p7bZ0r6uHA.jpg","price":2800,"sale_price":0,"new_item":false,"position":27,"category_name":"Accessories"},
				{"name":"Lighter Case Carabiner","id":175158,"image_url":"//assets.supremenewyork.com/229005/ca/q87cUyKCp7E.jpg","image_url_hi":"//assets.supremenewyork.com/229005/rc/q87cUyKCp7E.jpg","price":1800,"sale_price":0,"new_item":false,"position":28,"category_name":"Accessories"},
				{"name":"Goat Pin","id":175252,"image_url":"//assets.supremenewyork.com/232076/ca/ox_mzgJsmJo.jpg","image_url_hi":"//assets.supremenewyork.com/232076/rc/ox_mzgJsmJo.jpg","price":800,"sale_price":0,"new_item":false,"position":29,"category_name":"Accessories"},
				{"name":"Supreme®/ChapStick (3 Pack)","id":174960,"image_url":"//assets.supremenewyork.com/229059/ca/_rwQxlEixD0.jpg","image_url_hi":"//assets.supremenewyork.com/229059/rc/_rwQxlEixD0.jpg","price":800,"sale_price":0,"new_item":false,"position":30,"category_name":"Accessories"},
				{"name":"Supreme®/Hanes® Tagless Tees (2 Pack)","id":174895,"image_url":"//assets.supremenewyork.com/231602/ca/u6M0FxTWeJ8.jpg","image_url_hi":"//assets.supremenewyork.com/231602/rc/u6M0FxTWeJ8.jpg","price":3000,"sale_price":0,"new_item":false,"position":31,"category_name":"Accessories"},
				{"name":"Supreme®/Hanes® Tagless Tees (3 Pack)","id":174871,"image_url":"//assets.supremenewyork.com/231442/ca/lPuTGM9tx9E.jpg","image_url_hi":"//assets.supremenewyork.com/231442/rc/lPuTGM9tx9E.jpg","price":3000,"sale_price":0,"new_item":false,"position":32,"category_name":"Accessories"},
				{"name":"Supreme®/Hanes® Tagless Tank Tops \u003cbr\u003e(3 Pack)","id":175094,"image_url":"//assets.supremenewyork.com/229027/ca/H8PHQDvhjGk.jpg","image_url_hi":"//assets.supremenewyork.com/229027/rc/H8PHQDvhjGk.jpg","price":2800,"sale_price":0,"new_item":false,"position":33,"category_name":"Accessories"},
				{"name":"Supreme®/Hanes® Tagless Tank Tops \u003cbr\u003e(3 Pack)","id":175106,"image_url":"//assets.supremenewyork.com/235272/ca/-0j7C3-NpWI.jpg","image_url_hi":"//assets.supremenewyork.com/235272/rc/-0j7C3-NpWI.jpg","price":2800,"sale_price":0,"new_item":false,"position":34,"category_name":"Accessories"},
				{"name":"Supreme®/Hanes® Boxer Briefs (2 Pack)","id":174878,"image_url":"//assets.supremenewyork.com/229031/ca/rCRCPDBBU_Y.jpg","image_url_hi":"//assets.supremenewyork.com/229031/rc/rCRCPDBBU_Y.jpg","price":3000,"sale_price":0,"new_item":false,"position":35,"category_name":"Accessories"},
				{"name":"Supreme®/Hanes® Boxer Briefs (4 Pack)","id":174885,"image_url":"//assets.supremenewyork.com/231448/ca/9KrNg60eOD0.jpg","image_url_hi":"//assets.supremenewyork.com/231448/rc/9KrNg60eOD0.jpg","price":4000,"sale_price":0,"new_item":false,"position":36,"category_name":"Accessories"},
				{"name":"Supreme®/Hanes® Crew Socks (4 Pack)","id":174857,"image_url":"//assets.supremenewyork.com/229001/ca/IaiiOCEyRnc.jpg","image_url_hi":"//assets.supremenewyork.com/229001/rc/IaiiOCEyRnc.jpg","price":2400,"sale_price":0,"new_item":false,"position":37,"category_name":"Accessories"},
				{"name":"Supreme®/Hanes® Crew Socks (4 Pack)","id":174902,"image_url":"//assets.supremenewyork.com/231623/ca/UU9tL31VyhI.jpg","image_url_hi":"//assets.supremenewyork.com/231623/rc/UU9tL31VyhI.jpg","price":2400,"sale_price":0,"new_item":false,"position":38,"category_name":"Accessories"}
			],
			"Pants":[
				{"name":"Cargo Pant","id":174867,"image_url":"//assets.supremenewyork.com/230674/ca/_r7lT0cqHKo.jpg","image_url_hi":"//assets.supremenewyork.com/230674/rc/_r7lT0cqHKo.jpg","price":16800,"sale_price":11800,"new_item":false,"position":7,"category_name":"Pants"},
				{"name":"Credit Cards Regular Jean","id":175215,"image_url":"//assets.supremenewyork.com/230616/ca/hIjGqREUKPk.jpg","image_url_hi":"//assets.supremenewyork.com/230616/rc/hIjGqREUKPk.jpg","price":17800,"sale_price":12400,"new_item":false,"position":8,"category_name":"Pants"}
			],
			"Sweatshirts":[
				{"name":"Micro Logo Hooded Sweatshirt","id":175020,"image_url":"//assets.supremenewyork.com/229581/ca/dzowrI8dNfg.jpg","image_url_hi":"//assets.supremenewyork.com/229581/rc/dzowrI8dNfg.jpg","price":15800,"sale_price":11000,"new_item":false,"position":2,"category_name":"Sweatshirts"},
				{"name":"Baseball Jersey Hooded Sweatshirt","id":175174,"image_url":"//assets.supremenewyork.com/229325/ca/0avJjX9LfoM.jpg","image_url_hi":"//assets.supremenewyork.com/229325/rc/0avJjX9LfoM.jpg","price":18800,"sale_price":13200,"new_item":false,"position":3,"category_name":"Sweatshirts"},
				{"name":"Dog Eat Dog Hooded Sweatshirt","id":174965,"image_url":"//assets.supremenewyork.com/229623/ca/L-ffI3SOcGw.jpg","image_url_hi":"//assets.supremenewyork.com/229623/rc/L-ffI3SOcGw.jpg","price":15800,"sale_price":11000,"new_item":false,"position":4,"category_name":"Sweatshirts"},
				{"name":"Double S Crewneck","id":175175,"image_url":"//assets.supremenewyork.com/229632/ca/Glae6-I7x90.jpg","image_url_hi":"//assets.supremenewyork.com/229632/rc/Glae6-I7x90.jpg","price":13800,"sale_price":9600,"new_item":false,"position":5,"category_name":"Sweatshirts"},
				{"name":"Tonal Appliqué Crewneck","id":175155,"image_url":"//assets.supremenewyork.com/229664/ca/tSU20adunLA.jpg","image_url_hi":"//assets.supremenewyork.com/229664/rc/tSU20adunLA.jpg","price":14800,"sale_price":10400,"new_item":false,"position":6,"category_name":"Sweatshirts"}
				],
				"Hats":[
					{"name":"Linen Fitted Camp Cap","id":175253,"image_url":"//assets.supremenewyork.com/240196/ca/Qv4WnxCmkbI.jpg","image_url_hi":"//assets.supremenewyork.com/240196/rc/Qv4WnxCmkbI.jpg","price":5400,"sale_price":0,"new_item":false,"position":9,"category_name":"Hats"},
					{"name":"Inset Gel Camp Cap","id":175251,"image_url":"//assets.supremenewyork.com/229948/ca/QruOV2911sk.jpg","image_url_hi":"//assets.supremenewyork.com/229948/rc/QruOV2911sk.jpg","price":5400,"sale_price":0,"new_item":false,"position":10,"category_name":"Hats"},
					{"name":"Overdyed Beanie","id":175039,"image_url":"//assets.supremenewyork.com/229823/ca/uPVWcpFBpFM.jpg","image_url_hi":"//assets.supremenewyork.com/229823/rc/uPVWcpFBpFM.jpg","price":3800,"sale_price":0,"new_item":false,"position":11,"category_name":"Hats"}
				],
				"Shirts":[
					{"name":"Credit Cards Shirt","id":175164,"image_url":"//assets.supremenewyork.com/230829/ca/g5nvBWy3aUg.jpg","image_url_hi":"//assets.supremenewyork.com/230829/rc/g5nvBWy3aUg.jpg","price":14800,"sale_price":10400,"new_item":false,"position":1,"category_name":"Shirts"}
				],
				"sale":[
					{"name":"Credit Cards Shirt","id":175164,"image_url":"//assets.supremenewyork.com/230829/ca/g5nvBWy3aUg.jpg","image_url_hi":"//assets.supremenewyork.com/230829/rc/g5nvBWy3aUg.jpg","price":14800,"sale_price":10400,"new_item":false,"position":1,"category_name":"Shirts"},
					{"name":"Micro Logo Hooded Sweatshirt","id":175020,"image_url":"//assets.supremenewyork.com/229581/ca/dzowrI8dNfg.jpg","image_url_hi":"//assets.supremenewyork.com/229581/rc/dzowrI8dNfg.jpg","price":15800,"sale_price":11000,"new_item":false,"position":2,"category_name":"Sweatshirts"},
					{"name":"Baseball Jersey Hooded Sweatshirt","id":175174,"image_url":"//assets.supremenewyork.com/229325/ca/0avJjX9LfoM.jpg","image_url_hi":"//assets.supremenewyork.com/229325/rc/0avJjX9LfoM.jpg","price":18800,"sale_price":13200,"new_item":false,"position":3,"category_name":"Sweatshirts"},
					{"name":"Dog Eat Dog Hooded Sweatshirt","id":174965,"image_url":"//assets.supremenewyork.com/229623/ca/L-ffI3SOcGw.jpg","image_url_hi":"//assets.supremenewyork.com/229623/rc/L-ffI3SOcGw.jpg","price":15800,"sale_price":11000,"new_item":false,"position":4,"category_name":"Sweatshirts"},
					{"name":"Double S Crewneck","id":175175,"image_url":"//assets.supremenewyork.com/229632/ca/Glae6-I7x90.jpg","image_url_hi":"//assets.supremenewyork.com/229632/rc/Glae6-I7x90.jpg","price":13800,"sale_price":9600,"new_item":false,"position":5,"category_name":"Sweatshirts"},
					{"name":"Tonal Appliqué Crewneck","id":175155,"image_url":"//assets.supremenewyork.com/229664/ca/tSU20adunLA.jpg","image_url_hi":"//assets.supremenewyork.com/229664/rc/tSU20adunLA.jpg","price":14800,"sale_price":10400,"new_item":false,"position":6,"category_name":"Sweatshirts"},
					{"name":"Cargo Pant","id":174867,"image_url":"//assets.supremenewyork.com/230674/ca/_r7lT0cqHKo.jpg","image_url_hi":"//assets.supremenewyork.com/230674/rc/_r7lT0cqHKo.jpg","price":16800,"sale_price":11800,"new_item":false,"position":7,"category_name":"Pants"},
					{"name":"Credit Cards Regular Jean","id":175215,"image_url":"//assets.supremenewyork.com/230616/ca/hIjGqREUKPk.jpg","image_url_hi":"//assets.supremenewyork.com/230616/rc/hIjGqREUKPk.jpg","price":17800,"sale_price":12400,"new_item":false,"position":8,"category_name":"Pants"}
				]
		},
		"on_sale":true,
		"last_mobile_api_update":"2015-02-06T14:47:32.034-05:00",
		"release_date":"07/28/2022",
		"release_week":"23SS22"
	};
	console.log(item);*/
}
