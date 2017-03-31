/**
 * Created by 大禹哥 on 2017/3/31.
 */
//异步函数例子

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














