/**
 * Created by 大禹哥 on 2017/3/31.
 */
// 同步回调
function waitFive(name,function_name){
    //空转5秒
    var pus=0;
    var currentime=new Date();
    while(pus<2000){
        var now=new Date();
        pus=now-currentime;
    }
// console.log(function_name);
    function_name(name);
}

function echo(name){
    console.log(name);
}

waitFive('laoshan',echo);
console.log('its over');