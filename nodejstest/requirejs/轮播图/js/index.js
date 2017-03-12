require(['jquery','carousel'],function($,Carousel){
	var car1=new Carousel();
	car1.init({
		selector:'#container1',
		buttonStyle:'circle',
		speed:1000,  
		imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg']
	});
})