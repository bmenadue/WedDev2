var x = 1;

x = "one";

console.log(x);

var add = function (a, b) { return a + b; };

var b = add(1, "one");

console.log(b);

function one() {
    return 2;
}

var abc = Math.max(1, one());
var abc = Math.max(1, one);

console.log(abc);

console.log(typeof (one));
console.log(typeof (one()));


var Myclass = /** @class **/(function () {
    function Myclass() { };
    Myclass.prototype.Shout = function () {
        console.log('hey there, ho there, hi there');
    }
    return Myclass;

}());

var mc = new Myclass();
mc.Shout();