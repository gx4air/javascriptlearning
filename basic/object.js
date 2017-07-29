/**
 * Created by gaoxiang on 2017/7/29.
 */

// people = new Object();
// people.name = 'g';
// people.age = 1;
//
// alert(people.name + ";" + people.age);

function people(name, age) {
    this._name = name;
    this._age = age;

}


man = new people('g',1);

console.log(man._name + ';' + man._age);

var s = "fdf和好123";

console.log(s.length);

var b = '';

console.log(b==null);

console.log(undefined == b);

var date = new Date();

console.log(date);

document.getElementById('btn').addEventListener('click', btn);
document.getElementById('div').addEventListener('click', div);

function btn(e) {

    alert(1);
    e.stopPropagation();

}

function div(e) {
        alert(2);
}




