/**
 * Created by ����� on 2017/3/31.
 */
// ͬ���ص�
function waitFive(name,function_name){
    //��ת5��
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