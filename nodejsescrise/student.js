/**
 * Created by ����� on 2017/4/2.
 */
var Person = require('./person.js');
var util = require('util');

function Student(){
    Person.call(this);
    this.study = function(){
        console.log('studying...');
    }
}

util.inherits(Student,Person);

module.exports = Student;