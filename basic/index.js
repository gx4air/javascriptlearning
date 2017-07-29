/**
 * Created by gaoxiang on 2017/7/29.
 */

//window.location.assign("redirect.html")


var global_n = 1;
var global_m = 2;

function f1() {

    var local_x = 3;
    k = 4; //特别要注意，k是全局变量
    console.log('k in f1:' + k);
    k++;
}

function f2() {

    console.log('k in f2:' + k)


}



