/**
 * Created by gaoxiang on 2017/7/30.
 */
(function () {

    var n = 0;

    function Girl() {

    }

    Girl.prototype.gendar = 'male';
    Girl.prototype.dayima = function () {

        alert('dayima' + n);
    }

    window.Girl = Girl;

}()); //末尾有个()






