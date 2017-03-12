define(['c'],function(info){
	function add(a,b){
		if(info(a,b)){
			return a+b;
		}else{
			console.log('xinyu');
		}
		

	}
	return add;
});