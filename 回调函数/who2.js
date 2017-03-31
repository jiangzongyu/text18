/**
 * Created by 大禹哥 on 2017/3/31.
 */
//异步回调

function havelunch(food,drink,callback){
    console.log("having lunch....");
    if(callback && typeof(callback) == "function"){
        setTimeout(function(){
            callback();
        },2000);
    }
}

havelunch('xxx','sss',function(){
    console.log("ok,eating over");
});