/**
 * Created by ¥Û”Ì∏Á on 2017/4/2.
 */
var Person = require('./person.js');
var util = require('util');

function Programmer(){
    Person.call(this);
    this.do = function(){
        console.log('doing...');
    }
}

util.inherits(Programmer,Person);

module.exports = Programmer;