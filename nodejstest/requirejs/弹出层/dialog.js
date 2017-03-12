define(['jquery'],function($){
	// function Dialog(){
		Dialog.prototype.open=function(options){
			var str = '<div class="dialog-container">'
                        +'<div class="dialog-mask"></div>'
                        +'<div class="dialog-box">'
                            +'<div class="dialog-title-box">'
                                +'<div class="title"></div>'
                                +'<div class="chose">[X]</div>'
                            +'</div>'
                        +'<div class="dialog-content"></div>'
                        +'</div>'
                       +'</div>';
               $('body').append(str);
               /*$('.dialog-box').css({
               		height: options.height,
               		width: options.width,
               		'margin-left': -options.width/2,
               		'margin-top': -options.height/2
               });*/
		}
		//$('body').append(str);
		Dialog.prototype.close=function(){

			$('.dialog-container').remove();
			
		}
		
	// }

	return Dialog;

	/*
		return {
			open:function(options){
			var str = '<div class="dialog-container">'
                        +'<div class="dialog-mask"></div>'
                        +'<div class="dialog-box">'
                            +'<div class="dialog-title-box">'
                                +'<div class="title">'+options.title+'</div>'
                                +'<div class="chose">[X]</div>'
                            +'</div>'
                        +'<div class="dialog-content">'+options.content+'</div>'
                        +'</div>'
                       +'</div>';
               $('body').append(str);
               $('.dialog-box').css({
               		height: options.height,
               		width: options.width,
               		'margin-left': -options.width/2,
               		'margin-top': -options.height/2
               });
		},
		//$('body').append(str);
		close:function(){
			$('.dialog-container').remove();
			
		}
		}*/
	});