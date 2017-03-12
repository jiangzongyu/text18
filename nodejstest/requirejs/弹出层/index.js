require(['jquery','dialog'],function($,Dialog){

		$('#btn').on('click',function(){
		/*	dialog.open({
				title:'jiang',
				content:'123',
				width:800,
				height:400

			});
			$('.chose').on('click',function(){
				dialog.close();
			});*/
			//console.log(dialog);
			var dialog=new Dialog();
			dialog.open();
			// dialog.close();
			$('.chose').on('click',function(){
			// var dialog=new Dialog();
				dialog.close();
			});
		});
		// console.log($('.chose').html());
		
	
	// dialog.close();
	});