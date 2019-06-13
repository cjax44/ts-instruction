"use strict";
var a = 1;
var b = 4;
console.log(b);
var c = 6;
console.log(a + b + c);
var sum = a + b + c;
console.log(sum);
var str = "the value of \n    sum is " + sum + ".";
console.log(str);
var success = false;
console.log(success);
var nbrs = [2, 3, 4, 5, 6];
console.log(nbrs);
var letters = ["itchy", "scratchy"];
console.log("1st element in array = " + letters[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
console.log(Color.Red);
var d = 123;
d = "abc";
function total(n1, n2) {
    return (n1 + n2);
}
console.log("total is " + total(b, c));
function aFunction() {
    if (true) {
        var e = 0;
        var f = 1;
    }
    console.log(e);
    // console.log(f); not allowed
}
// console.log(e); not allowed
var Square = /** @class */ (function () {
    function Square(s) {
        this.side = s;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    return Square;
}());
var sqr = new Square(4);
console.log("area of square=" + sqr.area());
var Customer = /** @class */ (function () {
    function Customer(n) {
        this._name = n;
    }
    Object.defineProperty(Customer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (inName) {
            this._name = inName;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var cust = new Customer("Fred Flintstone");
console.log("cust name = " + cust.name);
function go(a, b) {
    if (a === void 0) { a = 1; }
    console.log("a = " + a + ", b = " + b);
}
go(5, true);
go(7);
go();
