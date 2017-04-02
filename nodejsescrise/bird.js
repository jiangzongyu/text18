/**
 * Created by ¥Û”Ì∏Á on 2017/4/2.
 */
var util = require('util');
var Animal = require('./animal.js');

function bird(){
    Animal.call(this);
    this.say = function(){
        console.log('ji...ji');
    }
}

util.inherits(bird,Animal);

module.exports = bird;