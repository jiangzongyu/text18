/**
 * Created by ¥Û”Ì∏Á on 2017/4/2.
 */
var Person = require('./person.js');
var util = require('util');

function Teacher(){
    Person.call(this);
    this.teach = function(){
        console.log('teaching...');
    }
}

util.inherits(Teacher,Person);

module.exports = Teacher;