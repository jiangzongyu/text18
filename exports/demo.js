/**
 * Created by 大禹哥 on 2017/4/1.
 */
/*function m(){
 this.aa = "123";
 this.bb = function(){
 console.log('456');
 }
 }

 module.exports = m; //类公布给外部*/


exports.aa = "123";
exports.bb = function(){
    console.log('456');
}
//exports.m = m;//对象公布给外部
