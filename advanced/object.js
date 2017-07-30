/**
 * Created by gaoxiang on 2017/7/30.
 */

var p={

    name:'g',
    age:11,
    eat:function () {
        alert('eat');
    }


}
p.height=170;


function People() {

}


People.prototype.name = 'gx';
People.prototype.age = 20;
People.prototype.say = function () {
    alert('say');
}


function Man(){

}

Man.prototype = new People();
var superSay = Man.prototype.say;
Man.prototype.say = function () {
    superSay.call(this);
    alert('man say');
}







