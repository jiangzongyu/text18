/**
 * Created by ����� on 2017/3/31.
 */
//�첽�ص�

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