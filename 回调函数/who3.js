/**
 * Created by ����� on 2017/3/31.
 */
//�첽��������

function Person(){
    this.think = function(callback){
        console.log("think.....");
        setTimeout(function(){
            callback();
        },2000);
    }

    this.answer = function(){
        console.log("doing others exercise");
    }
}

var person = new Person();
person.think(function(){
    console.log("I got it");
});
person.answer();














