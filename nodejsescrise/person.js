/**
 * Created by ¥Û”Ì∏Á on 2017/4/2.
 */
function person(){
    this.eat = function(){
        console.log('eating...');
    }
    this.sleep = function(){
        console.log('sleeping...');
    }
}

module.exports = person;