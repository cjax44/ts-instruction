"use strict";
var Friend = /** @class */ (function () {
    function Friend(n, a, e, b) {
        this.name = n;
        this.age = a;
        this.email = e;
        this.bestFriend = b;
    }
    Friend.prototype.about = function () {
        return "Friend name =" + this.name + ", age=" + this.age + ", email=" + this.email + ", bestFriend=" + this.bestFriend;
    };
    return Friend;
}());
var f1 = new Friend("john", 25, "john.wick@aol.com", false);
var f2 = new Friend("mary", 21, "littlelamb@yahoo.com", false);
var f3 = new Friend("tony", 35, "iam@ironman.com", true);
var f4 = new Friend("dwayne", 25, "therock@msn.com", false);
var f5 = new Friend("eddy", 25, "edward@gmail.com", false);
var friends = [f1, f2, f3, f4, f5];
console.log("Old school array");
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i].about());
}
