define(['jquery'],function($){
	function Carousel(){
		this.defaultVal={
			buttonStyle:'square',
			speed:800
		}
			this.$container=$('<div class="carousel-container"></div>');
	        this.$content=$('<div class="carousel-content"></div>');
	        this.$tab=$('<ul class="carousel-tab"></div>');
	        this.$arrow=$('<div class="carousel-arrow"></div>');
		 	this.$prev=$('<span class="carousel-prev">&lt;</span>');
		 	this.$next=$('<span class="carousel-next">&gt;</span>');
		
		Carousel.prototype.init=function(options){
			var iNow=0;
			var _this=this;
			$.extend(this.defaultVal,options);
			//console.log(this.$container);
			this.$container.append(this.$content).append(this.$tab).append(this.$arrow);
			for(var i=0;i<this.defaultVal.imgData.length;i++){
           		

           		this.$content.append('<img class="'+(i == 0?'selected':'')+'" src="'+this.defaultVal.imgData[i]+'"/>');
            	// class="circle selected"
            	this.$tab.append('<li class="'+this.defaultVal.buttonStyle+(i == 0?' selected':'')+'">'+(i+1)+'</li>');
        
			}
		





			this.$arrow.append(this.$prev).append(this.$next);

			$(this.defaultVal.selector).append(this.$container);

			$('li',this.$tab).on('click',function(){
				changeImg($(this).index());
				iNow=$(this).index();
				console.log(iNow);
			});

			function changeImg(idx){
				$('li',this.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
				// console.log($('li',this.$tab).eq(idx));
				$('img',this.$content).eq(idx).addClass('selected').siblings().removeClass('selected');
			}

			//封装函数不对(减到一遍后就不动了)
			this.$prev.on('click',function(){
				iNow--;
				prev(iNow);
				
			});
			function prev(idx){
				if(idx==-1){
					 iNow=idx=_this.defaultVal.imgData.length-1;

				}
				$('li',_this.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
				$('img',_this.$content).eq(idx).addClass('selected').siblings().removeClass('selected');
			}

			// this.$prev.on('click',function(){
			// 	iNow--;
			// 	if(iNow==-1){
			// 		iNow=_this.defaultVal.imgData.length-1;
			// 	}

			// 	changeImg(iNow);

			// });


			this.$next.on('click',function(){
				iNow++;
				if(iNow==_this.defaultVal.imgData.length){
					iNow=0;
				}

				changeImg(iNow);

			});


			var timer;
			function run(){
					timer=setInterval(function(){
					_this.$next.trigger('click');
				},_this.defaultVal.speed);
			}
			
			//run();

			// this.$container.hover(function(){
			// 	clearInterval(timer);
			// },function(){
			// 	run();
			// })


		}

		

}

	
		return Carousel;
});